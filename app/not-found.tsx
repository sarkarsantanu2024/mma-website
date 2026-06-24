import Link from "next/link"
import { Home } from "lucide-react"
import { Star, Sparkle, Burst } from "@/components/Doodles"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <Star className="animate-wiggle absolute left-[12%] top-[20%] h-10 w-10 text-tomato" />
      <Sparkle className="animate-float absolute right-[16%] top-[26%] h-8 w-8 text-cobalt" />
      <Burst className="animate-spin-slow absolute bottom-[18%] left-[20%] h-10 w-10 text-grape/70" />

      <div className="relative z-10 text-center">
        <h1 className="display-xl text-cobalt">404</h1>
        <h2 className="mt-2 text-3xl font-bold">
          This page took a{" "}
          <span className="highlight highlight--saffron"><span>mental detour.</span></span>
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-md text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist — it may have been moved or removed.
        </p>
        <Link href="/" className="btn-bold btn-saffron">
          <Home className="h-5 w-5" />
          Back to home
        </Link>
      </div>
    </div>
  )
}
