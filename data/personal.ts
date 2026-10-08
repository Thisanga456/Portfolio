export type SubjectGrade = {
  name: string;
  grade: string;
};

export type EducationEntry = {
  year: string;
  qualification: string;
  stream?: string;
  medium?: string;
  institution: string;
  location: string;
  subjects: readonly SubjectGrade[];
};

export const educationHistory: readonly EducationEntry[] = [
  {
    year: "2025",
    qualification: "GCE Advanced Level",
    stream: "Physical Science Stream",
    medium: "English Medium",
    institution: "D. S. Senanayake College",
    location: "Colombo 07, Sri Lanka",
    subjects: [
      { name: "Information & Communication Technology", grade: "A" },
      { name: "Combined Mathematics", grade: "S" },
      { name: "Physics", grade: "S" },
    ],
  },
  {
    year: "2022",
    qualification: "GCE Ordinary Level",
    medium: "English Medium",
    institution: "D. S. Senanayake College",
    location: "Colombo 07, Sri Lanka",
    subjects: [
      { name: "Information & Communication Technology", grade: "A" },
      { name: "Mathematics", grade: "A" },
      { name: "Business & Accounting Studies", grade: "A" },
      { name: "English Language", grade: "A" },
      { name: "Science", grade: "B" },
    ],
  },
];

export const personal = {
  name: "Thisanga Senithu",
  role: "Software Developer / IT Student",
  location: "Sri Lanka",
  email: "thissenithu1@gmail.com" as string | null,
  education: educationHistory,
  experience: [
    {
      role: "ICT Tutor",
      detail: "Grade 6–8",
      description:
        "Explained ICT concepts to younger students, helped them build practical understanding of technical topics, and worked on making that knowledge usable rather than just memorised.",
    },
  ],
  socialLinks: {
    github: "https://github.com/Thisanga456" as string | null,
    linkedin: "https://www.linkedin.com/in/thisanga-senithu-8a7142401/" as string | null,
  },
} as const;
