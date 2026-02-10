import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Preventive Maintenance Software | MaintainOS",
  description:
    "Schedule and automate preventive maintenance tasks. Reduce equipment failures, extend asset life, and eliminate reactive repairs.",
}

const features = [
  {
    title: "Automated PM Scheduling",
    description:
      "Set up recurring maintenance tasks based on time intervals (daily, weekly, monthly) or meter readings (runtime hours, production cycles).",
  },
  {
    title: "Maintenance Calendars",
    description:
      "Visual calendar view shows all scheduled maintenance across your facility. Easily identify conflicts and balance technician workloads.",
  },
  {
    title: "Task Templates",
    description: "Create detailed task checklists and procedures. Ensure consistency across technicians and shifts.",
  },
  {
    title: "Automatic Work Order Generation",
    description: "PM schedules automatically create work orders when due. No manual intervention required.",
  },
  {
    title: "Compliance Tracking",
    description:
      "Track completion rates and ensure regulatory compliance. Generate audit reports with complete maintenance history.",
  },
  {
    title: "Resource Allocation",
    description: "Assign technicians, parts, and tools to PM tasks. System warns when resources are unavailable.",
  },
]

const benefits = [
  "Reduce unplanned downtime by up to 45% by catching issues before they cause failures",
  "Extend equipment lifespan by 20-40% through consistent preventive care",
  "Lower maintenance costs by shifting from expensive emergency repairs to planned maintenance",
  "Improve regulatory compliance with documented maintenance schedules and completion records",
  "Increase technician productivity by eliminating paper-based scheduling",
]

const useCases = [
  {
    title: "Time-Based PM",
    description:
      "Schedule oil changes every 30 days, filter replacements weekly, or annual safety inspections. Perfect for equipment with predictable maintenance needs.",
  },
  {
    title: "Meter-Based PM",
    description:
      "Trigger maintenance based on actual usage—runtime hours, production cycles, or mileage. Ideal for equipment with variable usage patterns.",
  },
  {
    title: "Seasonal Maintenance",
    description:
      "Set up annual tasks for HVAC servicing, winterization procedures, or pre-production-season equipment preparation.",
  },
  {
    title: "Multi-Asset PM",
    description:
      "Create PM routes that cover multiple assets in a single work order. Efficient for technicians servicing related equipment.",
  },
]

export default function PreventiveMaintenancePage() {
  return (
    <FeaturePageLayout
      iconName="Wrench"
      title="Preventive Maintenance"
      subtitle="Stop Fixing. Start Preventing."
      description="Schedule, automate, and track preventive maintenance tasks to eliminate equipment failures before they happen. Transform your maintenance strategy from reactive to proactive."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
