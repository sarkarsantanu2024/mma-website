"use client"

import Link from "next/link"
import { eventsData } from "@/data/events"
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "./SectionHeading"
import { Star, Burst } from "@/components/Doodles"

const TYPE_STYLES: Record<string, string> = {
  olympiad: "bg-cobalt text-paper",
  competition: "bg-tomato text-paper",
  show: "bg-saffron text-ink",
  ceremony: "bg-pine text-paper",
}

export function EventsSection() {
  return (
    <section className="section-padding band-cream relative overflow-hidden">
      <Burst className="animate-spin-slow absolute left-[5%] top-20 h-9 w-9 text-tomato" />
      <Star className="animate-wiggle absolute right-[7%] top-28 h-8 w-8 text-cobalt" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Events & Competitions"
          title={<>The stage where champions <span className="highlight highlight--tomato"><span>are made.</span></span></>}
          description="Olympiads, championships and showcases that turn practice into pride — and build confidence for life."
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.slice(0, 3).map((event, i) => (
            <Reveal key={event.id} variant="pop" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="sticker sticker-hover group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-black/10">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 rounded-full border-2 border-black/10 px-3 py-1 text-xs font-bold uppercase tracking-wide ${TYPE_STYLES[event.type] || "bg-saffron text-ink"}`}>
                    {event.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-cobalt">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{event.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-tomato" />
                    Multiple locations across India
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/events" className="btn-bold btn-ink">
            See all events
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
