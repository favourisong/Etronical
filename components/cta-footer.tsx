"use client"

import { useState } from "react"
import { Sun, ArrowRight, Check } from "lucide-react"

const siteRoot = process.env.NODE_ENV === "production" ? "/Etronical" : ""

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.4c0-.9.3-1.6 1.7-1.6H17V2.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.3v8h3.2Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5-3.2a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 17 6Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.9 2h3.7l-8.1 9.3L22.8 22h-7.3l-5.7-8.2L3.6 22H-.1l8.7-10L.8 2h7.5l5.2 7.6L18.9 2Zm-1.3 18h2l-12.7-18h-2.1L17.6 20Z" />
    </svg>
  )
}

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
              links={[
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
                { label: "Contact", href: `${siteRoot}/contact` },
              ]}
            />
            <FooterCol
              title="Projects"
              links={[
                { label: "Solar", href: "#" },
                { label: "Wind", href: "#" },
                { label: "Storage", href: "#" },
                { label: "Portfolio", href: "#" },
              ]}
            />
            <FooterCol
              title="Resources"
              links={[
                { label: "Insights", href: "#" },
                { label: "Reports", href: "#" },
                { label: "Investors", href: "#" },
                { label: "Sustainability", href: "#" },
              ]}
            />
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Etronical Global Limited. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
