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

  const handleMouseEnter = () => {
    setHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-lg aspect-[4/3]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static image */}
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-all duration-700 ${
          hovering ? "scale-110 opacity-0" : "scale-100 opacity-100"
        }`}
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
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovering ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Cyan glow on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "inset 0 0 60px rgba(0, 188, 212, 0.15)",
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className={`text-white text-lg sm:text-xl font-bold uppercase tracking-wide leading-tight transition-transform duration-500 ${
            hovering ? "-translate-y-1" : ""
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className={`text-primary text-sm mt-2 transition-all duration-500 ${
              hovering ? "opacity-100 translate-y-0" : "opacity-60 translate-y-1"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Arrow indicator */}
      <div
        className={`absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${
          hovering
            ? "bg-primary border-primary scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2">
          <path d="M4 12L12 4M12 4H5M12 4V11" />
        </svg>
      </div>
    </Link>
  );
}
