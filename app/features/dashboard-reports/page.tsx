import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Maintenance Dashboard & Reports | MaintainOS",
  description:
    "Real-time KPIs, customizable dashboards, and detailed analytics. Make data-driven maintenance decisions.",
}

const features = [
  {
    title: "Real-Time Dashboards",
    description:
      "Live views of key maintenance metrics. See work order status, equipment health, and team productivity at a glance.",
  },
  {
    title: "Customizable KPIs",
    description: "Track the metrics that matter to your operation. MTTR, MTBF, PM compliance, wrench time, and more.",
  },
  {
    title: "Pre-Built Reports",
    description:
      "Library of industry-standard reports ready to use. Work order summaries, asset costs, inventory usage, and compliance reports.",
  },
  {
    title: "Custom Report Builder",
    description: "Create custom reports with drag-and-drop simplicity. Filter, group, and visualize data your way.",
  },
  {
    title: "Scheduled Reports",
    description: "Automate report delivery. Send daily, weekly, or monthly reports to stakeholders via email.",
  },
  {
    title: "Export & Integration",
    description: "Export data to Excel, PDF, or CSV. Integrate with business intelligence tools for advanced analysis.",
  },
]

const benefits = [
  "Make data-driven decisions about maintenance strategies and investments",
  "Identify trends and patterns that indicate potential equipment problems",
  "Demonstrate maintenance value to leadership with clear metrics",
  "Improve accountability with visibility into team and individual performance",
  "Reduce time spent on manual reporting and data collection",
]

const useCases = [
  {
    title: "Executive Reporting",
    description:
      "High-level dashboards for plant managers and executives. Focus on costs, uptime, and compliance metrics.",
  },
  {
    title: "Technician Performance",
    description: "Track work order completion rates, response times, and productivity metrics for maintenance teams.",
  },
  {
    title: "Asset Reliability",
    description: "Analyze failure patterns, MTBF, and maintenance costs by asset. Identify problematic equipment.",
  },
  {
    title: "Compliance Audits",
    description: "Generate reports for regulatory audits showing PM completion, safety inspections, and documentation.",
  },
]

export default function DashboardReportsPage() {
  return (
    <FeaturePageLayout
      iconName="BarChart3"
      title="Dashboard & Reports"
      subtitle="Insights That Drive Action"
      description="Transform maintenance data into actionable insights. Real-time dashboards and powerful reports give you visibility into every aspect of your maintenance operations."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
