"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { capabilityIcons } from "./capability-icons"

import { heroIcons } from "./hero-icons"

interface FeaturePoint {
  title: string
  description: string
}

interface FeaturePageProps {
  iconName: string
  title: string
  subtitle: string
  description: string
  features: FeaturePoint[]
  benefits: string[]
  useCases: { title: string; description: string }[]
}

function CapabilityCard({ feature, index }: { feature: FeaturePoint; index: number }) {
  const IconComponent = capabilityIcons[feature.title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Card with gradient border effect */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-[1px]">
        <div className="relative h-full rounded-2xl bg-background p-6 transition-all duration-300">
          {/* Animated corner accent */}
          <motion.div
            className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl"
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileHover={{ scale: 1.2, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />

          <div className="mb-4 flex items-center gap-3">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              {IconComponent && <IconComponent />}
            </motion.div>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>

          {/* Bottom accent line that animates on hover */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export function FeaturePageLayout({
  iconName,
  title,
  subtitle,
  description,
  features,
  benefits,
  useCases,
}: FeaturePageProps) {
  const Icon = heroIcons[iconName] || heroIcons["Box"]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30">
                <Icon className="h-10 w-10 text-primary-foreground" />
              </div>
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h1>
            <p className="mt-2 text-xl font-semibold text-primary">{subtitle}</p>
            <p className="mt-6 text-lg text-muted-foreground">{description}</p>
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="shadow-lg shadow-primary/30" asChild>
                <Link href="/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-b border-border py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Capabilities
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Key Capabilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Powerful features designed to transform your maintenance operations
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <CapabilityCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with animations */}
      <section className="border-b border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Benefits
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">Why It Matters</h2>
              <p className="mt-4 text-muted-foreground">
                See how this feature directly impacts your maintenance operations and bottom line.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-border bg-card p-8 shadow-xl shadow-primary/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-muted" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases with hover effects */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Applications
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Common Use Cases</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

            <h2 className="relative text-3xl font-bold text-primary-foreground">Ready to Get Started?</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="shadow-lg" asChild>
                <Link href="/demo">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
