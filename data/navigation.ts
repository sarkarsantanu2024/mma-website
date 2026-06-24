export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Why Abacus", href: "/why-abacus" },
  { label: "Our Centres", href: "/centres" },
  { label: "Events & Competitions", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Franchise", href: "/franchise" },
  ],
  courses: [
    { label: "Abacus & Brain Gym", href: "/courses#abacus" },
    { label: "Vedic Mathematics", href: "/courses#vedic" },
    { label: "Handwriting Improvement", href: "/courses#handwriting" },
    { label: "Memory Booster", href: "/courses#memory" },
    { label: "Kids English", href: "/courses#english" },
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
    { label: "WhatsApp", href: "https://wa.me/919876543210", icon: "whatsapp" },
  ],
};

export const contactInfo = {
  address: "123 Education Street, Salt Lake, Kolkata - 700091, West Bengal, India",
  phone: "+91 98765 43210",
  email: "info@mindmantraabacus.com",
  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
};
