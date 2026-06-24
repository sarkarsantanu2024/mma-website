import { Metadata } from "next"
import Link from "next/link"
import { Layout } from "@/components/layout"
import { coursesData } from "@/data/courses"
import { PageHero } from "@/components/sections/PageHero"
import { Reveal } from "@/components/Reveal"
import { Star, Sparkle, Burst } from "@/components/Doodles"
import { Calculator, Sigma, Edit3, Brain, BookOpen, Check, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Courses - Abacus, Vedic Math & Brain Development Programs",
  description: "Explore Mind Mantra Abacus comprehensive courses: Abacus & Brain Gym, Vedic Mathematics, Handwriting Improvement, Memory Booster, and Kids English. Expert-designed programs for children aged 5-18 years.",
  keywords: ["abacus course", "vedic mathematics", "handwriting improvement", "memory training", "brain development programs", "kids education"],
  openGraph: {
    title: "Mind Mantra Abacus Courses - Complete Brain Development Programs",
    description: "From abacus training to Vedic math - comprehensive programs designed to boost your child's cognitive abilities, concentration, and academic excellence.",
  },
}

const ICONS: Record<string, any> = {
  calculate: Calculator,
  functions: Sigma,
  edit: Edit3,
  psychology: Brain,
  menu_book: BookOpen,
}

const IMAGES: Record<string, string> = {
  abacus: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&h=700&fit=crop",
  vedic: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=900&h=700&fit=crop",
  handwriting: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=900&h=700&fit=crop",
  memory: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&h=700&fit=crop",
  english: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=700&fit=crop",
}

const ACCENTS = [
  "bg-cobalt text-paper",
  "bg-saffron text-ink",
  "bg-tomato text-paper",
  "bg-grape text-paper",
  "bg-pine text-ink",
]

export default function Courses() {
  return (
    <Layout>
      <PageHero
        title="Programmes that grow with your child"
        subtitle="Comprehensive, scientifically-sequenced brain-development courses for every age."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&h=500&fit=crop"
        badge="Our Programmes"
      />

      <section className="section-padding relative overflow-hidden">
        <Star className="animate-wiggle absolute left-[4%] top-24 hidden h-8 w-8 text-saffron md:block" />
        <Burst className="animate-spin-slow absolute right-[5%] top-40 hidden h-9 w-9 text-grape/70 md:block" />

        <div className="container-custom relative z-10">
          <div className="space-y-10 lg:space-y-16">
            {coursesData.map((course, i) => {
              const Icon = ICONS[course.icon] || Calculator
              const reversed = i % 2 === 1
              return (
                <Reveal key={course.id}>
                  <article
                    id={course.id}
                    className="grid scroll-mt-28 items-center gap-6 lg:grid-cols-2 lg:gap-12"
                  >
                    {/* image */}
                    <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                      <div className="squircle overflow-hidden border-2 border-black/10 shadow-sticker">
                        <img
                          src={IMAGES[course.id]}
                          alt={course.title}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <span className={`absolute -left-3 -top-3 grid h-14 w-14 place-items-center rounded-2xl ${ACCENTS[i % ACCENTS.length]} shadow-sticker-sm`}>
                        <Icon className="h-7 w-7" />
                      </span>
                      <Sparkle className="absolute -bottom-3 right-6 h-6 w-6 text-saffron" />
                    </div>

                    {/* content */}
                    <div className={reversed ? "lg:order-1" : ""}>
                      <span className="eyebrow mb-4"><Star className="h-4 w-4" /> Programme</span>
                      <h2 className="mb-3 text-3xl font-bold tracking-tight">{course.title}</h2>
                      <p className="mb-5 text-muted-foreground">{course.description}</p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-bold">{course.ageGroup}</span>
                        <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-bold">{course.duration}</span>
                      </div>
                      <ul className="mb-6 grid gap-2.5 sm:grid-cols-2">
                        {course.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm font-medium">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pine/15 text-pine">
                              <Check className="h-3 w-3" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="btn-bold btn-saffron">
                        Book a free demo
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
