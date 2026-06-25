"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroData } from "@/data/hero";
import {
  CheckCircle2,
  GraduationCap,
  Download,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { Star, Sparkle, Burst, LoopArrow } from "@/components/Doodles";

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

// alternating image / video banner
const slides: Slide[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&h=1080&fit=crop",
    alt: "Children learning together in a bright classroom",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop",
    alt: "Abacus training in action",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1597392582469-a697322d5c16?w=1920&h=1080&fit=crop",
    alt: "Happy child celebrating on competition day",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    poster:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=1080&fit=crop",
    alt: "Students at a national competition",
  },
];

const CHIP = [
  "bg-sun text-ink",
  "bg-sky text-ink",
  "bg-bubble text-paper",
  "bg-pine text-ink",
];
const STAT_COLOR = [
  "bg-cobalt text-paper",
  "bg-tomato text-paper",
  "bg-grape text-paper",
];

export function HeroSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 32 }, [
    autoplayRef.current,
  ]);
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* ---------- Full-width media slider ---------- */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%]">
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[88vh] min-h-[560px] w-full object-cover"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-[88vh] min-h-[560px] w-full object-cover"
                />
              )}
              {/* strong even deep-navy wash so centered text stays legible across every slide (incl. bright video) */}
              <div className="absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/40 to-deep/55" />
              {slide.type === "video" && (
                <span className="absolute right-6 top-28 inline-flex items-center gap-1.5 rounded-full bg-paper/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-paper backdrop-blur">
                  <Play className="h-3 w-3" /> Live class
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Overlay content (centered) ---------- */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="container-custom flex h-full items-center justify-center">
          <div className="relative mx-auto max-w-4xl pointer-events-auto pt-16 text-center">
            {/* doodles */}
            <Star className="animate-wiggle absolute -left-6 top-20 hidden h-10 w-10 text-sun lg:block" />
            <Sparkle className="animate-float absolute -right-4 top-28 hidden h-8 w-8 text-bubble lg:block" />

            <span
              className="eyebrow eyebrow--center mb-5 justify-center"
              style={{ color: "hsl(var(--sun))" }}
            >
              India&apos;s Most-Loved Abacus Programme
            </span>

            <h1 className="display-xl text-paper drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
              Sharpen your child&apos;s{" "}
              <span className="relative inline-block">
                <span className="highlight">
                  <span>brain power</span>
                </span>
                <LoopArrow className="animate-bob absolute -right-9 -top-7 hidden h-11 w-11 text-sun sm:block" />
              </span>{" "}
              for life.
            </h1>

            <p className="mx-auto mt-5 text-lg text-paper/85">
              Fun, science-backed brain-development classes for ages 5&ndash;14
              — where mental maths turns into superpowers and big confidence.
            </p>

            {/* chips */}
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {heroData.features.map((feature, i) => (
                <span
                  key={feature}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold shadow-sticker-sm ${CHIP[i % CHIP.length]}`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {feature}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-bold btn-saffron text-base">
                <GraduationCap className="h-5 w-5" />
                {heroData.ctaPrimary}
              </Link>
              <a
                href="#"
                className="btn-bold bg-paper/15 text-paper backdrop-blur hover:bg-paper/25"
              >
                <Download className="h-5 w-5" />
                {heroData.ctaSecondary}
              </a>
            </div>

            {/* stats */}
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-3">
              {heroData.stats.map((stat, i) => (
                <CounterStat
                  key={stat.label}
                  stat={stat}
                  color={STAT_COLOR[i % STAT_COLOR.length]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Controls ---------- */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper/20 text-paper backdrop-blur transition-all hover:bg-paper/40 lg:grid"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-paper/20 text-paper backdrop-blur transition-all hover:bg-paper/40 lg:grid"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === selected
                ? "w-8 bg-sun"
                : "w-2.5 bg-paper/50 hover:bg-paper/80"
            }`}
          />
        ))}
      </div>

      <Burst className="animate-spin-slow absolute bottom-10 right-10 z-20 hidden h-10 w-10 text-sun/80 lg:block" />
    </section>
  );
}

interface CounterStatProps {
  stat: { value: number; suffix: string; label: string };
  color: string;
}

function CounterStat({ stat, color }: CounterStatProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCount = () => {
    const duration = 1600;
    const steps = 50;
    const stepValue = stat.value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div
      ref={countRef}
      className={`rounded-2xl px-3 py-3.5 text-center shadow-sticker-sm ${color}`}
    >
      <div className="text-xl font-extrabold sm:text-2xl">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="mt-0.5 text-[0.62rem] font-bold uppercase leading-tight tracking-wide opacity-90">
        {stat.label}
      </div>
    </div>
  );
}
