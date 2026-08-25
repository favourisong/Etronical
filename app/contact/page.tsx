"use client"

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-border bg-card shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_1.15fr]">
          <div className="bg-[#17130f] p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#f7b267]">
              Contact us
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build your next energy or technology solution.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
              Talk to our team about solar projects, equipment supply, automation, security,
              and engineering support for homes, businesses, and industrial operations.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[#f7b267]" aria-hidden="true" />
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-white/55">Email</div>
                  <a href="mailto:info@etronical.com" className="mt-1 block text-base text-white hover:text-[#f7b267]">
                    info@etronical.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[#f7b267]" aria-hidden="true" />
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-white/55">Phone</div>
                  <a href="tel:+2348000000000" className="mt-1 block text-base text-white hover:text-[#f7b267]">
                    +234 (0) 800 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[#f7b267]" aria-hidden="true" />
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-white/55">Office</div>
                  <p className="mt-1 text-base text-white/80">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex h-full min-h-[420px] items-center justify-center rounded-2xl border border-border bg-muted/50 p-8 text-center">
                <div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f7b267]/15 text-2xl text-[#b06128]">
                    ✓
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold text-foreground">
                    Thanks for reaching out.
                  </h2>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                    Our team will contact you shortly to discuss your project requirements.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-foreground">First name</span>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Jane"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-foreground">Last name</span>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Doe"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">Email address</span>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">Company</span>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your company"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">How can we help?</span>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your project goals, timeline, and requirements..."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f7b267] px-6 py-3 text-sm font-semibold text-[#17130f] transition-transform hover:-translate-y-0.5"
                >
                  Send message
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
