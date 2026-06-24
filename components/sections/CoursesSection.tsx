"use client"

import Link from "next/link"
import { coursesData } from "@/data/courses"
import { Calculator, Sigma, Edit3, Brain, BookOpen, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "./SectionHeading"
import { Star, Sparkle } from "@/components/Doodles"

const ICONS: Record<string, any> = {
  calculate: Calculator,
  functions: Sigma,
  edit: Edit3,
  psychology: Brain,
  menu_book: BookOpen,
}

// realistic photography per programme
const IMAGES: Record<string, string> = {
  abacus: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=520&fit=crop",
  vedic: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=520&fit=crop",
  handwriting: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=800&h=520&fit=crop",
  memory: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=520&fit=crop",
  english: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=520&fit=crop",
}

const ACCENTS = ["bg-cobalt text-paper", "bg-saffron text-ink", "bg-tomato text-paper"]

export function CoursesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <Star className="animate-wiggle absolute right-[6%] top-16 h-8 w-8 text-saffron" />
      <Sparkle className="animate-float absolute left-[5%] top-28 h-7 w-7 text-cobalt" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Our Programmes"
          title={<>Courses that grow <span className="highlight"><span>with your child.</span></span></>}
          description="From the first bead to mental mastery — scientifically sequenced programmes for every age and stage."
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.slice(0, 3).map((course, i) => {
            const Icon = ICONS[course.icon] || Calculator
            return (
              <Reveal key={course.id} variant="pop" delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className={`sticker sticker-hover group flex h-full flex-col overflow-hidden ${i % 2 === 0 ? "tilt-l" : "tilt-r"} hover:!rotate-0`}>
                  <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-black/10">
                    <img
                      src={IMAGES[course.id]}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-xl border-2 border-black/10 ${ACCENTS[i % ACCENTS.length]}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {course.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className="rounded-md border-2 border-ink/15 px-2.5 py-1 text-xs font-bold">
                        {course.ageGroup}
                      </span>
                      <span className="rounded-md border-2 border-ink/15 px-2.5 py-1 text-xs font-bold">
                        {course.duration}
                      </span>
                    </div>
                    <Link
                      href={`/courses#${course.id}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-cobalt transition-colors hover:text-ink"
                    >
                      Explore programme
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/courses" className="btn-bold btn-ink">
            View all programmes
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
