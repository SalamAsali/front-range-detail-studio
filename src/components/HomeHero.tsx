"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { videos } from "@/data/videos";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        src={videos.hero}
        muted
        autoPlay
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero/colorado-package-scaled.jpg"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,188,212,0.5) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Bottom fade to black for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-5 py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base text-white/70 font-[var(--font-display)] mb-6 tracking-[0.2em] uppercase"
        >
          Crafting Radiance. Preserving Elegance.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gradient mb-6"
          style={{ fontSize: "clamp(3rem, 5vw + 1rem, 5.5rem)" }}
        >
          Front Range
          <br />
          Detail Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl text-white/80 font-[var(--font-display)] mb-10 max-w-2xl font-light"
        >
          RV, Boat, Auto. Paint Protection Film, Ceramic Coating, Tint, Vinyl
          Wrap
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-5"
        >
          <Link
            href="/free-quote"
            className="px-10 py-4 bg-primary text-white text-xs uppercase tracking-[0.2em] rounded-full font-[var(--font-button)] hover:bg-primary-dark hover:shadow-[0_0_30px_rgba(0,188,212,0.4)] transition-all duration-300"
          >
            Get A Free Quote
          </Link>
          <a
            href="tel:3035208023"
            className="px-10 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.2em] rounded-full font-[var(--font-button)] hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(0,188,212,0.2)] transition-all duration-300"
          >
            Call (303) 520-8023
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
