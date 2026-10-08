import { personal } from "@/data/personal";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-status">
          <span className="status-indicator" aria-hidden="true" />
          <span>{personal.location} · Available for Projects &amp; Internships</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          {personal.name}
        </h1>

        <p className="hero-role">
          IT Student &amp; Aspiring Software Developer
        </p>

        <p className="hero-bio">
          I build practical digital products and enjoy turning ideas into working software.
          Currently developing native Android apps, backend systems, and web projects.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn--primary">
            <span>View My Work</span>
            <b aria-hidden="true">↓</b>
          </a>
          <a href="#about" className="btn btn--secondary">
            <span>About Me</span>
          </a>
          {personal.socialLinks.github && (
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              aria-label="GitHub profile"
            >
              <span>GitHub</span>
              <b aria-hidden="true">↗</b>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
