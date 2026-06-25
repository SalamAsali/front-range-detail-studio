// Google Places API integration for live GBP reviews.
//
// Uses the same Google Cloud project + API key as alasalicustomjewelry.ca.
// Add GOOGLE_PLACES_API_KEY to Vercel env vars (same key from the Alassali project).
//
// Fetches up to 5 most-recent reviews, cached for 24h via Next.js ISR.
// Falls back to hardcoded data if API key is missing or request fails.

import { reviews as fallbackReviews, reviewPlatforms } from "@/data/reviews";

const PLACE_ID = "ChIJy4Sze-PeiSMRws5gv0Kf_BI";

// Identity check — refuse to render reviews if the Place ID resolves to
// a different business (guards against env var copy-paste errors).
const EXPECTED_NAME_FRAGMENTS = ["front range", "detail studio"];
const EXPECTED_ADDRESS_FRAGMENT = "broncos";

export type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhotoUrl?: string;
};

type PlacesDetailsResponse = {
  result?: {
    name?: string;
    formatted_address?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      profile_photo_url?: string;
      rating: number;
      relative_time_description: string;
      text: string;
      time: number;
    }>;
  };
  status?: string;
  error_message?: string;
};

const googleFallback = reviewPlatforms.find((p) => p.platform === "Google")!;

export async function fetchGoogleReviews(): Promise<{
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  source: "live" | "fallback";
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return {
      reviews: fallbackReviews.map((r) => ({
        authorName: r.name,
        rating: 5,
        text: r.text,
        relativeTime: "",
      })),
      rating: Number(googleFallback.rating),
      totalReviews: Number(googleFallback.count),
      source: "fallback",
    };
  }

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json"
  );
  url.searchParams.set("place_id", PLACE_ID);
  url.searchParams.set(
    "fields",
    "name,formatted_address,rating,user_ratings_total,reviews"
  );
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("reviews_no_translations", "true");
  url.searchParams.set("language", "en");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 86400, tags: ["google-reviews"] },
    });

    if (!res.ok) throw new Error(`Places API HTTP ${res.status}`);
    const data = (await res.json()) as PlacesDetailsResponse;

    if (data.status !== "OK" || !data.result) {
      throw new Error(data.error_message || `Places API status: ${data.status}`);
    }

    // Identity check
    const name = (data.result.name || "").toLowerCase();
    const address = (data.result.formatted_address || "").toLowerCase();
    const nameMatches = EXPECTED_NAME_FRAGMENTS.every((f) => name.includes(f));
    const addressMatches = address.includes(EXPECTED_ADDRESS_FRAGMENT);
    if (!nameMatches || !addressMatches) {
      console.error(
        `[googlePlaces] Identity check FAILED — Place ID ${PLACE_ID} resolved to "${data.result.name}" at "${data.result.formatted_address}".`
      );
      return {
        reviews: [],
        rating: Number(googleFallback.rating),
        totalReviews: Number(googleFallback.count),
        source: "fallback",
      };
    }

    const reviews = (data.result.reviews || []).map((r) => ({
      authorName: r.author_name,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
      profilePhotoUrl: r.profile_photo_url,
    }));

    return {
      reviews,
      rating:
        data.result.rating ?? Number(googleFallback.rating),
      totalReviews:
        data.result.user_ratings_total ?? Number(googleFallback.count),
      source: "live",
    };
  } catch (err) {
    console.error("[googlePlaces] Failed to fetch reviews", err);
    return {
      reviews: [],
      rating: Number(googleFallback.rating),
      totalReviews: Number(googleFallback.count),
      source: "fallback",
    };
  }
}
