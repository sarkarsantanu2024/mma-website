"use client"

import { whyMMAData } from "@/data/whyMMA"
import { Brain, Zap, Trophy, PartyPopper } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "./SectionHeading"
import { Star, Sparkle, Burst } from "@/components/Doodles"

const ICONS: Record<string, any> = {
  neurology: Brain,
  speed: Zap,
  emoji_events: Trophy,
  celebration: PartyPopper,
}

// each benefit owns a distinct accent so the grid reads as designed, not cloned
const ACCENTS = [
  { tile: "bg-cobalt text-paper", shadow: "shadow-sticker" },
  { tile: "bg-saffron text-ink", shadow: "shadow-sticker" },
  { tile: "bg-tomato text-paper", shadow: "shadow-sticker" },
  { tile: "bg-pine text-paper", shadow: "shadow-sticker" },
]

const STATS = [
  { value: "200+", label: "Learning Centres", color: "bg-cobalt text-paper" },
  { value: "50,000+", label: "Students Trained", color: "bg-tomato text-paper" },
  { value: "500+", label: "Certified Mentors", color: "bg-grape text-paper" },
  { value: "98%", label: "Success Rate", color: "bg-pine text-ink" },
]

export function WhyMMASection() {
  return (
    <section className="section-padding band-cream relative overflow-hidden">
      {/* doodles */}
      <Sparkle className="animate-float absolute left-[5%] top-20 h-7 w-7 text-tomato" />
      <Star className="animate-wiggle absolute right-[7%] top-28 h-8 w-8 text-cobalt" />
      <Burst className="animate-spin-slow absolute right-[14%] bottom-24 h-9 w-9 text-grape/70" />

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Why Mind Mantra"
          title={<>Built on real science, <span className="highlight highlight--saffron"><span>loved by kids.</span></span></>}
          description="Four reasons parents across India choose us to unlock their child's potential — backed by results, not promises."
          className="mb-16"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyMMAData.map((item, i) => {
            const Icon = ICONS[item.icon] || Brain
            const accent = ACCENTS[i % ACCENTS.length]
            return (
              <Reveal key={item.id} variant="pop" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="sticker sticker-hover h-full p-6">
                  <div className="mb-5">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${accent.tile}`}>
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* stats band — candy colour blocks */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-2xl border-2 border-black/10 px-6 py-8 text-center shadow-sticker-sm ${s.color} ${i % 2 === 0 ? "tilt-l" : "tilt-r"}`}
              >
                <div className="text-3xl font-extrabold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-bold opacity-90">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
