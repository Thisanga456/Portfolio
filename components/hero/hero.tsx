const metadata = [
  ["LOCATION", "SRI LANKA"],
  ["EDITION", "2026"],
  ["STATUS", "CURRENTLY BUILDING"],
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-rule" aria-hidden="true" />

      <aside className="hero-metadata" aria-label="Profile metadata">
        <p className="eyebrow">[ 01 / INTRODUCTION ]</p>
        <dl>
          {metadata.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <div className="hero-core">
        <p className="hero-role reveal reveal--one">Software Developer <span>/</span> IT Student</p>
        <h1 id="hero-title" className="hero-title" aria-label="Thisanga Senithu">
          <span className="reveal reveal--two">THISANGA</span>
          <span className="reveal reveal--three">SENITHU</span>
        </h1>
        <div className="hero-introduction reveal reveal--four">
          <span className="intro-mark" aria-hidden="true">↳</span>
          <p>IT student and aspiring software developer building digital products while learning through real-world projects.</p>
        </div>
      </div>

      <div className="hero-foot">
        <a className="work-link" href="#work"><span>SELECTED WORK</span><b>→ 01</b></a>
        <p className="page-coordinate">COLOMBO / 06.9355° N, 79.8487° E</p>
        <a className="scroll-cue" href="#work" aria-label="Scroll to selected work"><span>SCROLL</span><i aria-hidden="true" /></a>
      </div>
    </section>
  );
}
