export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    alt: "Students in classroom",
    category: "classroom",
  },
  {
    id: "gal-2",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    alt: "Competition event",
    category: "events",
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    alt: "Prize distribution",
    category: "events",
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    alt: "Award ceremony",
    category: "events",
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=400&fit=crop",
    alt: "Summer camp activities",
    category: "activities",
  },
  {
    id: "gal-6",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
    alt: "Brain gym session",
    category: "classroom",
  },
  {
    id: "gal-7",
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
    alt: "Students practicing",
    category: "classroom",
  },
  {
    id: "gal-8",
    src: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?w=600&h=400&fit=crop",
    alt: "Group activity",
    category: "activities",
  },
  {
    id: "gal-9",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    alt: "Learning with abacus",
    category: "classroom",
  },
  {
    id: "gal-10",
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
    alt: "Competition winners",
    category: "events",
  },
  {
    id: "gal-11",
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop",
    alt: "Fun learning",
    category: "activities",
  },
  {
    id: "gal-12",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    alt: "Centre interior",
    category: "centres",
  },
];

export const galleryCategories = [
  { value: "all", label: "All Photos" },
  { value: "classroom", label: "Classroom" },
  { value: "events", label: "Events" },
  { value: "activities", label: "Activities" },
  { value: "centres", label: "Our Centres" },
];
