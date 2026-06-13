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
  images?: {
    src: string;
    alt: string;
    caption: string;
    fit?: "cover" | "contain";
    aspect?: "photo" | "wide" | "banner" | "portrait" | "logo";
    surface?: "dark" | "light";
  }[];
  sections?: {
    title: string;
    body: string[];
  }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "makan-map-accessible-hawker-navigation",
    title: "MakanMap",
    subtitle: "Dynamic tactile map kiosk for accessible hawker-centre navigation",
    year: "2025",
    tags: ["Accessibility", "Haptics", "Product Design"],
    highlight: "Assistive navigation concept for visually impaired diners",
    problem:
      "Traditional static tactile maps are rigid and often outdated. Visually impaired diners lack a dynamic, real-time interface to navigate shifting stall layouts, identify available seating, or locate specific cuisines in busy food centers.",
    solution:
      "Developed a dynamic tactile map kiosk that translates digital floor plans into physical textures, letting users feel the layout of a makan center through an intuitive, refreshable spatial guide.",
    impact: [
      "Enhanced accessibility by shifting food centers from difficult-to-navigate spaces into more inclusive environments through high-fidelity tactile feedback",
      "Connected dynamic data streams, including stall closures and wet-floor warnings, directly into the physical user interface",
      "Validated assistive engineering through feedback loops with visually impaired users to improve practical usability",
    ],
    images: [
      {
        src: "/projects/makan-map-demo.jpg",
        alt: "MakanMap presentation with tactile kiosk concept poster",
        caption: "Explaining the MakanMap tactile navigation system during a project showcase.",
      },
      {
        src: "/projects/makan-map-booth.jpg",
        alt: "MakanMap booth with prototype and poster at SUTD",
        caption: "Prototype booth setup with physical model, poster, and team demonstration.",
        fit: "contain",
        aspect: "portrait",
      },
    ],
    sections: [
      {
        title: "Human-Centered Direction",
        body: [
          "The concept focuses on independence inside crowded food centers, where changing stall availability, queues, seating, and environmental hazards make static maps less useful.",
          "The kiosk turns live layout information into tactile interaction so navigation is not only visual or screen-dependent.",
        ],
      },
    ],
    featured: true,
  },
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
    title: "Shelf-imus Prime",
    subtitle: "Dynamic reconfigurable parcel shelf for high-volume collection points",
    year: "2025",
    tags: ["CAD", "Mechanical Design", "Logistics Automation"],
    highlight: "DTI project submission",
    problem:
      "University parcel collection points often face severe spatial inefficiency due to high-volume overflow and static shelving. Traditional racks cannot accommodate irregular, fluctuating e-commerce package sizes, which creates wasted vertical space and cluttered floor areas.",
    solution:
      "Engineered a dynamic reconfigurable shelf with motorized, sensor-driven partitions designed to adjust internal dimensions around the specific volume of each parcel and maximize storage density in real time.",
    impact: [
      "Estimated up to 40% storage-capacity improvement by reducing dead air between differently sized packages",
      "Reduced retrieval friction and floor clutter for safer, more organized high-traffic university hubs",
      "Demonstrated a modular approach to logistics automation that can be integrated with minimal footprint",
    ],
    images: [
      {
        src: "/projects/shelfi-mus-overview.jpg",
        alt: "Shelf-imus Prime mechanism and parcel collection workflow",
        caption: "System storyboard covering adjustable shelves, delivery scanning, LEDs, and parcel pickup flow.",
        fit: "contain",
        aspect: "wide",
        surface: "light",
      },
      {
        src: "/projects/shelfi-mus-challenges.jpg",
        alt: "Shelf-imus Prime challenge framing slide",
        caption: "Design challenges around moving vertical walls, durability, and avoiding reconfigurable doors.",
        fit: "contain",
        aspect: "wide",
        surface: "light",
      },
      {
        src: "/projects/shelfi-mus-testing.jpg",
        alt: "Shelf-imus Prime user testing, SWOT, and iterative testing board",
        caption: "User testing, SWOT analysis, motor placement, leadscrew, puck, and circuit iteration notes.",
        fit: "contain",
        aspect: "wide",
        surface: "light",
      },
    ],
    sections: [
      {
        title: "Prototype Iteration",
        body: [
          "The design explored leadscrew-driven motion, 3D-printed mounting components, LED retrieval cues, and a barcode-driven collection workflow.",
          "Testing surfaced mechanical and electrical issues including motor tilt, grip instability around the leadscrew nut, wiring clutter, and puck alignment. Each issue was converted into a concrete prototype revision.",
        ],
      },
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
    title: "The Discovery Folio",
    subtitle: "L'Oreal Brandstorm concept for tactile, time-released slow olfaction",
    year: "2026",
    tags: ["Hackathon", "Sustainable Luxury", "Material Innovation"],
    highlight: "L'Oreal Brandstorm 2026 Singapore concept",
    problem:
      "Traditional luxury fragrances rely on bulky glass packaging and alcohol-based sprays that create environmental waste and deliver a static, fleeting scent experience. This format also lacks precision in showcasing the complex 8-hour evolution of high-end fragrance profiles.",
    solution:
      "Developed the Discovery Folio, a collectible accessory using thermal-release micro-encapsulation. By replacing liquid sprays with biodegradable, heat-activated strips, the folio creates a tactile slow-olfaction ritual where body heat triggers a precise time-released dry-down of top, heart, and base notes.",
    impact: [
      "Eliminates glass and liquid waste through a biodegradable, tech-driven fragrance delivery format",
      "Creates a controlled 8-hour scent journey that lets the fragrance evolve as the perfumer intended",
      "Reframes fragrance as a tactile, collectible art piece that combines luxury storytelling with material science",
    ],
    images: [
      {
        src: "/projects/loreal-discovery-folio.jpg",
        alt: "The Discovery Folio L'Oreal Brandstorm title slide",
        caption: "Brandstorm concept: redefining haute parfumerie through tactile, time-released slow olfaction.",
        fit: "contain",
        aspect: "banner",
        surface: "light",
      },
      {
        src: "/projects/loreal-scent-ritual.jpeg",
        alt: "The Scent Ritual slide explaining tactile and thermal release",
        caption: "Eight-hour dry-down journey using micro-encapsulated fragrance oils in tactile strips.",
        fit: "contain",
        aspect: "banner",
        surface: "light",
      },
      {
        src: "/projects/loreal-performance-kpis.jpg",
        alt: "Discovery Folio performance KPI slide",
        caption: "Commercial, safety, and eco-index measurements for validating the product concept.",
        fit: "contain",
        aspect: "banner",
        surface: "light",
      },
    ],
    sections: [
      {
        title: "Product Logic",
        body: [
          "The folio replaces disposable sampling and heavy packaging with dry-down paper strips designed to activate from skin temperature.",
          "The KPI frame combines commercial impact, refill retention, hypoallergenic safety, and material reduction so the product can be judged as both a luxury experience and a sustainable system.",
        ],
      },
    ],
    featured: true,
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
    title: "Zygos",
    subtitle: "Interactive clean-eating awareness game built in Python",
    year: "2024",
    tags: ["Game Design", "Python", "Health Awareness"],
    highlight: "SIM Hackathon '24 participation",
    problem:
      "Despite the amount of nutritional information available, many people struggle to build sustainable clean-eating habits because the education is not engaging or low-friction. Traditional health apps can feel like chores, which hurts retention and awareness.",
    solution:
      "Developed Zygos, an interactive awareness game in Python using PyCharm that turns nutritional concepts into a dynamic gameplay loop. The game simulates the impact of dietary choices on long-term health metrics and gives immediate visual feedback in a risk-free digital environment.",
    impact: [
      "Created a learning-through-play framework that simplified complex nutritional information into memorable gameplay",
      "Built the full prototype under hackathon constraints, from logic architecture to final UI",
      "Designed the codebase for modular expansion into additional wellness categories",
    ],
    images: [
      {
        src: "/projects/zygos-logo.jpg",
        alt: "Zygos game logo",
        caption: "Zygos visual identity for the clean-eating awareness game.",
        fit: "contain",
        aspect: "logo",
        surface: "dark",
      },
      {
        src: "/projects/zygos-hackathon-certificate.jpg",
        alt: "Hackathon 2024 certificate of participation for Vanika Sharma",
        caption: "Hackathon participation certificate for the 2024 SIM-UOL CSSC event.",
        fit: "contain",
        aspect: "wide",
      },
    ],
    featured: true,
  },
  {
    slug: "patent-value-add-3d-tv-without-glasses",
    title: "Patent Value Add - 3D TV Without Glasses",
    subtitle: "Patent-scope expansion for autostereoscopic display technology",
    year: "2025",
    tags: ["Patent", "Innovation", "Display Technology"],
    highlight: "Patent value-add contribution",
    problem:
      "Current glasses-free 3D displays suffer from narrow sweet spots, low resolution, and high manufacturing complexity. Existing patents can be too narrow when they focus only on specific optical layers, limiting commercial licensing potential and hardware interoperability.",
    solution:
      "Spearheaded patent scope expansion by integrating adaptive eye-tracking algorithms and multi-view rendering optimizations, broadening the claims toward dynamic parallax adjustment and cross-platform software drivers.",
    impact: [
      "Expanded the patent's defensive and offensive utility, increasing its value for licensing to consumer electronics manufacturers",
      "Framed interoperability across OLED, LCD, and Micro-LED panel types by decoupling the 3D effect from one hardware implementation",
      "Reduced adoption friction through clearer software-hardware interface standards for laptops and mobile devices",
    ],
    images: [
      {
        src: "/projects/patent-3d-tv-certificate.jpg",
        alt: "Patent certificate related to glasses-free 3D TV value-add work",
        caption: "Patent certificate supporting the display-technology value-add work.",
        fit: "contain",
        aspect: "portrait",
        surface: "light",
      },
    ],
    featured: true,
  },
  {
    slug: "custom-digital-camera-build",
    title: "Custom Digital Camera",
    subtitle: "Scratch-built digital camera blending retro image character with modern embedded systems",
    year: "2025",
    tags: ["Embedded Systems", "Product Design", "Hardware"],
    highlight: "Full-stack hardware-software product build",
    problem:
      "Modern smartphone photography is dominated by computational over-processing, which can strip away the organic texture and nostalgic character of early-2000s sensors. Commercial digicams have also become expensive vintage items that lack modern connectivity, repairability, and customizability.",
    solution:
      "Engineered a custom digital camera from the ground up by combining retro CCD/CMOS-inspired image character with modern embedded systems and a dedicated image sensor connected to a custom-programmed microcontroller.",
    impact: [
      "Demonstrated hardware-software integration across sensor interfacing, battery management, and PCB layout",
      "Used CAD modeling and 3D printing to create a tactile body balancing retro aesthetics with modern durability",
      "Built a platform for intentional photography focused on sensory output instead of megapixels and AI sharpening",
    ],
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
    title: "STEAMxD Robotics Mentor",
    subtitle: "Applied robotics mentorship guiding students through Smorphi robot development",
    year: "2025",
    tags: ["Mentorship", "Robotics Education", "Leadership"],
    highlight: "Community robotics mentorship",
    problem:
      "Younger learners often face a steep cliff when moving from simple toys to real-world robotics. Theoretical STEAM education frequently lacks the hands-on hardware exposure and troubleshooting grit required for integrated systems such as microcontrollers and sensors.",
    solution:
      "Led a mentorship program centered on applied robotics, guiding students through the full development cycle of building the Smorphi robot and connecting design decisions to real hardware behavior.",
    impact: [
      "Helped student cohorts move from block-based logic toward C++ and Python workflows",
      "Cultivated a learning-by-doing culture where hardware failures became iteration data instead of stopping points",
      "Translated complex robotics concepts into accessible, high-impact learning modules for younger makers",
    ],
    images: [
      {
        src: "/projects/steamxd-group.jpg",
        alt: "STEAMxD robotics mentor group photo",
        caption: "STEAMxD team photo after robotics mentorship work.",
      },
      {
        src: "/projects/steamxd-meeting.jpg",
        alt: "STEAMxD students discussing robotics development",
        caption: "Planning and troubleshooting session with robotics students.",
      },
      {
        src: "/projects/steamxd-build-session.jpg",
        alt: "STEAMxD robotics build session with Vanika and teammates",
        caption: "Hands-on robotics build session around the Smorphi robot.",
      },
      {
        src: "/projects/robotics-build-session.jpg",
        alt: "Robotics team testing a small robot on the floor",
        caption: "Hardware testing and integration work during a robotics build session.",
      },
    ],
    featured: true,
  },
];

function parsePrimaryYear(year: string): number {
  if (year.toLowerCase() === "ongoing") return 9999;
  const match = year.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

function compareProjectsByYear(a: Project, b: Project): number {
  const yearA = parsePrimaryYear(a.year);
  const yearB = parsePrimaryYear(b.year);

  if (yearA !== yearB) {
    return yearB - yearA;
  }

  return a.title.localeCompare(b.title);
}

export const orderedProjects = [...projects].sort(compareProjectsByYear);

export const featuredProjects = orderedProjects.filter((project) => project.featured);
