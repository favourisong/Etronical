"use client"

import { useState } from "react"
import { Sun, ArrowRight, Check } from "lucide-react"

export function CtaFooter() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <>
      <section id="contact" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, oklch(0.72 0.17 55) 0%, oklch(0.62 0.19 38) 60%, oklch(0.5 0.16 32) 100%)",
          }}
        >
          <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            Let&apos;s solve your next technology challenge.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Tell us what you need — from solar backup power and electronics repair to security, automation, or a tailored engineering solution.
          </p>

          {submitted ? (
            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground">
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
              Thanks — we&apos;ll be in touch shortly.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="cta-email" className="sr-only">
                Work email
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-full border border-background/30 bg-background/95 px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-background"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <a href="#top" className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Sun className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="max-w-[190px] text-pretty font-display text-sm font-bold leading-tight tracking-tight text-foreground sm:max-w-none sm:text-lg">
                  Etronical Global Limited
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
Technology, energy, and engineering solutions that keep your systems running efficiently today and ready for tomorrow.
              </p>
            </div>

            <FooterCol
              title="Company"
              links={["About", "Careers", "Press", "Contact"]}
            />
            <FooterCol
              title="Projects"
              links={["Solar", "Wind", "Storage", "Portfolio"]}
            />
            <FooterCol
              title="Resources"
              links={["Insights", "Reports", "Investors", "Sustainability"]}
            />
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Etronical Global Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
