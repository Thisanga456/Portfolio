export type Experiment = {
  slug: string;
  title: string;
  description: string | null;
  technologies: readonly string[];
  year: string | null;
  link: string | null;
  status: "pending" | "complete";
};

export const experiments: readonly Experiment[] = [
  {
    slug: "learnit",
    title: "LearnIT",
    description:
      "LearnIT is an educational web platform designed to help students learn and revise school subjects through accessible digital learning resources. It provides a simple, student-friendly way to explore educational content online.",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2021",
    link: null,
    status: "complete",
  },
];
