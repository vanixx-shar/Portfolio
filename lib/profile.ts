export type Highlight = {
  title: string;
  description: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  tagline: string;
  role: string;
  location: string;
  email: string;
  resumePath: string;
  summary: [string, string, string];
  leadership: string[];
  highlights: Highlight[];
  timeline: TimelineItem[];
};

export const profile: Profile = {
  name: "Vanika Sharma",
  tagline: "Robotics - Engineering Product Development - Global Merit Scholar",
  role: "Engineering Product Development Undergraduate, SUTD",
  location: "Singapore",
  email: "vpulatsya@gmail.com",
  resumePath: "/resume.pdf",
  summary: [
    "Engineering Product Development undergraduate at Singapore University of Technology and Design (SUTD).",
    "Build robotics and AI-driven prototypes; lead engineering communities; deliver real-world impact.",
    "Focus: humanoid + assistive robotics, autonomy, CAD, engineering leadership.",
  ],
  leadership: [
    "Vice President - IEEE SUTD Student Branch",
    "President - SUTD Makerspace",
    "Robotics Engineer Intern - Griffin Labs (Singapore)",
    "Publicity Subcommittee - Institute of Physics Singapore Student Chapter",
    "Robotics Mentor - STEAMxD",
    "Yoga Instructor - Neecia Health",
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
      title: "Global Team",
      description: "RoboSub (USA) - Singapore team participation",
    },
    {
      title: "Patent Value-Add",
      description: "3D TVs without glasses (multi-country)",
    },
  ],
  timeline: [
    {
      period: "2026 - Ongoing",
      title: "ST Engineering Humanoids for Disabled",
      description:
        "Building assistive humanoid robotics concepts with practical deployment and safety-first integration.",
    },
    {
      period: "2025 - 2026",
      title: "Vice President, IEEE SUTD Student Branch",
      description:
        "Scaled chapter programming, partnerships, and technical events across robotics and applied engineering.",
    },
    {
      period: "2025 - 2026",
      title: "President, SUTD Makerspace",
      description:
        "Led interdisciplinary prototyping culture, mentorship initiatives, and hands-on build sprints.",
    },
    {
      period: "2025",
      title: "Robotics Engineer Intern, Griffin Labs",
      description:
        "Delivered robotics prototyping workflows spanning CAD, subsystem integration, and testing loops.",
    },
    {
      period: "2024 - 2025",
      title: "RoboSub, USA",
      description:
        "Contributed to Singapore underwater robotics team on autonomy, systems integration, and mission readiness.",
    },
  ],
};
