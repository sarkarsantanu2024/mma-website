import { Star, Sparkle } from "@/components/Doodles";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}

export function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[26rem] flex-col justify-end overflow-hidden md:min-h-[32rem]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      {/* balanced deep wash — image stays visible, text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/92 via-deep/55 to-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/45 to-transparent" />
      <div className="pointer-events-none absolute -right-12 top-24 h-56 w-56 rounded-full bg-saffron/25 blur-3xl" />

      {/* playful doodles */}
      <Star className="animate-wiggle absolute right-[8%] top-[30%] hidden h-9 w-9 text-sun md:block" />
      <Sparkle className="animate-float absolute left-[4%] top-[40%] hidden h-7 w-7 text-bubble md:block" />

      {/* content — bottom-left, aligned to the body container */}
      <div className="container-custom relative z-10 pb-14 pt-32 md:pb-16">
        <div className="max-w-3xl">
          {badge && (
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-ink shadow-sticker-sm">
              <Star className="h-3.5 w-3.5" />
              {badge}
            </span>
          )}
          <h1 className="display-lg text-paper drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-paper/85 md:text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
