export interface WhyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const whyMMAData: WhyCard[] = [
  {
    id: "brain",
    title: "Scientific Brain Development",
    description: "Our curriculum is designed based on proven neuroscience principles to activate both left and right brain hemispheres.",
    icon: "neurology",
  },
  {
    id: "speed",
    title: "Speed & Accuracy in Math",
    description: "Children learn to solve complex calculations mentally, faster than calculators, with near-perfect accuracy.",
    icon: "speed",
  },
  {
    id: "confidence",
    title: "Confidence Building",
    description: "Regular competitions and achievements boost self-esteem, helping children excel in academics and life.",
    icon: "emoji_events",
  },
  {
    id: "fun",
    title: "Fun-Based Learning",
    description: "Our gamified approach makes learning enjoyable with interactive activities, rewards, and friendly competitions.",
    icon: "celebration",
  },
];

export const howItWorksData = [
  {
    step: 1,
    title: "Physical Abacus",
    description: "Children start by learning to manipulate beads on a physical abacus for basic calculations.",
    icon: "grid_view",
  },
  {
    step: 2,
    title: "Visualization",
    description: "Gradually, they learn to visualize the abacus in their mind while performing calculations.",
    icon: "visibility",
  },
  {
    step: 3,
    title: "Mental Calculation",
    description: "Students progress to solving complex problems mentally without any physical tool.",
    icon: "psychology_alt",
  },
  {
    step: 4,
    title: "Faster Brain Processing",
    description: "Regular practice rewires the brain for faster processing, improving overall cognitive abilities.",
    icon: "bolt",
  },
];
