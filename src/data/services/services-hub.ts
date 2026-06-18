import type { ServicePageData } from "@/components/ServicePage";

export const servicesHubData: ServicePageData = {
  heroImg: "/images/hero/services-hero.jpg",
  eyebrow: "Our Services",
  h1: "Premium Vehicle Care, Start To Finish",
  introH2: "One Studio For Every Protection Need",
  introBody:
    "Paint protection film, ceramic coating, window tint, vinyl wrap, paint correction and full RV & boat services \u2014 all performed by certified technicians in our climate-controlled Centennial studio. Explore each service below.",
  cardsH2: "Explore Our Services",
  cards: [
    {
      tag: "12 Year Warranty",
      title: "Paint Protection Film",
      img: "/images/services/ppf-card.jpg",
      href: "/paint-protection-film-ppf",
    },
    {
      tag: "Lifetime Warranty",
      title: "Window Tinting",
      img: "/images/services/tint-card.jpg",
      href: "/window-tint",
    },
    {
      tag: "Lifetime Warranty",
      title: "Ceramic Coating",
      img: "/images/services/ceramic-card.jpg",
      href: "/ceramic-coating",
    },
    {
      tag: "Multi-Stage Polish",
      title: "Auto Detailing & Correction",
      img: "/images/services/detailing-card.jpg",
      href: "/auto-detailing",
    },
    {
      tag: "200+ Finishes",
      title: "Vinyl Wrap & Decals",
      img: "/images/services/wrap-card.jpg",
      href: "/vinyl-wraps",
    },
    {
      tag: "RV \u00B7 Boat \u00B7 Marine",
      title: "RV & Boat Services",
      img: "/images/services/rv-card.jpg",
      href: "/rv-detailing",
    },
  ],
  featuresEyebrow: "The Front Range Difference",
  featuresH2: "Why Denver Drivers Choose Us",
  features: [
    {
      title: "Certified Installers",
      body: "System X and SunTek certified \u2014 manufacturer-backed warranties on every job.",
    },
    {
      title: "Climate-Controlled Studio",
      body: "No dust, no heat, no humidity. Coatings cure exactly as engineered.",
    },
    {
      title: "Honest Recommendations",
      body: "We explain what your vehicle actually needs \u2014 no upsells, no hard sell.",
    },
    {
      title: "15+ Years Experience",
      body: "Over a decade and a half perfecting automotive aesthetics in Colorado.",
    },
  ],
  faqs: [
    {
      q: "Do you work by appointment only?",
      a: "Yes \u2014 our studio is appointment-only so every vehicle receives dedicated, undivided attention.",
    },
    {
      q: "Where are you located?",
      a: "Our studio is at 12559 E Broncos Pkwy, Centennial, CO 80112, serving the entire Denver metro area.",
    },
    {
      q: "Can you bundle multiple services?",
      a: "Absolutely \u2014 PPF, ceramic and tint are frequently combined. Tell us your goals and we\u2019ll build the right package.",
    },
  ],
};
