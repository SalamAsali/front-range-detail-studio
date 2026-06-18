import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "black" | "dark" | "elevated" | "surface";
  wide?: boolean;
}

const bgMap = {
  black: "bg-black",
  dark: "bg-dark",
  elevated: "bg-dark-elevated",
  surface: "bg-dark-surface",
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
      className={`${bgMap[bg]} py-[clamp(50px,7vw,90px)] ${className}`}
    >
      <div
        className={`mx-auto px-5 ${wide ? "max-w-[1440px]" : "max-w-[840px]"}`}
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
    <div className="mb-8">
      <h2>{children}</h2>
      {accent && (
        <hr className="w-24 h-0.5 bg-primary border-none mt-3 mb-0" />
      )}
    </div>
  );
}
