import { Metadata } from "next";
import PreviousCompetitionClient from "./previous-competition-client";

export const metadata: Metadata = {
  title: "Previous Competitions - 25 Years of Champions",
  description:
    "Relive over two decades of Mind Mantra Abacus national competitions. Browse highlights, winners, photos, and videos from every edition since 1999.",
  keywords: ["past competitions", "abacus history", "previous champions", "competition archive"],
  openGraph: {
    title: "Mind Mantra Abacus - Previous Competitions",
    description: "25+ years of national championships. Browse our full competition history.",
  },
};

export default function PreviousCompetitionPage() {
  return <PreviousCompetitionClient />;
}
