import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import { ProjectImage } from "@/components/projects/project-image";
import { notFound } from "next/navigation";

export default function EkataYanPage() {
  const project = getProjectBySlug("ekatayan");

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <Link className="project-page-back" href="/#work">← BACK TO SELECTED WORK</Link>
      <section className="project-page-intro" aria-labelledby="project-page-title">
        <p>[ PROJECT / {project.year} ]</p>
        <h1 id="project-page-title">{project.title}</h1>
        <p>{project.tagline}</p>

        <div className="project-detail-body">
          <div className="project-detail-meta">
            <div className="meta-block">
              <span className="meta-label">RECOGNITION</span>
              <p className="meta-value">{project.recognition}</p>
            </div>

            <div className="meta-block">
              <span className="meta-label">TECHNOLOGIES</span>
              <p className="meta-value">{project.technologies.join(" · ")}</p>
            </div>

            <div className="meta-block">
              <span className="meta-label">SUMMARY</span>
              <p className="meta-value">{project.description}</p>
            </div>

            {project.links.length > 0 && (
              <div className="meta-block">
                <span className="meta-label">REPOSITORY</span>
                <div className="flex gap-4 pt-1">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <span>{link.label}</span>
                      <b aria-hidden="true">↗</b>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="project-detail-visual flex flex-col gap-8">
            <ProjectImage
              src="/images/ekatayan/home.jpeg"
              alt="EkataYan Home Screen"
              label="Home Screen"
              title={project.title}
            />
            <ProjectImage
              src="/images/ekatayan/splash.jpeg"
              alt="EkataYan Splash Screen"
              label="Splash Screen"
              title={project.title}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
