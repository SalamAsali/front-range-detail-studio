"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
        fullHeight ? "min-h-screen" : "min-h-[70vh]"
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

      {/* Autoplay background video for service pages */}
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
            "linear-gradient(100deg, rgba(0,188,212,0.45) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 py-36">
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-primary font-[var(--font-display)] mb-4 tracking-[0.15em] uppercase"
          >
            {tagline}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-white/80 font-[var(--font-display)] mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
        {(cta || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {cta && (
              <Link
                href={cta.href}
                className="px-10 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] rounded-full font-[var(--font-button)] hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(0,188,212,0.4)] transition-all duration-300"
              >
                {cta.label}
              </Link>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="px-10 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.2em] rounded-full font-[var(--font-button)] hover:border-primary hover:text-primary transition-all duration-300"
              >
                {ctaSecondary.label}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
