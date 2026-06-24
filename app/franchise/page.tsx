import { Metadata } from "next"
import { Layout } from "@/components/layout"
import { FranchiseSection } from "@/components/sections"
import { PageHero } from "@/components/sections/PageHero"

export const metadata: Metadata = {
  title: "Franchise Opportunities - Partner with Mind Mantra Abacus",
  description: "Join India's leading abacus training network. Start your own Mind Mantra Abacus franchise with comprehensive training, marketing support, and proven business model. Low investment, high returns. Franchise opportunities available across India.",
  keywords: ["abacus franchise", "education franchise", "business opportunity", "franchise India", "low investment franchise", "education business"],
  openGraph: {
    title: "Mind Mantra Abacus Franchise - Partner with Us",
    description: "Start your own successful education business. Comprehensive support, proven model, and nationwide brand recognition.",
  },
}

export default function Franchise() {
  return (
    <Layout>
      <PageHero
        title="Franchise Opportunities"
        subtitle="Start your own Mind Mantra Abacus centre and transform children's lives"
        image="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1400&h=500&fit=crop"
        badge="Partner With Us"
      />
      <FranchiseSection />
    </Layout>
  )
}
