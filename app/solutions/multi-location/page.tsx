import type { Metadata } from "next"
import { Globe, GitBranch, BarChart3, Users, Lock, Zap } from "lucide-react"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

export const metadata: Metadata = {
  title: "CMMS for Multi-Location Plants | MaintainOS",
  description:
    "Standardize maintenance across all facilities. Centralized visibility with location-specific flexibility.",
}

const challenges = [
  {
    title: "Inconsistent Practices",
    description:
      "Different facilities develop their own maintenance approaches. Best practices aren't shared, and quality varies widely.",
  },
  {
    title: "Siloed Information",
    description:
      "Each location maintains separate systems and records. Comparing performance or sharing insights is nearly impossible.",
  },
  {
    title: "Resource Imbalances",
    description:
      "Some facilities are overstaffed while others are understaffed. Without visibility, resources can't be allocated optimally.",
  },
  {
    title: "Vendor Fragmentation",
    description:
      "Each location negotiates separately with vendors. You lose volume discounts and struggle with inconsistent service levels.",
  },
  {
    title: "Reporting Complexity",
    description:
      "Compiling maintenance reports across facilities requires manual data aggregation that's time-consuming and error-prone.",
  },
  {
    title: "Training Challenges",
    description: "Training maintenance staff is difficult when each facility uses different procedures and systems.",
  },
]

const features = [
  {
    icon: Globe,
    title: "Centralized Platform",
    description:
      "One platform for all locations. Centralized visibility with location-specific configuration and permissions.",
  },
  {
    icon: GitBranch,
    title: "Standardized Processes",
    description:
      "Create standard procedures and PM schedules that apply across all facilities. Ensure consistency everywhere.",
  },
  {
    icon: BarChart3,
    title: "Cross-Facility Analytics",
    description: "Compare performance across locations. Identify top performers and opportunities for improvement.",
  },
  {
    icon: Users,
    title: "Resource Optimization",
    description: "See technician workloads across facilities. Balance resources and share expertise where needed.",
  },
  {
    icon: Lock,
    title: "Granular Permissions",
    description:
      "Control access by location, role, and function. Local teams see what they need; leadership sees everything.",
  },
  {
    icon: Zap,
    title: "Best Practice Sharing",
    description: "When one facility solves a problem, share the solution across all locations instantly.",
  },
]

const benefits = [
  "Standardize maintenance practices across all facilities",
  "Gain centralized visibility while maintaining local flexibility",
  "Compare facility performance with consistent metrics",
  "Leverage volume purchasing power with consolidated vendor management",
  "Reduce training time with standardized procedures",
  "Scale your operation without proportionally increasing overhead",
]

const testimonial = {
  quote:
    "Managing maintenance across 8 facilities used to require constant travel and phone calls. Now I can see everything from my dashboard. We've standardized our processes and our best-performing facility's practices are now implemented everywhere.",
  author: "Linda Park",
  title: "VP of Operations",
  company: "National Processing Industries",
}

export default function MultiLocationPage() {
  return (
    <SolutionPageLayout
      title="For Multi-Location Plants"
      subtitle="Solutions"
      description="Manage maintenance across all your facilities from a single platform. Standardize processes, compare performance, and share best practices while giving each location the flexibility they need."
      challenges={challenges}
      features={features}
      benefits={benefits}
      testimonial={testimonial}
      ctaTitle="One Platform for All Your Facilities"
      ctaDescription="See how multi-location operations use MaintainOS to standardize maintenance and improve performance across all facilities."
    />
  )
}
