"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { centresData, cities } from "@/data/centres"
import { PageHero } from "@/components/sections/PageHero"
import { Reveal } from "@/components/Reveal"
import { Star, Sparkle } from "@/components/Doodles"
import { MapPin, Phone } from "lucide-react"

export default function CentresClient() {
  const [selectedCity, setSelectedCity] = useState("All")
  const filtered = selectedCity === "All" ? centresData : centresData.filter((c) => c.city === selectedCity)

  return (
    <Layout>
      <PageHero
        title="Find a centre near you"
        subtitle="200+ Mind Mantra Abacus centres across India, staffed by certified mentors."
        image="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=1400&h=500&fit=crop"
        badge="Our Centres"
      />

      <section className="section-padding relative overflow-hidden">
        <Star className="animate-wiggle absolute left-[5%] top-24 hidden h-8 w-8 text-tomato md:block" />
        <Sparkle className="animate-float absolute right-[6%] top-40 hidden h-7 w-7 text-cobalt md:block" />

        <div className="container-custom relative z-10">
          {/* City filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2.5">
            <button
              onClick={() => setSelectedCity("All")}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                selectedCity === "All"
                  ? "border-transparent bg-deep text-paper shadow-sticker-sm"
                  : "border-black/10 bg-card text-foreground hover:border-cobalt hover:text-cobalt"
              }`}
            >
              All
            </button>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                  selectedCity === city
                    ? "border-transparent bg-deep text-paper shadow-sticker-sm"
                    : "border-black/10 bg-card text-foreground hover:border-cobalt hover:text-cobalt"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Centres grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <Reveal key={c.id} variant="pop" delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="sticker sticker-hover h-full p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold leading-snug">{c.name}</h3>
                    <span className="shrink-0 rounded-md border border-black/10 px-2 py-0.5 text-[0.7rem] font-bold text-cobalt">
                      {c.city}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2 text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tomato" />
                      <span>{c.address}</span>
                    </div>
                    <a href={`tel:${c.phone}`} className="flex gap-2 font-semibold text-cobalt hover:text-ink">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                      {c.phone}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
