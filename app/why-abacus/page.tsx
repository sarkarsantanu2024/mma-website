import { Metadata } from "next"
import { Layout } from "@/components/layout"
import { PageHero } from "@/components/sections/PageHero"
import { WhyMMASection } from "@/components/sections/WhyMMASection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"

export const metadata: Metadata = {
  title: "Why Abacus? - Science Behind Brain Development",
  description: "Discover the scientific benefits of abacus training for children. Learn how abacus activates both brain hemispheres, improves speed and accuracy in math, builds confidence, and makes learning fun through our proven methodology.",
  keywords: ["why abacus", "abacus benefits", "brain development science", "mental math benefits", "cognitive development", "abacus training advantages"],
  openGraph: {
    title: "Why Choose Abacus Training for Your Child?",
    description: "Scientific brain development, faster mental calculations, confidence building, and fun-based learning - discover why abacus training is the perfect choice for your child's cognitive development.",
  },
}

export default function WhyAbacus() {
  return (
    <Layout>
      <PageHero
        title="Why Abacus?"
        subtitle="The science behind brain development through abacus training."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350?w=1400&h=500&fit=crop"
        badge="Brain Development"
      />
      <WhyMMASection />
      <HowItWorksSection />
    </Layout>
  )
}
