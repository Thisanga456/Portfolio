import { personal, educationHistory } from "@/data/personal";

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-container">
        {/* Story */}
        <div className="about-grid">
          <div className="about-intro-col">
            <p className="section-label">ABOUT ME</p>
            <h2 id="about-title" className="about-statement">
              Curious about how systems work. Driven by building practical software.
            </h2>
          </div>

          <div className="about-story-col">
            <p className="lead-paragraph">
              I&apos;m an IT student and aspiring developer based in Sri Lanka, focused on mobile application development, backend systems, and modern web software.
            </p>
            <p>
              I learn best by building real projects from scratch. Rather than relying solely on tutorials, I like taking everyday problems, figuring out the architecture needed, and turning ideas into working, usable software.
            </p>
            <p>
              My recent work includes <strong>EkataYan</strong>, a native Android group travel app built with Kotlin, Flask, and Supabase that was recognized as 1st Runner-Up at the IIT InfoSchol Demo Day, as well as <strong>LearnIT</strong>, an educational platform for school students.
            </p>
            <p>
              Right now, I&apos;m continuing to deepen my skills across native Android architecture, REST API design, and databases, while actively looking for software development internships and project collaborations.
            </p>
          </div>
        </div>

        {/* Education & Experience Details */}
        <div className="background-grid">
          <div className="edu-col">
            <div className="sub-section-header">
              <span className="section-sublabel">EDUCATION</span>
            </div>

            <div className="edu-timeline">
              {educationHistory.map((edu) => (
                <div key={edu.qualification} className="edu-item">
                  <div className="edu-item-top">
                    <span className="edu-year">{edu.year}</span>
                    <h3 className="edu-qualification">{edu.qualification}</h3>
                  </div>
                  {edu.stream && (
                    <p className="edu-stream">
                      {edu.stream}
                      {edu.medium ? ` · ${edu.medium}` : ""}
                    </p>
                  )}
                  {!edu.stream && edu.medium && (
                    <p className="edu-stream">{edu.medium}</p>
                  )}
                  <p className="edu-institution">
                    {edu.institution} — {edu.location}
                  </p>

                  <div className="edu-subjects-block">
                    <ul
                      className="edu-subject-chips"
                      aria-label={`Subjects for ${edu.qualification}`}
                    >
                      {edu.subjects.map((sub) => (
                        <li key={sub.name} className="edu-chip">
                          <span className="sub-name">{sub.name}</span>
                          <span className="sub-grade">{sub.grade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="exp-col">
            <div className="sub-section-header">
              <span className="section-sublabel">EXPERIENCE</span>
            </div>

            <div className="exp-timeline">
              {personal.experience.map((exp) => (
                <div key={exp.role} className="exp-entry">
                  <span className="exp-detail">{exp.detail}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
