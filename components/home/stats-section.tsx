"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "X%", label: "Reduction in downtime", description: "on average for our customers" },
  { value: "Yx", label: "Faster work order completion", description: "compared to paper-based systems" },
  { value: "Z%", label: "Customer satisfaction", description: "based on annual survey" },
  { value: "N+", label: "Manufacturing plants", description: "trust MaintainOS worldwide" },
]

export function StatsSection() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-3xl font-bold text-primary lg:text-4xl"
              >
                {stat.value}
              </motion.div>
              <div className="mt-2 font-medium">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
