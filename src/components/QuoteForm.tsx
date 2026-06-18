"use client";

import { useState } from "react";

const services = [
  "Paint Protection Film (Clear Bra)",
  "Window Tint",
  "Ceramic Coating",
  "Vinyl Wrap & Decal",
  "Paint Correction",
  "Oxidation Removal",
  "Other",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-dark-card rounded-lg p-8 text-center">
        <div className="text-primary text-4xl mb-4">✓</div>
        <h3 className="text-xl mb-2">Quote Request Sent!</h3>
        <p className="text-white/60 text-sm">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="bg-dark-card rounded-lg p-6 lg:p-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h3 className="text-lg mb-2">Send A Quick Quote Form</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          required
          className="bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        required
        className="w-full bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
      />

      <input
        type="tel"
        placeholder="Phone"
        className="w-full bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Vehicle Make"
          className="bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
        />
        <input
          type="text"
          placeholder="Vehicle Model"
          className="bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
        />
        <input
          type="text"
          placeholder="Vehicle Year"
          className="bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div>
        <p className="text-sm text-white/60 mb-2">Requested Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm text-white/70 cursor-pointer">
              <input
                type="checkbox"
                className="accent-primary w-4 h-4"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-white/60 mb-2">Preferred Contact Method</p>
        <div className="flex gap-4">
          {["Text", "Call", "Email"].map((m) => (
            <label key={m} className="flex items-center gap-2 text-sm text-white/70 cursor-pointer">
              <input type="radio" name="contact_method" className="accent-primary" />
              {m}
            </label>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Additional Comments"
        rows={3}
        className="w-full bg-dark-elevated border border-gray-border/40 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none transition-colors resize-none"
      />

      <label className="flex items-start gap-2 text-xs text-white/40 cursor-pointer">
        <input type="checkbox" required className="accent-primary mt-0.5" />
        I agree to the privacy policy.
      </label>

      <button
        type="submit"
        className="w-full py-3.5 bg-primary text-white text-xs uppercase tracking-widest rounded-full font-[var(--font-button)] hover:bg-primary-dark transition-colors"
      >
        Submit Quote Request
      </button>
    </form>
  );
}
