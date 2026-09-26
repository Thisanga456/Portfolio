import { personal } from "@/data/personal";

export function AboutSection() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      {/* Personal statement */}
      <div className="about-top">
        <div className="about-sidebar">
          <p className="eyebrow">[ 04 / ABOUT ]</p>
        </div>
        <div className="about-content">
          <h2 id="about-title" className="about-statement">
            Building things
            <br />
            is how I learn.
          </h2>
          <div className="about-body">
            <p>
              I&apos;m an IT student interested in software development and
              digital products. I enjoy taking a problem, breaking it down,
              learning what I need to learn, and turning the idea into something
              people can actually use.
            </p>
            <p>
              My recent work has focused on Android development, backend
              systems, APIs, databases, and product design.
            </p>
            <p>
              I&apos;m currently looking for opportunities where I can keep
              learning while contributing to real software projects.
            </p>
          </div>
        </div>
      </div>

      {/* Education + Experience */}
      <div className="background-grid">
        <div className="background-label-col">
          <span className="background-label">BACKGROUND</span>
        </div>

        <div className="edu-col">
          <p className="background-sublabel">EDUCATION</p>
          <h3 className="edu-institution">{personal.education.institution}</h3>
          <div className="edu-meta">
            <span>{personal.education.location}</span>
            <span>
              {personal.education.qualification} · {personal.education.year}
            </span>
          </div>

          <div className="edu-subjects">
            <p className="background-sublabel">SUBJECTS</p>
            <ul className="edu-subject-list">
              {personal.education.subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="edu-current">
            <p className="background-sublabel">CURRENT DIRECTION</p>
            <p>{personal.education.current}</p>
          </div>
        </div>

        <div className="exp-col">
          <p className="background-sublabel">EXPERIENCE</p>
          {personal.experience.map((exp) => (
            <div key={exp.role} className="exp-entry">
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-detail">{exp.detail}</p>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

