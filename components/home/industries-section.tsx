"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Factory, Pill, UtensilsCrossed, Car, Zap, Package, Cog, Droplet, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const industries = [
  { icon: Factory, name: "General Manufacturing", href: "/industries#manufacturing" },
  { icon: Pill, name: "Pharmaceutical", href: "/industries#pharmaceutical" },
  { icon: UtensilsCrossed, name: "Food & Beverage", href: "/industries#food-beverage" },
  { icon: Car, name: "Automotive", href: "/industries#automotive" },
  { icon: Zap, name: "Energy & Utilities", href: "/industries#energy" },
  { icon: Package, name: "Packaging", href: "/industries#packaging" },
  { icon: Cog, name: "Metal Fabrication", href: "/industries#metal" },
  { icon: Droplet, name: "Chemical Processing", href: "/industries#chemical" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function IndustriesSection() {
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for Manufacturing Industries</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            MaintainOS is trusted by manufacturing plants across diverse industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
        >
          {industries.map((industry) => (
            <motion.div key={industry.name} variants={itemVariants}>
              <Link
                href={industry.href}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <industry.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                </motion.div>
                <span className="text-center text-sm font-medium">{industry.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" asChild>
            <Link href="/industries">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
