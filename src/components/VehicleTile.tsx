"use client";

import Image from "next/image";

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
        if (im) (im as HTMLElement).style.opacity = "0.65";
      }}
    >
      <Image
        src={`/images/logos/${logo}`}
        alt={logo.replace(/-|\.svg/g, " ").trim()}
        width={100}
        height={46}
        style={{
          maxHeight: 46,
          maxWidth: "100%",
          width: "auto",
          objectFit: "contain",
          filter: "brightness(0) invert(1)",
          opacity: 0.65,
          transition: "opacity .25s ease",
        }}
      />
    </div>
  );
}
