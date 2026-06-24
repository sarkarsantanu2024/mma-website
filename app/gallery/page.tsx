import { Metadata } from "next"
import GalleryClient from "./gallery-client"

export const metadata: Metadata = {
  title: "Gallery - Moments from Our Journey",
  description: "Explore our gallery showcasing student achievements, competitions, classroom activities, events, and memorable moments at Mind Mantra Abacus centers across India. View photos from championships, workshops, and celebrations.",
  keywords: ["abacus gallery", "student achievements", "competition photos", "learning moments", "classroom activities"],
  openGraph: {
    title: "Mind Mantra Abacus Gallery - Our Journey in Pictures",
    description: "Glimpses of student achievements, competitions, and memorable moments from our learning centers.",
  },
}

export default function Gallery() {
  return <GalleryClient />
}
