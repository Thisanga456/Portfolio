import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  return (
    <section
      className="tech-section"
      id="technologies"
      aria-labelledby="tech-title"
    >
      <div className="tech-header">
        <div className="tech-header-left">
          <p className="eyebrow">[ 05 / TECHNOLOGIES ]</p>
        </div>
        <div className="tech-header-right">
          <h2 id="tech-title">Technologies I&apos;ve worked with.</h2>
        </div>
      </div>

      <div className="tech-grid" role="list">
        {technologies.map((cat) => (
          <div key={cat.category} className="tech-category" role="listitem">
            <span className="tech-category-label">{cat.category}</span>
            <ul
              className="tech-list"
              aria-label={`${cat.category} technologies`}
            >
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="tech-item"
                  tabIndex={0}
                  aria-label={`${item.name} — ${item.context}${item.relatedTo.length > 0 ? `, used in ${item.relatedTo.join(", ")}` : ""}`}
                >
                  <span className="tech-name" aria-hidden="true">
                    {item.name}
                  </span>
                  <div className="tech-detail" aria-hidden="true">
                    <div className="tech-detail-inner">
                      <p className="tech-context">{item.context}</p>
                      {item.relatedTo.length > 0 && (
                        <p className="tech-related">
                          ↳&nbsp;{item.relatedTo.join(" · ")}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

