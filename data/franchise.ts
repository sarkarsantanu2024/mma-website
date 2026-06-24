export interface FranchiseBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const franchiseData = {
  headline: "Start Your Own Mind Mantra Abacus Centre",
  subheadline:
    "Join India's fastest-growing brain development franchise network",
  benefits: [
    {
      id: "fb-1",
      title: "Low Investment, High Returns",
      description:
        "Start with minimal investment and enjoy excellent ROI within the first year.",
      icon: "trending_up",
    },
    {
      id: "fb-2",
      title: "Complete Training & Support",
      description:
        "Comprehensive training for you and your teachers, with ongoing support.",
      icon: "school",
    },
    {
      id: "fb-3",
      title: "Proven Curriculum",
      description:
        "Time-tested, research-backed teaching methodology that delivers results.",
      icon: "verified",
    },
    {
      id: "fb-4",
      title: "Marketing Assistance",
      description:
        "Ready-made marketing materials and strategies to attract students.",
      icon: "campaign",
    },
    {
      id: "fb-5",
      title: "Brand Recognition",
      description:
        "Leverage our established brand name and reputation in the market.",
      icon: "workspace_premium",
    },
    {
      id: "fb-6",
      title: "Exclusive Territory",
      description: "Protected territory rights to ensure your business growth.",
      icon: "location_on",
    },
  ],
  stats: [
    { value: 100, suffix: "+", label: "Active Centres" },
    { value: 95, suffix: "%", label: "Partner Satisfaction" },
    { value: 18, suffix: " months", label: "Avg. ROI Period" },
  ],
  requirements: [
    {
      title: "Minimum Space",
      description:
        "300-500 sq ft of classroom space in a commercial or residential area",
    },
    {
      title: "Investment Required",
      description:
        "₹2-5 lakhs including setup, training, and initial marketing materials",
    },
    {
      title: "Educational Background",
      description:
        "Graduate in any discipline with passion for education and children",
    },
    {
      title: "Commitment",
      description:
        "Full-time dedication to grow and manage the franchise business",
    },
    {
      title: "Infrastructure",
      description:
        "Basic furniture, whiteboard, and computer with internet connection",
    },
    {
      title: "Local Marketing",
      description:
        "Willingness to actively promote and market in your local area",
    },
  ],
};
