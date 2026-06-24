import { Star, Sparkle } from "@/components/Doodles";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}

export function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[26rem] items-center justify-center overflow-hidden md:min-h-[32rem]">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      {/* balanced deep wash — image stays visible, text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/60 to-deep/45" />
      <div className="pointer-events-none absolute -right-12 top-24 h-56 w-56 rounded-full bg-saffron/25 blur-3xl" />

      {/* playful doodles */}
      <Star className="animate-wiggle absolute right-[10%] top-[26%] hidden h-9 w-9 text-sun md:block" />
      <Sparkle className="animate-float absolute left-[8%] top-[34%] hidden h-7 w-7 text-bubble md:block" />

      {/* content — centered both ways */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 pt-16 text-center sm:px-6">
        {badge && (
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-ink shadow-sticker-sm">
            <Star className="h-3.5 w-3.5" />
            {badge}
          </span>
        )}
        <h1 className="display-lg text-balance text-paper drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-paper/85 md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
