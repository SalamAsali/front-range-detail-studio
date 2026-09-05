"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Google Maps embeds pull ~320 KB of third-party JavaScript. `loading="lazy"`
 * on an iframe is only a hint and Chrome loaded it on page load anyway, so
 * the homepage was paying for the map before anyone scrolled near it.
 *
 * This mounts the iframe only once it is genuinely approaching the viewport.
 */
export function LazyMap({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Defer so this isn't a synchronous setState inside the effect.
      const t = window.setTimeout(() => setShow(true), 0);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%", background: "#111" }}>
      {show && (
        <iframe
          title={title}
          src={src}
          style={{
            width: "100%",
            height: "100%",
            border: 0,
            filter: "grayscale(1) invert(0.9) contrast(0.9)",
          }}
          loading="lazy"
        />
      )}
    </div>
  );
}
