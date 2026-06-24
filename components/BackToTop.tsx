"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const toTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={toTop}
      className="inline-flex items-center gap-2 rounded-full border-2 border-paper/30 px-4 py-2 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:border-saffron hover:bg-saffron hover:text-ink"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
      Back to top
    </button>
  );
}
