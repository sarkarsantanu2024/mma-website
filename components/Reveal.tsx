"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** "up" = fade/slide, "pop" = playful sticker pop */
  variant?: "up" | "pop";
  /** stagger index 1-5 -> applies a transition delay */
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
  className?: string;
  /** re-trigger every time it scrolls into view */
  once?: boolean;
}

/**
 * Lightweight IntersectionObserver reveal. Honours prefers-reduced-motion
 * automatically via the CSS in globals.css (.reveal / .reveal-pop).
 */
export function Reveal({
  children,
  variant = "up",
  delay,
  as,
  className = "",
  once = true,
}: RevealProps) {
  const Tag: ElementType = as || "div";
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const base = variant === "pop" ? "reveal-pop" : "reveal";
  const delayClass = delay ? ` delay-${delay}` : "";

  return (
    <Tag
      ref={ref as never}
      className={`${base}${delayClass} ${shown ? "is-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
