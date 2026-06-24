export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  location: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Priya Sharma",
    role: "Parent of Arjun, Age 9",
    content: "My son's confidence has skyrocketed since joining Mind Mantra Abacus. He now solves math problems faster than I can use a calculator! The teachers are incredibly patient and encouraging.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    location: "Kolkata",
  },
  {
    id: "test-2",
    name: "Rajesh Kumar",
    role: "Parent of Ananya, Age 7",
    content: "We've seen remarkable improvement in Ananya's concentration and memory. She now enjoys mathematics, which was unthinkable before. Highly recommend Mind Mantra Abacus!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    location: "Delhi",
  },
  {
    id: "test-3",
    name: "Meera Patel",
    role: "Parent of Kavya, Age 11",
    content: "The structured curriculum and regular competitions keep my daughter motivated. She recently won the regional championship and her school performance has improved significantly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    location: "Mumbai",
  },
  {
    id: "test-4",
    name: "Suresh Reddy",
    role: "Parent of Rohit, Age 8",
    content: "The Brain Gym exercises combined with abacus training have helped Rohit become more focused in school. His teachers have noticed a positive change in his overall academic performance.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    location: "Hyderabad",
  },
  {
    id: "test-5",
    name: "Lakshmi Iyer",
    role: "Parent of Aditya, Age 10",
    content: "What I love most about Mind Mantra is their fun-based approach. Learning feels like play for my son, and the results speak for themselves. Best investment in my child's future!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    location: "Chennai",
  },
];
