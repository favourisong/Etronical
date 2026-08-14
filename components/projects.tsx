import { MapPin } from "lucide-react"

const projects = [
  {
    image: "/images/project-wind.png",
    alt: "White wind turbines on a green hillside at sunset",
    tag: "Wind",
    title: "Ridgeline Wind Farm",
    location: "Aragón, Spain",
    capacity: "320 MW",
    status: "Operational",
  },
  {
    image: "/images/project-storage.png",
    alt: "Grid-scale battery storage facility with rows of container units",
    tag: "Storage",
    title: "Cascade Storage Hub",
    location: "Nevada, USA",
    capacity: "450 MWh",
    status: "In construction",
  },
  {
    image: "/images/project-rooftop.png",
    alt: "Solar panels on a commercial rooftop with city skyline at sunset",
    tag: "Solar",
    title: "Metro Rooftop Program",
    location: "São Paulo, Brazil",
    capacity: "180 MW",
    status: "Development",
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Projects powering communities today.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-semibold text-primary hover:underline"
          >
            See all projects →
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.alt}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  {project.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    {project.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {project.location}
                </div>
                <p className="mt-4 font-display text-2xl font-bold tracking-tight text-primary">
                  {project.capacity}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
