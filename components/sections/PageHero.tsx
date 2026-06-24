import { Star, Sparkle, WaveDivider } from "@/components/Doodles";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
}

export function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[20rem] items-end overflow-hidden pt-20 md:min-h-[24rem] md:pt-24">
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      {/* warm ink wash so cream text reads, with a hint of brand colour */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/55 to-deep/25" />
      <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-saffron/25 blur-2xl" />

      {/* playful doodles */}
      <Star className="animate-wiggle absolute right-[8%] top-[28%] h-8 w-8 text-sun" />
      <Sparkle className="animate-float absolute left-[6%] top-[34%] h-6 w-6 text-bubble" />

      <div className="container-custom relative z-10 pb-14">
        {badge && (
          <span className="tilt-l mb-4 inline-flex items-center gap-1.5 rounded-full border-2 border-black/10 bg-saffron px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink shadow-sticker-sm">
            <Star className="h-3.5 w-3.5" />
            {badge}
          </span>
        )}
        <h1 className="display-lg text-paper drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-paper/85 md:text-lg">{subtitle}</p>
        )}
      </div>

      {/* scalloped transition into the page */}
      <WaveDivider flip fill="hsl(var(--paper))" />
    </section>
  );
}
