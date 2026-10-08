import { technologies } from "@/data/technologies";

export function TechnologiesSection() {
  return (
    <section className="tech-section" id="technologies" aria-labelledby="tech-title">
      <div className="section-container">
        <div className="tech-header">
          <p className="section-label">TECHNICAL SKILLS</p>
          <h2 id="tech-title">Technologies I work with.</h2>
          <p className="tech-intro">
            Tools and languages I use to build mobile applications, backend services, and web products.
          </p>
        </div>

        <div className="tech-categories-grid" role="list">
          {technologies.map((cat) => (
            <div key={cat.category} className="tech-category-card" role="listitem">
              <h3 className="tech-category-title">{cat.category}</h3>
              <ul className="tech-category-list" aria-label={`${cat.category} technologies`}>
                {cat.items.map((item) => (
                  <li key={item.name} className="tech-card-item">
                    <div className="tech-item-header">
                      <strong className="tech-item-name">{item.name}</strong>
                      {item.relatedTo.length > 0 && (
                        <span className="tech-used-in">
                          {item.relatedTo.join(", ")}
                        </span>
                      )}
                    </div>
                    <p className="tech-item-context">{item.context}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
