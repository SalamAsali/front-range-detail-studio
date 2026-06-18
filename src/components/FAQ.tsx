"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-dark-elevated rounded overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left text-sm hover:text-primary transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="pr-4">{item.question}</span>
            <span
              className={`text-primary flex-shrink-0 transition-transform ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-white/60 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
