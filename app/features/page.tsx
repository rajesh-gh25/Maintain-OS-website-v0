import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  ClipboardList,
  Box,
  Package,
  BarChart3,
  Users,
  ShoppingCart,
  Gauge,
  MapPin,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Features | MaintainOS CMMS",
  description:
    "Explore all MaintainOS features: Preventive Maintenance, Work Orders, Asset Management, Inventory, and more.",
}

const features = [
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Schedule and automate maintenance tasks to prevent equipment failures before they happen.",
    href: "/features/preventive-maintenance",
  },
  {
    icon: ClipboardList,
    title: "Work Orders",
    description: "Create, assign, and track work orders from request to completion with full visibility.",
    href: "/features/work-orders",
  },
  {
    icon: Box,
    title: "Asset Management",
    description: "Centralize all asset data, specifications, documentation, and maintenance history.",
    href: "/features/asset-management",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Track spare parts, manage stock levels, and eliminate stockouts with smart reordering.",
    href: "/features/parts-inventory",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reports",
    description: "Real-time KPIs, customizable dashboards, and detailed analytics for data-driven decisions.",
    href: "/features/dashboard-reports",
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Manage vendor relationships, contracts, and performance in one central location.",
    href: "/features/vendors",
  },
  {
    icon: ShoppingCart,
    title: "Purchase Orders",
    description: "Streamline procurement with integrated PO creation, approval workflows, and tracking.",
    href: "/features/purchase-orders",
  },
  {
    icon: Gauge,
    title: "Meters",
    description: "Track equipment usage and trigger maintenance based on actual runtime and cycles.",
    href: "/features/meters",
  },
  {
    icon: MapPin,
    title: "Locations",
    description: "Organize assets and work orders by location for multi-site and complex facilities.",
    href: "/features/locations",
  },
]

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Powerful Features for Modern Maintenance</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              MaintainOS provides everything you need to manage maintenance operations efficiently. Explore our
              comprehensive feature set designed specifically for manufacturing plants and industrial facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{feature.title}</h2>
                <p className="mt-3 text-muted-foreground">{feature.description}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold">See All Features in Action</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Schedule a personalized demo to see how MaintainOS features work together to transform your maintenance
              operations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
