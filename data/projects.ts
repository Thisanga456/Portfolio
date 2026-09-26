export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  recognition: string;
  technologies: readonly string[];
  image: {
    src: string;
    alt: string;
    label: string;
  };
  featured: boolean;
  links: readonly ProjectLink[];
};

export const projects = [
  {
    slug: "ekatayan",
    title: "EkataYan",
    tagline: "Your Sri Lanka trip, without the chaos.",
    description: "AI-powered travel and group coordination application.",
    year: "2026",
    recognition: "IIT InfoSchol / 1st Runner-Up — Final Demo Day",
    technologies: ["Kotlin", "Android", "Flask", "Supabase"],
    image: {
      src: "/images/ekatayan/home.png",
      alt: "EkataYan application preview",
      label: "PROJECT PREVIEW / IMAGE TO BE ADDED",
    },
    featured: true,
    links: [],
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
