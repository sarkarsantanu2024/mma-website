"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { galleryData, galleryCategories } from "@/data/gallery"
import { PageHero } from "@/components/sections/PageHero"
import { Reveal } from "@/components/Reveal"
import { Star, Sparkle } from "@/components/Doodles"
import { X } from "lucide-react"

export default function GalleryClient() {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const filtered = filter === "all" ? galleryData : galleryData.filter((g) => g.category === filter)

  return (
    <Layout>
      <PageHero
        title="Moments from the journey"
        subtitle="Glimpses of student achievements, competitions, and memorable moments."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&h=500&fit=crop"
        badge="Gallery"
      />

      <section className="section-padding relative overflow-hidden">
        <Sparkle className="animate-float absolute left-[5%] top-24 hidden h-7 w-7 text-tomato md:block" />
        <Star className="animate-wiggle absolute right-[6%] top-40 hidden h-8 w-8 text-grape md:block" />

        <div className="container-custom relative z-10">
          {/* Category filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2.5">
            {galleryCategories.map((c) => (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition-all ${
                  filter === c.value
                    ? "border-transparent bg-deep text-paper shadow-sticker-sm"
                    : "border-black/10 bg-card text-foreground hover:border-cobalt hover:text-cobalt"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((img, i) => (
              <Reveal key={img.id} variant="pop" delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <figure
                  onClick={() => setSelectedImage(img.src)}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-black/10 shadow-sticker-sm transition-all hover:shadow-sticker"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-deep/85 px-3 py-2 text-xs font-bold uppercase tracking-wide text-paper transition-transform duration-300 group-hover:translate-y-0">
                    {img.category}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-paper/15 text-paper transition-colors hover:bg-paper/30"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage}
            alt=""
            className="max-h-[85vh] w-auto max-w-full rounded-2xl border-2 border-paper/20 shadow-soft-lg"
          />
        </div>
      )}
    </Layout>
  )
}
