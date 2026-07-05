"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative bg-navy py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-20" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          Stay ahead with new content systems
        </h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">
          Get updates when we ship new prompt systems, frameworks, and operations kits for content teams.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-2xl bg-primary/10 border border-primary/30 px-6 py-4 text-primary">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-semibold">You&apos;re on the list — welcome aboard.</span>
          </div>
        ) : (
          <form
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 min-h-[50px] rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
            <button
              type="submit"
              className="min-h-[50px] rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-bg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
