import { ArrowRight, Zap } from "lucide-react"

const heroVideo = new URL(
  "../assets/mixkit-residential-solar-panels-22486-hd-ready.mp4",
  import.meta.url,
).toString()

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#12130f] text-white">
      <div className="absolute inset-0 -z-20">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-95 brightness-110 contrast-110 saturate-125"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,15,13,0.75) 0%, rgba(11,15,13,0.52) 32%, rgba(11,15,13,0.32) 100%), linear-gradient(180deg, rgba(9,10,11,0.18) 0%, rgba(9,10,11,0.62) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl pt-10 text-center sm:pt-16 lg:pt-20">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 shrink-0 text-[#f7b267]" aria-hidden="true" />
            <span className="text-balance">Serving homes, businesses, and industry across Nigeria</span>
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Reliable technology. Sustainable progress.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
            Etronical Global Limited delivers renewable energy, electronics, security, automation, and technology integration solutions that keep homes, businesses, and institutions running.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f7b267] px-7 py-3.5 text-sm font-semibold text-[#17130f] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              View our portfolio
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:mt-16">
          {[
            { label: "Solar + Storage", value: "24/7" },
            { label: "Commercial EPC", value: "End-to-end" },
            { label: "Smart Automation", value: "Secure" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/15 p-4 text-left shadow-lg shadow-black/10 backdrop-blur-sm"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-white/55">{item.label}</div>
              <div className="mt-2 font-display text-2xl font-semibold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
