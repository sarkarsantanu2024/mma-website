export interface Course {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
  duration: string;
  icon: string;
  color: string;
  features: string[];
}

export const coursesData: Course[] = [
  {
    id: "abacus",
    title: "Abacus & Brain Gym",
    description: "Master mental calculations and boost brain power through our flagship abacus program with brain gym exercises.",
    ageGroup: "5-14 years",
    duration: "2-3 years",
    icon: "calculate",
    color: "primary",
    features: [
      "Mental arithmetic mastery",
      "Brain gym exercises",
      "Concentration enhancement",
      "Visual memory training",
    ],
  },
  {
    id: "vedic",
    title: "Vedic Mathematics",
    description: "Learn ancient Indian mathematical techniques for lightning-fast calculations and logical reasoning.",
    ageGroup: "10-18 years",
    duration: "1-2 years",
    icon: "functions",
    color: "secondary",
    features: [
      "Speed calculation techniques",
      "Mental math shortcuts",
      "Competitive exam preparation",
      "Logical reasoning skills",
    ],
  },
  {
    id: "handwriting",
    title: "Handwriting Improvement",
    description: "Develop beautiful, legible handwriting with proper posture, grip, and stroke techniques.",
    ageGroup: "6-15 years",
    duration: "3-6 months",
    icon: "edit",
    color: "accent",
    features: [
      "Correct pen grip training",
      "Letter formation practice",
      "Speed and neatness balance",
      "Cursive writing mastery",
    ],
  },
  {
    id: "memory",
    title: "Memory Booster",
    description: "Enhance memory retention and recall abilities using proven mnemonic techniques and brain exercises.",
    ageGroup: "8-18 years",
    duration: "6-12 months",
    icon: "psychology",
    color: "primary",
    features: [
      "Mnemonic techniques",
      "Photographic memory training",
      "Study skill enhancement",
      "Exam preparation tips",
    ],
  },
  {
    id: "english",
    title: "Kids English",
    description: "Build strong English foundations with vocabulary, grammar, speaking, and writing skills.",
    ageGroup: "5-12 years",
    duration: "1-2 years",
    icon: "menu_book",
    color: "secondary",
    features: [
      "Phonics and pronunciation",
      "Vocabulary building",
      "Grammar fundamentals",
      "Creative writing",
    ],
  },
];
