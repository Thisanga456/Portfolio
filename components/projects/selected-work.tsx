import Link from "next/link";
import { ProjectImage } from "@/components/projects/project-image";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="selected-work" id="work" aria-labelledby="selected-work-title">
      <header className="work-header">
        <p className="work-kicker">[ 02 / SELECTED WORK ]</p>
        <h2 id="selected-work-title">Built to be used,<br />not just displayed.</h2>
        <p>Selected product work, shaped through real constraints and shipped as working software.</p>
      </header>

      <div className="project-index">
        {projects.map((project, index) => (
          <Link className="project-preview" href={`/work/${project.slug}`} key={project.slug} aria-label={`Open ${project.title} project page`}>
            <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-main">
              <p className="project-year">{project.year}</p>
              <h3>{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.technologies.join(" · ")}</p>
              <p className="project-recognition">{project.recognition}</p>
            </div>
            <ProjectImage className="project-visual" src={project.image.src} alt={project.image.alt} label={project.image.label} />
            <ProjectImage className="project-visual" src={project.image.src} alt={project.image.alt} label={project.image.label} title={project.title} />
            <span className="project-open">VIEW PROJECT <b aria-hidden="true">↗</b></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
