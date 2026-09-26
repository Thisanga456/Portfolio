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
    category: "BUILD",
    items: [
      {
        name: "Kotlin",
        context: "Primary language for Android development",
        relatedTo: ["EkataYan"],
      },
      {
        name: "Android",
        context: "Native Android platform and SDK",
        relatedTo: ["EkataYan"],
      },
      {
        name: "XML",
        context: "UI layouts and resource definitions",
        relatedTo: ["EkataYan"],
      },
      {
        name: "Python",
        context: "Backend scripting and API logic",
        relatedTo: ["EkataYan"],
      },
    ],
  },
  {
    category: "WEB",
    items: [
      {
        name: "HTML",
        context: "Semantic document structure",
        relatedTo: [],
      },
      {
        name: "CSS",
        context: "Styling, layout, animation",
        relatedTo: [],
      },
      {
        name: "JavaScript",
        context: "Client-side scripting",
        relatedTo: [],
      },
      {
        name: "Next.js",
        context: "React framework — this portfolio",
        relatedTo: ["Portfolio"],
      },
    ],
  },
  {
    category: "BACKEND",
    items: [
      {
        name: "Flask",
        context: "Python web framework for APIs",
        relatedTo: ["EkataYan"],
      },
      {
        name: "REST APIs",
        context: "API design and integration",
        relatedTo: ["EkataYan"],
      },
      {
        name: "Supabase",
        context: "Database, authentication and storage",
        relatedTo: ["EkataYan"],
      },
      {
        name: "PostgreSQL",
        context: "Relational database via Supabase",
        relatedTo: ["EkataYan"],
      },
    ],
  },
  {
    category: "TOOLS",
    items: [
      {
        name: "Git",
        context: "Version control",
        relatedTo: [],
      },
      {
        name: "GitHub",
        context: "Remote repositories",
        relatedTo: [],
      },
      {
        name: "Android Studio",
        context: "IDE for Android development",
        relatedTo: ["EkataYan"],
      },
      {
        name: "VS Code",
        context: "General-purpose editor",
        relatedTo: [],
      },
    ],
  },
];

