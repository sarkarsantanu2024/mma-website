"use client"

import { useState } from "react"
import { franchiseData } from "@/data/franchise"
import { Input } from "@/components/ui/input"
import { CheckCircle2, TrendingUp, Users, Award, Send } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Star, Sparkle, Burst } from "@/components/Doodles"

const ICONS: Record<string, any> = {
  trending_up: TrendingUp,
  people: Users,
  emoji_events: Award,
  check_circle: CheckCircle2,
}

const ACCENTS = ["bg-saffron text-ink", "bg-cobalt text-paper", "bg-tomato text-paper", "bg-grape text-paper"]

export function FranchiseSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Franchise inquiry:", formData)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section className="section-padding band-grape relative overflow-hidden">
      <Star className="animate-wiggle absolute left-[6%] top-16 h-8 w-8 text-saffron" />
      <Burst className="animate-spin-slow absolute right-[6%] top-24 h-10 w-10 text-tomato" />
      <Sparkle className="animate-float absolute right-[20%] bottom-16 h-6 w-6 text-cobalt" />

      <div className="container-custom relative z-10">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="eyebrow mb-5" style={{ color: "hsl(var(--grape))" }}>
              <Star className="h-4 w-4" /> Franchise Opportunity
            </span>
            <h2 className="display-lg text-ink text-balance">{franchiseData.headline}</h2>
            <p className="mt-4 text-lg text-ink/70">{franchiseData.subheadline}</p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Benefits */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="mb-6 text-xl font-bold text-ink">Why partner with us?</h3>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {franchiseData.benefits.map((benefit, i) => {
                const Icon = ICONS[benefit.icon] || CheckCircle2
                return (
                  <Reveal key={benefit.title} variant="pop" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                    <div className="sticker sticker-hover h-full p-5">
                      <span className={`mb-3 grid h-11 w-11 place-items-center rounded-lg ${ACCENTS[i % ACCENTS.length]}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="mb-1 font-bold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Form (sticky so it never leaves a tall empty gap) */}
          <Reveal delay={1} className="lg:col-span-5">
            <div className="sticker p-7 lg:sticky lg:top-24">
              <h3 className="mb-1 text-2xl font-bold">Apply for a franchise</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Tell us a little about yourself — we&apos;ll be in touch within 48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 ..." },
                  { name: "city", label: "Preferred city", type: "text", placeholder: "City name" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="mb-1.5 block text-sm font-bold">{f.label}</label>
                    <Input
                      type={f.type}
                      name={f.name}
                      value={(formData as never)[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required
                      className="border border-black/10"
                    />
                  </div>
                ))}
                <button type="submit" className="btn-bold btn-cobalt w-full">
                  <Send className="h-5 w-5" />
                  Submit application
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Requirements — full width row so columns stay balanced */}
        <Reveal className="mt-8">
          <div className="rounded-2xl border border-black/10 bg-card/70 p-6 shadow-sticker-sm md:p-8">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-grape">
              What you&apos;ll need
            </h4>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {franchiseData.requirements.map((req, index) => (
                <div key={index} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-grape" />
                  <div>
                    <h5 className="text-sm font-bold text-ink">{req.title}</h5>
                    <p className="text-xs text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
