import type { Metadata } from "next"
import { Smartphone, ClipboardList, Search, Bell, Wrench, MessageSquare } from "lucide-react"
import { SolutionPageLayout } from "@/components/solutions/solution-page-layout"

export const metadata: Metadata = {
  title: "CMMS for Maintenance Teams | MaintainOS",
  description:
    "Streamline daily maintenance tasks with mobile access, clear priorities, and all the information technicians need at their fingertips.",
}

const challenges = [
  {
    title: "Paper-Based Systems",
    description:
      "Filling out paper work orders, searching through filing cabinets, and tracking down manuals wastes valuable time every day.",
  },
  {
    title: "Missing Information",
    description:
      "Arriving at a job without the right parts, tools, or asset history means wasted trips and delayed repairs.",
  },
  {
    title: "Unclear Priorities",
    description:
      "Without clear priority systems, it's hard to know which tasks are most urgent. Critical work can get overlooked.",
  },
  {
    title: "Communication Gaps",
    description:
      "Important information gets lost between shifts, teams, and departments. The same problems get discovered repeatedly.",
  },
  {
    title: "Difficult Documentation",
    description:
      "Recording maintenance activities is tedious with paper systems. Important details don't get captured.",
  },
  {
    title: "No Credit for Good Work",
    description:
      "Without proper tracking, good maintenance work goes unrecognized. There's no data to show your contributions.",
  },
]

const features = [
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Access and update work orders from your phone or tablet. Works offline for areas with poor connectivity.",
  },
  {
    icon: ClipboardList,
    title: "Clear Work Queues",
    description: "See your assigned work orders prioritized and organized. Know exactly what needs attention first.",
  },
  {
    icon: Search,
    title: "Instant Asset Info",
    description:
      "Scan QR codes to access complete asset history, manuals, and specifications. No more searching for information.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Get notified instantly about new assignments, priority changes, and parts availability.",
  },
  {
    icon: Wrench,
    title: "Task Checklists",
    description:
      "Step-by-step procedures ensure consistent, complete work. Never forget a step on complex maintenance tasks.",
  },
  {
    icon: MessageSquare,
    title: "Easy Updates",
    description:
      "Update work order status, add notes, and attach photos with just a few taps. Document work as you go.",
  },
]

const benefits = [
  "Spend more time fixing equipment and less time on paperwork",
  "Arrive at every job with the right parts, tools, and information",
  "Know exactly which tasks are most important at any moment",
  "Document your work easily and get credit for your contributions",
  "Communicate seamlessly with supervisors and other team members",
  "Access everything you need from your mobile device",
]

const testimonial = {
  quote:
    "The mobile app changed everything for our team. We used to spend 30 minutes every morning just sorting through paper work orders. Now I check my phone and know exactly what needs to be done. We're getting more work done in less time.",
  author: "James Wilson",
  title: "Lead Maintenance Technician",
  company: "Valley Manufacturing",
}

export default function MaintenanceTeamsPage() {
  return (
    <SolutionPageLayout
      title="For Maintenance Teams"
      subtitle="Solutions"
      description="Get the tools you need to do your best work. MaintainOS puts everything at your fingertips—work orders, asset information, parts, and procedures—so you can focus on what you do best: keeping equipment running."
      challenges={challenges}
      features={features}
      benefits={benefits}
      testimonial={testimonial}
      ctaTitle="Built for Technicians, by Technicians"
      ctaDescription="See how MaintainOS makes daily maintenance work easier and more efficient for technicians on the shop floor."
    />
  )
}
