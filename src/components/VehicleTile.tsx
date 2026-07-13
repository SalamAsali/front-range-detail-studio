"use client";

import Image from "next/image";

/**
 * Logos forced to white via invert. Everything else renders in its
 * natural color — add filenames here one at a time as directed.
 */
const BLACK_LOGOS = new Set([
  "McLaren-Automotive-logo.svg",
]);

/**
 * Explicit alt text for filenames whose descriptive words ("white", "new",
 * etc.) would otherwise leak into the auto-derived alt text below. Falls
 * back to deriving from the filename for everything not listed here.
 */
const ALT_OVERRIDES: Record<string, string> = {
  "Porsche-new-Logo.png": "Porsche logo",
  "Jaguar-white-Logo.webp": "Jaguar logo",
  "Audi-white-Logo.png": "Audi logo",
  "Rivian-white-logo.png": "Rivian logo",
};

export function VehicleTile({ logo }: { logo: string }) {
  return (
    <div
      style={{
        background: "#0d0d0d",
        aspectRatio: "3/2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 22,
        transition: "background .25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#141414";
        const im = (e.currentTarget as HTMLElement).querySelector("img");
        if (im) (im as HTMLElement).style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#0d0d0d";
        const im = (e.currentTarget as HTMLElement).querySelector("img");
        if (im) (im as HTMLElement).style.opacity = "0.9";
      }}
    >
      <Image
        src={`/images/logos/${logo}`}
        alt={ALT_OVERRIDES[logo] ?? logo.replace(/-|\.(svg|png|webp|jpg|jpeg)$/gi, " ").trim()}
        width={100}
        height={46}
        style={{
          maxHeight: 46,
          maxWidth: "100%",
          width: "auto",
          objectFit: "contain",
          opacity: 0.9,
          filter: BLACK_LOGOS.has(logo) ? "brightness(0) invert(1)" : undefined,
          transition: "opacity .25s ease",
        }}
      />
    </div>
  );
}
