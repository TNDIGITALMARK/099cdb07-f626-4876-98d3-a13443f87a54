export interface LessonPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: string;
  image: string;
  description: string;
  includes: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  image: string;
  experience: string;
  specialties: string[];
  bio: string;
  rating: number;
}

export const lessonPackages: LessonPackage[] = [
  {
    id: "1",
    name: "Beginner Group Lesson",
    price: 65,
    duration: "2 hours",
    groupSize: "Max 4 students",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop",
    description: "Perfect for first-time surfers! Learn the basics in our most popular lesson format with expert instruction and all equipment included.",
    includes: [
      "Professional surf instructor",
      "Surfboard rental",
      "Wetsuit rental",
      "Beach safety briefing",
      "Wave selection guidance",
      "Post-lesson analysis"
    ],
    level: "Beginner",
    isPopular: true
  },
  {
    id: "2",
    name: "Private One-on-One",
    price: 150,
    originalPrice: 180,
    duration: "2 hours",
    groupSize: "1 student",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    description: "Get personalized attention with a private instructor. Customized to your skill level and goals for maximum improvement.",
    includes: [
      "Dedicated private instructor",
      "Premium surfboard selection",
      "Wetsuit rental",
      "Video analysis",
      "Personalized feedback",
      "Technique refinement"
    ],
    level: "All Levels"
  },
  {
    id: "3",
    name: "Intermediate Progression",
    price: 85,
    duration: "2.5 hours",
    groupSize: "Max 3 students",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop",
    description: "Take your surfing to the next level. Focus on advanced techniques, wave reading, and positioning for intermediate surfers.",
    includes: [
      "Advanced technique instruction",
      "Performance surfboard options",
      "Wave positioning coaching",
      "Maneuver practice",
      "Ocean safety advanced training",
      "Progress assessment"
    ],
    level: "Intermediate"
  },
  {
    id: "4",
    name: "Family Surf Package",
    price: 200,
    originalPrice: 240,
    duration: "2 hours",
    groupSize: "Family of 4",
    image: "https://images.unsplash.com/photo-1566479179817-d1b6c17deea4?q=80&w=600&auto=format&fit=crop",
    description: "Fun family adventure! Perfect for families with kids 8+ who want to learn together in a safe, supportive environment.",
    includes: [
      "Two certified instructors",
      "All equipment for 4 people",
      "Family-friendly beach location",
      "Safety-first approach",
      "Group photos included",
      "Kids' safety equipment"
    ],
    level: "Beginner",
    isNew: true
  },
  {
    id: "5",
    name: "Advanced Performance",
    price: 120,
    duration: "3 hours",
    groupSize: "Max 2 students",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=600&auto=format&fit=crop",
    description: "For experienced surfers looking to master advanced maneuvers, competitive techniques, and challenging conditions.",
    includes: [
      "Expert-level coaching",
      "High-performance boards",
      "Video technique analysis",
      "Advanced maneuver training",
      "Competition preparation",
      "Challenging wave selection"
    ],
    level: "Advanced"
  },
  {
    id: "6",
    name: "Multi-Day Surf Camp",
    price: 350,
    originalPrice: 420,
    duration: "5 days (2hrs/day)",
    groupSize: "Max 6 students",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop",
    description: "Intensive 5-day program for serious progression. Build skills systematically with daily instruction and practice.",
    includes: [
      "5 consecutive days of lessons",
      "Progressive skill building",
      "Different surf spots",
      "Equipment for entire course",
      "Surf theory sessions",
      "End-of-camp assessment",
      "Certificate of completion"
    ],
    level: "All Levels",
    isPopular: true
  }
];

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "Carlos Mendez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "15+ years",
    specialties: ["Beginner Instruction", "Wave Reading", "Safety"],
    bio: "Born and raised in Tamarindo, Carlos has been surfing local waters for over 20 years. His patient teaching style and deep knowledge of Costa Rican surf conditions make him perfect for beginners.",
    rating: 4.9
  },
  {
    id: "2",
    name: "Sofia Rivera",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b601?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "12+ years",
    specialties: ["Advanced Techniques", "Competition Coaching", "Women's Surfing"],
    bio: "Former professional surfer with multiple Costa Rican championship titles. Sofia specializes in advanced technique refinement and helping surfers reach their competitive potential.",
    rating: 4.8
  },
  {
    id: "3",
    name: "Miguel Torres",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "18+ years",
    specialties: ["Family Lessons", "Kids Instruction", "Group Dynamics"],
    bio: "Father of three and master at teaching families. Miguel's fun approach and excellent communication skills make surfing accessible and enjoyable for all ages.",
    rating: 4.9
  },
  {
    id: "4",
    name: "Ana Gutierrez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3",
    experience: "10+ years",
    specialties: ["Intermediate Progression", "Surf Photography", "Ocean Conservation"],
    bio: "Marine biology background with passion for ocean conservation. Ana combines technical surfing instruction with environmental education for a complete experience.",
    rating: 4.7
  }
];

export const timeSlots = [
  "6:00 AM - 8:00 AM",
  "8:30 AM - 10:30 AM", 
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "4:30 PM - 6:30 PM"
];

export const availabilityData = {
  // This would typically come from a booking system
  // For demo purposes, we'll use static data
  "2025-09-21": {
    "6:00 AM - 8:00 AM": { available: 3, total: 4 },
    "8:30 AM - 10:30 AM": { available: 1, total: 4 },
    "11:00 AM - 1:00 PM": { available: 4, total: 4 },
    "2:00 PM - 4:00 PM": { available: 2, total: 4 },
    "4:30 PM - 6:30 PM": { available: 0, total: 4 }
  },
  "2025-09-22": {
    "6:00 AM - 8:00 AM": { available: 4, total: 4 },
    "8:30 AM - 10:30 AM": { available: 3, total: 4 },
    "11:00 AM - 1:00 PM": { available: 2, total: 4 },
    "2:00 PM - 4:00 PM": { available: 4, total: 4 },
    "4:30 PM - 6:30 PM": { available: 1, total: 4 }
  }
};