export const personal = {
  name: "Thisanga Senithu",
  role: "Software Developer / IT Student",
  location: "Sri Lanka",
  email: null as string | null,
  education: {
    institution: "D. S. Senanayake College",
    location: "Colombo 7",
    qualification: "GCE O/L",
    year: "2022",
    subjects: [
      "Mathematics",
      "ICT",
      "English",
      "Business & Accounting Studies",
    ] as const,
    current: "Information Technology / Computer Science",
  },
  experience: [
    {
      role: "ICT Tutor",
      detail: "Grade 6–8",
      description:
        "Explained ICT concepts to younger students, helped them build practical understanding of technical topics, and worked on making that knowledge usable rather than just memorised.",
    },
  ],
  socialLinks: {
    github: null as string | null,
    linkedin: null as string | null,
  },
} as const;
