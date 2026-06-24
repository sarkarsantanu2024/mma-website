"use client";

import { Hand, Brain, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AbacusGraphic } from "@/components/AbacusGraphic";
import { Star, Sparkle, BeadRow } from "@/components/Doodles";

const STEPS = [
  {
    icon: Hand,
    title: "Touch & count",
    text: "Children slide real beads with their fingers — turning abstract numbers into something they can see and feel.",
    accent: "bg-tomato text-paper",
  },
  {
    icon: Brain,
    title: "Picture it",
    text: "Soon they imagine the abacus in their mind and move the beads mentally — no tool needed.",
    accent: "bg-cobalt text-paper",
  },
  {
    icon: Zap,
    title: "Calculate fast",
    text: "With practice they solve big sums in seconds — often quicker than a calculator.",
    accent: "bg-grape text-paper",
  },
];

export function AbacusIntroSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <Star className="animate-wiggle absolute left-[5%] top-16 hidden h-8 w-8 text-saffron md:block" />
      <Sparkle className="animate-float absolute right-[7%] top-28 hidden h-7 w-7 text-cobalt md:block" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---- Content ---- */}
          <Reveal>
            <span className="eyebrow mb-5"><Star className="h-4 w-4" /> Meet the Abacus</span>
            <h2 className="display-lg text-balance">
              A simple tool that builds a{" "}
              <span className="highlight highlight--saffron"><span>brilliant mind.</span></span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              An abacus is just a frame of colourful beads on rods — but in a
              child&apos;s hands it becomes a superpower. Here&apos;s how learning
              flows, step by step:
            </p>

            <div className="mt-8 space-y-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="flex items-start gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${s.accent} shadow-sticker-sm`}>
                      <s.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-bold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <BeadRow className="mt-8 h-7 w-40 text-ink/25" />
          </Reveal>

          {/* ---- Visual: animated abacus + a real photo ---- */}
          <Reveal delay={1} variant="pop" className="relative">
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sky/40 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-bubble/30 blur-2xl" />

            <AbacusGraphic className="relative z-10 animate-float" />

            <span className="absolute -top-3 right-6 z-20 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-paper px-3 py-1.5 text-xs font-bold text-ink shadow-soft">
              <Sparkle className="h-3.5 w-3.5 text-saffron" /> Watch the beads count
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
