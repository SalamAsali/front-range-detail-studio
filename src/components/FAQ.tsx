"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: "#161616",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "22px 24px",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#fff",
              }}
            >
              {item.question}
            </h3>
            <span
              style={{
                color: "#00BCD4",
                fontSize: 22,
                lineHeight: 1,
                flex: "none",
                transform:
                  openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform .3s ease",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === i ? 320 : 0,
              overflow: "hidden",
              transition: "max-height .35s ease",
            }}
          >
            <p
              style={{
                margin: 0,
                padding: "0 24px 24px",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
