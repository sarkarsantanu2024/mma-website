import { Metadata } from "next"
import { Layout } from "@/components/layout"
import { aboutData } from "@/data/about"
import { PageHero } from "@/components/sections/PageHero"
import { Reveal } from "@/components/Reveal"
import { Star as StarDoodle, Sparkle, Burst } from "@/components/Doodles"
import { Star, Lightbulb, Heart, Shield, Target, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about Mind Mantra Abacus - empowering young minds since 2009. Discover our mission, vision, and values that drive us to provide world-class abacus and mental math training to over 50,000 students across India.",
  keywords: ["about mind mantra", "abacus training company", "brain development institute", "education mission", "learning center network"],
  openGraph: {
    title: "About Mind Mantra Abacus - Our Story & Mission",
    description: "From a small center in Kolkata to a nationwide network of 100+ centers. Discover how we're transforming children's lives through scientific brain development.",
  },
}

const VALUE_ICONS: Record<string, any> = {
  star: Star,
  lightbulb: Lightbulb,
  favorite: Heart,
  shield: Shield,
}
const VALUE_ACCENT = ["bg-cobalt text-paper", "bg-saffron text-ink", "bg-tomato text-paper", "bg-grape text-paper"]

export default function About() {
  return (
    <Layout>
      <PageHero
        title={aboutData.headline}
        subtitle={aboutData.subheadline}
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&h=500&fit=crop"
        badge="About Us"
      />

      {/* Mission + Vision */}
      <section className="section-padding relative overflow-hidden">
        <Sparkle className="animate-float absolute right-[6%] top-16 h-7 w-7 text-tomato" />
        <div className="container-custom relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal variant="pop">
              <div className="sticker tilt-l hover:!rotate-0 h-full p-8">
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-2 border-black/10 bg-cobalt text-paper">
                  <Target className="h-7 w-7" />
                </span>
                <h2 className="mb-3 text-2xl font-bold">{aboutData.mission.title}</h2>
                <p className="text-muted-foreground">{aboutData.mission.content}</p>
              </div>
            </Reveal>
            <Reveal variant="pop" delay={1}>
              <div className="sticker tilt-r hover:!rotate-0 h-full p-8">
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border-2 border-black/10 bg-saffron text-ink">
                  <Eye className="h-7 w-7" />
                </span>
                <h2 className="mb-3 text-2xl font-bold">{aboutData.vision.title}</h2>
                <p className="text-muted-foreground">{aboutData.vision.content}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story — with a real image block */}
      <section className="section-padding band-cream relative overflow-hidden">
        <StarDoodle className="animate-wiggle absolute left-[5%] top-16 h-8 w-8 text-grape" />
        <div className="container-custom relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <span className="eyebrow mb-5"><StarDoodle className="h-4 w-4" /> Our Story</span>
              <h2 className="display-lg mb-6 text-balance">
                From one classroom to a{" "}
                <span className="highlight highlight--saffron"><span>nationwide movement.</span></span>
              </h2>
              {aboutData.story.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-muted-foreground">{p}</p>
              ))}
            </Reveal>
            <Reveal variant="pop" delay={1} className="relative">
              <div className="squircle relative overflow-hidden border-[3px] border-black/10 shadow-sticker-lg tilt-r">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&h=900&fit=crop"
                  alt="Students learning at Mind Mantra Abacus"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="tilt-l absolute -bottom-5 -left-5 rounded-2xl border-2 border-black/10 bg-tomato px-5 py-3 text-paper shadow-sticker">
                <div className="text-2xl font-extrabold">Since 2009</div>
                <div className="text-xs font-bold uppercase tracking-wide opacity-90">15+ years of trust</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <Burst className="animate-spin-slow absolute right-[7%] top-20 h-9 w-9 text-cobalt/60" />
        <div className="container-custom relative z-10">
          <Reveal className="mb-12 max-w-2xl">
            <span className="eyebrow mb-5"><StarDoodle className="h-4 w-4" /> What We Stand For</span>
            <h2 className="display-lg text-balance">
              The values that <span className="highlight"><span>shape every class.</span></span>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutData.values.map((value, i) => {
              const Icon = VALUE_ICONS[value.icon] || Star
              return (
                <Reveal key={value.title} variant="pop" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className={`sticker sticker-hover h-full p-6 ${i % 2 === 0 ? "tilt-l" : "tilt-r"} hover:!rotate-0`}>
                    <span className={`mb-4 grid h-13 w-13 place-items-center rounded-2xl border-2 border-black/10 p-3 ${VALUE_ACCENT[i % VALUE_ACCENT.length]}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mb-2 font-bold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
