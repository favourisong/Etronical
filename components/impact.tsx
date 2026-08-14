const stats = [
  { value: "2020", label: "Established in Abuja", sub: "Serving clients across Nigeria" },
  { value: "10+ yrs", label: "Combined experience", sub: "Electronics, embedded and industrial technology" },
  { value: "36 states", label: "Service reach", sub: "Professional support nationwide" },
  { value: "Less waste", label: "Repair before replace", sub: "Extending equipment life when practical" },
]

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="grid gap-px bg-background/10 lg:grid-cols-[1.2fr_2fr]">
          <div className="bg-foreground p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our impact
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Sustainable progress, measured in systems that last.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-background/70">
              Our impact is practical: fewer replacement costs, less downtime, longer equipment life, and dependable technology that supports sustainable development across Nigeria.
            </p>
          </div>

          <div className="grid gap-px bg-background/10 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-foreground p-8 sm:p-10">
                <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-medium text-background">{stat.label}</p>
                <p className="mt-1 text-sm text-background/60">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
