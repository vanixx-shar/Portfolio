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
    slug: "windmill-aeroponics-system-eic",
    title: "Windmill Aeroponics System",
    subtitle: "Renewable-powered aeroponics concept for the Engineering Innovation Challenge",
    year: "2024",
    tags: ["Sustainability", "Product Development", "Systems Design"],
    highlight: "Merit Award - Engineering Innovation Challenge",
    problem:
      "Urban agriculture solutions often consume too much water and energy for practical scaling.",
    solution:
      "Designed an aeroponics system integrated with renewable energy concepts and modular engineering for maintainability.",
    impact: [
      "Won Merit at EIC",
      "Validated a practical sustainability-focused design direction",
    ],
    featured: true,
  },
  {
    slug: "license-plate-video-analytics-system",
    title: "Video Analytics License Plate System",
    subtitle: "Vision pipeline for vehicle plate detection, extraction, and analytics",
    year: "2024",
    tags: ["Computer Vision", "AI", "Analytics"],
    highlight: "Merit Award - Engineering Innovation Challenge",
    problem:
      "Manual video review for vehicle identification is slow and operationally inefficient.",
    solution:
      "Built a concept workflow for stream processing, plate recognition, and structured analytics output.",
    impact: [
      "Won Merit at EIC",
      "Established a strong concept for practical automation",
    ],
    featured: true,
  },
  {
    slug: "dynamic-reconfigurable-shelf-dti",
    title: "Dynamic Reconfigurable Shelf",
    subtitle: "Adaptive shelf mechanism for DTI with flexible geometry handling",
    year: "2025",
    tags: ["CAD", "Mechanical Design", "Product Engineering"],
    highlight: "DTI project submission",
    problem:
      "Static shelves fail to efficiently handle variable object dimensions and changing layouts.",
    solution:
      "Developed a reconfigurable concept that allows rapid adjustment and better volume utilization.",
    impact: [
      "Improved storage flexibility in concept validation",
      "Strengthened CAD-to-prototype engineering process",
    ],
    featured: true,
  },
  {
    slug: "plagiarism-ai-in-computation-research",
    title: "Research on Plagiarism and AI in Computation",
    subtitle: "Study of integrity, originality, and AI-assisted work in technical domains",
    year: "2025",
    tags: ["Research", "AI", "Ethics"],
    highlight: "Academic research initiative",
    problem:
      "AI-assisted workflows introduce ambiguity around originality and plagiarism standards.",
    solution:
      "Explored patterns, constraints, and policy-aligned approaches for fair technical assessment.",
    impact: [
      "Produced clear recommendations for integrity-aware evaluation",
      "Framed practical boundaries for responsible AI use",
    ],
  },
  {
    slug: "pet-feeder-solar-efficiency-optimization",
    title: "Pet Feeder Solar Efficiency Optimization",
    subtitle: "Energy optimization through panel and configuration strategy",
    year: "2024",
    tags: ["Embedded Systems", "Energy Optimization", "Design"],
    highlight: "Efficiency-driven engineering project",
    problem:
      "Battery-dependent feeders can suffer from weak uptime in constrained environments.",
    solution:
      "Optimized feeder configuration with solar integration and energy-aware operational planning.",
    impact: [
      "Improved projected energy efficiency",
      "Reduced maintenance dependency in use-case modeling",
    ],
  },
  {
    slug: "loreal-hackathon-product-build",
    title: "L'Oreal Hackathon Product Build",
    subtitle: "Current product build in active hackathon cycle",
    year: "2026",
    tags: ["Hackathon", "Product Strategy", "Innovation"],
    highlight: "In progress - details expanding soon",
    problem:
      "Emerging product challenge under hackathon timeline constraints.",
    solution:
      "Building an early product concept with user-value framing, rapid validation, and technical feasibility alignment.",
    impact: [
      "Live development under compressed timeline",
      "Structured foundation ready for deeper iteration",
    ],
  },
  {
    slug: "improved-satellite-design-tan-kah-kee",
    title: "Improved Satellite Design",
    subtitle: "Submission for Tan Kah Kee Young Inventor Awards",
    year: "2025",
    tags: ["Aerospace", "Systems Engineering", "Innovation"],
    highlight: "Top 10 Shortlisted - Tan Kah Kee Young Inventor Awards",
    problem:
      "Satellite architecture must balance reliability, constraints, and mission practicality.",
    solution:
      "Proposed improvements in subsystem layout, mission resilience, and engineering tradeoff handling.",
    impact: [
      "Top 10 shortlist recognition",
      "Advanced systems-level design quality",
    ],
    featured: true,
  },
  {
    slug: "clean-eating-habits-awareness-game",
    title: "Clean Eating Habits Awareness Game",
    subtitle: "Interactive game built for SIM hackathon awareness track",
    year: "2024",
    tags: ["Game Design", "Health Awareness", "Hackathon"],
    highlight: "SIM hackathon project",
    problem:
      "Health awareness content often struggles to sustain user engagement.",
    solution:
      "Built a game format to make clean-eating education interactive and behavior-oriented.",
    impact: [
      "Improved engagement in awareness delivery",
      "Created an accessible health-education interaction model",
    ],
  },
  {
    slug: "patent-value-add-3d-tv-without-glasses",
    title: "Patent Value Add - 3D TV Without Glasses",
    subtitle: "Contribution to value expansion for glasses-free 3D TV patent scope",
    year: "2025",
    tags: ["Patent", "Innovation", "Display Technology"],
    highlight: "Patent value-add contribution",
    problem:
      "Emerging technologies require stronger bridges between technical novelty and commercial value.",
    solution:
      "Contributed to value-add framing for glasses-free 3D TV innovation and positioning.",
    impact: [
      "Strengthened innovation-to-value articulation",
      "Expanded practical relevance of the patent proposition",
    ],
    featured: true,
  },
  {
    slug: "st-engineering-humanoids-for-disabled",
    title: "ST Engineering Humanoids for Disabled",
    subtitle: "Ongoing assistive robotics project for disability-focused use cases",
    year: "Ongoing",
    tags: ["Humanoids", "Assistive Robotics", "Autonomy"],
    highlight: "Ongoing industry-linked project",
    problem:
      "Assistive robotics needs strong safety, usability, and deployment realism.",
    solution:
      "Developing humanoid robotics directions centered on practical support workflows.",
    impact: [
      "High-impact applied robotics scope",
      "Stronger human-centered engineering perspective",
    ],
    featured: true,
  },
  {
    slug: "robosub-underwater-robotics-usa",
    title: "RoboSub Underwater Robotics (USA)",
    subtitle: "Singapore team participation in underwater robotics competition",
    year: "2024-2025",
    tags: ["Underwater Robotics", "Competition", "Autonomy"],
    highlight: "RoboSub USA participation",
    problem:
      "Underwater robotics must handle unstable sensing and demanding mission execution.",
    solution:
      "Contributed to team workflows across integration, readiness, and engineering iteration.",
    impact: [
      "Built hands-on experience in complex competition robotics",
      "Strengthened systems thinking under operational pressure",
    ],
    featured: true,
  },
  {
    slug: "steamxd-robotics-mentor",
    title: "Robotics Mentor - STEAMxD",
    subtitle: "Mentorship project supporting younger learners in robotics",
    year: "2025",
    tags: ["Mentorship", "Robotics Education", "Leadership"],
    highlight: "Community robotics mentorship",
    problem:
      "Early learners need structured and motivating pathways into robotics.",
    solution:
      "Mentored students through robotics fundamentals, project framing, and technical confidence building.",
    impact: [
      "Supported learning outcomes through guided mentorship",
      "Extended robotics impact beyond competition and coursework",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
