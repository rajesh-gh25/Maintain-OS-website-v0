import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Quote } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Challenge {
  title: string
  description: string
}

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

interface SolutionPageProps {
  title: string
  subtitle: string
  description: string
  challenges: Challenge[]
  features: Feature[]
  benefits: string[]
  testimonial: Testimonial
  ctaTitle: string
  ctaDescription: string
}

export function SolutionPageLayout({
  title,
  subtitle,
  description,
  challenges,
  features,
  benefits,
  testimonial,
  ctaTitle,
  ctaDescription,
}: SolutionPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 text-sm font-medium text-primary">{subtitle}</div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
              <p className="mt-6 text-lg text-muted-foreground">{description}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/demo">
                    Get a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="aspect-video rounded-lg bg-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Challenges We Solve</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            We understand the unique challenges you face. Here's how MaintainOS addresses them.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-lg font-bold text-destructive">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{challenge.title}</h3>
                <p className="mt-2 text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border bg-card/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Features That Matter to You</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl border border-border bg-card p-8">
                <div className="relative">
                  <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/20" />
                  <p className="text-lg leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold">Why MaintainOS</h2>
              <p className="mt-4 text-muted-foreground">
                See the measurable impact MaintainOS delivers for professionals like you.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold">{ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{ctaDescription}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
