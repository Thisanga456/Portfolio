export type Experiment = {
  slug: string;
  title: string;
  description: string | null;
  technologies: readonly string[];
  year: string | null;
  link: string | null;
  status: "pending" | "complete";
};

// TODO: Add real project details for LearnIt when available.
export const experiments: readonly Experiment[] = [
  {
    slug: "learnit",
    title: "LearnIt",
    description: null, // TODO: Add real description
    technologies: [], // TODO: Add technologies used
    year: null, // TODO: Add year
    link: null,
    status: "pending",
  },
];

