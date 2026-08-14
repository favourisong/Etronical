import { ArrowRight, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* warm gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, oklch(0.93 0.09 75) 0%, oklch(0.96 0.04 85) 45%, var(--background) 80%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Zap className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-balance">            Serving homes, businesses, and industry across Nigeria</span>
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Reliable technology. Sustainable progress.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Etronical Global Limited delivers renewable energy, electronics, security, automation, and technology integration solutions that keep homes, businesses, and institutions running.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:w-auto"
            >
              View our portfolio
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
            <img
              src="/images/hero-solar.png"
              alt="Aerial view of a large-scale solar panel farm at golden hour"
              className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
