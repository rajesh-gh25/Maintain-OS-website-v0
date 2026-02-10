import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | MaintainOS",
  description: "Learn about MaintainOS - our mission to transform maintenance management for manufacturing industries.",
}

const values = [
  {
    icon: Target,
    title: "Customer Success",
    description:
      "Your success is our success. We measure ourselves by the outcomes our customers achieve with MaintainOS.",
  },
  {
    icon: Heart,
    title: "Simplicity",
    description:
      "Maintenance is complex enough. We build software that's powerful yet intuitive, removing barriers to adoption.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with maintenance professionals to understand their challenges and build solutions that actually help.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We're committed to building the best CMMS on the market. We continuously improve based on customer feedback and industry needs.",
  },
]

const stats = [
  { value: "500+", label: "Manufacturing Plants" },
  { value: "50,000+", label: "Users Worldwide" },
  { value: "10M+", label: "Work Orders Completed" },
  { value: "99.9%", label: "Uptime" },
]

const team = [
  {
    name: "Sarah Mitchell",
    title: "CEO & Co-Founder",
    bio: "Former plant manager with 15 years in manufacturing. Founded MaintainOS to solve the problems she experienced firsthand.",
  },
  {
    name: "David Chen",
    title: "CTO & Co-Founder",
    bio: "Software architect with deep expertise in industrial IoT and enterprise systems. Previously led engineering at a Fortune 500 manufacturer.",
  },
  {
    name: "Michael Torres",
    title: "VP of Product",
    bio: "Product leader focused on user experience. Spent years on the factory floor as a maintenance technician before moving to tech.",
  },
  {
    name: "Jennifer Park",
    title: "VP of Customer Success",
    bio: "Dedicated to ensuring every customer achieves their maintenance goals. Background in industrial consulting and operations.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Transforming Maintenance Management</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We started MaintainOS because we lived the frustrations of outdated maintenance systems. Paper work
              orders, spreadsheet tracking, and reactive firefighting—we knew there had to be a better way.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  MaintainOS was founded in 2019 by a team of manufacturing veterans and software engineers who shared a
                  common frustration: existing CMMS solutions were either too complex, too expensive, or simply
                  outdated.
                </p>
                <p>
                  Our founders had experienced firsthand the chaos of managing maintenance with paper systems and clunky
                  legacy software. They saw technicians waste hours on paperwork instead of fixing equipment. They
                  watched preventable failures cause costly downtime.
                </p>
                <p>
                  We built MaintainOS to be the CMMS we always wanted—modern, intuitive, and powerful. A system that
                  technicians actually enjoy using and that gives managers the visibility they need.
                </p>
                <p>
                  Today, MaintainOS serves over 500 manufacturing plants worldwide, helping them reduce downtime,
                  improve productivity, and transform their maintenance operations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-border bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To empower manufacturing plants with modern, intuitive maintenance management tools that reduce
                downtime, improve productivity, and make maintenance professionals' lives easier.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe every plant—regardless of size or budget—deserves access to world-class maintenance
                management capabilities.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">Our Vision</h2>
              <p className="mt-4 text-muted-foreground">
                A world where equipment failures are predicted and prevented, where maintenance teams are proactive
                rather than reactive, and where manufacturing plants operate at peak efficiency.
              </p>
              <p className="mt-4 text-muted-foreground">
                We envision maintenance as a strategic advantage rather than a cost center—a function that drives
                competitive advantage for manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Our Values</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            These principles guide everything we do at MaintainOS.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Leadership Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Meet the team driving MaintainOS forward.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="border-b border-border bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mt-6 text-3xl font-bold">Global Presence</h2>
              <p className="mt-4 text-muted-foreground">
                MaintainOS serves manufacturing plants across North America, Europe, Asia, and Australia. Headquartered
                in Austin, Texas, with offices in London and Singapore, we provide local support with global
                capabilities.
              </p>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                <li>• Headquarters: Austin, Texas, USA</li>
                <li>• European Office: London, UK</li>
                <li>• Asia-Pacific Office: Singapore</li>
                <li>• Support available in 6 languages</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="aspect-[4/3] rounded-lg bg-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold">Join the MaintainOS Community</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Discover why hundreds of manufacturing plants trust MaintainOS for their maintenance operations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
