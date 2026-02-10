import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Purchase Order Management | MaintainOS",
  description: "Create, approve, and track purchase orders. Streamline procurement for maintenance parts and services.",
}

const features = [
  {
    title: "Easy PO Creation",
    description:
      "Create purchase orders directly from inventory reorder alerts or work orders. Pre-populate with vendor and part information.",
  },
  {
    title: "Approval Workflows",
    description:
      "Configure multi-level approval processes based on amount, type, or department. Route to the right approvers automatically.",
  },
  {
    title: "Budget Tracking",
    description: "Track spending against maintenance budgets in real time. Get alerts when approaching budget limits.",
  },
  {
    title: "Receiving & Matching",
    description: "Record received items and match against purchase orders. Flag discrepancies for resolution.",
  },
  {
    title: "Vendor Integration",
    description: "Send POs directly to vendors via email. Track acknowledgment and expected delivery dates.",
  },
  {
    title: "Spend Analysis",
    description: "Analyze spending by vendor, category, asset, or department. Identify opportunities for cost savings.",
  },
]

const benefits = [
  "Streamline procurement process with integrated PO management",
  "Maintain budget control with real-time spending visibility",
  "Reduce unauthorized spending with approval workflows",
  "Improve cash flow forecasting with pending PO tracking",
  "Identify cost savings opportunities with spend analysis",
]

const useCases = [
  {
    title: "Parts Procurement",
    description: "Create POs for spare parts when inventory drops below reorder points. Track from order to receiving.",
  },
  {
    title: "Service Contracts",
    description: "Manage purchase orders for vendor services, equipment rentals, and contract work.",
  },
  {
    title: "Emergency Purchases",
    description: "Fast-track approval for urgent parts needed to restore production equipment.",
  },
  {
    title: "Capital Equipment",
    description: "Manage purchase requests for new equipment with multi-level approval workflows.",
  },
]

export default function PurchaseOrdersPage() {
  return (
    <FeaturePageLayout
      iconName="ShoppingCart"
      title="Purchase Orders"
      subtitle="Procurement Made Simple"
      description="Streamline your maintenance procurement process. Create, approve, and track purchase orders with complete visibility into spending and deliveries."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
