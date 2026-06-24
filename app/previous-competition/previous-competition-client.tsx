"use client";

import { useState } from "react";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { previousCompetitionsData } from "@/data/previous-competition";
import {
  Trophy, Calendar, MapPin, Users,
  ChevronDown, ChevronUp, Play, Image as ImageIcon, Medal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Stats bar ────────────────────────────────────────────────────────────────

const STATS = [
  { value: "25+", label: "Years of Competitions" },
  { value: "50,000+", label: "Total Participants" },
  { value: "28", label: "States Represented" },
  { value: "22", label: "Editions Completed" },
];

function StatsBar() {
  return (
    <div className="bg-primary py-6">
      <div className="container-custom">
        <div className="flex flex-wrap justify-around gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Single accordion item ─────────────────────────────────────────────────────

interface CompetitionAccordionProps {
  comp: (typeof previousCompetitionsData)[number];
  isExpanded: boolean;
  onToggle: () => void;
  onImageClick: (src: string) => void;
}

function CompetitionAccordion({
  comp,
  isExpanded,
  onToggle,
  onImageClick,
}: CompetitionAccordionProps) {
  return (
    <div className="rounded-3xl border border-border bg-card shadow-soft overflow-hidden">
      {/* Header */}
      <button
        className="w-full p-6 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors text-left"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-white text-lg bg-primary">
            {comp.year}
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">{comp.edition}</div>
            <h3 className="font-semibold text-lg leading-tight">{comp.title}</h3>
            <div className="flex flex-wrap gap-3 mt-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {comp.city}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {comp.date}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> {comp.participants.toLocaleString()} participants
              </span>
            </div>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        )}
      </button>

      {/* Body */}
      {isExpanded && (
        <div className="border-t border-border p-6 space-y-8">
          {/* Description & Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-primary">About the Event</h4>
              <p className="text-muted-foreground text-sm mb-4">{comp.description}</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { value: comp.participants.toLocaleString(), label: "Participants" },
                  { value: comp.centres, label: "Centres" },
                  { value: comp.countries, label: "States" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-muted/50">
                    <div className="font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Highlights</h4>
              <ul className="space-y-2">
                {comp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 items-start text-sm text-muted-foreground">
                    <span className="text-secondary mt-0.5">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Winners */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Medal className="w-4 h-4 text-yellow-500" />
              Gold Medal Winners
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {comp.winners.map((w) => (
                <div key={w.name} className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border">
                  <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{w.name}</div>
                    <div className="text-xs text-muted-foreground">{w.category}</div>
                    <div className="text-xs text-muted-foreground">{w.centre}, {w.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          {comp.videoUrl && (
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Play className="w-4 h-4 text-primary" />
                Competition Highlights Video
              </h4>
              <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={comp.videoUrl}
                  title={`${comp.title} Highlights`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Photo Gallery */}
          {comp.images.length > 0 && (
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-primary" />
                Photo Gallery
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {comp.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => onImageClick(img)}
                    className="relative rounded-xl overflow-hidden aspect-video group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${comp.title} photo ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-deep/0 group-hover:bg-deep/40 transition-colors duration-300 flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-deep/95 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Gallery image"
        className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-paper/70 leading-none"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PreviousCompetitionClient() {
  const [expandedYear, setExpandedYear] = useState<number | null>(
    previousCompetitionsData[0]?.year ?? null
  );
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const toggleYear = (year: number) =>
    setExpandedYear((prev) => (prev === year ? null : year));

  return (
    <Layout>
      <PageHero
        title="Competitions Since 1999"
        subtitle="Celebrating over two decades of excellence in abacus and mental math championships."
        image="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1400&h=500&fit=crop"
        badge="Competition History"
      />

      <StatsBar />

      <section className="section-padding">
        <div className="container-custom space-y-6">
          {previousCompetitionsData.map((comp) => (
            <CompetitionAccordion
              key={comp.year}
              comp={comp}
              isExpanded={expandedYear === comp.year}
              onToggle={() => toggleYear(comp.year)}
              onImageClick={setLightboxImage}
            />
          ))}

          <div className="text-center mt-12">
            <Button className="btn-gradient px-8 py-3 text-base" asChild>
              <Link href="/competition">
                <Trophy className="w-5 h-5 mr-2" />
                Register for 2025 Competition
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </Layout>
  );
}
