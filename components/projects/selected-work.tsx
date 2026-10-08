import Link from "next/link";
import { ProjectImage } from "@/components/projects/project-image";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="selected-work" id="work" aria-labelledby="selected-work-title">
      <div className="section-container">
        <header className="work-header">
          <p className="section-label">FEATURED WORK</p>
          <h2 id="selected-work-title">Built to solve real problems.</h2>
          <p className="work-intro">
            Focused on building complete digital products with real technical constraints, from architecture to working software.
          </p>
        </header>

        <div className="project-index">
          {projects.map((project) => (
            <article className="project-preview-card" key={project.slug}>
              <div className="project-info">
                <div className="project-meta-top">
                  <span className="project-badge">{project.year}</span>
                  <span className="project-recognition-pill">{project.recognition}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <Link
                    href={`/work/${project.slug}`}
                    className="btn btn--primary"
                    aria-label={`View ${project.title} case study`}
                  >
                    <span>View Project</span>
                    <b aria-hidden="true">→</b>
                  </Link>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                    >
                      <span>{link.label}</span>
                      <b aria-hidden="true">↗</b>
                    </a>
                  ))}
                </div>
              </div>

              <div className="project-visual-wrapper">
                <Link
                  href={`/work/${project.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="project-visual-link"
                >
                  <ProjectImage
                    className="project-visual"
                    src={project.image.src}
                    alt={project.image.alt}
                    label={project.image.label}
                    title={project.title}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
