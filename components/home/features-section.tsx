"use client"

import Link from "next/link"
import {
  AnimatedGearCheckIcon,
  AnimatedWrenchIcon,
  AnimatedClipboardIcon,
  AnimatedAssetIcon,
  AnimatedInventoryIcon,
  AnimatedChartIcon,
  AnimatedUsersIcon,
  AnimatedCartIcon,
  AnimatedGaugeIcon,
  AnimatedLocationIcon,
} from "@/components/home/animated-icons"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    icon: AnimatedGearCheckIcon,
    title: "Preventive Maintenance Automation",
    description:
      "Automate maintenance schedules using time, usage, and meter data. Prevent breakdowns, reduce unplanned downtime, and extend asset life across the factory.",
    href: "/features/preventive-maintenance",
    bgImage: "/industrial-machinery-preventive-maintenance-techni.jpg",
  },
  {
    icon: AnimatedClipboardIcon,
    title: "Planned Maintenance Actions",
    description:
      "Create, assign, and track maintenance actions from request to completion. Full visibility into technician workloads and task priorities.",
    href: "/features/work-orders",
    bgImage: "/digital-work-order-clipboard-tablet-manufacturing-.jpg",
  },
  {
    icon: AnimatedAssetIcon,
    title: "Asset Management",
    description:
      "Centralize all asset data including specifications, manuals, warranty info, and complete maintenance history.",
    href: "/features/asset-management",
    bgImage: "/factory-equipment-assets-machinery-database-manage.jpg",
  },
  {
    icon: AnimatedInventoryIcon,
    title: "Inventory Management",
    description:
      "Track spare parts across locations. Set reorder points, manage vendors, and never experience stockouts again.",
    href: "/features/parts-inventory",
    bgImage: "/spare-parts-warehouse-inventory-shelves-manufactur.jpg",
  },
  {
    icon: AnimatedChartIcon,
    title: "Dashboard & Reports",
    description:
      "Real-time KPIs, customizable dashboards, and detailed reports. Make data-driven decisions about your maintenance operations.",
    href: "/features/dashboard-reports",
    bgImage: "/analytics-dashboard-charts-graphs-kpi-metrics-manu.jpg",
  },
  {
    icon: AnimatedUsersIcon,
    title: "Vendor Management",
    description:
      "Manage vendor contacts, contracts, and performance. Streamline communication and track service history.",
    href: "/features/vendors",
    bgImage: "/vendor-supplier-partnership-business-handshake-ind.jpg",
  },
  {
    icon: AnimatedCartIcon,
    title: "Purchase Orders",
    description:
      "Create and approve purchase orders. Track spending, manage budgets, and integrate with your existing procurement systems.",
    href: "/features/purchase-orders",
    bgImage: "/purchase-order-document-procurement-approval-workf.jpg",
  },
  {
    icon: AnimatedGaugeIcon,
    title: "Meters",
    description:
      "Track runtime hours, production cycles, or any usage metric. Trigger maintenance based on actual equipment usage.",
    href: "/features/meters",
    bgImage: "/industrial-meter-gauge-equipment-monitoring-runtim.jpg",
  },
  {
    icon: AnimatedLocationIcon,
    title: "Locations",
    description:
      "Organize assets and work orders by location. Perfect for multi-site operations with complex facility structures.",
    href: "/features/locations",
    bgImage: "/factory-floor-plan-multiple-locations-facility-map.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function FeaturesSection() {
  return (
    <section className="border-b border-border py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Manage Maintenance</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete CMMS platform designed specifically for manufacturing plants, factories, and industrial
            facilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Link
                href={feature.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition-all hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
              >
                {/* Background Image with Heavy Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={feature.bgImage || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover opacity-40 transition-opacity group-hover:opacity-50"
                  />
                  {/* Charcoal Overlay - Gradient to ensure text readability while showing image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/60" />
                </div>

                {/* Content wrapper */}
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/50 backdrop-blur-sm ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 group-hover:ring-amber-500/50"
                  >
                    <feature.icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-100">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{feature.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
