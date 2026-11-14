export const profile = {
  name: "NK",
  firstName: "NK",
  fullName: "Nishant Kumar",
  pronouns: "He/Him",
  headline: "I build thoughtful AI products from concept to release.",
  role: "AI Product Engineer",
  motto: ["Build.", "Learn.", "Ship."],
  location: "Greater Delhi Area, India",
  email: "hello.nishantk@proton.me",
  resume: "/NK-Resume.pdf",
  x: "https://x.com/madewithnk",
  github: "https://github.com/DataScyther",
  linkedin: "https://www.linkedin.com/in/madewithnk/",
  instagram: "https://www.instagram.com/madewithnk/",
  youtube: "https://www.youtube.com/@madewithnk",

  about: [
    "Running @madewithnk has taught me to pay attention to how people respond to an idea. I study retention, experiment with formats, and use what I learn to decide what to improve. That habit has shaped how I approach product work, too.",
    "I enjoy working through the decisions behind a product: what to build first, what context an AI system needs, and how to make the result clear to the person using it. Understanding those trade-offs is as much a part of the work as writing the code.",
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
    "React / TypeScript",
    "Product Architecture",
  ],
};

export const stats = [{ value: "170K+", label: "YouTube subscribers" }];

export interface Experience {
  role: string;
  company: string;
  type?: string;
  period: string;
  location: string;
  mode?: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "AI-Native Founder’s Office Intern",
    company: "Stealth AI Startup",
    type: "Internship",
    period: "Oct 2026 — Present",
    location: "Gurugram, Haryana, India",
    mode: "On-site",
    description:
      "Lead marketing strategy for the startup’s online presence and social media. Contribute to core product strategy across LLM and model choices, product engineering priorities, and strategic operations.",
    current: true,
  },
  {
    role: "YouTuber (AI & Tech)",
    company: "YouTube",
    period: "Sep 2022 — Present",
    location: "Greater Delhi Area, India",
    description:
      "Run @madewithnk, an AI and technology channel grown to 170K+ subscribers. Treat content like a product: analyze retention, test topics and formats, retire what doesn’t work, and improve what resonates.",
    current: true,
  },
  {
    role: "Independent Developer",
    company: "Jouspace",
    period: "Sep 2025 — Present",
    location: "Greater Delhi Area, India",
    description:
      "Build Jouspace from product idea to implementation across web and Android. Own the experience and engineering across React, TypeScript, Capacitor, optional Firebase sync, and a stateless AI runtime with streamed reflections through NVIDIA NIM.",
    current: true,
  },
  {
    role: "PM Intern",
    company: "Pranayuv Technologies",
    type: "Internship",
    period: "Mar 2026 — Aug 2026",
    location: "Vijayawada, Andhra Pradesh, India",
    description:
      "Built project tracking workflows in Notion and Asana, documentation repositories, and SOPs to make progress, ownership, and next steps easier to follow.",
  },
  {
    role: "AI Intern",
    company: "1M1B (1 Million for 1 Billion)",
    type: "Internship",
    period: "Dec 2025 — Jan 2026",
    location: "Greater Delhi Area, India",
    description:
      "Worked through the IBM SkillsBuild and 1M1B program, applying generative AI, IBM Granite models, and retrieval-augmented generation concepts to sustainability-focused problems.",
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
    title: "Jouspace",
    period: "Sep 2025 — Present",
    summary:
      "A local-first journal that connects thoughts over time, with optional sync and AI reflections grounded in the entries you choose.",
    highlights: [
      "Built a shared React and TypeScript product for web and native Android using Capacitor",
      "Kept local storage as the immediate source of truth, with optional Firebase identity and background Firestore sync",
      "Separated context assembly, prompt construction, model access, and streamed delivery in a stateless AI runtime",
      "Implemented five AI capabilities using NVIDIA NIM, with server-side credentials and Server-Sent Events",
      "Added frontend and runtime tests, TypeScript validation, and GitHub Actions release workflows",
    ],
    stack: [
      "React",
      "TypeScript",
      "Capacitor",
      "Firebase",
      "Cloudflare Workers",
      "NVIDIA NIM",
      "SSE",
      "Vitest",
    ],
    featured: true,
  },
  {
    index: "02",
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
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering (Data Science)",
  period: "Aug 2023 — Mar 2027",
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

export const flagship = {
  name: "Jouspace",
  website: "https://jouspace-org.web.app/",
  repository: "https://github.com/datascyther/Jouspace",
  role: "Independent Developer",
  platforms: "Web + Android",
  screenshots: [
    {
      name: "Home",
      image: "/images/jouspace/home.jpg",
      alt: "Jouspace home screen showing memory-guided journal suggestions and recent entries",
      caption:
        "A thoughtful starting point. Pick up where your last thought left off.",
    },
    {
      name: "Memory",
      image: "/images/jouspace/memory.jpg",
      alt: "Jouspace memory screen connecting journal entries through recurring themes",
      caption:
        "A thread through your thinking. Connected entries, themes, and reflection prompts.",
    },
    {
      name: "AI",
      image: "/images/jouspace/ai.jpg",
      alt: "Jouspace AI screen with selected journal context and suggested reflection questions",
      caption:
        "Reflection with context. Bring selected entries into the conversation.",
    },
    {
      name: "Journal",
      image: "/images/jouspace/journal.jpg",
      alt: "Jouspace journal editor with autosave and custom theme tags",
      caption:
        "Space for the words. A focused editor with autosave and personal themes.",
    },
  ],
};

export const engineeringDecisions = [
  {
    number: "01",
    title: "Local first. Cloud optional.",
    description:
      "The interface reads and writes locally. Firestore mirrors entries in the background for signed-in users, with timestamp-based merges and deletion tombstones to keep devices in agreement.",
    path: "src/store/cloudSync.ts",
  },
  {
    number: "02",
    title: "A stateless intelligence layer.",
    description:
      "The client supplies journal context per request. Shared context and prompt modules serve both Express and Cloudflare Workers, separating product logic from the transport.",
    path: "worker/src/handler.ts",
  },
  {
    number: "03",
    title: "A deliberate model boundary.",
    description:
      "A typed gateway isolates model access from the rest of the runtime. NVIDIA NIM is the implemented provider; the interface supports cancellation and streamed delivery.",
    path: "server/gateway/ModelGateway.ts",
  },
];

export const pipeline = [
  {
    name: "Validate",
    detail:
      "Check the request before it reaches the model. Zod schemas bound the message history, entries, and capability-specific inputs.",
    path: "server/schemas.ts",
    label: "Typed request boundary",
  },
  {
    name: "Context",
    detail:
      "Assemble client-supplied entries and personalization into the context for the requested capability. The assembler also supports seed context for development.",
    path: "server/context/ContextAssembler.ts",
    label: "Journal context assembly",
  },
  {
    name: "Prompt",
    detail:
      "Build capability-specific instructions and messages through a shared prompt layer, used by both the development server and the Worker runtime.",
    path: "server/prompt/PromptAssembler.ts",
    label: "Shared prompt construction",
  },
  {
    name: "Model",
    detail:
      "Route model access through a typed gateway. NVIDIA NIM supplies completions; credentials stay on the server rather than in the frontend.",
    path: "server/gateway/ModelGateway.ts",
    label: "Provider abstraction",
  },
  {
    name: "Stream",
    detail:
      "Deliver the response incrementally through Server-Sent Events. The product can render a reflection as tokens arrive instead of waiting for the whole response.",
    path: "server/stream/StreamController.ts",
    label: "Incremental delivery",
  },
];
