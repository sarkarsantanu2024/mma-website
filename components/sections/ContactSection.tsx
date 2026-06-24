"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactInfo } from "@/data/navigation"
import { MapPin, Phone, Mail, Clock, Send, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "./SectionHeading"
import { Star, Sparkle, Burst } from "@/components/Doodles"

const INFO = [
  { icon: MapPin, label: "Address", value: contactInfo.address, accent: "bg-tomato text-paper" },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}`, accent: "bg-cobalt text-paper" },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, accent: "bg-saffron text-ink" },
  { icon: Clock, label: "Hours", value: contactInfo.hours, accent: "bg-pine text-paper" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log("Form submitted:", formData) }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section className="section-padding band-cream relative overflow-hidden">
      <Star className="animate-wiggle absolute left-[5%] top-20 h-8 w-8 text-cobalt" />
      <Burst className="animate-spin-slow absolute right-[6%] top-24 h-9 w-9 text-tomato" />
      <Sparkle className="animate-float absolute right-[22%] bottom-20 h-6 w-6 text-grape" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Get in Touch"
          title={<>Let&apos;s talk about your <span className="highlight"><span>child&apos;s future.</span></span></>}
          description="Questions, demo bookings or just curious? We usually reply the same day."
          className="mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="sticker p-7 md:p-9">
              <h3 className="mb-6 text-2xl font-bold">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Your name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required className="border-2 border-ink/15" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold">Phone</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required className="border-2 border-ink/15" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Email</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required className="border-2 border-ink/15" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you're looking for" rows={4} required className="border-2 border-ink/15" />
                </div>
                <button type="submit" className="btn-bold btn-saffron w-full">
                  <Send className="h-5 w-5" />
                  Send message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Info cards */}
          <Reveal delay={1} className="lg:col-span-5">
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {INFO.map((item) => (
                <div key={item.label} className="sticker h-full p-5">
                  <span className={`mb-3 grid h-11 w-11 place-items-center rounded-lg ${item.accent}`}>
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mb-1 text-sm font-bold">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-cobalt hover:underline break-words">{item.value}</a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Demo banner — full width so columns stay balanced */}
        <Reveal className="mt-6">
          <div className="flex flex-col items-start gap-5 rounded-2xl bg-cobalt p-7 text-paper shadow-sticker md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-paper/15">
                <GraduationCap className="h-7 w-7 text-sun" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-paper">Book a free demo class</h3>
                <p className="text-sm text-paper/75">
                  Experience our teaching first-hand — no obligations, just learning.
                </p>
              </div>
            </div>
            <button className="btn-bold btn-saffron w-full shrink-0 md:w-auto">Schedule demo class</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
