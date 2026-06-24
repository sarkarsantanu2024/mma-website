"use client";

import Link from "next/link";
import { centresData } from "@/data/centres";
import { MapPin, Phone, ArrowUpRight, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Star, Sparkle } from "@/components/Doodles";

export function CentresSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <Star className="animate-wiggle absolute right-[5%] top-16 h-8 w-8 text-tomato" />
      <Sparkle className="animate-float absolute left-[5%] bottom-24 h-7 w-7 text-cobalt" />
      <div className="container-custom relative z-10">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — editorial + map design block */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow mb-5">Our Centres</span>
              <h2 className="display-lg text-balance">
                There&apos;s a centre{" "}
                <span className="highlight"><span>near you.</span></span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                100+ centres across India, staffed by certified mentors — quality
                training is always within reach.
              </p>
            </Reveal>

            <Reveal delay={1} className="relative mt-8">
              <div className="relative overflow-hidden rounded-3xl border-2 border-black/10 bg-card shadow-sticker">
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/India%20West%20Bengal%20location%20map.svg?width=900"
                  alt="Map of West Bengal showing our centre locations"
                  className="h-64 w-full object-contain p-3"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallback) {
                      img.dataset.fallback = "1";
                      img.className = "h-64 w-full object-cover";
                      img.src = "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&h=520&fit=crop";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-ink/5" />
                {/* floating location pins */}
                <span className="animate-float absolute left-10 top-12 grid h-9 w-9 place-items-center rounded-full border-2 border-black/10 bg-saffron text-ink shadow-sticker-sm">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="animate-float absolute right-16 top-24 grid h-9 w-9 place-items-center rounded-full border-2 border-black/10 bg-tomato text-paper shadow-sticker-sm" style={{ animationDelay: "1s" }}>
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="animate-float absolute bottom-10 left-24 grid h-9 w-9 place-items-center rounded-full border-2 border-black/10 bg-cobalt text-paper shadow-sticker-sm" style={{ animationDelay: "0.5s" }}>
                  <MapPin className="h-4 w-4" />
                </span>
              </div>
              <Link href="/centres" className="btn-bold btn-saffron mt-6">
                <Navigation className="h-5 w-5" />
                Find all centres
              </Link>
            </Reveal>
          </div>

          {/* Right — centre cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {centresData.slice(0, 6).map((centre, i) => (
              <Reveal key={centre.id} variant="pop" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <article className="sticker sticker-hover h-full p-5">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold leading-snug">{centre.name}</h3>
                    <span className="shrink-0 rounded-md border-2 border-ink/10 px-2 py-0.5 text-[0.7rem] font-bold text-cobalt">
                      {centre.city}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2 text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tomato" />
                      <span>{centre.address}</span>
                    </div>
                    <a href={`tel:${centre.phone}`} className="flex gap-2 font-semibold text-cobalt hover:text-ink">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                      {centre.phone}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
