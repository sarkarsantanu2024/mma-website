import { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { StatsBar } from "@/components/sections/StatsBar"
import { CompetitionButton } from "@/components/CompetitionButton"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Pages own their top spacing: the homepage hero sits *under* the
          transparent header; inner pages clear it via PageHero. */}
      <main className="flex-1">
        {children}
      </main>
      <StatsBar />
      <Footer />
      <CompetitionButton />
    </div>
  )
}
