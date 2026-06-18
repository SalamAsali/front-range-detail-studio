"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  image: string;
  href: string;
  videoSrc?: string;
}

export function ServiceCard({ title, image, href, videoSrc }: ServiceCardProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded aspect-[4/3]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-transform duration-500 ${
          hovering ? "scale-110" : "scale-100"
        }`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {videoSrc && hovering && (
        <video
          src={videoSrc}
          muted
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="font-[var(--font-heading)] font-bold text-white text-sm uppercase tracking-wide leading-tight">
          {title}
        </span>
      </div>
    </Link>
  );
}
