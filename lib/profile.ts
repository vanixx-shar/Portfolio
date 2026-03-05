export type Highlight = {
  title: string;
  description: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  type: string;
  period: string;
  location?: string;
  points: string[];
  skills?: string[];
};

export type EducationItem = {
  institution: string;
  program: string;
  period: string;
  details: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
};

export type Profile = {
  name: string;
  tagline: string;
  role: string;
  location: string;
  email: string;
  resumePath: string;
  resumeFilePath: string;
  linkedinUrl: string;
  summary: [string, string, string];
  about: string[];
  highlights: Highlight[];
  leadership: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skillGroups: { name: string; skills: string[] }[];
  timeline: TimelineItem[];
};

export const profile: Profile = {
  name: "Vanika Sharma",
  tagline: "Engineering Product Development | Global Merit Scholar",
  role: "Engineering Product Development Undergraduate at SUTD",
  location: "Singapore",
  email: "vpulatsya@gmail.com",
  resumePath: "/resume",
  resumeFilePath: "/resume.pdf",
  linkedinUrl: "https://www.linkedin.com/in/vanika-sharma/",
  summary: [
    "Engineering Product Development undergraduate at Singapore University of Technology and Design (SUTD).",
    "Build robotics and AI-driven prototypes, lead engineering communities, and deliver real-world impact.",
    "Focus: humanoid and assistive robotics, autonomy, CAD, engineering leadership.",
  ],
  about: [
    "Driven by leadership, deep curiosity, and strong work ethic, I aim to excel in every responsibility I take on.",
    "Leadership for me is responsibility: to inspire, support, and guide teams toward shared outcomes with clarity and consistency.",
    "I am committed to continuous learning, disciplined execution, and meaningful impact through engineering and community building.",
  ],
  highlights: [
    {
      title: "Top 5 Shortlisted",
      description: "SUTD Roboroars Robotics Competition",
    },
    {
      title: "Merit Award",
      description: "Engineering Innovation Challenge",
    },
    {
      title: "Top 10 Shortlisted",
      description: "Tan Kah Kee Young Inventor Awards",
    },
    {
      title: "RoboSub USA",
      description: "Singapore team participant",
    },
    {
      title: "Patent Value Add",
      description: "3D TV without glasses",
    },
  ],
  leadership: [
    "Vice President - IEEE SUTD Student Branch",
    "President - SUTD Makerspace",
    "Publicity Subcommittee - Institute of Physics Singapore Student Chapter",
    "Cohort Events and Welfare Representative - SUTD",
    "Robotics Mentor - STEAMxD",
  ],
  experiences: [
    {
      role: "Robotics Engineer",
      organization: "Griffin Labs",
      type: "Internship",
      period: "Oct 2025 - Present",
      location: "Singapore",
      points: [
        "Work on robot and humanoid development tasks in real engineering environments.",
        "Contribute to prototyping and CAD-centered iteration cycles.",
      ],
      skills: ["Robotics", "Humanoids", "CAD"],
    },
    {
      role: "Vice President",
      organization: "IEEE SUTD Student Branch",
      type: "Leadership",
      period: "Feb 2025 - Present",
      points: [
        "Lead chapter initiatives, technical events, and cross-team coordination.",
        "Drive project management and execution for engineering-focused programs.",
      ],
      skills: ["Leadership", "Project Management"],
    },
    {
      role: "President",
      organization: "SUTD Makerspace",
      type: "Leadership",
      period: "Feb 2025 - Present",
      points: [
        "Lead makerspace strategy, collaboration, and student build culture.",
      ],
    },
    {
      role: "Asian Yoga Sports Referee",
      organization: "International Yoga Federation",
      type: "Sports Leadership",
      period: "Jan 2025 - Present",
      points: [
        "Served as referee for the Asian Yoga Sports Championship.",
      ],
    },
    {
      role: "Yoga Instructor",
      organization: "Neecia Health",
      type: "Apprenticeship",
      period: "Jun 2024 - Present",
      points: [
        "Completed structured instructor training and practical instruction.",
      ],
    },
    {
      role: "Publicity Subcommittee",
      organization: "Institute of Physics Singapore Student Chapter (IPSSC)",
      type: "Committee",
      period: "Oct 2024 - Oct 2025",
      points: [
        "Supported communications, advertising, and event visibility.",
      ],
      skills: ["Advertising", "Project Management"],
    },
  ],
  education: [
    {
      institution: "Singapore University of Technology and Design (SUTD)",
      program: "Bachelor of Engineering (BE), Engineering Product Development",
      period: "2024 - 2028",
      details: [
        "Activities: IEEE, IPS, Dance Derivatives (DDZ), Competitive Archery, SOAR Robotics Club.",
        "Cohort Events and Welfare Representative.",
      ],
    },
    {
      institution: "Mahidol University",
      program: "Exchange Program, Innovation and Entrepreneurship",
      period: "Sep 2025",
      details: [
        "Focus: entrepreneurship, social entrepreneurship, creativity, business innovation.",
      ],
    },
  ],
  certifications: [
    {
      name: "CPR/AED/First Aid",
      issuer: "NTUC LearningHub",
      issued: "May 2025",
      expires: "May 2027",
    },
    {
      name: "Certified Yoga Instructor",
      issuer: "Morarji Desai National Institute of Yoga (MDNIY)",
      issued: "May 2024",
    },
  ],
  skillGroups: [
    {
      name: "Engineering",
      skills: ["Robotics", "Humanoids", "Computer-Aided Design (CAD)", "Engineering Project Management"],
    },
    {
      name: "Leadership",
      skills: ["Leadership", "Management", "Project Management", "Event Planning", "Event Management"],
    },
    {
      name: "Innovation",
      skills: ["Entrepreneurship", "Social Entrepreneurship", "Creativity and Innovation", "Business Innovation"],
    },
    {
      name: "Communication",
      skills: ["Advertising", "Public Speaking", "Interpersonal Skills"],
    },
  ],
  timeline: [
    {
      period: "2025 - Present",
      title: "Robotics Engineer Intern, Griffin Labs",
      description: "Robot and humanoid engineering internship in Singapore.",
    },
    {
      period: "2025 - Present",
      title: "Vice President, IEEE SUTD",
      description: "Leadership and program execution across technical initiatives.",
    },
    {
      period: "2025 - Present",
      title: "President, SUTD Makerspace",
      description: "Driving maker culture and interdisciplinary build work.",
    },
    {
      period: "2024 - 2025",
      title: "IPSSC Publicity Subcommittee",
      description: "Communications and visibility for institute-led programs.",
    },
    {
      period: "2024 - Present",
      title: "Yoga Instructor and Referee",
      description: "Certified instructor and Asian Yoga Sports referee responsibilities.",
    },
  ],
};
