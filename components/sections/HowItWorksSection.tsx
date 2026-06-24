"use client"

import { howItWorksData } from "@/data/whyMMA"
import { Grid3x3, Eye, Lightbulb, Zap } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Star, Sparkle, Squiggle, BeadRow } from "@/components/Doodles"

const ICONS: Record<string, any> = {
  grid_view: Grid3x3,
  visibility: Eye,
  psychology_alt: Lightbulb,
  bolt: Zap,
}

// each step owns a candy colour
const STEP = [
  { num: "bg-tomato text-paper", icon: "bg-tomato/15 text-tomato" },
  { num: "bg-cobalt text-paper", icon: "bg-cobalt/15 text-cobalt" },
  { num: "bg-grape text-paper", icon: "bg-grape/15 text-grape" },
  { num: "bg-saffron text-ink", icon: "bg-saffron/20 text-saffron" },
]

export function HowItWorksSection() {
  return (
    <section className="section-padding band-sky relative overflow-hidden">
      {/* doodles */}
      <Star className="animate-wiggle absolute left-[5%] top-16 h-8 w-8 text-bubble" />
      <Sparkle className="animate-float absolute right-[8%] top-24 h-7 w-7 text-saffron" />
      <BeadRow className="absolute bottom-10 right-[10%] hidden h-7 w-32 text-cobalt/40 md:block" />

      <div className="container-custom relative z-10">
        {/* header */}
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="eyebrow mb-5" style={{ color: "hsl(var(--tomato))" }}>
              <Star className="h-4 w-4" /> The Method
            </span>
            <h2 className="display-lg text-ink text-balance">
              From beads to a{" "}
              <span className="highlight highlight--saffron"><span>lightning-fast mind.</span></span>
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              A proven four-stage journey that rewires how your child thinks about numbers.
            </p>
          </Reveal>
        </div>

        {/* steps */}
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* squiggly connector on desktop */}
          <Squiggle className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-6 w-3/4 text-ink/15 lg:block" />

          {howItWorksData.map((step, i) => {
            const Icon = ICONS[step.icon] || Grid3x3
            const c = STEP[i % STEP.length]
            return (
              <Reveal key={step.step} variant="pop" delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className="relative z-10">
                <div className="sticker sticker-hover h-full p-6">
                  <div className="mb-4">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${c.num}`}>
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
