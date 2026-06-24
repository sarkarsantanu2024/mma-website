"use client";

import { type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** content shown to the right of the heading on large screens (asymmetric layout) */
  aside?: ReactNode;
  eyebrowColor?: string;
  className?: string;
}

/**
 * Editorial section header — eyebrow rule + tight display heading.
 * Supports an asymmetric (heading left / supporting copy right) layout to
 * break the repetitive centered-stack rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  aside,
  eyebrowColor,
  className = "",
}: SectionHeadingProps) {
  if (align === "center") {
    return (
      <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
        <span
          className="eyebrow eyebrow--center justify-center mb-5"
          style={eyebrowColor ? { color: eyebrowColor } : undefined}
        >
          {eyebrow}
        </span>
        <h2 className="display-lg text-balance mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground text-balance">{description}</p>
        )}
      </Reveal>
    );
  }

  return (
    <div
      className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}
    >
      <Reveal className="lg:col-span-7">
        <span
          className="eyebrow mb-5"
          style={eyebrowColor ? { color: eyebrowColor } : undefined}
        >
          {eyebrow}
        </span>
        <h2 className="display-lg text-balance">{title}</h2>
      </Reveal>
      {(description || aside) && (
        <Reveal delay={1} className="lg:col-span-5 lg:pb-2">
          {aside ?? (
            <p className="text-lg text-muted-foreground max-w-md lg:ml-auto">
              {description}
            </p>
          )}
        </Reveal>
      )}
    </div>
  );
}
