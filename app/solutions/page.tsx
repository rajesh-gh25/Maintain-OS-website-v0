import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Factory, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | MaintainOS CMMS",
  description:
    "MaintainOS solutions for plant managers, maintenance teams, factory owners, and multi-location operations.",
}

const solutions = [
  {
    icon: Building2,
    title: "For Plant Managers",
    description:
      "Gain complete visibility into maintenance operations. Make data-driven decisions with real-time dashboards and comprehensive reporting.",
    benefits: [
      "Executive dashboards with real-time KPIs",
      "Complete visibility across all operations",
      "Compliance management and audit-ready reports",
    ],
    href: "/solutions/plant-managers",
  },
  {
    icon: Users,
    title: "For Maintenance Teams",
    description:
      "Streamline daily tasks with mobile access, clear priorities, and all the information you need at your fingertips.",
    benefits: [
      "Mobile app for on-the-floor work",
      "Clear work order priorities",
      "Instant access to asset information",
    ],
    href: "/solutions/maintenance-teams",
  },
  {
    icon: Factory,
    title: "For Factory Owners",
    description: "Maximize ROI and protect equipment investments. Data-driven insights for smarter business decisions.",
    benefits: ["ROI tracking and cost visibility", "Extended equipment life", "Risk mitigation and compliance"],
    href: "/solutions/factory-owners",
  },
  {
    icon: Globe,
    title: "For Multi-Location Plants",
    description:
      "Standardize maintenance across all facilities. Centralized visibility with location-specific flexibility.",
    benefits: [
      "Centralized platform for all locations",
      "Cross-facility analytics and comparison",
      "Standardized processes and best practices",
    ],
    href: "/solutions/multi-location",
  },
]

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Solutions for Every Role</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              MaintainOS is designed to meet the unique needs of everyone involved in maintenance operations—from
              technicians on the shop floor to executives in the boardroom.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution.title} className="rounded-xl border border-border bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">{solution.title}</h2>
                <p className="mt-3 text-muted-foreground">{solution.description}</p>
                <ul className="mt-6 space-y-2">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-transparent" variant="outline" asChild>
                  <Link href={solution.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold">Not Sure Which Solution Is Right for You?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Our team will help you understand how MaintainOS can be configured to meet your specific needs.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Talk to an Expert
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
