"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "MaintainOS reduced our unplanned downtime by 52% in the first year. The ROI was evident within the first quarter.",
    author: "Michael Chen",
    title: "Plant Manager",
    company: "Precision Manufacturing Co.",
    industry: "Automotive Parts",
  },
  {
    quote:
      "Our technicians actually enjoy using MaintainOS. The mobile app is intuitive, and they have everything they need right on their phones.",
    author: "Sarah Rodriguez",
    title: "Maintenance Supervisor",
    company: "Pacific Food Processing",
    industry: "Food & Beverage",
  },
  {
    quote:
      "Managing maintenance across 12 facilities used to be a nightmare. Now we have complete visibility and standardized processes everywhere.",
    author: "David Thompson",
    title: "VP of Operations",
    company: "National Packaging Solutions",
    industry: "Packaging",
  },
  {
    quote:
      "The reporting capabilities are exceptional. I can show leadership exactly how maintenance impacts our bottom line.",
    author: "Jennifer Walsh",
    title: "Reliability Engineer",
    company: "Sterling Pharmaceuticals",
    industry: "Pharmaceutical",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
}

export function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0])
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(interval)
  }, [page, autoPlay])

  return (
    <section className="border-b border-border py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Maintenance Professionals</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what plant managers and maintenance teams say about MaintainOS.
          </p>
        </motion.div>

        <div className="relative mt-16" onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
          <div className="mx-auto max-w-3xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative rounded-xl border border-border bg-card p-8 md:p-12"
              >
                <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/20" />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl leading-relaxed md:text-2xl"
                >
                  "{testimonials[testimonialIndex].quote}"
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground">
                    {testimonials[testimonialIndex].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{testimonials[testimonialIndex].author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[testimonialIndex].title}, {testimonials[testimonialIndex].company}
                    </div>
                    <div className="text-sm font-medium text-primary">{testimonials[testimonialIndex].industry}</div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={() => paginate(-1)} className="h-10 w-10 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])}
                  className={`h-2.5 rounded-full transition-all ${
                    index === testimonialIndex ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={() => paginate(1)} className="h-10 w-10 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
