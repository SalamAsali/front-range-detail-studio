"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Auto Detailing", href: "/auto-detailing" },
  {
    label: "Protect",
    href: "/services",
    children: [
      { label: "PPF (Clear Bra)", href: "/paint-protection-film-ppf" },
      { label: "Ceramic Coating", href: "/ceramic-coating" },
      { label: "Window Tinting", href: "/window-tint" },
    ],
  },
  { label: "System X", href: "/system-x-automotive-ceramic-coatings" },
  { label: "Wraps", href: "/vinyl-wraps" },
  {
    label: "RV & Boat",
    href: "/rv-detailing",
    children: [
      { label: "RV Detailing", href: "/rv-detailing" },
      { label: "RV Ceramic Coating", href: "/rv-ceramic-coating" },
      { label: "Boat Detailing", href: "/boat-detailing" },
      { label: "Boat Ceramic Coating", href: "/boat-ceramic-coating" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-inverse.svg"
              alt="Front Range Detail Studio logo"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm text-white/80 hover:text-primary transition-colors font-[var(--font-body)]"
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1 text-xs">▾</span>
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 bg-dark-elevated border border-gray-border/20 rounded min-w-[200px] py-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-primary hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:3035208023"
              className="text-sm text-white/70 hover:text-primary transition-colors"
            >
              (303) 520-8023
            </a>
            <Link
              href="/free-quote"
              className="px-6 py-2.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile slide-in */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-dark-elevated overflow-y-auto">
            <div className="pt-20 px-6 pb-8">
              {navItems.map((item) => (
                <div key={item.label} className="mb-1">
                  <Link
                    href={item.href}
                    className="block py-3 text-white/80 hover:text-primary transition-colors border-b border-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 pl-4 text-sm text-white/50 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="mt-6 space-y-3">
                <a
                  href="tel:3035208023"
                  className="block text-center py-3 text-primary border border-primary rounded-full text-sm"
                >
                  (303) 520-8023
                </a>
                <Link
                  href="/free-quote"
                  className="block text-center py-3 bg-primary text-white rounded-full text-xs uppercase tracking-widest font-[var(--font-button)]"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
