import {
  SunMedium,
  ShieldCheck,
  Wrench,
  MonitorSmartphone,
} from "lucide-react"

const services = [
  {
    icon: SunMedium,
    title: "Renewable energy systems",
    description:
      "We supply, install, and maintain solar inverter and backup power systems that keep homes, businesses, and institutions running.",
  },
  {
    icon: Wrench,
    title: "Electronics & technology",
    description:
      "Our engineers repair, refurbish, upgrade, and develop hardware and software for legacy and mission-critical systems.",
  },
  {
    icon: ShieldCheck,
    title: "Security & automation",
    description:
      "Professional CCTV, access control, networking, communication, and smart home and office automation solutions.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital signage",
    description:
      "We design, fabricate, install, and maintain digital display systems that strengthen visibility and customer engagement.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Practical technology for resilient operations.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From renewable energy and electronics repair to security, automation, and digital signage, we build dependable systems around your needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
