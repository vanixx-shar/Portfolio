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
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "solar-aeroponics-windmill-system",
    title: "Solar Aeroponics Windmill System",
    subtitle: "Sustainable food-tech system with renewable power and high-efficiency growth design",
    year: "2024",
    tags: ["Sustainability", "Systems Design", "Hardware Prototyping"],
    highlight: "Merit Award - Engineering Innovation Challenge",
    problem:
      "Conventional cultivation workflows consume high water and power, making resilient urban farming difficult to scale.",
    solution:
      "Engineered a modular aeroponics concept integrated with solar-assisted wind capture, enabling low-footprint nutrient delivery and improved environmental control.",
    impact: [
      "Won Merit Award at the Engineering Innovation Challenge",
      "Demonstrated a practical framework for cleaner, distributed food production",
      "Created a design blueprint suitable for iterative pilot deployment",
    ],
    featured: true,
  },
  {
    slug: "license-plate-video-analytics-system",
    title: "License Plate Video Analytics System",
    subtitle: "Computer vision pipeline for intelligent plate recognition and traffic insight generation",
    year: "2024",
    tags: ["Computer Vision", "AI", "Video Analytics"],
    highlight: "Merit Award - Engineering Innovation Challenge",
    problem:
      "Manual review of roadway footage slows enforcement and logistics operations where speed and traceability are critical.",
    solution:
      "Designed an end-to-end analytics architecture for stream ingestion, plate detection, OCR extraction, event tagging, and searchable reporting dashboards.",
    impact: [
      "Earned Merit Award recognition for engineering rigor and applicability",
      "Reduced conceptual review workload through structured automation",
      "Established a scalable base for deployment in transport and campus operations",
    ],
    featured: true,
  },
  {
    slug: "dynamic-reconfigurable-shelf",
    title: "Dynamic Reconfigurable Shelf",
    subtitle: "Adaptive mechanical storage system optimized for variable object geometry",
    year: "2025",
    tags: ["Mechanical Design", "CAD", "Product Development"],
    highlight: "DTI track - adaptable storage innovation",
    problem:
      "Fixed shelving wastes volume when product dimensions change frequently in workshops and small logistics spaces.",
    solution:
      "Developed a dynamic shelf architecture with modular rails and quick-lock segments that can be reconfigured without tool-intensive teardown.",
    impact: [
      "Increased storage adaptability for mixed-size inventories",
      "Improved serviceability by reducing reconfiguration time",
      "Strengthened CAD-to-prototype validation workflow",
    ],
    featured: true,
  },
  {
    slug: "plagiarism-ai-computation-research",
    title: "Research on Plagiarism + AI in Computation",
    subtitle: "Academic integrity study on AI-assisted coding and originality detection",
    year: "2025",
    tags: ["Research", "AI Ethics", "Computation"],
    highlight: "Cross-disciplinary computational research",
    problem:
      "As generative tools become common in technical education, institutions need robust frameworks to separate assistance from plagiarism.",
    solution:
      "Investigated originality signals, misuse patterns, and detection limitations, proposing policy-aligned methods for fair assessment in computation-heavy coursework.",
    impact: [
      "Produced actionable recommendations for educators and technical reviewers",
      "Improved clarity on ethical AI usage boundaries",
      "Built a foundation for future integrity-aware tooling",
    ],
  },
  {
    slug: "pet-feeder-solar-efficiency",
    title: "Pet Feeder Efficiency via Solar Configuration",
    subtitle: "Energy-aware product redesign for autonomous feeder uptime reliability",
    year: "2024",
    tags: ["Embedded Systems", "Energy Optimization", "Product Engineering"],
    highlight: "Efficiency-focused redesign through solar configuration",
    problem:
      "Battery-dependent pet feeders struggle with uptime consistency and maintenance burden in off-grid or low-access settings.",
    solution:
      "Modeled feeding cycles, panel orientation, and storage strategy to design a solar-assisted feeder configuration with better duty-cycle resilience.",
    impact: [
      "Improved projected uptime and charging stability",
      "Reduced manual intervention requirements",
      "Demonstrated practical tradeoff analysis across cost, power, and reliability",
    ],
  },
  {
    slug: "loreal-hackathon-product-concept",
    title: "L'Oreal Hackathon Product Concept",
    subtitle: "AI-guided personalization concept for next-generation consumer care workflows",
    year: "2025",
    tags: ["Hackathon", "Product Strategy", "AI Experience"],
    highlight: "High-velocity concept build under hackathon constraints",
    problem:
      "Consumer wellness and beauty journeys are often fragmented, with recommendations lacking context and measurable feedback loops.",
    solution:
      "Designed a polished product concept that combines user profiling, context-aware recommendations, and explainable model outputs for trust-first personalization.",
    impact: [
      "Delivered an executive-ready prototype narrative and interaction model",
      "Validated a strong value proposition for personalized care experiences",
      "Showcased rapid product framing and cross-functional collaboration",
    ],
  },
  {
    slug: "improved-satellite-design",
    title: "Improved Satellite Design",
    subtitle: "Performance-focused satellite architecture for mission robustness and manufacturability",
    year: "2025",
    tags: ["Aerospace", "Systems Engineering", "Innovation"],
    highlight: "Top 10 Shortlisted - Tan Kah Kee Young Inventor Awards",
    problem:
      "Small satellite missions face tight constraints on mass, survivability, and component reliability.",
    solution:
      "Proposed a refined subsystem layout with stronger redundancy logic, better packaging strategy, and improved thermal-risk considerations.",
    impact: [
      "Top 10 shortlist recognition at Tan Kah Kee Young Inventor Awards",
      "Improved mission-level robustness assumptions",
      "Advanced systems-level design decision quality",
    ],
    featured: true,
  },
  {
    slug: "clean-eating-awareness-game",
    title: "Clean Eating Habits Awareness Game",
    subtitle: "Behavior-shaping interactive game designed for nutrition awareness",
    year: "2024",
    tags: ["Game Design", "HealthTech", "Behavior Design"],
    highlight: "SIM hackathon initiative",
    problem:
      "Nutrition education content often fails to create stickiness or measurable engagement among younger audiences.",
    solution:
      "Built a gamified awareness experience using challenge loops, reward cues, and scenario-based choices to reinforce healthy decision-making.",
    impact: [
      "Increased engagement versus static awareness formats",
      "Created a reusable framework for behavior-oriented educational products",
      "Validated accessibility of clean eating concepts through play",
    ],
  },
  {
    slug: "patent-value-add-3dtv-without-glasses",
    title: "Patent Value-Add: 3D TVs Without Glasses",
    subtitle: "Contribution to multi-country patent value expansion for glasses-free 3D viewing",
    year: "2025",
    tags: ["IP Strategy", "Display Technology", "Innovation"],
    highlight: "Multi-country patent value-add contribution",
    problem:
      "Glasses-free 3D solutions often struggle with comfort, consistency, and commercialization readiness across diverse markets.",
    solution:
      "Supported value-add development with a commercialization lens, improving how technical claims align with use-case viability and adoption pathways.",
    impact: [
      "Strengthened patent positioning across multiple jurisdictions",
      "Improved translation from technical novelty to market value",
      "Added strategic depth to innovation-to-IP workflow",
    ],
    featured: true,
  },
  {
    slug: "st-engineering-assistive-humanoids",
    title: "Ongoing: ST Engineering Humanoids for Disabled",
    subtitle: "Assistive humanoid robotics pipeline focused on practical autonomy and user-centered support",
    year: "Ongoing",
    tags: ["Humanoids", "Assistive Robotics", "Autonomy"],
    highlight: "Industry collaboration with real-world assistive impact",
    problem:
      "Assistive robotics solutions must balance autonomy, safety, trust, and day-to-day usability in highly variable human environments.",
    solution:
      "Contributing to humanoid workflow definition and prototyping directions that prioritize safe interaction, task reliability, and adoption in support contexts.",
    impact: [
      "Advancing practical assistive robotics capabilities",
      "Combining engineering depth with human-centered constraints",
      "Building transferable frameworks for future deployment programs",
    ],
    featured: true,
  },
  {
    slug: "robosub-underwater-robotics-usa",
    title: "RoboSub Underwater Robotics (USA)",
    subtitle: "Competition robotics focused on underwater autonomy and mission-ready integration",
    year: "2024-2025",
    tags: ["Underwater Robotics", "Autonomy", "Competition Engineering"],
    highlight: "Singapore team participation in RoboSub (USA)",
    problem:
      "Underwater mission systems must operate with limited visibility, unstable sensing conditions, and strict reliability requirements.",
    solution:
      "Worked on integration and autonomy-centric workflows with an emphasis on system coordination, test iteration, and robust competition execution.",
    impact: [
      "Delivered experience in complex, high-pressure robotics environments",
      "Improved readiness through structured system-level testing",
      "Strengthened collaborative engineering across hardware and controls",
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
