import { Metadata } from "next"
import CentresClient from "./centres-client"

export const metadata: Metadata = {
  title: "Our Centres - Find Mind Mantra Abacus Near You",
  description: "Discover Mind Mantra Abacus learning centers across India. With 100+ locations nationwide, find a center near you in Kolkata, Mumbai, Delhi, Bangalore, and other major cities. Expert abacus training available near you.",
  keywords: ["abacus centers", "mind mantra locations", "abacus training near me", "learning centers", "abacus classes location"],
  openGraph: {
    title: "Find a Mind Mantra Abacus Centre Near You",
    description: "100+ centers across India. Quality abacus training available in your city.",
  },
}

export default function Centres() {
  return <CentresClient />
}
