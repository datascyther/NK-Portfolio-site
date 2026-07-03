export const profile = {
  name: "Nishant (NK) Kumar",
  firstName: "Nishant",
  pronouns: "He/Him",
  headline: "Building useful products is more important than collecting titles.",
  role: "AI Product Engineer",
  motto: ["Build.", "Grow.", "Serve."],
  location: "Greater Delhi Area, India",
  email: "hello.nishantk@proton.me",
  x: "https://x.com/datascythers",
  github: "https://github.com/DataScyther",
  about: [
    "AI Product Engineer focused on building production-ready AI products from concept to deployment.",
    "Currently building Neeva AI, an AI-powered mental wellness platform that combines conversational AI, contextual memory, journaling, and full-stack product development into a practical user experience.",
    "I have experience building and deploying AI-powered applications using React, Next.js, TypeScript, Python, PostgreSQL, Supabase, and modern LLM ecosystems.",
    "Beyond engineering, I actively study how AI products are built, scaled, monetized, and adopted. My content focuses on AI infrastructure, product strategy, agent systems, and emerging technology trends.",
    "Currently seeking opportunities where I can contribute to building AI products, agentic systems, and production-grade software.",
  ],
  focus: [
    "AI Product Development",
    "LLM Applications & RAG Systems",
    "Full-Stack Engineering",
    "Product Strategy & Execution",
  ],
  topSkills: [
    "Generative AI (LLMs & RAG)",
    "Next.js",
    "Python",
    "PostgreSQL",
    "LLM Orchestration",
  ],
};

export const stats = [
  { value: "170K+", label: "Subscribers scaled" },
  { value: "3.5M+", label: "Monthly impressions" },
  { value: "8+", label: "Projects shipped" },
  { value: "4+", label: "Years building" },
];

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Founder & AI Product Engineer",
    company: "Neeva AI",
    type: "Self-employed",
    period: "Sep 2025 — Present",
    duration: "11 mos",
    location: "Greater Delhi Area, India",
    mode: "On-site",
    description:
      "Built Neeva AI, an AI-powered mental wellness platform focused on conversational support, journaling, and contextual memory — combining LLM orchestration with full-stack product development into a practical user experience.",
    current: true,
  },
  {
    role: "Project Management Intern",
    company: "Pranayuv Technologies",
    type: "Internship",
    period: "Mar 2026 — Present",
    duration: "5 mos",
    location: "Greater Delhi Area, India",
    mode: "Remote",
    description:
      "Led project operations across multiple initiatives by implementing structured workflows in Notion and Asana. Designed project tracking systems, documentation repositories, and SOPs that enhanced execution clarity and team velocity.",
    current: true,
  },
  {
    role: "Founder & Content Strategist",
    company: "Mighty-Tech Shorts",
    type: "Self-employed",
    period: "Sep 2022 — Present",
    duration: "3 yrs 11 mos",
    location: "Greater Delhi Area, India",
    mode: "On-site",
    description:
      "Scaled a tech media brand to 170,000+ subscribers and 3.5M+ monthly impressions through content optimization, audience analytics, retention analysis, and performance experimentation.",
    current: true,
  },
  {
    role: "AI Intern (IBM SkillsBuild)",
    company: "1M1B (1 Million for 1 Billion)",
    type: "Internship",
    period: "Dec 2025 — Jan 2026",
    duration: "2 mos",
    location: "Greater Delhi Area, India",
    mode: "Remote",
    description:
      "Applied Generative AI and LLM techniques including IBM Granite models and RAG frameworks to sustainability-focused problem statements by collaborating with mentors from IBM and 1M1B. Earned Internship Completion Certificate.",
  },
];

export interface Project {
  index: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Neeva AI",
    period: "Sep 2025 — Present",
    summary:
      "An AI-powered mental wellness platform that combines conversational support, journaling, and contextual memory to create more personalized user experiences.",
    highlights: [
      "Integrated Gemini APIs for conversational AI interactions",
      "Developed the frontend using React and TypeScript",
      "Built backend services, auth, and session management with Node.js and Supabase",
      "Designed stateful memory workflows to preserve context across user sessions",
      "Iterated product features through testing and feedback-driven improvements",
    ],
    stack: ["React", "TypeScript", "Node.js", "Supabase", "Gemini API", "LLM Orchestration"],
    featured: true,
  },
  {
    index: "02",
    title: "Customer Segmentation & Retention Analysis",
    period: "Jan 2026 — Feb 2026",
    summary:
      "Unsupervised machine learning project segmenting customers by purchasing behavior and retention-related patterns to drive marketing insights.",
    highlights: [
      "End-to-end data cleaning, preprocessing, and feature engineering",
      "Applied PCA and hierarchical clustering to identify interpretable segments",
      "Analyzed customer groups to generate retention and marketing insights",
      "Built visualizations and analytical workflows for business decision-making",
    ],
    stack: ["Python", "pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  },
  {
    index: "03",
    title: "College Event Feedback Analysis",
    period: "Jun 2025 — Jul 2025",
    summary:
      "Analyzed student feedback data to identify trends, satisfaction patterns, and improvement areas across academic events and workshops.",
    highlights: [
      "Data cleaning and preprocessing using pandas",
      "Exploratory data analysis and correlation analysis on feedback metrics",
      "Visualizations with Seaborn and Matplotlib to surface sentiment patterns",
      "Structured insights supporting event quality and student engagement decisions",
    ],
    stack: ["Python", "pandas", "Seaborn", "Matplotlib", "EDA", "Google Colab"],
  },
  {
    index: "04",
    title: "Business Sales Dashboard — E-commerce Data",
    period: "Jun 2025",
    summary:
      "Interactive Power BI dashboard analyzing transactional data, sales performance, and customer trends across multiple business dimensions.",
    highlights: [
      "Cleaned and transformed transactional sales data for reporting",
      "Interactive filters for year, quarter, country, invoice, and product categories",
      "Visualized revenue, quantity sold, and product-level performance",
      "DAX measures and data modeling for reporting flexibility",
    ],
    stack: ["Power BI", "DAX", "Data Cleaning", "Data Visualization", "Business Analytics"],
  },
  {
    index: "05",
    title: "Social Media Campaign Tracker",
    period: "Jun 2025",
    summary:
      "Power BI dashboard tracking social media campaign performance across regions, products, and marketing metrics like ROI and CTR.",
    highlights: [
      "Interactive dashboards for revenue, campaign performance, and regional analysis",
      "Analyzed ROI, CTR, and revenue trends across markets",
      "Filters and slicers for segmentation by region, category, and sales reps",
      "Comparative performance across the UK, Singapore, and Japan",
    ],
    stack: ["Power BI", "DAX", "Data Analysis", "Marketing Analytics"],
  },
  {
    index: "06",
    title: "Interactive UPI QR Payment Experience",
    period: "Dec 2024 — Feb 2025",
    summary:
      "Matrix-themed UPI QR code generator combining digital payment functionality with an interactive and visually immersive frontend experience.",
    highlights: [
      "Dynamic QR code generation and UPI ID validation",
      "Responsive Matrix-inspired interface with animated backgrounds and neon UI",
      "Voice-assisted interactions and customizable QR code options",
      "Three.js 3D visual effects and interactive frontend animations",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Three.js", "QR Code API"],
  },
  {
    index: "07",
    title: "Audio Visualizer with Ripple Effects",
    period: "Oct 2024 — Nov 2024",
    summary:
      "Interactive audio visualization web app combining animated physics-based visuals with sound generation and real-time user controls.",
    highlights: [
      "Dynamic sphere animations with ripple effects and audio interactions",
      "Configurable controls for gravity, spawn rate, sound scale, and instruments",
      "Responsive canvas-based visual system for real-time rendering",
      "Combined visual effects with audio feedback for multi-sensory interaction",
    ],
    stack: ["JavaScript", "Canvas API", "Web Audio", "Physics Animation"],
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    skills: [
      "Generative AI (LLMs & RAG)",
      "LLM Orchestration",
      "Agent Systems",
      "IBM Granite",
      "Gemini API",
      "Scikit-learn",
      "Machine Learning",
      "Unsupervised Learning",
    ],
  },
  {
    title: "Full-Stack Engineering",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Supabase",
      "Three.js",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "pandas",
      "NumPy",
      "Power BI",
      "DAX",
      "Seaborn",
      "Matplotlib",
      "EDA",
      "Data Visualization",
    ],
  },
  {
    title: "Product & Strategy",
    skills: [
      "Product Strategy & Execution",
      "Content Strategy",
      "Audience Analytics",
      "Notion",
      "Asana",
      "SOP Design",
      "Growth Experimentation",
    ],
  },
];

export const education = {
  school: "Dr. A.P.J. Abdul Kalam Technical University",
  degree: "Bachelor of Technology — BTech",
  field: "Computer Science Engineering (Data Science)",
  period: "Aug 2023 — May 2027",
};

export const marqueeItems = [
  "AI Product Development",
  "LLM Applications",
  "RAG Systems",
  "Full-Stack Engineering",
  "Product Strategy",
  "Agent Systems",
  "Data Science",
  "Generative AI",
];
