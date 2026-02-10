"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative mx-auto px-4 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm"
          >
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">New</span>
            <span className="text-muted-foreground">Mobile app now available for iOS and Android</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            The Backbone of Modern <span className="text-primary">Manufacturing Maintenance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Transform the way your plant manages assets, schedules maintenance, and prevents failures—powered by
            automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <Link href="/demo">
                Get a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">
                <Play className="mr-2 h-4 w-4" />
                Watch Overview
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            No credit card required • 14-day free trial • Setup in minutes
          </motion.p>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-primary/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-4 text-sm text-muted-foreground">MaintainOS Dashboard</span>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-b-lg bg-background">
              <div className="grid h-full grid-cols-12 gap-4 p-4">
                {/* Sidebar */}
                <div className="col-span-2 space-y-3 rounded-lg bg-card p-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      className={`h-8 rounded ${i === 0 ? "bg-primary/20" : "bg-muted"}`}
                    />
                  ))}
                </div>
                {/* Main Content */}
                <div className="col-span-10 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-4">
                    {["45%", "128", "96%", "12"].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                        className="rounded-lg bg-card p-4"
                      >
                        <div className="text-2xl font-bold text-primary">{stat}</div>
                        <div className="mt-1 h-3 w-20 rounded bg-muted" />
                      </motion.div>
                    ))}
                  </div>
                  {/* Charts */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="rounded-lg bg-card p-4"
                    >
                      <div className="mb-4 h-4 w-32 rounded bg-muted" />
                      <div className="flex items-end gap-2">
                        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: h }}
                            transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                            className="flex-1 rounded-t bg-primary/60"
                          />
                        ))}
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="rounded-lg bg-card p-4"
                    >
                      <div className="mb-4 h-4 w-32 rounded bg-muted" />
                      <div className="space-y-3">
                        {[85, 72, 93, 68].map((w, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="h-3 w-16 rounded bg-muted" />
                            <div className="h-3 flex-1 rounded bg-muted">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${w}%` }}
                                transition={{ duration: 0.8, delay: 1.3 + i * 0.1 }}
                                className="h-full rounded bg-primary/60"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  {/* Table */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="rounded-lg bg-card p-4"
                  >
                    <div className="mb-4 h-4 w-40 rounded bg-muted" />
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                          className="flex items-center gap-4"
                        >
                          <div className="h-4 w-4 rounded bg-primary/40" />
                          <div className="h-4 flex-1 rounded bg-muted" />
                          <div className="h-4 w-20 rounded bg-muted" />
                          <div className="h-4 w-16 rounded bg-primary/20" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
