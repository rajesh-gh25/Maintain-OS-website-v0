"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import {
  AnimatedDowntimeIcon,
  AnimatedProductivityIcon,
  AnimatedCostIcon,
  AnimatedSafetyIcon,
} from "@/components/home/animated-icons"

const benefits = [
  {
    icon: AnimatedDowntimeIcon,
    title: "Reduce Unplanned Downtime",
    description:
      "Shift from reactive to preventive maintenance. Our customers see an average 45% reduction in unplanned equipment failures within the first year.",
    points: [
      "Automated PM schedules prevent breakdowns",
      "Early warning alerts for critical assets",
      "Historical data reveals failure patterns",
    ],
  },
  {
    icon: AnimatedProductivityIcon,
    title: "Increase Technician Productivity",
    description:
      "Give your maintenance team the tools they need. Mobile access, clear priorities, and all asset information at their fingertips.",
    points: [
      "Mobile app for on-the-floor work",
      "Automated work order assignment",
      "Complete asset history in seconds",
    ],
  },
  {
    icon: AnimatedCostIcon,
    title: "Lower Maintenance Costs",
    description:
      "Optimize spare parts inventory, reduce emergency repairs, and make informed decisions about asset replacement.",
    points: ["Right-size inventory levels", "Eliminate unnecessary PM tasks", "Data-driven replacement decisions"],
  },
  {
    icon: AnimatedSafetyIcon,
    title: "Ensure Compliance & Safety",
    description:
      "Maintain complete audit trails, schedule required inspections, and demonstrate regulatory compliance with ease.",
    points: ["Automatic documentation", "Scheduled safety inspections", "Complete maintenance history"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function BenefitsSection() {
  return (
    <section className="border-b border-border bg-card/50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Real Results for Manufacturing Plants</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            MaintainOS delivers measurable improvements to your maintenance operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-muted-foreground">{benefit.description}</p>
              <ul className="mt-6 space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pointIndex * 0.1 + 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
