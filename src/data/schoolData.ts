export interface SchoolInfo {
  name: string;
  shortName: string;
  motto: string;
  location: string;
  detailedAddress: string;
  poBox: string;
  city: string;
  tel: string;
  telInternational: string;
  email: string;
  officeHours: string;
  saturdayHours: string;
  registrationNumber: string;
}

export const SCHOOL_INFO: SchoolInfo = {
  name: "Nanomax Pre and Primary School",
  shortName: "Nanomax School",
  motto: "Achieving Excellence Together",
  location: "Mbezi Louis, Mpigi Road (Igoma)",
  detailedAddress: "Mbezi Louis, Mpigi Road (Igoma), Ubungo District, Dar es Salaam, Tanzania",
  poBox: "P.O. Box 35026, Dar es Salaam",
  city: "Dar es Salaam, Tanzania",
  tel: "0783-595532",
  telInternational: "+255783595532",
  email: "nanomaxpre&primaryschool@gmail.com",
  officeHours: "Monday – Friday: 7:30 AM – 4:30 PM",
  saturdayHours: "Saturday: 8:00 AM – 1:00 PM (Admissions Office Open)",
  registrationNumber: "Reg. No: EM.18241/TZ",
};

export interface ProgramLevel {
  id: string;
  title: string;
  ageRange: string;
  grades: string;
  tagline: string;
  description: string;
  highlights: string[];
  timing: string;
  color: string;
}

export const ACADEMIC_PROGRAMS: ProgramLevel[] = [
  {
    id: "daycare",
    title: "Daycare & Crèche",
    ageRange: "1.5 – 2.5 Years",
    grades: "Toddler Discovery",
    tagline: "Gentle beginnings in a loving, hygienic & safe nursery nest",
    description: "Designed to provide tender, individualized care for your infant and toddler, building social confidence, early sensory discovery, and motor coordination.",
    highlights: [
      "1:5 Caregiver-to-child attentive supervision",
      "Sensory tactile play & speech stimulation",
      "Nutritious child-friendly snacks & lunch",
      "Hygienic nap rooms and pediatric first aid"
    ],
    timing: "7:30 AM – 3:30 PM (Flexible pickup)",
    color: "#7c1221"
  },
  {
    id: "nursery",
    title: "Nursery & Pre-Unit",
    ageRange: "3 – 5.5 Years",
    grades: "Baby, Middle & Pre-Unit",
    tagline: "Sparking curiosity, foundational phonics, and joyful arithmetic",
    description: "Our Early Childhood curriculum blends Montessori-inspired hands-on exploration with joyful English immersion, phonetic literacy, and scientific curiosity.",
    highlights: [
      "Jolly Phonics reading & bilingual conversation",
      "Montessori math beads, patterns & shapes",
      "Creative arts, coloring & gross motor exercises",
      "Interactive storytelling and early coding toys"
    ],
    timing: "7:30 AM – 1:00 PM (or Full Day till 3:30 PM)",
    color: "#0284c7"
  },
  {
    id: "primary-lower",
    title: "Lower Primary School",
    ageRange: "6 – 9 Years",
    grades: "Standard I – Standard IV",
    tagline: "Building solid academic foundations and disciplined study habits",
    description: "Rigorous yet engaging English-medium primary education fully aligned with the National Curriculum, emphasizing fluent bilingualism, mental math, and natural science.",
    highlights: [
      "Standard IV National Assessment preparation",
      "English, Mathematics, Science, Social Studies, Kiswahili",
      "Practical ICT and computer literacy lab",
      "Sports, swimming, music, and French language club"
    ],
    timing: "7:30 AM – 3:30 PM",
    color: "#7c1221"
  },
  {
    id: "primary-upper",
    title: "Upper Primary School",
    ageRange: "10 – 13 Years",
    grades: "Standard V – Standard VII",
    tagline: "Academic mastery, leadership formation, and PSLE exam triumphs",
    description: "Empowering pupils to excel in the Primary School Leaving Examination (PSLE), fostering critical thinking, research projects, public speaking, and moral leadership.",
    highlights: [
      "Consistently outstanding PSLE Division I results",
      "Dedicated weekend tutorials & mock test series",
      "Science laboratory experiments & STEM fairs",
      "Student Council leadership & debate society"
    ],
    timing: "7:15 AM – 4:30 PM",
    color: "#0284c7"
  }
];

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: "Academic" | "Sports" | "Events" | "Notice";
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
}

export const SCHOOL_NEWS: NewsArticle[] = [
  {
    id: "admissions-open-2026-2027",
    title: "Admissions Open for 2026/2027 Academic Year (Pre-School & Primary)",
    date: "September 15, 2026",
    category: "Notice",
    excerpt: "Enrollment is now officially open for Daycare, Nursery, Pre-Unit, and Standard I to VI. Schedule an entrance interview and campus tour today.",
    content: "Nanomax Pre and Primary School warmly welcomes prospective parents to register their children for the 2026/2027 academic session. We offer small class sizes, qualified dedicated teachers, state-of-the-art facilities, and reliable transport routes traversing Mbezi Louis, Mpigi, Kibamba, Kimara, and surrounding areas. Early registration guarantees priority placement.",
    author: "Admissions Secretariat",
    readTime: "3 min read"
  },
  {
    id: "national-science-fair-success",
    title: "Nanomax Young Scientists Shine at Regional Science & STEM Expo",
    date: "August 28, 2026",
    category: "Academic",
    excerpt: "Our Standard V and VI pupils bagged top honors for their solar irrigation model and eco-friendly water purification project.",
    content: "In line with our school emblem featuring the atom of scientific discovery, Nanomax pupils represented Ubungo District at the Regional Schools STEM Expo. Our primary school robotics and science project demonstrated practical solar-powered water conservation. We congratulate our teachers and budding inventors for living out 'Achieving Excellence Together'!",
    author: "Head of Science Department",
    readTime: "4 min read"
  },
  {
    id: "annual-inter-house-sports-day",
    title: "Annual Inter-House Sports Gala 2026: Victory for Maroon House",
    date: "July 20, 2026",
    category: "Sports",
    excerpt: "A day filled with athletics, track relays, tug of war, and cheer as pupils, teachers, and parents bonded in sportsmanship.",
    content: "The 2026 Nanomax Annual Sports Gala was held with great fanfare at our school sports complex. Pupils from Daycare to Standard VII competed in 50m dashes, obstacle courses, football, basketball, and sack races. Parents also participated in a thrilling 100m sprint. Maroon House emerged overall winners followed closely by Sky Blue House.",
    author: "Sports Coordinator",
    readTime: "3 min read"
  },
  {
    id: "parent-teacher-consultation",
    title: "Term II Parent-Teacher Academic Conference & Report Card Day",
    date: "June 12, 2026",
    category: "Events",
    excerpt: "Over 95% parent attendance as families reviewed comprehensive progress reports and individualized learning plans.",
    content: "Parental partnership is a cornerstone of student success at Nanomax. During our Term II conference, parents met one-on-one with class teachers and subject instructors. Discussions centered on reading comprehension milestones, character assessments, and holistic child development.",
    author: "Academic Dean",
    readTime: "2 min read"
  },
  {
    id: "modern-computer-lab-upgrade",
    title: "Commissioning of 30 New All-in-One Computers for ICT & Robotics",
    date: "May 04, 2026",
    category: "Academic",
    excerpt: "Strengthening technological literacy with touch-screen educational software and interactive coding modules for primary pupils.",
    content: "To equip every Nanomax child for the digital century, the school board has inaugurated a newly furnished ICT laboratory equipped with high-speed fiber internet, interactive smartboards, and Scratch coding software tailored for elementary learners.",
    author: "ICT Director",
    readTime: "3 min read"
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Classroom" | "STEM" | "Sports" | "Library" | "Campus";
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Vibrant Interactive Classroom Learning",
    category: "Classroom",
    image: "/images/nanomax_hero_students_1790178517975.jpg",
    description: "Students actively participating in an engaging English and mathematics session in our well-ventilated classrooms."
  },
  {
    id: "gal-2",
    title: "STEM Discovery & Science Laboratory",
    category: "STEM",
    image: "/images/nanomax_stem_science_1790178528898.jpg",
    description: "Young scientists exploring atomic structures, magnetism, and hands-on natural science experiments."
  },
  {
    id: "gal-3",
    title: "Rich Children's Library & Storytime",
    category: "Library",
    image: "/images/nanomax_library_reading_1790178544168.jpg",
    description: "Nurturing an enduring love for books with over 3,000 fiction, non-fiction, and phonics readers."
  },
  {
    id: "gal-4",
    title: "Outdoor Athletics & Playground Fun",
    category: "Sports",
    image: "/images/nanomax_sports_playground_1790178556838.jpg",
    description: "Safe, green, and spacious outdoor sports field where children build physical agility and teamwork."
  },
  {
    id: "gal-5",
    title: "Creative Arts, Painting & Crafting",
    category: "Classroom",
    image: "/images/nanomax_library_reading_1790178544168.jpg",
    description: "Developing fine motor skills and artistic expression through painting, clay modeling, and crafts."
  },
  {
    id: "gal-6",
    title: "Robotics & Modern ICT Literacy",
    category: "STEM",
    image: "/images/nanomax_stem_science_1790178528898.jpg",
    description: "Hands-on computer training helping elementary pupils master typing, coding logic, and educational software."
  }
];

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const ADMISSION_FAQS: FAQ[] = [
  {
    question: "Where is Nanomax Pre and Primary School located?",
    answer: "We are located along Mpigi Road (Igoma) in Mbezi Louis, Ubungo District, Dar es Salaam. Our location is serene, secure, and conveniently accessible from Morogoro Road via Mbezi Louis bus station.",
    category: "General"
  },
  {
    question: "What curriculum does Nanomax follow?",
    answer: "Nanomax is a registered English Medium school following the Tanzania National Curriculum (NECTA) enriched with modern international early-childhood methodologies (Montessori-inspired hands-on learning, Jolly Phonics, and integrated STEM science and ICT).",
    category: "Academics"
  },
  {
    question: "What are the age requirements for pre-school admissions?",
    answer: "Daycare accepts children aged 1.5 to 2.5 years. Nursery (Baby Class) accepts children aged 3 years. Middle Class is for 4-year-olds, and Pre-Unit (Preparatory) is for 5-year-olds preparing for Standard I.",
    category: "Admissions"
  },
  {
    question: "Does the school provide transport (School Bus)?",
    answer: "Yes! We operate a fleet of safe, monitored school buses driven by vetted, experienced drivers and accompanied by caring bus matrons. Routes cover Mbezi Louis, Mpigi, Kimara, Kibamba, Goba, Tegeta, Mbezi Beach, and adjacent neighborhoods.",
    category: "Facilities"
  },
  {
    question: "Are meals provided at school?",
    answer: "Yes, all students are served freshly prepared, nutritious mid-morning tea/porridge with healthy snacks, and a wholesome balanced hot lunch prepared under strict hygiene supervision.",
    category: "Facilities"
  },
  {
    question: "How do I schedule a campus visit or interview?",
    answer: "You can use the 'Schedule a Visit' button on this website, call our office directly at 0783-595532, or visit our administration desk Monday to Friday (7:30 AM – 4:30 PM) and Saturday (8:00 AM – 1:00 PM).",
    category: "Admissions"
  }
];

export const SCHOOL_VALUES = [
  {
    title: "Academic Rigor",
    desc: "Cultivating sharp analytical minds, fluent bilingual literacy, and a lifelong passion for learning.",
    icon: "GraduationCap"
  },
  {
    title: "Moral Integrity",
    desc: "Instilling timeless values of honesty, respect, empathy, and social responsibility in every child.",
    icon: "ShieldCheck"
  },
  {
    title: "STEM & Discovery",
    desc: "Reflected in our atomic emblem: fueling scientific curiosity, problem-solving, and digital mastery.",
    icon: "Atom"
  },
  {
    title: "Holistic Wellbeing",
    desc: "Balancing intellectual growth with sports, performing arts, nutritious nourishment, and play.",
    icon: "HeartHandshake"
  }
];
