"use client"

import { useState } from "react"
import { testimonialsData } from "@/data/testimonials"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "./SectionHeading"
import { Star as StarDoodle, Sparkle } from "@/components/Doodles"

export function TestimonialsSection() {
  const [i, setI] = useState(0)
  const next = () => setI((p) => (p + 1) % testimonialsData.length)
  const prev = () => setI((p) => (p - 1 + testimonialsData.length) % testimonialsData.length)
  const current = testimonialsData[i]

  return (
    <section className="section-padding band-cream relative overflow-hidden">
      <Sparkle className="animate-float absolute left-[6%] top-20 h-7 w-7 text-bubble" />
      <StarDoodle className="animate-wiggle absolute right-[6%] top-24 h-8 w-8 text-saffron" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Parent Stories"
          title={<>Don&apos;t take our word for it &mdash; <span className="highlight"><span>take theirs.</span></span></>}
          description="Real families, real transformations. Here's what parents across India tell us."
          className="mb-16"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* Quote card */}
          <Reveal className="lg:col-span-8">
            <figure className="sticker relative flex h-full flex-col justify-between p-8 md:p-12">
              <Quote className="absolute right-8 top-8 h-16 w-16 text-sun" />
              <blockquote className="relative text-2xl font-semibold leading-snug text-balance md:text-3xl">
                &ldquo;{current.content}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-14 w-14 rounded-full border-2 border-black/10 object-cover shadow-sticker-sm"
                />
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className={`h-4 w-4 ${s < current.rating ? "fill-saffron text-saffron" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <div className="mt-1 font-bold">{current.name}</div>
                  <div className="text-sm text-muted-foreground">{current.role} · {current.location}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Controls + counter */}
          <Reveal delay={1} className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between rounded-2xl border-2 border-black/10 bg-cobalt p-8 text-paper shadow-sticker">
              <div>
                <div className="text-7xl font-extrabold text-saffron">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-paper/60">
                  of {String(testimonialsData.length).padStart(2, "0")} stories
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <button onClick={prev} aria-label="Previous" className="grid h-12 w-12 place-items-center rounded-xl border-2 border-paper text-paper transition-colors hover:bg-saffron hover:text-ink hover:border-saffron">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={next} aria-label="Next" className="grid h-12 w-12 place-items-center rounded-xl border-2 border-paper bg-saffron text-ink transition-transform hover:-translate-y-0.5">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="ml-auto flex gap-1.5">
                  {testimonialsData.map((_, d) => (
                    <button
                      key={d}
                      onClick={() => setI(d)}
                      aria-label={`Story ${d + 1}`}
                      className={`h-2 rounded-full transition-all ${d === i ? "w-6 bg-saffron" : "w-2 bg-paper/40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
