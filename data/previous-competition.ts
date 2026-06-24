export interface PreviousWinner {
  name: string;
  category: string;
  centre: string;
  city: string;
  position: "Gold" | "Silver" | "Bronze";
}

export interface PreviousCompetition {
  year: number;
  edition: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  participants: number;
  centres: number;
  countries: number;
  highlights: string[];
  winners: PreviousWinner[];
  images: string[];
  videoUrl?: string;
  videoThumbnail?: string;
  description: string;
}

export const previousCompetitionsData: PreviousCompetition[] = [
  {
    year: 2024,
    edition: "21st Edition",
    title: "National Level Abacus Competition 2024",
    venue: "BIEC Convention Centre",
    city: "Bengaluru",
    date: "December 15, 2024",
    participants: 4800,
    centres: 320,
    countries: 10,
    description:
      "The 21st edition witnessed record participation with over 4,800 students from across India competing in Bengaluru. The event featured a special showcase segment for the first time.",
    highlights: [
      "Record 4,800 student participants",
      "Special showcase segment with participants from across India",
      "Live streaming reached 50,000+ online viewers",
      "Special felicitation for 25-year veterans of abacus teaching",
    ],
    winners: [
      { name: "Aryan Sharma", category: "Senior Mental Math", centre: "Delhi North", city: "New Delhi", position: "Gold" },
      { name: "Priya Nair", category: "Junior Mental Math", centre: "Kochi East", city: "Kochi", position: "Gold" },
      { name: "Rohan Patel", category: "Speed Anzan", centre: "Ahmedabad Central", city: "Ahmedabad", position: "Gold" },
      { name: "Ananya Reddy", category: "Sub-Junior Mental Math", centre: "Hyderabad West", city: "Hyderabad", position: "Gold" },
    ],
    images: [
      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=338&fit=crop",
  },
  {
    year: 2023,
    edition: "20th Edition",
    title: "National Level Abacus Competition 2023",
    venue: "Nehru Indoor Stadium",
    city: "Chennai",
    date: "December 10, 2023",
    participants: 4500,
    centres: 300,
    countries: 9,
    description:
      "The milestone 20th edition celebrated two decades of excellence in mental math championships. A special golden jubilee ceremony honored founding franchisees and teachers.",
    highlights: [
      "20th anniversary celebration with founding members",
      "4,500 student participants from across India",
      "Golden Jubilee awards for long-serving teachers",
      "Special documentary screening on 20 years of the competition",
    ],
    winners: [
      { name: "Karthik Iyer", category: "Senior Mental Math", centre: "Chennai South", city: "Chennai", position: "Gold" },
      { name: "Sneha Verma", category: "Junior Mental Math", centre: "Pune West", city: "Pune", position: "Gold" },
      { name: "Dev Kapoor", category: "Speed Anzan", centre: "Mumbai Central", city: "Mumbai", position: "Gold" },
    ],
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=338&fit=crop",
  },
  {
    year: 2022,
    edition: "19th Edition",
    title: "National Level Abacus Competition 2022",
    venue: "Sardar Patel Stadium",
    city: "Ahmedabad",
    date: "December 18, 2022",
    participants: 4200,
    centres: 280,
    countries: 8,
    description:
      "The first fully in-person competition after the pandemic, the 19th edition saw a triumphant return with 4,200 enthusiastic participants celebrating the joy of abacus.",
    highlights: [
      "First in-person competition post-pandemic",
      "4,200 participants — largest comeback event",
      "New Speed Anzan category introduced",
      "Live judges from Japan and Malaysia",
    ],
    winners: [
      { name: "Vivaan Singh", category: "Senior Mental Math", centre: "Jaipur East", city: "Jaipur", position: "Gold" },
      { name: "Ishita Gupta", category: "Junior Mental Math", centre: "Lucknow North", city: "Lucknow", position: "Gold" },
    ],
    images: [
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    ],
    videoThumbnail: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=338&fit=crop",
  },
  {
    year: 2021,
    edition: "18th Edition",
    title: "National Level Abacus Competition 2021 (Virtual)",
    venue: "Online – Zoom & YouTube Live",
    city: "Pan India",
    date: "December 12, 2021",
    participants: 3800,
    centres: 260,
    countries: 7,
    description:
      "Held entirely online due to pandemic restrictions, the 18th edition proved that passion for abacus knows no boundaries. Students from across India competed from their homes.",
    highlights: [
      "India's first fully virtual abacus competition",
      "3,800 participants from home setups",
      "Live proctoring via AI-assisted software",
      "YouTube Live reached 80,000+ viewers",
    ],
    winners: [
      { name: "Nisha Mehta", category: "Senior Mental Math", centre: "Bhopal Central", city: "Bhopal", position: "Gold" },
      { name: "Aditya Kumar", category: "Speed Anzan", centre: "Patna East", city: "Patna", position: "Gold" },
    ],
    images: [
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    ],
    videoThumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=338&fit=crop",
  },
  {
    year: 2019,
    edition: "17th Edition",
    title: "National Level Abacus Competition 2019",
    venue: "Palace Grounds",
    city: "Bengaluru",
    date: "December 22, 2019",
    participants: 5000,
    centres: 350,
    countries: 11,
    description:
      "The 17th edition set an all-time record with 5,000 participants from across India — the largest abacus competition ever held in India.",
    highlights: [
      "All-time record 5,000 participants",
      "Every region of India represented",
      "Chief Guest: Padma Shri awardee educationist",
      "National media coverage across India",
    ],
    winners: [
      { name: "Rahul Joshi", category: "Grand Champion", centre: "Nagpur South", city: "Nagpur", position: "Gold" },
      { name: "Meera Pillai", category: "Senior Mental Math", centre: "Trivandrum East", city: "Trivandrum", position: "Gold" },
      { name: "Siddharth Rao", category: "Junior Mental Math", centre: "Mangalore West", city: "Mangalore", position: "Gold" },
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    videoThumbnail: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=338&fit=crop",
  },
];
