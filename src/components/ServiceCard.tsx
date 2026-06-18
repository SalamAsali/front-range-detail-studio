"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  videoSrc?: string;
}

export function ServiceCard({ title, subtitle, image, href, videoSrc }: ServiceCardProps) {
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);

  const handleMouseEnter = () => {
    setHovering(true);
    const vid = videoRef.current;
    if (vid) {
      if (!loadedRef.current) {
        vid.load();
        loadedRef.current = true;
      }
      vid.style.opacity = "1";
      const p = vid.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    const vid = videoRef.current;
    if (vid) {
      vid.style.opacity = "0";
      try { vid.pause(); } catch (_) {}
    }
  };

  return (
    <Link
      href={href}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        borderRadius: 6,
        aspectRatio: "4/3",
        textDecoration: "none",
        boxShadow: hovering
          ? "0 26px 60px rgba(0,0,0,0.6)"
          : "0 14px 40px rgba(0,0,0,0.4)",
        transform: hovering ? "translateY(-8px)" : "translateY(0)",
        transition: "transform .3s ease, box-shadow .3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        style={{
          transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
          transform: hovering ? "scale(1.07)" : "scale(1)",
        }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Hover video */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            transition: "opacity .4s ease",
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.05) 62%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 26,
          gap: 6,
          zIndex: 2,
        }}
      >
        {subtitle && (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#32EEFF",
            }}
          >
            {subtitle}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            fontSize: "1.4rem",
            lineHeight: 1.08,
            color: "#fff",
          }}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}
