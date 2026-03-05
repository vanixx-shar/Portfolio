export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  highlight: string;
  problem: string;
  solution: string;
  impact: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "solar-aeroponics-windmill",
    title: "Solar Aeroponics Windmill System",
    subtitle: "Sustainable energy + aeroponics to improve crop efficiency",
    year: "2022",
    tags: ["Sustainability", "Systems", "Prototype"],
    highlight: "Merit Award — Engineering Innovation Challenge",
    problem:
      "Traditional farming can be resource-intensive. The goal was to explore a cleaner, more efficient approach to production using renewable energy.",
    solution:
      "Designed a concept system combining aeroponics with renewable power generation and modular design for scalability and maintenance.",
    impact: [
      "Recognized with Merit at the Engineering Innovation Challenge",
      "Demonstrated feasibility of integrating energy + agriculture concepts",
    ],
  },
  {
    slug: "license-plate-video-analytics",
    title: "License Plate Video Analytics System",
    subtitle: "Computer vision pipeline for detection + analytics",
    year: "2022",
    tags: ["Computer Vision", "AI", "Video Analytics"],
    highlight: "Merit Award — Engineering Innovation Challenge",
    problem:
      "Manual vehicle identification is slow and error-prone in operational environments where speed and accuracy matter.",
    solution:
      "Designed a pipeline for video ingestion → plate detection → text extraction → analytics, with practical deployment constraints in mind.",
    impact: [
      "Merit award recognition",
      "Designed as an operationally realistic concept system",
    ],
  },
  {
    slug: "robosub-underwater-robotics",
    title: "RoboSub — Underwater Robotics (USA)",
    subtitle: "Autonomous robotics work with SUTD OAR",
    year: "2024–2025",
    tags: ["Robotics", "Autonomy", "Team Engineering"],
    highlight: "Singapore team participation — RoboSub (USA)",
    problem:
      "Underwater autonomy introduces constraints: visibility, localization, robustness, and tight hardware/software integration.",
    solution:
      "Contributed under SUTD’s autonomous robotics organization, supporting underwater unit robot (U.W.U) work in a competition context.",
    impact: [
      "Hands-on exposure to autonomy + system integration",
      "Engineering execution under competition timelines",
    ],
  },
  {
    slug: "humanoid-assistive-robotics",
    title: "Humanoids for Assistive Robotics (ST Engineering)",
    subtitle: "Ongoing exploration for disability support applications",
    year: "Ongoing",
    tags: ["Humanoids", "Impact", "Robotics"],
    highlight: "Industry collaboration — ST Engineering (ongoing)",
    problem:
      "Assistive robotics must be safe, reliable, and usable — built around real human needs and constraints.",
    solution:
      "Ongoing collaboration exploring humanoid applications for disability support, emphasizing usability, safety, and practical adoption factors.",
    impact: ["Industry-connected scope", "Focused on meaningful real-world impact"],
  },
];