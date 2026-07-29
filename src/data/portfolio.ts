export const profile = {
  name: "Nishant K.",
  firstName: "Nishant",
  pronouns: "He/Him",
  headline: "I build AI products, not just AI features.",
  role: "AI Product Engineer",
  motto: ["Build.", "Learn.", "Ship."],
  location: "Greater Delhi Area, India",
  email: "hello.nishantk@proton.me",
  x: "https://x.com/madewithnk",
  github: "https://github.com/DataScyther",
  linkedin: "https://www.linkedin.com/in/madewithnk/",
  instagram: "https://www.instagram.com/madewithnk/",

  about: [
    "I build AI products from product strategy and system architecture to production engineering.",
    "Currently, I'm building Jousapce — your thoughts, connected over time — an AI-native journal that connects what you write, how you feel, and the conversations you have into useful context.",
    "My work goes beyond connecting an interface to an LLM. I design the systems around the model: orchestration, RAG, memory, retrieval, context engineering, backend infrastructure, evaluation, and the product experiences that make those systems useful.",
    "I work across React Native, TypeScript, AI infrastructure, backend systems, and product architecture — making technical decisions with the product outcome in mind rather than treating engineering and product as separate disciplines.",
    "Before going deeper into product engineering, I built a technology media brand to 170K+ subscribers and 3.5M+ monthly impressions, which taught me a different side of building: distribution, audience behavior, experimentation, and earning attention.",
  ],

  focus: [
    "AI Product Engineering",
    "AI Systems & Orchestration",
    "Full-Stack Product Development",
    "Product Strategy & Execution",
  ],

  topSkills: [
    "AI Product Engineering",
    "LLM Orchestration",
    "RAG & Memory Systems",
    "React Native / TypeScript",
    "Product Architecture",
  ],
};

export const stats = [
  { value: "170K+", label: "Subscribers scaled" },
  { value: "3.5M+", label: "Monthly impressions" },
  { value: "8+", label: "Projects built" },
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
    company: "Jousapce",
    type: "Self-employed",
    period: "Sep 2025 — Present",
    duration: "11 mos",
    location: "Greater Delhi Area, India",
    mode: "On-site",
    description:
      "Building Jousapce — an AI-native journal that connects what you write, how you feel, and the conversations you have into useful context over time. Private by design, calm by design, built in public. Architected from strategy and UX through a production-oriented AI runtime spanning orchestration, long-term memory, contextual continuity, Pinecone RAG, selective live intelligence, streaming responses, and observability.",
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
      "Led project operations across multiple initiatives by implementing structured workflows in Notion and Asana. Designed project tracking systems, documentation repositories, and SOPs to improve execution visibility, accountability, and operational consistency.",
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
      "Built and scaled a technology media brand to 170,000+ subscribers and 3.5M+ monthly impressions through content strategy, audience analytics, retention analysis, experimentation, packaging optimization, and performance-driven iteration.",
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
      "Applied Generative AI, IBM Granite models, and retrieval-augmented generation concepts to sustainability-focused problem statements while working through the IBM SkillsBuild and 1M1B program.",
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
    title: "Jousapce",
    period: "Sep 2025 — Present",
    summary:
      "Most apps forget what came before. Jousapce preserves continuity across entries, conversations, and moods over time — private by design, calm by design, built in public.",
    highlights: [
      "Architected a centralized AI runtime using orchestration, intent classification, capability-based tool routing, context building, prompt assembly, and model abstraction",
      "Built long-term personal intelligence with memory extraction, semantic and profile memory, importance scoring, contextual retrieval, reflection summaries, and privacy controls",
      "Implemented Pinecone-backed RAG while separating semantic retrieval from transactional application data stored in Supabase",
      "Designed selective live-intelligence routing so current-information requests can use external retrieval without adding unnecessary search latency to every AI interaction",
      "Integrated NVIDIA Nemotron through NVIDIA NIM behind a model gateway with server-side secrets and streaming responses",
      "Added retrieval reranking, semantic caching, token budgeting, query rewriting, citations, observability, feature flags, and an evaluation framework",
      "Designed the mobile product around Home, Conversations, Journal, Timeline, and Profile — with persistent memory across sessions, mood context (a signal not a score), and free-form reflection — calm by design, no streaks or engagement loops",
      "Evolved the product through architecture reviews, component-level implementation, QA, testing, design freezes, and disciplined one-objective engineering sprints",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Supabase",
      "PostgreSQL",
      "Pinecone",
      "NVIDIA NIM",
      "NVIDIA Nemotron",
      "RAG",
      "LLM Orchestration",
      "Zustand",
      "TanStack Query",
      "NativeWind",
      "Reanimated",
    ],
    featured: true,
  },
  {
    index: "02",
    title: "Customer Segmentation & Retention Analysis",
    period: "Jan 2026 — Feb 2026",
    summary:
      "Unsupervised machine learning project analyzing purchasing behavior and customer retention patterns to produce interpretable business segments and actionable marketing insights.",
    highlights: [
      "Performed end-to-end data cleaning, preprocessing, exploratory analysis, and feature engineering",
      "Applied dimensionality reduction and hierarchical clustering to identify interpretable customer segments",
      "Analyzed behavioral differences between segments to surface retention and marketing opportunities",
      "Built analytical visualizations translating model outputs into business-oriented findings",
    ],
    stack: [
      "Python",
      "pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    index: "03",
    title: "Interactive UPI QR Payment Experience",
    period: "Dec 2024 — Feb 2025",
    summary:
      "An experimental web experience combining functional UPI QR generation with interactive frontend engineering and real-time visual effects.",
    highlights: [
      "Implemented dynamic UPI QR generation and payment identifier validation",
      "Built a responsive Matrix-inspired interface with animated visual systems",
      "Added voice-assisted interactions and configurable QR generation",
      "Used Three.js to create interactive 3D effects and browser-based visual experiences",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Three.js", "QR Code API"],
  },
];

export const skillGroups = [
  {
    title: "AI Engineering",
    skills: [
      "AI Product Engineering",
      "Generative AI",
      "LLM Orchestration",
      "RAG",
      "Semantic Retrieval",
      "AI Memory Systems",
      "Agentic Systems",
      "Prompt & Context Engineering",
      "Tool / Capability Routing",
      "AI Evaluation",
      "NVIDIA NIM",
      "Pinecone",
    ],
  },
  {
    title: "Product Engineering",
    skills: [
      "React Native",
      "React",
      "Next.js",
      "TypeScript",
      "Expo",
      "Expo Router",
      "Node.js",
      "Python",
      "NativeWind",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Pinecone",
      "REST APIs",
      "Edge Functions",
      "Authentication",
      "Streaming",
      "Caching",
      "Observability",
      "Data Modeling",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Python",
      "pandas",
      "NumPy",
      "Scikit-learn",
      "Power BI",
      "DAX",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Data Visualization",
    ],
  },
  {
    title: "Product & Strategy",
    skills: [
      "Product Strategy",
      "Product Architecture",
      "Information Architecture",
      "UX Strategy",
      "Technical Decision-Making",
      "MVP Scoping",
      "Product Positioning",
      "Growth Experimentation",
      "Audience Analytics",
      "Documentation & SOPs",
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
  "AI Product Engineering",
  "LLM Orchestration",
  "RAG Systems",
  "AI Memory",
  "React Native",
  "Full-Stack Engineering",
  "Product Architecture",
  "Personal Intelligence",
  "Agentic Systems",
  "Product Strategy",
];
