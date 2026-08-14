const steps = [
  {
    number: "01",
    title: "Understand the challenge",
    description:
      "We listen closely to each client, assess the technical environment, and identify practical ways to improve reliability and efficiency.",
  },
  {
    number: "02",
    title: "Design the solution",
    description:
      "Our engineers tailor hardware, software, energy, security, or automation solutions to the site, sector, and long-term objective.",
  },
  {
    number: "03",
    title: "Install and integrate",
    description:
      "We supply, fabricate, install, and integrate each system with careful attention to safety, quality, and minimal disruption.",
  },
  {
    number: "04",
    title: "Maintain and improve",
    description:
      "Through responsive repair, maintenance, and upgrades, we extend equipment life, reduce downtime, and support business continuity.",
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our process
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Engineering excellence from challenge to continuity.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t-2 border-primary pt-6">
              <span className="font-display text-3xl font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
