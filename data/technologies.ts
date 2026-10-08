export type TechItem = {
  name: string;
  context: string;
  relatedTo: readonly string[];
};

export type TechCategory = {
  category: string;
  items: readonly TechItem[];
};

export const technologies: readonly TechCategory[] = [
  {
    category: "MOBILE",
    items: [
      {
        name: "Kotlin",
        context: "Primary language for Android application development",
        relatedTo: ["EkataYan"],
      },
      {
        name: "Android SDK",
        context: "Native Android architecture, UI layouts & lifecycle",
        relatedTo: ["EkataYan"],
      },
    ],
  },
  {
    category: "BACKEND",
    items: [
      {
        name: "Python",
        context: "Backend services, data handling & AI integration",
        relatedTo: ["EkataYan"],
      },
      {
        name: "Flask",
        context: "Lightweight Python REST API framework",
        relatedTo: ["EkataYan"],
      },
      {
        name: "REST APIs",
        context: "Clean endpoint design and client-server integration",
        relatedTo: ["EkataYan"],
      },
    ],
  },
  {
    category: "DATABASE",
    items: [
      {
        name: "Supabase",
        context: "Auth, cloud storage and real-time backend",
        relatedTo: ["EkataYan"],
      },
      {
        name: "PostgreSQL / SQL",
        context: "Relational database schema modeling & queries",
        relatedTo: ["EkataYan"],
      },
    ],
  },
  {
    category: "WEB",
    items: [
      {
        name: "Next.js & React",
        context: "Modern web development with SSR & App Router",
        relatedTo: ["Portfolio"],
      },
      {
        name: "TypeScript",
        context: "Type-safe frontend and backend code",
        relatedTo: ["Portfolio"],
      },
      {
        name: "HTML / CSS",
        context: "Semantic markup, responsive layouts and styling",
        relatedTo: ["LearnIT", "Portfolio"],
      },
      {
        name: "JavaScript",
        context: "Client-side interactivity and web applications",
        relatedTo: ["LearnIT"],
      },
    ],
  },
  {
    category: "TOOLS",
    items: [
      {
        name: "Git & GitHub",
        context: "Version control, branching & project tracking",
        relatedTo: ["EkataYan", "Portfolio"],
      },
      {
        name: "Android Studio",
        context: "Native Android development and device emulation",
        relatedTo: ["EkataYan"],
      },
      {
        name: "VS Code",
        context: "Code editor for web and full-stack projects",
        relatedTo: ["Portfolio", "LearnIT"],
      },
    ],
  },
];
