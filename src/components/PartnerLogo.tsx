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
        opacity: 0.9,
        transition: "opacity .25s ease, transform .25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.opacity = "0.9";
        el.style.transform = "scale(1)";
      }}
    />
  );
}
