import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Work Order Management Software | MaintainOS",
  description:
    "Create, assign, and track work orders from request to completion. Full visibility into maintenance operations.",
}

const features = [
  {
    title: "Easy Work Order Creation",
    description:
      "Create work orders in seconds with intuitive forms. Include detailed instructions, attach photos, and link related assets.",
  },
  {
    title: "Smart Assignment",
    description:
      "Assign work orders based on technician skills, availability, and location. Balance workloads automatically.",
  },
  {
    title: "Priority Management",
    description:
      "Set priority levels and due dates. Critical work orders surface automatically and trigger notifications.",
  },
  {
    title: "Mobile Access",
    description:
      "Technicians receive, update, and complete work orders from their mobile devices. Works offline for areas with poor connectivity.",
  },
  {
    title: "Time & Cost Tracking",
    description:
      "Track labor hours, parts used, and total costs per work order. Understand true maintenance costs per asset.",
  },
  {
    title: "Approval Workflows",
    description:
      "Configure approval processes for high-cost repairs or specific asset types. Maintain control over maintenance spending.",
  },
]

const benefits = [
  "Complete work orders 2.5x faster with mobile access and streamlined workflows",
  "Eliminate lost or forgotten work requests with digital tracking",
  "Improve first-time fix rates with complete asset information on every work order",
  "Reduce administrative overhead by automating work order creation and assignment",
  "Gain visibility into technician productivity and workload distribution",
]

const useCases = [
  {
    title: "Corrective Maintenance",
    description:
      "When equipment breaks down, quickly create a work order with photos and descriptions. Assign to the right technician immediately.",
  },
  {
    title: "Maintenance Requests",
    description:
      "Operators submit requests through a simple portal. Maintenance managers review, prioritize, and convert to work orders.",
  },
  {
    title: "Emergency Response",
    description:
      "Critical failures trigger high-priority work orders with instant notifications. Track response times and resolution.",
  },
  {
    title: "Follow-Up Tasks",
    description: "Technicians can create follow-up work orders during repairs when they identify additional issues.",
  },
]

export default function WorkOrdersPage() {
  return (
    <FeaturePageLayout
      iconName="ClipboardList"
      title="Work Orders"
      subtitle="From Request to Resolution"
      description="Streamline your entire work order process. Create, assign, track, and complete maintenance tasks with full visibility at every step."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
