"use client"

import Link from "next/link"
import { galleryData } from "@/data/gallery"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "./SectionHeading"
import { Star, Sparkle } from "@/components/Doodles"

// varied tile spans -> editorial bento, never a uniform grid
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
]

export function GallerySection() {
  const images = galleryData.slice(0, 7)
  return (
    <section className="section-padding relative overflow-hidden">
      <Sparkle className="animate-float absolute left-[5%] top-16 h-7 w-7 text-tomato" />
      <Star className="animate-wiggle absolute right-[6%] top-24 h-8 w-8 text-grape" />
      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Moments from the <span className="highlight highlight--saffron"><span>journey.</span></span></>}
          description="Classrooms, championships and the smiles in between."
          className="mb-16"
        />

        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[170px] md:grid-cols-4">
          {images.map((image, i) => (
            <Reveal
              key={image.id}
              variant="pop"
              delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}
              className={SPANS[i % SPANS.length]}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-2xl border-2 border-black/10 shadow-sticker-sm transition-all hover:shadow-sticker">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-3 py-2 text-xs font-bold uppercase tracking-wide text-paper transition-transform duration-300 group-hover:translate-y-0">
                  {image.category}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/gallery" className="btn-bold btn-ink">
            View full gallery
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
