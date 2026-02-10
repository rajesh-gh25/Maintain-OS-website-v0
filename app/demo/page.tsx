import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Demo | MaintainOS",
  description:
    "Schedule a personalized demo of MaintainOS. See how our CMMS can transform your maintenance operations.",
}

const benefits = [
  "See the platform in action with your use cases",
  "Get pricing tailored to your needs",
  "Ask questions to a maintenance expert",
  "Learn about implementation and onboarding",
  "No commitment required",
]

export default function DemoPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Value Prop */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">See MaintainOS in Action</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Schedule a personalized demo with one of our maintenance experts. We'll show you how MaintainOS can help
              reduce downtime, improve productivity, and transform your maintenance operations.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-xl border border-border bg-card p-6">
              <p className="text-lg font-semibold">
                "The demo was incredibly helpful. They understood our challenges and showed us exactly how MaintainOS
                would solve them."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  MC
                </div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Plant Manager, Precision Manufacturing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold">Request Your Demo</h2>
            <p className="mt-2 text-muted-foreground">Fill out the form and we'll be in touch within 24 hours.</p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Your Company" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Job Title *</Label>
                <Input id="title" placeholder="Plant Manager" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Number of Assets</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-100">1-100</SelectItem>
                    <SelectItem value="101-500">101-500</SelectItem>
                    <SelectItem value="501-1000">501-1,000</SelectItem>
                    <SelectItem value="1001-5000">1,001-5,000</SelectItem>
                    <SelectItem value="5000+">5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">General Manufacturing</SelectItem>
                    <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="energy">Energy & Utilities</SelectItem>
                    <SelectItem value="packaging">Packaging</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Request Demo
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
