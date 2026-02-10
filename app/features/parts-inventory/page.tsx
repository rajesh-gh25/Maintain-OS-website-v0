import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Inventory Management | MaintainOS",
  description:
    "Track spare parts, manage stock levels, and eliminate stockouts. Integrated inventory management for maintenance teams.",
}

const features = [
  {
    title: "Real-Time Inventory Tracking",
    description:
      "Track stock levels across all locations in real time. Know exactly what parts you have and where they are.",
  },
  {
    title: "Automatic Reorder Points",
    description:
      "Set minimum stock levels. System alerts when inventory drops below threshold and can auto-generate purchase requests.",
  },
  {
    title: "Parts-to-Asset Linking",
    description:
      "Associate spare parts with specific assets. Technicians see compatible parts when working on equipment.",
  },
  {
    title: "Multi-Location Support",
    description:
      "Manage inventory across multiple storerooms and facilities. Transfer parts between locations as needed.",
  },
  {
    title: "Cost Tracking",
    description:
      "Track part costs, price history, and total inventory value. Understand spare parts impact on maintenance budgets.",
  },
  {
    title: "Barcode Scanning",
    description:
      "Use barcode scanning for quick check-in/check-out. Reduce errors and speed up inventory transactions.",
  },
]

const benefits = [
  "Eliminate stockouts that cause extended equipment downtime",
  "Reduce excess inventory and carrying costs with data-driven stock levels",
  "Speed up repairs by ensuring parts are available when needed",
  "Improve purchasing decisions with usage data and cost tracking",
  "Save time with automated reorder notifications and streamlined transactions",
]

const useCases = [
  {
    title: "Spare Parts Management",
    description:
      "Track commonly replaced parts like bearings, belts, filters, and seals. Ensure availability for preventive maintenance.",
  },
  {
    title: "Critical Spares",
    description:
      "Identify and maintain stock of parts critical to production. Set higher reorder points and monitor closely.",
  },
  {
    title: "Consumables Tracking",
    description: "Manage lubricants, cleaning supplies, and other consumables used in maintenance operations.",
  },
  {
    title: "Tool Management",
    description:
      "Track specialized tools and equipment used by maintenance teams. Know who has what and when it's due back.",
  },
]

export default function PartsInventoryPage() {
  return (
    <FeaturePageLayout
      iconName="Package"
      title="Inventory Management"
      subtitle="The Right Part. The Right Time."
      description="Manage spare parts inventory with precision. Track stock levels, automate reordering, and ensure parts are always available when your technicians need them."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
