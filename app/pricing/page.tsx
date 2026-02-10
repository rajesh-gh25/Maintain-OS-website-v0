import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Pricing | MaintainOS",
  description: "Simple, transparent pricing for manufacturing CMMS. Choose the plan that fits your operation.",
}

const plans = [
  {
    name: "Starter",
    description: "For small plants getting started with digital maintenance management.",
    price: "$299",
    period: "/month",
    highlight: false,
    features: [
      { text: "Up to 250 assets", tooltip: "Track up to 250 pieces of equipment" },
      { text: "Up to 10 users", tooltip: "Includes technicians and managers" },
      { text: "Work order management", tooltip: "Create, assign, and track work orders" },
      { text: "Preventive maintenance", tooltip: "Schedule time-based PM tasks" },
      { text: "Basic reporting", tooltip: "Standard reports and dashboards" },
      { text: "Mobile app access", tooltip: "iOS and Android apps included" },
      { text: "Email support", tooltip: "Response within 24 hours" },
    ],
    cta: "Start Free Trial",
    ctaHref: "/demo",
  },
  {
    name: "Professional",
    description: "For growing plants that need advanced features and better insights.",
    price: "$699",
    period: "/month",
    highlight: true,
    popular: true,
    features: [
      { text: "Up to 1,000 assets", tooltip: "Track up to 1,000 pieces of equipment" },
      { text: "Up to 50 users", tooltip: "Includes all user types" },
      { text: "Everything in Starter", tooltip: "All Starter features included" },
      { text: "Parts inventory management", tooltip: "Track spare parts and supplies" },
      { text: "Meter-based maintenance", tooltip: "Trigger PM by usage metrics" },
      { text: "Advanced reporting", tooltip: "Custom reports and analytics" },
      { text: "Purchase order management", tooltip: "Create and track POs" },
      { text: "API access", tooltip: "Integrate with other systems" },
      { text: "Priority support", tooltip: "Response within 4 hours" },
    ],
    cta: "Start Free Trial",
    ctaHref: "/demo",
  },
  {
    name: "Enterprise",
    description: "For large operations and multi-site facilities with complex requirements.",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      { text: "Unlimited assets", tooltip: "No limits on tracked equipment" },
      { text: "Unlimited users", tooltip: "Add as many users as needed" },
      { text: "Everything in Professional", tooltip: "All Professional features included" },
      { text: "Multi-location support", tooltip: "Manage multiple facilities" },
      { text: "SSO/SAML integration", tooltip: "Enterprise authentication" },
      { text: "Custom integrations", tooltip: "ERP, EAM, and other systems" },
      { text: "Dedicated success manager", tooltip: "Your dedicated point of contact" },
      { text: "On-site training", tooltip: "In-person training available" },
      { text: "SLA guarantee", tooltip: "99.9% uptime guarantee" },
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
]

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "What's included in implementation?",
    answer:
      "All plans include guided onboarding, data import assistance, and training resources. Enterprise plans include dedicated implementation support.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, annual billing saves you 20% compared to monthly billing. Contact us for details.",
  },
]

export default function PricingPage() {
  return (
    <TooltipProvider>
      <>
        <section className="border-b border-border py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple, Transparent Pricing</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Choose the plan that fits your operation. All plans include a 14-day free trial with full access to
                features.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-xl border bg-card p-8 ${
                    plan.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h2 className="text-xl font-semibold">{plan.name}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm">{feature.text}</span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 shrink-0 cursor-help text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full" variant={plan.highlight ? "default" : "outline"} asChild>
                    <Link href={plan.ctaHref}>
                      {plan.cta}
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
            <h2 className="text-center text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="mx-auto mt-12 grid max-w-3xl gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
                View all FAQs
                <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <h2 className="text-3xl font-bold">Need Help Choosing?</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Our team will help you select the right plan based on your facility size, requirements, and budget.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/demo">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    </TooltipProvider>
  )
}
