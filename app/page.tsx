import { Metadata } from "next"
import { Layout } from "@/components/layout"
import {
  HeroSection,
  WhyMMASection,
  CoursesSection,
  HowItWorksSection,
  EventsSection,
  CentresSection,
  FranchiseSection,
  TestimonialsSection,
  GallerySection,
  ContactSection,
} from "@/components/sections"

export const metadata: Metadata = {
  title: "Mind Mantra Abacus - Leading Abacus & Mental Math Training for Children",
  description: "Mind Mantra Abacus offers world-class abacus and mental math training programs for children aged 5-14. Boost concentration, memory, and mathematical abilities through our proven scientific brain development methods. Join thousands of successful students across India.",
  keywords: ["abacus training", "mental math", "brain development", "kids education", "concentration training", "vedic mathematics", "memory booster", "cognitive development"],
  openGraph: {
    title: "Mind Mantra Abacus - Leading Abacus & Mental Math Training",
    description: "Transform your child's mathematical abilities with our proven abacus training programs. Expert instructors, proven results, flexible learning options.",
    images: ["/og-image-home.jpg"],
  },
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhyMMASection />
      <CoursesSection />
      <HowItWorksSection />
      <EventsSection />
      <CentresSection />
      <FranchiseSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </Layout>
  )
}
