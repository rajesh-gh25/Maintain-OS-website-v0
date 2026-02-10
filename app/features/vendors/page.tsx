import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Vendor Management Software | MaintainOS",
  description:
    "Manage vendor relationships, contracts, and performance. Streamline communication with external service providers.",
}

const features = [
  {
    title: "Vendor Database",
    description:
      "Centralize vendor contact information, contracts, certifications, and specializations in one searchable database.",
  },
  {
    title: "Contract Management",
    description:
      "Track service contracts, warranties, and SLAs. Get alerts before contracts expire or renewals are due.",
  },
  {
    title: "Performance Tracking",
    description: "Monitor vendor performance metrics including response times, completion rates, and quality scores.",
  },
  {
    title: "Service History",
    description:
      "Complete history of vendor interactions and work performed. Reference past service for future decisions.",
  },
  {
    title: "Vendor Portal",
    description: "Give vendors secure access to view and update their assigned work orders. Streamline communication.",
  },
  {
    title: "Insurance & Compliance",
    description: "Track vendor insurance certificates, safety certifications, and compliance documents.",
  },
]

const benefits = [
  "Reduce vendor management overhead with centralized information",
  "Improve vendor selection with performance data and history",
  "Ensure compliance with documented certifications and insurance",
  "Speed up service by giving vendors direct access to work orders",
  "Negotiate better contracts with historical cost and performance data",
]

const useCases = [
  {
    title: "Contract Maintenance",
    description: "Manage relationships with vendors providing ongoing service contracts for specialized equipment.",
  },
  {
    title: "Emergency Service Providers",
    description: "Maintain list of qualified vendors for emergency repairs outside normal capabilities.",
  },
  {
    title: "Parts Suppliers",
    description: "Track spare parts vendors including pricing, lead times, and quality ratings.",
  },
  {
    title: "Specialized Services",
    description: "Manage vendors for calibration, inspections, certifications, and other specialized services.",
  },
]

export default function VendorsPage() {
  return (
    <FeaturePageLayout
      iconName="Users"
      title="Vendor Management"
      subtitle="Better Vendors. Better Results."
      description="Manage all your vendor relationships in one place. Track contracts, monitor performance, and streamline communication with external service providers."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
