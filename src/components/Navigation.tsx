"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Vehicles", href: "/bmw-detailing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY > 40;
      if (s !== scrolled) setScrolled(s);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  });

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px clamp(20px, 5vw, 64px)",
        background: scrolled
          ? "rgba(0,0,0,0.9)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0))",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)"}`,
        transition: "background .35s ease, border-color .35s ease",
        fontFamily: "var(--font-display)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Image
          src="/logo-inverse.svg"
          alt="Front Range Detail Studio"
          width={180}
          height={46}
          style={{ height: 46, width: "auto", display: "block" }}
          priority
        />
      </Link>

      {/* Desktop links + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(18px, 2.6vw, 40px)" }}>
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 2vw, 34px)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
                textDecoration: "none",
                transition: "color .2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00BCD4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/#quote"
          className="desktop-cta"
          style={{
            fontFamily: "var(--font-button)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: "12.5px",
            color: "#fff",
            background: "#00BCD4",
            borderRadius: "3.125rem",
            padding: "14px 26px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background .2s ease, transform .2s ease, box-shadow .2s ease",
            boxShadow: "0 6px 22px rgba(0,188,212,0.28)",
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

        {/* Hamburger */}
        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hamburger"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            width: 44,
            height: 44,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: 26,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              transition: "transform .3s ease, opacity .3s ease",
              transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 26,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              transition: "opacity .2s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 26,
              height: 2,
              background: "#fff",
              borderRadius: 2,
              transition: "transform .3s ease",
              transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 120,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity .3s ease",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Mobile panel */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(82vw, 340px)",
          background: "#0a0a0a",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          zIndex: 130,
          transform: mobileOpen ? "translateX(0)" : "translateX(105%)",
          transition: "transform .38s cubic-bezier(.4,0,.2,1)",
          display: "flex",
          flexDirection: "column",
          padding: "28px 28px 40px",
          boxShadow: "-30px 0 60px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
          <Image src="/logo-inverse.svg" alt="" width={120} height={38} style={{ height: 38, width: "auto" }} />
          <button
            aria-label="Close"
            onClick={closeMenu}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: 26,
              lineHeight: 1,
              cursor: "pointer",
              fontFamily: "var(--font-display)",
            }}
          >
            &#10005;
          </button>
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              fontSize: 22,
              color: "#fff",
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/#quote"
          onClick={closeMenu}
          style={{
            marginTop: 28,
            fontFamily: "var(--font-button)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize: 13,
            color: "#fff",
            background: "#00BCD4",
            borderRadius: "3.125rem",
            padding: "16px 26px",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Get A Free Quote
        </Link>

        <a
          href="tel:+13035208023"
          style={{
            marginTop: 18,
            fontFamily: "var(--font-display)",
            fontSize: 15,
            color: "#00BCD4",
            textDecoration: "none",
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          (303) 520-8023
        </a>
      </aside>

      {/* Mobile breakpoint styles */}
      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
