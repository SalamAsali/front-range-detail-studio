import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "black" | "dark" | "elevated" | "surface";
  wide?: boolean;
}

const bgMap = {
  black: "#000",
  dark: "#0d0d0d",
  elevated: "#1a1a1a",
  surface: "#1e1e1e",
};

export function Section({
  children,
  className = "",
  id,
  bg = "black",
  wide = false,
}: SectionProps) {
  return (
    <section
      id={id}
      style={{
        background: bgMap[bg],
        padding: "clamp(64px, 8vw, 110px) 0",
      }}
      className={className}
    >
      <div
        style={{
          maxWidth: wide ? 1280 : 840,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 56px)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  children,
  accent = true,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2>{children}</h2>
      {accent && (
        <hr
          style={{
            width: 96,
            height: 2,
            background: "#00BCD4",
            border: "none",
            margin: "22px 0 0",
          }}
        />
      )}
    </div>
  );
}
