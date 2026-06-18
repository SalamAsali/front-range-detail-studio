import { Section, SectionHeading } from "@/components/Section";
import { ReviewBadges, ReviewCarousel } from "@/components/ReviewCarousel";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { HomeHero } from "@/components/HomeHero";
import Image from "next/image";
import { videos } from "@/data/videos";

const serviceCards = [
  {
    title: "Paint Protection Film & Clear Bra",
    subtitle: "12 Year Warranty",
    image: "/images/services/new-ppf-scaled.jpg",
    href: "/paint-protection-film-ppf",
    videoSrc: videos.services.ppf,
  },
  {
    title: "Window Tinting",
    subtitle: "Lifetime Warranty",
    image: "/images/services/new-tint.jpg",
    href: "/window-tint",
    videoSrc: videos.services.tint,
  },
  {
    title: "Ceramic Coating",
    subtitle: "Lifetime Warranty",
    image: "/images/services/car-ceramic-1.jpg",
    href: "/ceramic-coating",
    videoSrc: videos.services.ceramic,
  },
  {
    title: "Paint Correction",
    subtitle: "Multi-Stage Polishing",
    image: "/images/services/paint-correction-new.jpg",
    href: "/auto-detailing",
    videoSrc: videos.services.correction,
  },
  {
    title: "Vinyl Wrap & Decals",
    subtitle: "200+ Colors",
    image: "/images/services/vinylwraps-1920w.webp",
    href: "/vinyl-wraps",
    videoSrc: videos.services.wrap,
  },
  {
    title: "RV & Boat Services",
    subtitle: "All Vehicle Types",
    image: "/images/hero/coach-scaled.jpg",
    href: "/rv-detailing",
    videoSrc: videos.services.rv,
  },
];

const partnerLogos = [
  { src: "/images/logos/Rupes-Logo.webp", alt: "Rupes logo" },
  { src: "/images/logos/glidecoat-pro-logo.svg", alt: "Glidecoat authorized dealer" },
  { src: "/images/logos/eastman-logo-inverse.png", alt: "Eastman logo" },
  { src: "/images/logos/suntek-logo.svg", alt: "SunTek Llumar logo" },
  { src: "/images/logos/system-x2.png", alt: "System X logo" },
];

const vehicleLogos = [
  "Mercedes-Benz-Logo-1.svg", "Porsche-Logo.svg", "Ford-logo.svg",
  "Logo-della-Jaguar.svg", "Lamborghini-Logo.svg", "Audi-logo.svg",
  "BMW-logo.svg", "LandRover-logo.svg", "Ferrari-Logo.svg",
  "rivian-logo.svg", "McLaren-Automotive-logo.svg", "Tesla-Motors-logo.svg",
  "Rolls-royce.svg", "Cadillac-logo.svg",
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Services Grid */}
      <Section bg="dark" wide>
        <ScrollReveal>
          <SectionHeading>
            Denver&apos;s Most Trusted Vehicle Aesthetic Experts
          </SectionHeading>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <StaggerItem key={card.href}>
              <ServiceCard {...card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Reviews */}
      <Section bg="black" wide>
        <ScrollReveal>
          <SectionHeading>
            Front Range Detail Studio Client Reviews
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <ReviewBadges />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <ReviewCarousel />
        </ScrollReveal>
      </Section>

      {/* Partners */}
      <Section bg="dark" wide>
        <ScrollReveal>
          <SectionHeading>Our Partners — Trusted Brands</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={50}
                className="opacity-50 hover:opacity-100 transition-opacity duration-500 object-contain h-12"
              />
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* Vehicle Brands */}
      <Section bg="black" wide>
        <ScrollReveal>
          <SectionHeading>
            Protection For All Brands and Models
          </SectionHeading>
          <p className="text-white/50 text-lg -mt-4 mb-10">
            Including Tesla, Rivian, Porsche, BMW, Mercedes Benz and More
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-8 items-center">
          {vehicleLogos.map((logo) => (
            <StaggerItem key={logo}>
              <Image
                src={`/images/logos/${logo}`}
                alt={logo.replace(/-|\.svg/g, " ").trim()}
                width={70}
                height={70}
                className="opacity-30 hover:opacity-80 transition-opacity duration-500 mx-auto object-contain h-14"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Contact & Quote */}
      <Section bg="dark" wide id="contact">
        <ScrollReveal>
          <SectionHeading>
            Serving The Denver Metro And Surrounding Areas
          </SectionHeading>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-gradient">Connect with Us</h3>
              <div className="space-y-4 text-lg text-white/70">
                <a
                  href="tel:3035208023"
                  className="block text-2xl text-primary hover:text-primary-light transition-colors font-semibold"
                >
                  (303) 520-8023
                </a>
                <a
                  href="mailto:info@frontrangedetailstudio.com"
                  className="block hover:text-primary transition-colors"
                >
                  info@frontrangedetailstudio.com
                </a>
                <p>12559 E Broncos Pkwy, Centennial, CO 80112</p>
                <p>Monday – Sunday: By Appointment Only</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <QuoteForm />
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
