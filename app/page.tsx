import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { Impact } from "@/components/impact"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Projects />
        <Impact />
        <Process />
        <CtaFooter />
      </main>
    </div>
  )
}
