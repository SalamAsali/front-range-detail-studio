"use client";

import Image from "next/image";

export function PartnerLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={42}
      style={{
        height: 42,
        width: "auto",
        maxWidth: 160,
        objectFit: "contain",
        filter: "brightness(0) invert(1)",
        opacity: 0.55,
        transition: "opacity .25s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.55"; }}
    />
  );
}
