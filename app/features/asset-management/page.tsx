import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Asset Management Software | MaintainOS",
  description:
    "Centralize all asset data including specifications, maintenance history, and documentation in one platform.",
}

const features = [
  {
    title: "Complete Asset Registry",
    description:
      "Maintain a comprehensive database of all equipment, machines, vehicles, and facilities. Include specifications, purchase info, and documentation.",
  },
  {
    title: "Asset Hierarchy",
    description:
      "Organize assets in parent-child relationships. Track components within machines and machines within production lines.",
  },
  {
    title: "Maintenance History",
    description:
      "Complete maintenance history for every asset. See all work orders, PMs, costs, and downtime in one view.",
  },
  {
    title: "Document Storage",
    description: "Attach manuals, warranty documents, safety data sheets, and photos directly to asset records.",
  },
  {
    title: "QR Code & Barcode Support",
    description:
      "Generate QR codes for assets. Technicians scan to instantly access asset details and create work orders.",
  },
  {
    title: "Depreciation Tracking",
    description: "Track asset value over time. Make informed decisions about repair vs. replace based on actual data.",
  },
]

const benefits = [
  "Reduce time searching for asset information by 80% with centralized data",
  "Improve decision-making with complete maintenance history and cost data",
  "Extend asset life through better visibility into maintenance needs",
  "Simplify audits with comprehensive documentation and history",
  "Enable data-driven capital planning with depreciation and reliability data",
]

const useCases = [
  {
    title: "Equipment Tracking",
    description:
      "Maintain complete records for production equipment including specifications, maintenance schedules, and repair history.",
  },
  {
    title: "Fleet Management",
    description:
      "Track vehicles, forklifts, and mobile equipment. Monitor usage, maintenance, and compliance requirements.",
  },
  {
    title: "Facility Management",
    description:
      "Manage building systems including HVAC, electrical, plumbing, and safety equipment across your facilities.",
  },
  {
    title: "Critical Asset Monitoring",
    description:
      "Flag critical assets for special attention. Set up alerts and ensure priority treatment for equipment essential to production.",
  },
]

export default function AssetManagementPage() {
  return (
    <FeaturePageLayout
      iconName="Box"
      title="Asset Management"
      subtitle="Know Every Asset Inside and Out"
      description="Centralize all asset information in one place. From specifications to maintenance history, everything you need to manage equipment effectively."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
