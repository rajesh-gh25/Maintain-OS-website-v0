import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Factory,
  Pill,
  UtensilsCrossed,
  Car,
  Zap,
  Package,
  Cog,
  Droplet,
  Plane,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Industries We Serve | MaintainOS",
  description:
    "MaintainOS CMMS for manufacturing, pharmaceutical, food & beverage, automotive, and more industrial sectors.",
}

const industries = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "General Manufacturing",
    description:
      "Discrete and process manufacturing facilities rely on MaintainOS to keep production lines running efficiently.",
    challenges: ["Managing diverse equipment types", "Minimizing production disruptions", "Tracking maintenance costs"],
    solutions: ["Flexible asset hierarchy", "Priority-based work orders", "Cost tracking per asset"],
  },
  {
    id: "pharmaceutical",
    icon: Pill,
    title: "Pharmaceutical & Life Sciences",
    description:
      "Meet strict regulatory requirements while maintaining equipment reliability for pharmaceutical manufacturing.",
    challenges: ["FDA 21 CFR Part 11 compliance", "Validated equipment maintenance", "Complete audit trails"],
    solutions: ["Electronic signatures and audit trails", "Calibration management", "Compliance documentation"],
  },
  {
    id: "food-beverage",
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Maintain food safety standards and equipment hygiene while maximizing production efficiency.",
    challenges: ["HACCP compliance", "Sanitation schedules", "Temperature-sensitive equipment"],
    solutions: ["Sanitation task management", "Food safety inspections", "Environmental monitoring"],
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive & Transportation",
    description: "Support just-in-time manufacturing with reliable equipment and minimal unplanned downtime.",
    challenges: ["High-volume production demands", "Just-in-time delivery pressure", "Complex automation systems"],
    solutions: ["Real-time equipment monitoring", "Rapid response work orders", "Automation system tracking"],
  },
  {
    id: "energy",
    icon: Zap,
    title: "Energy & Utilities",
    description: "Maintain critical infrastructure with reliability-centered maintenance strategies.",
    challenges: ["24/7 operation requirements", "Critical infrastructure maintenance", "Regulatory compliance"],
    solutions: ["Predictive maintenance support", "Critical asset prioritization", "Compliance tracking"],
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging",
    description: "Keep high-speed packaging lines running with proactive maintenance and rapid response capabilities.",
    challenges: ["High-speed line maintenance", "Frequent changeovers", "Quality control"],
    solutions: ["Line-specific PM schedules", "Quick changeover support", "Quality maintenance tracking"],
  },
  {
    id: "metal",
    icon: Cog,
    title: "Metal Fabrication",
    description: "Maintain precision equipment and heavy machinery for consistent quality and productivity.",
    challenges: ["Heavy equipment maintenance", "Tool and die management", "Safety compliance"],
    solutions: ["Heavy equipment tracking", "Tool lifecycle management", "Safety inspection scheduling"],
  },
  {
    id: "chemical",
    icon: Droplet,
    title: "Chemical Processing",
    description: "Manage maintenance in hazardous environments with safety-first protocols and compliance tracking.",
    challenges: ["Hazardous environment safety", "Process equipment reliability", "Environmental compliance"],
    solutions: ["Safety permit integration", "Process equipment PM", "Environmental tracking"],
  },
  {
    id: "aerospace",
    icon: Plane,
    title: "Aerospace & Defense",
    description: "Meet exacting quality standards and regulatory requirements for aerospace manufacturing.",
    challenges: ["AS9100 compliance", "Precision equipment calibration", "Traceability requirements"],
    solutions: ["Quality system integration", "Calibration management", "Complete traceability"],
  },
  {
    id: "electronics",
    icon: Cpu,
    title: "Electronics Manufacturing",
    description: "Maintain sensitive equipment in controlled environments with precision and documentation.",
    challenges: ["Cleanroom maintenance", "ESD-sensitive equipment", "Rapid technology changes"],
    solutions: ["Cleanroom protocols", "ESD compliance tracking", "Flexible asset management"],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Built for Manufacturing Industries</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              MaintainOS understands the unique maintenance challenges of different manufacturing sectors. Our flexible
              platform adapts to your industry's specific requirements while providing the core CMMS functionality every
              plant needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry) => (
              <div key={industry.id} id={industry.id} className="scroll-mt-20">
                <div className="rounded-xl border border-border bg-card p-8 lg:p-12">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                        <industry.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="mt-6 text-2xl font-bold">{industry.title}</h2>
                      <p className="mt-3 text-muted-foreground">{industry.description}</p>
                      <Button className="mt-6" asChild>
                        <Link href="/demo">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h3 className="font-semibold text-destructive">Challenges</h3>
                        <ul className="mt-3 space-y-2">
                          {industry.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">How We Help</h3>
                        <ul className="mt-3 space-y-2">
                          {industry.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold">Don't See Your Industry?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              MaintainOS is flexible enough to support any manufacturing or industrial operation. Contact us to discuss
              your specific requirements.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
