const steps = [
  {
    label: "PROBLEM",
    desc: "Identify what is broken or missing. Start with a question worth answering.",
  },
  {
    label: "RESEARCH",
    desc: "Look at what already exists. Understand the space before building in it.",
  },
  {
    label: "IDEA",
    desc: "Define what to actually build. Shape the approach around real constraints.",
  },
  {
    label: "DESIGN",
    desc: "Work out structure before touching code. Think in screens, flows, and data.",
  },
  {
    label: "BUILD",
    desc: "Write the code. Iterate quickly. Break things before users do.",
  },
  {
    label: "TEST",
    desc: "Use it. Find where it falls short. Fix what breaks before shipping.",
  },
  {
    label: "SHIP",
    desc: "Get it in front of people. Real use reveals what testing misses.",
  },
] as const;

export function BuildProcess() {
  return (
    <section className="build-section" id="build" aria-labelledby="build-title">
      <div className="build-header">
        <div className="build-header-left">
          <p className="eyebrow">[ 03 / THE BUILD ]</p>
        </div>
        <div className="build-header-right">
          <h2 id="build-title">How I work.</h2>
          <p>
            I learn through creating real products. Each project starts with a
            problem worth solving and ends with something people can actually
            use.
          </p>
        </div>
      </div>

      <ol className="build-steps" aria-label="Build process">
        {steps.map((step, i) => (
          <li key={step.label} className="build-step">
            <span className="build-step-num">0{i + 1}</span>
            <strong className="build-step-label">{step.label}</strong>
            <p className="build-step-desc">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

