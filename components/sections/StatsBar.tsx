"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000000, suffix: "", label: "Students trained since 2003" },
  { value: 950, suffix: "+", label: "Franchisees" },
  { value: 5000, suffix: "+", label: "Teachers" },
  { value: 240, suffix: "", label: "Employees & partners" },
  { value: 11, suffix: "", label: "Countries" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          const duration = 2000;
          const steps = 60;
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
    <section className="band-ink relative overflow-hidden py-14">
      {/* top accent bead strip */}
      <div className="absolute inset-x-0 top-0 flex h-1.5">
        <span className="flex-1 bg-saffron" />
        <span className="flex-1 bg-tomato" />
        <span className="flex-1 bg-sun" />
        <span className="flex-1 bg-cobalt" />
        <span className="flex-1 bg-pine" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-2 gap-y-10 text-center md:grid-cols-5 md:gap-y-0">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-4 ${
                idx !== stats.length - 1 ? "md:border-r md:border-paper/15" : ""
              }`}
            >
              <div className="text-4xl font-extrabold text-saffron md:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 max-w-[10rem] text-xs font-semibold uppercase tracking-wide text-paper/65 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
