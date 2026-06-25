import { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { competitionData } from "@/data/competition";
import { Trophy, Calendar, MapPin, Clock, Users, Star, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "National Level Abacus Competition 2025 - Mind Mantra Abacus",
  description:
    "Join India's biggest mental math championship. Register now for the National Level Abacus Competition 2025. Open to all students enrolled in Mind Mantra Abacus centres.",
  keywords: ["abacus competition", "national level competition", "mental math championship", "kids competition India"],
};

export default function CompetitionPage() {
  const comp = competitionData;

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-20" style={{ minHeight: "520px" }}>
        <img
          src={comp.bannerImage}
          alt={comp.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(26,40,90,0.82)" }} />
        <div className="relative z-10 container-custom flex flex-col justify-center h-full py-20">
          <div className="max-w-3xl">
            {/* Live badge */}
            {comp.isLive ? (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500 text-white text-sm font-semibold mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                </span>
                Registration is LIVE
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-400 inline-block" />
                Registration Closed
              </span>
            )}
            <p className="text-sun font-semibold text-lg mb-2">{comp.edition}</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {comp.title}
            </h1>
            <p className="text-paper/80 text-lg mb-6 max-w-2xl">{comp.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-white text-sm mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-sun" />
                {comp.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sun" />
                {comp.venue}, {comp.city}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {comp.isLive && (
                <Button
                  className="btn-gradient text-base px-6 py-3"
                  asChild
                >
                  <a href={comp.registrationLink}>Register Now</a>
                </Button>
              )}
              <Link
                href="/previous-competition"
                className="inline-flex items-center gap-2 rounded-full border-2 border-paper/60 bg-paper/10 px-6 py-3 font-bold text-paper backdrop-blur transition-all hover:bg-paper hover:text-deep"
              >
                View Past Competitions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Alert */}
      {comp.isLive && (
        <div className="bg-green-50 border-b border-green-200 dark:bg-green-950/30 dark:border-green-800">
          <div className="container-custom py-3 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Registration closes on {comp.registrationDeadline}</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm" asChild>
              <a href={comp.registrationLink}>Register Before Deadline</a>
            </Button>
          </div>
        </div>
      )}

      <div className="section-padding">
        <div className="container-custom space-y-16">

          {/* About the Competition */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About the Event
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{comp.title}</h2>
              <p className="text-muted-foreground mb-4">{comp.description}</p>
              <p className="text-muted-foreground">{comp.longDescription}</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={comp.image}
                alt="Competition"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid grid-cols-3 gap-2 text-center text-white">
                  {[
                    { value: "5,000+", label: "Students" },
                    { value: "28", label: "States" },
                    { value: "22nd", label: "Edition" },
                  ].map((s) => (
                    <div key={s.label} className="bg-deep/50 rounded-xl p-2 backdrop-blur-sm">
                      <div className="font-bold text-lg text-sun">{s.value}</div>
                      <div className="text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Details */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, label: "Competition Date", value: comp.date, color: "text-orange-500" },
              { icon: Clock, label: "Registration Deadline", value: comp.registrationDeadline, color: "text-red-500" },
              { icon: MapPin, label: "Venue", value: `${comp.venue}, ${comp.city}`, color: "text-blue-500" },
              { icon: Users, label: "Eligibility", value: "All enrolled students", color: "text-green-500" },
            ].map((item) => (
              <div key={item.label} className="p-6 sticker text-center card-hover">
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{item.label}</div>
                <div className="font-semibold text-sm">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Competition Categories
              </span>
              <h2 className="font-heading text-3xl font-bold">Compete in Your Category</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comp.categories.map((cat, i) => (
                <div key={cat.name} className="p-6 sticker sticker-hover">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-white text-sm"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-1">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cat.ageGroup}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.levels.map((level) => (
                      <span key={level} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prizes */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Awards & Recognition
              </span>
              <h2 className="font-heading text-3xl font-bold">Prizes & Scholarships</h2>
            </div>
            <div className="space-y-4">
              {comp.prizes.map((prize, i) => (
                <div
                  key={prize.position}
                  className="flex flex-col sm:flex-row gap-4 items-start sm:items-center p-5 sticker"
                >
                  <div className="flex-shrink-0">
                    <Trophy
                      className={`w-8 h-8 ${i === 0 ? "text-yellow-500" : i === 1 ? "text-gray-400" : i === 2 ? "text-orange-600" : "text-primary"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{prize.position}</div>
                    <div className="text-sm text-muted-foreground">{prize.description}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {prize.award}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Event Schedule
              </span>
              <h2 className="font-heading text-3xl font-bold mb-6">Day Schedule</h2>
              <div className="space-y-3">
                {comp.schedule.map((item) => (
                  <div key={item.activity} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-28 text-xs font-medium text-primary bg-primary/10 px-2 py-1.5 rounded-lg text-center">
                      {item.time}
                    </div>
                    <div className="flex-1 py-1 text-sm font-medium">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Highlights
              </span>
              <h2 className="font-heading text-3xl font-bold mb-6">What to Expect</h2>
              <div className="space-y-3">
                {comp.highlights.map((h) => (
                  <div key={h} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-muted/50 border border-border">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Eligibility
                </h3>
                <p className="text-sm text-muted-foreground">{comp.eligibility}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-3xl p-10 text-center text-white"
            style={{ background: "linear-gradient(135deg, #F5A623 0%, #e8940f 100%)" }}
          >
            <Trophy className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="font-heading text-3xl font-bold mb-3">Ready to Compete?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Register your child today and let them showcase their incredible mental math skills on the national stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {comp.isLive ? (
                <a
                  href={comp.registrationLink}
                  className="inline-flex items-center rounded-full bg-deep px-8 py-3 text-base font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-ink"
                >
                  Register Now — Free
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center rounded-full bg-paper/85 px-8 py-3 text-base font-bold text-ink/60">
                  Registration Not Open Yet
                </span>
              )}
              <Link
                href="/previous-competition"
                className="inline-flex items-center rounded-full border-2 border-paper bg-transparent px-8 py-3 text-base font-bold text-paper transition-all hover:bg-paper hover:text-[#d97706]"
              >
                View Past Competitions
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
