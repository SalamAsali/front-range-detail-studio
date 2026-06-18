"use client";

import { reviews, reviewPlatforms } from "@/data/reviews";
import { useRef } from "react";

export function ReviewBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {reviewPlatforms.map((p) => (
        <div
          key={p.platform}
          className="bg-dark-surface rounded px-6 py-4 text-center shadow-md"
          style={{ borderTop: `4px solid ${p.color}` }}
        >
          <div
            className="text-lg tracking-widest mb-1"
            style={{ color: p.color }}
          >
            ★★★★★
          </div>
          <div className="text-sm font-light">
            {p.rating} on {p.platform}
          </div>
          <div className="text-xs text-gray mt-1">
            Based on {p.count} Reviews
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] bg-dark-surface rounded p-6 snap-start"
          >
            <div className="text-primary text-sm mb-2">★★★★★</div>
            <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-5">
              &ldquo;{r.text}&rdquo;
            </p>
            <p className="text-xs text-white/40 font-medium">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
