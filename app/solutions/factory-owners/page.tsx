import type { Metadata } from "next"
import { TrendingUp, DollarSign, Shield, LineChart, Building, Award } from "lucide-react"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

export const metadata: Metadata = {
  title: "CMMS for Factory Owners | MaintainOS",
  description:
    "Maximize ROI and protect your equipment investments. Data-driven insights for smarter business decisions.",
}

const challenges = [
  {
    title: "Equipment Investment Protection",
    description:
      "Manufacturing equipment represents millions in capital investment. Poor maintenance practices shorten asset life and waste money.",
  },
  {
    title: "Hidden Costs",
    description:
      "Maintenance costs are often buried in operations. Without visibility, it's impossible to optimize spending or identify waste.",
  },
  {
    title: "Production Reliability",
    description:
      "Customer commitments depend on reliable production. Unexpected equipment failures mean missed deliveries and damaged relationships.",
  },
  {
    title: "Competitive Pressure",
    description:
      "Competitors with better operational efficiency can undercut your pricing. Every percentage of uptime improvement matters.",
  },
  {
    title: "Scaling Challenges",
    description:
      "As your operation grows, maintenance complexity increases exponentially. Manual systems can't scale with your business.",
  },
  {
    title: "Risk Management",
    description:
      "Equipment failures can cause safety incidents, environmental issues, and regulatory violations with serious consequences.",
  },
]

const features = [
  {
    icon: TrendingUp,
    title: "ROI Tracking",
    description:
      "See clear return on your maintenance investments. Track cost savings from prevented downtime and extended asset life.",
  },
  {
    icon: DollarSign,
    title: "Total Cost Visibility",
    description: "Understand complete maintenance costs including labor, parts, contractors, and overhead per asset.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description:
      "Proactive maintenance reduces safety incidents, environmental risks, and regulatory compliance issues.",
  },
  {
    icon: LineChart,
    title: "Predictive Insights",
    description: "Use maintenance data to predict equipment failures and plan capital expenditures strategically.",
  },
  {
    icon: Building,
    title: "Multi-Facility Support",
    description:
      "Standardize maintenance practices across all your facilities. Compare performance and share best practices.",
  },
  {
    icon: Award,
    title: "Operational Excellence",
    description: "Drive continuous improvement with data. Benchmark against industry standards and your own history.",
  },
]

const benefits = [
  "Extend equipment life by 20-40% with proper preventive maintenance",
  "Reduce overall maintenance costs by 15-25% through optimization",
  "Improve production reliability to meet customer commitments",
  "Make informed capital expenditure decisions with real data",
  "Scale operations without proportionally increasing maintenance overhead",
  "Reduce safety, environmental, and compliance risks",
]

const testimonial = {
  quote:
    "As a factory owner, I need to see the big picture. MaintainOS gives me visibility into maintenance across all three of my facilities. We've extended the useful life of critical equipment by years and our maintenance costs per unit produced have dropped significantly.",
  author: "Thomas Anderson",
  title: "Owner & CEO",
  company: "Anderson Manufacturing Group",
}

export default function FactoryOwnersPage() {
  return (
    <SolutionPageLayout
      title="For Factory Owners"
      subtitle="Solutions"
      description="Protect your equipment investments and maximize operational efficiency. MaintainOS provides the visibility and insights you need to make smart business decisions about maintenance, capital expenditures, and operational improvements."
      challenges={challenges}
      features={features}
      benefits={benefits}
      testimonial={testimonial}
      ctaTitle="Maximize Your Equipment ROI"
      ctaDescription="See how factory owners use MaintainOS to protect their investments and improve operational efficiency."
    />
  )
}
