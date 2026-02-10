import type { Metadata } from "next"
import { BarChart3, Eye, Clock, DollarSign, Shield, Users } from "lucide-react"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

export const metadata: Metadata = {
  title: "CMMS for Plant Managers | MaintainOS",
  description:
    "Gain complete visibility into maintenance operations. Make data-driven decisions with real-time insights and comprehensive reporting.",
}

const challenges = [
  {
    title: "Lack of Visibility",
    description:
      "You can't manage what you can't see. Spreadsheets and paper systems leave you in the dark about maintenance status and equipment health.",
  },
  {
    title: "Unexpected Downtime",
    description:
      "Equipment failures disrupt production schedules, miss delivery dates, and cost thousands per hour in lost productivity.",
  },
  {
    title: "Budget Pressures",
    description:
      "Leadership demands lower maintenance costs while expecting higher equipment uptime. You need data to justify investments.",
  },
  {
    title: "Compliance Risks",
    description:
      "Regulatory requirements demand documented maintenance history. Paper records make audits stressful and time-consuming.",
  },
  {
    title: "Team Accountability",
    description:
      "Without clear metrics, it's difficult to identify performance issues or recognize high-performing team members.",
  },
  {
    title: "Reactive Culture",
    description:
      "Your team spends too much time fighting fires instead of preventing them. Breaking the reactive cycle seems impossible.",
  },
]

const features = [
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    description: "Real-time KPIs including uptime, MTTR, PM compliance, and maintenance costs at a glance.",
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    description: "See every work order, every asset, and every maintenance activity across your entire facility.",
  },
  {
    icon: Clock,
    title: "Downtime Tracking",
    description: "Track and analyze downtime by cause, asset, and shift. Identify patterns and root causes.",
  },
  {
    icon: DollarSign,
    title: "Cost Analysis",
    description:
      "Understand true maintenance costs per asset, per line, and per product. Justify budget requests with data.",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Automated documentation, scheduled inspections, and audit-ready reports for regulatory compliance.",
  },
  {
    icon: Users,
    title: "Team Performance",
    description: "Track technician productivity, response times, and completion rates. Recognize top performers.",
  },
]

const benefits = [
  "Reduce unplanned downtime by up to 45% with preventive maintenance",
  "Cut maintenance costs by 15-25% through optimized scheduling and inventory",
  "Pass audits confidently with complete, automated documentation",
  "Make faster decisions with real-time data instead of gut feelings",
  "Demonstrate clear ROI to leadership with measurable metrics",
  "Build a proactive maintenance culture that prevents problems",
]

const testimonial = {
  quote:
    "Before MaintainOS, I spent hours compiling maintenance reports for leadership. Now I have real-time dashboards that show exactly where we stand. Our unplanned downtime dropped 38% in the first year.",
  author: "Robert Martinez",
  title: "Plant Manager",
  company: "Industrial Components Inc.",
}

export default function PlantManagersPage() {
  return (
    <SolutionPageLayout
      title="For Plant Managers"
      subtitle="Solutions"
      description="Get the visibility and control you need to manage maintenance operations effectively. Real-time dashboards, comprehensive reporting, and data-driven insights help you reduce downtime, control costs, and demonstrate value to leadership."
      challenges={challenges}
      features={features}
      benefits={benefits}
      testimonial={testimonial}
      ctaTitle="See How Plant Managers Use MaintainOS"
      ctaDescription="Schedule a demo to see how MaintainOS provides the visibility and control you need to transform your maintenance operations."
    />
  )
}
