export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "competition" | "olympiad" | "show" | "ceremony";
  image: string;
}

export const eventsData: Event[] = [
  {
    id: "evt-1",
    title: "National Abacus Olympiad 2024",
    description: "Annual national-level competition for young abacus champions across India with exciting prizes.",
    date: "2024-12-15",
    type: "olympiad",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
  {
    id: "evt-2",
    title: "Mental Math Magic Show",
    description: "Interactive demonstration of incredible mental math feats by our star students.",
    date: "2024-11-20",
    type: "show",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  {
    id: "evt-3",
    title: "Inter-State Championship",
    description: "Students from different states compete in various abacus and mental math categories.",
    date: "2024-10-05",
    type: "competition",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  },
  {
    id: "evt-4",
    title: "Annual Prize Distribution",
    description: "Celebration of achievements with awards for top performers across all centres.",
    date: "2024-09-15",
    type: "ceremony",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
  },
  {
    id: "evt-5",
    title: "Summer Brain Camp",
    description: "Intensive summer program combining abacus training with fun activities and games.",
    date: "2024-05-01",
    type: "show",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=400&fit=crop",
  },
];

export const eventTypes = [
  { value: "all", label: "All Events" },
  { value: "olympiad", label: "Olympiads" },
  { value: "competition", label: "Competitions" },
  { value: "show", label: "Shows & Demos" },
  { value: "ceremony", label: "Ceremonies" },
];
