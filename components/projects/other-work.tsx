import { experiments } from "@/data/experiments";

export function OtherWork() {
  return (
    <section className="other-work-section" id="experiments" aria-labelledby="other-work-title">
      <div className="section-container">
        <div className="other-work-header">
          <p className="section-label">ADDITIONAL PROJECTS</p>
          <h2 id="other-work-title">Other Work &amp; Early Builds</h2>
          <p className="other-work-intro">
            Earlier web projects and learning builds exploring front-end technologies and educational tools.
          </p>
        </div>

        <ul className="experiment-list" aria-label="Selected experiments and builds">
          {experiments.map((exp) => (
            <li key={exp.slug} className="experiment-card">
              <div className="experiment-header">
                <div className="experiment-title-wrap">
                  <h3 className="experiment-title">{exp.title}</h3>
                  {exp.year && <span className="experiment-year-badge">{exp.year}</span>}
                </div>
                {exp.link ? (
                  <a
                    href={exp.link}
                    className="experiment-link-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${exp.title}`}
                  >
                    <span>View Project</span>
                    <b aria-hidden="true">↗</b>
                  </a>
                ) : (
                  <span className="experiment-status-badge">Web Application</span>
                )}
              </div>

              {exp.description && (
                <p className="experiment-desc">{exp.description}</p>
              )}

              {exp.technologies.length > 0 && (
                <div className="experiment-tech-tags" aria-label="Technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill tech-pill--sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
