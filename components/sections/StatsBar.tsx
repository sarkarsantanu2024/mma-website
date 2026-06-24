"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Star, Sparkle, Burst } from "@/components/Doodles";

const stats = [
  { value: 200, suffix: "+", label: "Centres across India", color: "bg-cobalt text-paper" },
  { value: 50000, suffix: "+", label: "Students trained", color: "bg-tomato text-paper" },
  { value: 500, suffix: "+", label: "Certified teachers", color: "bg-grape text-paper" },
  { value: 15, suffix: "+", label: "Years of excellence", color: "bg-saffron text-ink" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          const duration = 1600;
          const steps = 50;
          const stepValue = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="section-padding band-cream relative overflow-hidden">
      <Star className="animate-wiggle absolute left-[5%] top-12 hidden h-8 w-8 text-tomato md:block" />
      <Burst className="animate-spin-slow absolute right-[6%] top-16 hidden h-9 w-9 text-grape/70 md:block" />
      <Sparkle className="animate-float absolute right-[24%] bottom-12 hidden h-6 w-6 text-cobalt md:block" />

      <div className="container-custom relative z-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow eyebrow--center mb-5 justify-center">
            By the numbers
          </span>
          <h2 className="display-lg text-balance">
            Trusted by families <span className="highlight"><span>across India.</span></span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="pop" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className={`rounded-3xl border border-black/10 px-6 py-9 text-center shadow-sticker-sm ${s.color}`}>
                <div className="text-4xl font-extrabold md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm font-bold uppercase tracking-wide opacity-90">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
