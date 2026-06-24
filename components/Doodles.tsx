import type { CSSProperties } from "react";

/**
 * Hand-drawn doodle set — the signature playful, "made-by-a-human" layer.
 * All shapes use currentColor so you can tint them with text-* utilities.
 */

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

export function Star({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} style={style} aria-hidden>
      <path d="M24 2c1.6 8.8 4.8 13.6 13.6 15.2C28.8 18.8 25.6 23.6 24 32c-1.6-8.4-4.8-13.2-13.6-14.8C19.2 15.6 22.4 10.8 24 2Z" />
    </svg>
  );
}

export function Sparkle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} style={style} aria-hidden>
      <path d="M16 0c1 7 4 10 12 11-8 1-11 4-12 11-1-7-4-10-12-11C12 10 15 7 16 0Z" />
    </svg>
  );
}

export function Squiggle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className={className} style={style} aria-hidden>
      <path d="M3 14C12 4 20 4 29 14s17 10 26 0 17-10 26 0 17 10 26 0" />
    </svg>
  );
}

export function LoopArrow({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden>
      <path d="M8 16c22-14 52-2 44 22-5 15-28 14-30-2 0-12 14-16 22-8" />
      <path d="M52 18l-8 10 13 3" />
    </svg>
  );
}

export function Burst({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style} aria-hidden>
      <path d="M32 0l6 12 12-6-6 12 14 2-12 8 12 8-14 2 6 12-12-6-6 12-6-12-12 6 6-12-14-2 12-8L4 26l14-2-6-12 12 6 6-12Z" />
    </svg>
  );
}

export function Scribble({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className={className} style={style} aria-hidden>
      <path d="M6 30c0-14 18-22 30-12 9 8-4 24-14 18-8-5 2-22 16-22 16 0 22 16 14 28" />
    </svg>
  );
}

/** A little row of abacus beads on a rod — the brand motif. */
export function BeadRow({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 24" fill="none" className={className} style={style} aria-hidden>
      <line x1="4" y1="12" x2="116" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="12" r="9" fill="currentColor" />
      <circle cx="52" cy="12" r="9" fill="currentColor" />
      <circle cx="86" cy="12" r="9" fill="currentColor" />
    </svg>
  );
}

export function Dots({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="currentColor" className={className} style={style} aria-hidden>
      {[6, 22, 38, 54].map((y) =>
        [6, 22, 38, 54].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)
      )}
    </svg>
  );
}

/** Scalloped/wavy top divider that sits at the top edge of a section. */
export function WaveDivider({
  className = "",
  fill = "hsl(var(--paper))",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 ${flip ? "bottom-0" : "top-0"} leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`h-[40px] w-full md:h-[60px] ${flip ? "rotate-180" : ""}`}
        style={{ display: "block" }}
        aria-hidden
      >
        <path
          d="M0 30c75 28 150 28 225 4s150-44 225-20 150 44 225 20 150-44 225-20 150 28 225 16v40H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
