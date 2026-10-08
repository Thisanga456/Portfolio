const steps = [
  {
    num: "01",
    label: "PROBLEM",
    desc: "Identify what is broken or missing. Start with a real question worth answering.",
  },
  {
    num: "02",
    label: "RESEARCH",
    desc: "Study existing tools and user workflows. Understand the space before writing code.",
  },
  {
    num: "03",
    label: "IDEA",
    desc: "Define the core MVP scope. Shape the solution around practical constraints.",
  },
  {
    num: "04",
    label: "DESIGN",
    desc: "Map the architecture, data models, and screen flows before opening the editor.",
  },
  {
    num: "05",
    label: "BUILD",
    desc: "Write clean, modular code. Iterate quickly and test edge cases early.",
  },
  {
    num: "06",
    label: "TEST",
    desc: "Validate on real devices and with real data to find what breaks.",
  },
  {
    num: "07",
    label: "SHIP",
    desc: "Put the software into the hands of real users and learn from feedback.",
  },
] as const;

export function BuildProcess() {
  return (
    <section className="build-section" id="build" aria-labelledby="build-title">
      <div className="section-container">
        <header className="build-header">
          <p className="section-label">MY PROCESS</p>
          <h2 id="build-title">How I approach building.</h2>
          <p className="build-intro">
            I learn by creating real applications. Each build starts with understanding practical problems and ends with working, tested software.
          </p>
        </header>

        <ol className="build-steps-list" aria-label="Development process steps">
          {steps.map((step) => (
            <li key={step.label} className="build-step-card">
              <span className="build-step-number">{step.num}</span>
              <strong className="build-step-name">{step.label}</strong>
              <p className="build-step-text">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
