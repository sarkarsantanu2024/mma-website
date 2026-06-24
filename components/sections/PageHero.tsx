import { Star, Sparkle, WaveDivider } from "@/components/Doodles";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}

export function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      {/* warm deep wash so cream text reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/45" />
      <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-saffron/25 blur-2xl" />

      {/* playful doodles */}
      <Star className="animate-wiggle absolute right-[8%] top-[26%] hidden h-8 w-8 text-sun md:block" />
      <Sparkle className="animate-float absolute left-[5%] top-[34%] hidden h-6 w-6 text-bubble md:block" />

      <div className="container-custom relative z-10 flex min-h-[19rem] flex-col justify-end pb-20 pt-28 md:min-h-[23rem] md:pt-32">
        <div className="max-w-3xl">
          {badge && (
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink shadow-sticker-sm">
              <Star className="h-3.5 w-3.5" />
              {badge}
            </span>
          )}
          <h1 className="display-lg text-paper drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">{title}</h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base text-paper/85 md:text-lg">{subtitle}</p>
          )}
        </div>
      </div>

      {/* scalloped transition into the page */}
      <WaveDivider flip fill="hsl(var(--paper))" />
    </section>
  );
}
