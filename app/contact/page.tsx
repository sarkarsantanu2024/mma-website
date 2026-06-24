import { Metadata } from "next"
import { Layout } from "@/components/layout"
import { ContactSection } from "@/components/sections"
import { PageHero } from "@/components/sections/PageHero"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Mind Mantra Abacus",
  description: "Contact Mind Mantra Abacus for inquiries, demo class bookings, franchise opportunities, or general information. Call +91 98765 43210, email info@mindmantraabacus.com, or visit our Kolkata office.",
  keywords: ["contact abacus center", "book demo class", "abacus inquiry", "franchise contact", "mind mantra contact"],
  openGraph: {
    title: "Contact Mind Mantra Abacus - We're Here to Help",
    description: "Get in touch for demo classes, course information, or franchise opportunities. We're happy to help!",
  },
}

export default function Contact() {
  return (
    <Layout>
      <PageHero
        title="Get in Touch"
        subtitle="We're here to answer your questions and help you get started"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&h=500&fit=crop"
        badge="Contact Us"
      />
      <ContactSection />
    </Layout>
  )
}
