import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Meter-Based Maintenance | MaintainOS",
  description: "Track equipment usage and trigger maintenance based on actual runtime, cycles, or other metrics.",
}

const features = [
  {
    title: "Multiple Meter Types",
    description:
      "Track any measurable usage: runtime hours, production cycles, mileage, energy consumption, or custom metrics.",
  },
  {
    title: "Automatic Readings",
    description: "Integrate with equipment sensors for automatic meter updates. Eliminate manual data entry.",
  },
  {
    title: "Meter-Based Triggers",
    description: "Set maintenance triggers based on meter readings. Generate work orders when thresholds are reached.",
  },
  {
    title: "Usage History",
    description: "Track meter readings over time. Analyze usage patterns and predict future maintenance needs.",
  },
  {
    title: "Multi-Meter Assets",
    description: "Assign multiple meters to single assets. Track runtime and cycles simultaneously.",
  },
  {
    title: "Mobile Updates",
    description: "Technicians can update meter readings from the mobile app during rounds or maintenance tasks.",
  },
]

const benefits = [
  "Optimize maintenance timing based on actual equipment usage",
  "Reduce over-maintenance of underutilized equipment",
  "Catch high-use equipment before it fails from excessive wear",
  "Improve maintenance cost predictability with usage-based scheduling",
  "Enable condition-based maintenance strategies",
]

const useCases = [
  {
    title: "Runtime-Based PM",
    description: "Schedule maintenance based on operating hours. Common for motors, pumps, and rotating equipment.",
  },
  {
    title: "Cycle Counting",
    description: "Track production cycles for presses, injection molding machines, and other cyclic equipment.",
  },
  {
    title: "Vehicle Mileage",
    description:
      "Schedule fleet maintenance based on miles driven. Ensure compliance with manufacturer recommendations.",
  },
  {
    title: "Energy Monitoring",
    description: "Track energy consumption as an indicator of equipment health. Spot efficiency degradation early.",
  },
]

export default function MetersPage() {
  return (
    <FeaturePageLayout
      iconName="Gauge"
      title="Meters"
      subtitle="Maintain by Usage, Not Just Time"
      description="Track equipment usage and trigger maintenance at the optimal time. Meter-based maintenance ensures you service equipment when it actually needs it."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
