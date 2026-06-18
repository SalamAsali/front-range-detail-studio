import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  image: string;
  imageAlt: string;
  videoSrc?: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  children?: ReactNode;
  fullHeight?: boolean;
}

export function Hero({
  image,
  imageAlt,
  videoSrc,
  title,
  subtitle,
  tagline,
  cta,
  ctaSecondary,
  children,
  fullHeight = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        fullHeight ? "min-h-screen" : "min-h-[60vh]"
      } flex items-center`}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Background video (autoplay, service page heroes) */}
      {videoSrc && (
        <video
          src={videoSrc}
          muted
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={image}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,188,212,0.6) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[840px] mx-auto px-5 py-32">
        {tagline && (
          <p className="text-sm text-white/80 font-[var(--font-display)] mb-4 tracking-wide">
            {tagline}
          </p>
        )}
        <h1 className="text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-white/80 font-[var(--font-display)] mb-8 max-w-xl">
            {subtitle}
          </p>
        )}
        {children}
        {(cta || ctaSecondary) && (
          <div className="flex flex-wrap gap-4 mt-8">
            {cta && (
              <Link
                href={cta.href}
                className="px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
              >
                {cta.label}
              </Link>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="px-8 py-3.5 border border-white/40 text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:border-primary hover:text-primary transition-colors"
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
