export interface CompetitionCategory {
  name: string;
  ageGroup: string;
  levels: string[];
}

export interface CompetitionPrize {
  position: string;
  award: string;
  description: string;
}

export interface CompetitionSchedule {
  activity: string;
  time: string;
}

export interface UpcomingCompetition {
  id: string;
  title: string;
  subtitle: string;
  edition: string;
  date: string;
  registrationDeadline: string;
  venue: string;
  city: string;
  state: string;
  description: string;
  longDescription: string;
  categories: CompetitionCategory[];
  prizes: CompetitionPrize[];
  eligibility: string;
  image: string;
  bannerImage: string;
  isLive: boolean;
  liveStartDate: string;
  liveEndDate: string;
  registrationLink: string;
  schedule: CompetitionSchedule[];
  highlights: string[];
}

// Determine live status based on date range
const today = new Date();
const liveStart = new Date("2025-11-15");
const liveEnd = new Date("2025-12-20");
const isCurrentlyLive = today >= liveStart && today <= liveEnd;

export const competitionData: UpcomingCompetition = {
  id: "nlc-2025",
  title: "National Level Abacus Competition 2025",
  subtitle: "India's Biggest Mental Math Championship",
  edition: "22nd Edition",
  date: "December 20, 2025",
  registrationDeadline: "November 30, 2025",
  venue: "Jawaharlal Nehru Stadium",
  city: "New Delhi",
  state: "Delhi",
  description:
    "The National Level Abacus Competition brings together the brightest young minds from across India to showcase their exceptional mental math abilities. This prestigious event is a platform for students to demonstrate the power of abacus training in solving complex calculations with speed and accuracy.",
  longDescription:
    "Now in its 22nd edition, the Mind Mantra Abacus National Level Competition has grown into India's most celebrated brain development championship. Students from 11 countries compete across multiple categories, performing lightning-fast mental calculations that astound audiences and judges alike. The competition promotes the ancient abacus method as a powerful tool for cognitive development, building concentration, memory, and academic excellence in children.",
  categories: [
    {
      name: "Junior Abacus",
      ageGroup: "5–8 years",
      levels: ["Bronze", "Silver", "Gold"],
    },
    {
      name: "Sub-Junior Mental Math",
      ageGroup: "8–10 years",
      levels: ["Level 1", "Level 2", "Level 3"],
    },
    {
      name: "Junior Mental Math",
      ageGroup: "10–13 years",
      levels: ["Level 1", "Level 2", "Level 3"],
    },
    {
      name: "Senior Mental Math",
      ageGroup: "13–16 years",
      levels: ["Advanced", "Expert", "Grand Master"],
    },
    {
      name: "Speed Anzan",
      ageGroup: "8–16 years",
      levels: ["Open Category"],
    },
  ],
  prizes: [
    {
      position: "1st Place – Each Category",
      award: "Gold Medal + Trophy + Certificate",
      description: "₹10,000 scholarship + National Champion title",
    },
    {
      position: "2nd Place – Each Category",
      award: "Silver Medal + Trophy + Certificate",
      description: "₹5,000 scholarship",
    },
    {
      position: "3rd Place – Each Category",
      award: "Bronze Medal + Trophy + Certificate",
      description: "₹3,000 scholarship",
    },
    {
      position: "Overall Grand Champion",
      award: "Rolling Trophy + Gold Medal",
      description: "₹25,000 scholarship + International participation invitation",
    },
    {
      position: "Best Franchise Award",
      award: "Shield + Certificate",
      description: "Awarded to the top-performing franchisee by student count",
    },
  ],
  eligibility:
    "All students currently enrolled in any Mind Mantra Abacus centre who have completed at least Level 1 training are eligible to participate. Students must be nominated by their respective centre heads.",
  image:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop",
  bannerImage:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&h=600&fit=crop",
  isLive: isCurrentlyLive,
  liveStartDate: "2025-11-15",
  liveEndDate: "2025-12-20",
  registrationLink: "#register",
  schedule: [
    { activity: "Registration & Check-in", time: "8:00 AM – 9:00 AM" },
    { activity: "Inauguration Ceremony", time: "9:00 AM – 9:30 AM" },
    { activity: "Junior & Sub-Junior Rounds", time: "9:30 AM – 12:00 PM" },
    { activity: "Lunch Break", time: "12:00 PM – 1:00 PM" },
    { activity: "Senior & Speed Anzan Rounds", time: "1:00 PM – 4:00 PM" },
    { activity: "Semi-Finals", time: "4:00 PM – 5:00 PM" },
    { activity: "Finals & Grand Champion Round", time: "5:00 PM – 6:00 PM" },
    { activity: "Prize Distribution & Closing", time: "6:00 PM – 7:00 PM" },
  ],
  highlights: [
    "5,000+ students from across India and 11 countries",
    "Live telecast on regional channels",
    "Participation certificates for all contestants",
    "International qualification round for Grand Champions",
    "Cultural performances and exhibitions",
    "Parent observation gallery",
  ],
};
