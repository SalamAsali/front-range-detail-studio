"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { videos } from "@/data/videos";

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCanPlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        marginTop: -82,
        paddingTop: 82,
      }}
    >
      {/* Poster image (always visible) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/colorado-package-scaled.jpg"
        alt="PPF Clear Bra Denver Tint Ceramic Coating Paint Correction"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Hero video — fades in on canplay */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/colorado-package-scaled.jpg"
        onCanPlay={handleCanPlay}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0,
          transition: "opacity 1.2s ease",
        }}
      >
        <source src={videos.hero} type="video/mp4" />
      </video>

      {/* Gradient overlay 1 — cyan tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(0,188,212,0.42) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.78) 100%)",
          zIndex: 2,
        }}
      />

      {/* Gradient overlay 2 — bottom darken */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.1) 42%)",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 780,
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(12px, 1.1vw, 14px)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#32EEFF",
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            Denver&rsquo;s Most Trusted Vehicle Aesthetic Experts
          </motion.p>

          {/* Divider */}
          <motion.hr
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              width: 64,
              height: 2,
              background: "#00BCD4",
              border: "none",
              margin: 0,
              transformOrigin: "left",
            }}
          />

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              margin: 0,
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              fontSize: "clamp(2.6rem, 6vw, 5.4rem)",
              lineHeight: 0.98,
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
              color: "#fff",
            }}
          >
            Front Range
            <br />
            Detail Studio
            {/* Real space + visually-hidden em dash so the H1's textContent
                reconstructs WordPress's real "Front Range Detail Studio –
                RV, Boat..." heading exactly, for SEO/crawlers, without
                showing the dash on screen. */}
            {" "}
            <span
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            >
              {"– "}
            </span>
            <span style={{ display: "block", fontSize: "clamp(1rem, 2vw, 1.6rem)", fontWeight: 500, letterSpacing: "0.02em", lineHeight: 1.5, marginTop: 14, textTransform: "none", color: "rgba(255,255,255,0.8)" }}>
              RV, Boat, Auto. Paint Protection Film, Ceramic Coating, Tint, Vinyl Wrap
            </span>
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            <Link
              href="#quote"
              style={{
                fontFamily: "var(--font-button)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: 14,
                color: "#fff",
                background: "#00BCD4",
                borderRadius: "3.125rem",
                padding: "18px 36px",
                textDecoration: "none",
                boxShadow: "0 10px 34px rgba(0,188,212,0.36)",
                transition: "background .2s ease, transform .2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#008AA2";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#00BCD4";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get A Free Quote
            </Link>
            <a
              href="tel:+13035208023"
              style={{
                fontFamily: "var(--font-button)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: 14,
                color: "#fff",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.6)",
                borderRadius: "3.125rem",
                padding: "18px 36px",
                textDecoration: "none",
                transition: "border-color .2s ease, background .2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00BCD4";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,188,212,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Call (303) 520-8023
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.7,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          Scroll
        </span>
        <span
          style={{
            width: 1,
            height: 34,
            background: "linear-gradient(to bottom, #00BCD4, transparent)",
          }}
        />
      </div>
    </section>
  );
}
