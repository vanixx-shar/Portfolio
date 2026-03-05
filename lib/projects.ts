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
};

export const projects: Project[] = [
  {
    slug: "solar-aeroponics-windmill",
    title: "Solar Aeroponics Windmill System",
    subtitle: "Sustainable energy + aeroponics prototype (Merit Award)",
    year: "2022",
    tags: ["Sustainability", "Prototype", "Systems"],
    highlight: "Merit Award — Engineering Innovation Challenge (EIC)",
    problem:
      "Agriculture can be resource-intensive. The goal was to explore a cleaner, more efficient approach using renewable energy and aeroponics.",
    solution:
      "Designed a concept system integrating aeroponics with renewable power generation and modular design for scalability and maintainability.",
    impact: [
      "Merit recognition at EIC",
      "Demonstrated feasibility of integrated energy + agriculture system concepts",
    ],
  },
  {
    slug: "license-plate-video-analytics",
    title: "License Plate Video Analytics System",
    subtitle: "Computer vision pipeline for detection + analytics (Merit Award)",
    year: "2022",
    tags: ["Computer Vision", "AI", "Video Analytics"],
    highlight: "Merit Award — Engineering Innovation Challenge (EIC)",
    problem:
      "Manual vehicle identification is slow and error-prone where speed and accuracy are critical.",
    solution:
      "Designed a pipeline for video ingestion → plate detection → extraction → analytics, aligned with real-world constraints.",
    impact: [
      "Merit recognition at EIC",
      "Designed as an operationally realistic concept system",
    ],
  },
  {
    slug: "dynamic-reconfigurable-shelf",
    title: "Dynamic Reconfigurable Shelf",
    subtitle: "Modular shelf system designed to adapt layouts dynamically",
    year: "2024",
    tags: ["Product Design", "Mechanisms", "Optimization"],
    highlight: "DTI project — modular design for flexible storage",
    problem:
      "Fixed shelving is inefficient when stored objects vary in size and inventory changes frequently.",
    solution:
      "Designed a reconfigurable shelf concept emphasizing modularity, fast re-layout, and space efficiency.",
    impact: [
      "Improved concept-level storage utilization",
      "Designed for practical reconfiguration and usability",
    ],
  },
  {
    slug: "robosub-underwater-robotics",
    title: "RoboSub — Underwater Robotics (USA)",
    subtitle: "Underwater unit robot work with SUTD autonomy org",
    year: "2024–2025",
    tags: ["Robotics", "Autonomy", "Systems"],
    highlight: "Competition participation — RoboSub (USA)",
    problem:
      "Underwater autonomy is challenging due to localization, visibility, robustness, and tight integration requirements.",
    solution:
      "Contributed under SUTD’s autonomous robotics organization, supporting underwater unit robot work within competition constraints.",
    impact: [
      "Hands-on autonomy + integration experience",
      "Engineering delivery under competition timelines",
    ],
  },
  {
    slug: "assistive-humanoids-st-engineering",
    title: "Humanoids for Assistive Robotics (ST Engineering)",
    subtitle: "Ongoing work exploring humanoids for disability support",
    year: "Ongoing",
    tags: ["Humanoids", "Assistive Tech", "Impact"],
    highlight: "Industry collaboration — ST Engineering (ongoing)",
    problem:
      "Assistive robotics must be safe, reliable, and designed around real human needs and environments.",
    solution:
      "Ongoing collaboration exploring humanoid applications for disability support, focusing on usability and practical adoption constraints.",
    impact: ["Industry-linked scope", "Real-world impact focus"],
  },
];