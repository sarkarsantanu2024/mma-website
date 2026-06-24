export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  features: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
}

export const heroData: HeroData = {
  headline: "Sharpen Your Child's Brain Power with Mind Mantra Abacus",
  subheadline: "Unlock your child's full potential with our proven brain development programs",
  features: ["Mental Math", "Concentration", "Memory", "Confidence"],
  ctaPrimary: "Book Free Demo",
  ctaSecondary: "Download Brochure",
  stats: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "+", label: "Learning Centres" },
    { value: 50000, suffix: "+", label: "Happy Students" },
  ],
};
