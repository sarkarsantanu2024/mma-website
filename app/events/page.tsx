import { Metadata } from "next"
import { Layout } from "@/components/layout"
import { eventsData } from "@/data/events"
import { PageHero } from "@/components/sections/PageHero"
import { Reveal } from "@/components/Reveal"
import { Star, Burst } from "@/components/Doodles"
import { Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Events & Competitions - Showcase Your Skills",
  description: "Participate in exciting Mind Mantra Abacus events and competitions. Annual championships, inter-school competitions, workshops, and more. Help your child gain confidence and recognition through competitive events.",
  keywords: ["abacus competitions", "mental math contests", "student events", "abacus championship", "school competitions"],
  openGraph: {
    title: "Mind Mantra Abacus Events & Competitions",
    description: "Regular competitions and events to help students showcase their skills and build confidence.",
  },
}

const TYPE_STYLES: Record<string, string> = {
  olympiad: "bg-cobalt text-paper",
  competition: "bg-tomato text-paper",
  show: "bg-saffron text-ink",
  ceremony: "bg-pine text-ink",
}

export default function Events() {
  return (
    <Layout>
      <PageHero
        title="Where champions are made"
        subtitle="Olympiads, championships and showcases that turn practice into pride."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=500&fit=crop"
        badge="Events & Competitions"
      />

      <section className="section-padding relative overflow-hidden">
        <Burst className="animate-spin-slow absolute left-[5%] top-24 hidden h-9 w-9 text-tomato md:block" />
        <Star className="animate-wiggle absolute right-[6%] top-40 hidden h-8 w-8 text-cobalt md:block" />

        <div className="container-custom relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((e, i) => (
              <Reveal key={e.id} variant="pop" delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="sticker sticker-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${TYPE_STYLES[e.type] || "bg-saffron text-ink"}`}>
                      {e.type}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-cobalt">
                      <Calendar className="h-4 w-4" />
                      {new Date(e.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{e.title}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-tomato" />
                      Multiple locations across India
                    </div>
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
