import { experiments } from "@/data/experiments";

export function OtherWork() {
  return (
    <section
      className="other-work-section"
      id="experiments"
      aria-labelledby="other-work-title"
    >
      <div className="other-work-header">
        <div className="other-work-header-left">
          <p className="eyebrow">[ 06 / OTHER WORK ]</p>
        </div>
        <div className="other-work-header-right">
          <p
            id="other-work-title"
            className="other-work-kicker"
            role="heading"
            aria-level={2}
          >
            Selected Experiments
          </p>
        </div>
      </div>

      <ul className="experiment-list" aria-label="Selected experiments">
        {experiments.map((exp, index) => (
          <li
            key={exp.slug}
            className={`experiment-item${exp.status === "pending" ? " experiment-item--pending" : ""}`}
          >
            <span className="experiment-num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="experiment-main">
              <h3 className="experiment-title">{exp.title}</h3>
              {exp.description ? (
                <p className="experiment-desc">{exp.description}</p>
              ) : (
                <p className="experiment-desc experiment-desc--placeholder">
                  Details to be added.
                </p>
              )}
              {exp.technologies.length > 0 && (
                <p className="experiment-tech">
                  {exp.technologies.join(" · ")}
                </p>
              )}
            </div>

            <div className="experiment-meta">
              {exp.year && (
                <span className="experiment-year">{exp.year}</span>
              )}
              {exp.link ? (
                <a
                  href={exp.link}
                  className="experiment-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${exp.title}`}
                >
                  <span>VIEW</span>
                  <b aria-hidden="true">↗</b>
                </a>
              ) : (
                <span className="experiment-link-placeholder" aria-hidden="true">—</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

