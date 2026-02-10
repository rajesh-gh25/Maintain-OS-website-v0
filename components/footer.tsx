"use client"

import Link from "next/link"
import { Wrench } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
  product: [
    { title: "Preventive Maintenance", href: "/features/preventive-maintenance" },
    { title: "Work Orders", href: "/features/work-orders" },
    { title: "Asset Management", href: "/features/asset-management" },
    { title: "Inventory Management", href: "/features/parts-inventory" },
    { title: "Dashboard & Reports", href: "/features/dashboard-reports" },
  ],
  solutions: [
    { title: "For Plant Managers", href: "/solutions/plant-managers" },
    { title: "For Maintenance Teams", href: "/solutions/maintenance-teams" },
    { title: "For Factory Owners", href: "/solutions/factory-owners" },
    { title: "For Multi-Location Plants", href: "/solutions/multi-location" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Pricing", href: "/pricing" },
    { title: "Industries", href: "/industries" },
    { title: "Contact", href: "/contact" },
  ],
  resources: [
    { title: "FAQ", href: "/faq" },
    { title: "Blog", href: "/blog" },
    { title: "Support", href: "/support" },
    { title: "API Documentation", href: "/docs" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border bg-card"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">MaintainOS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Modern CMMS for manufacturing plants, factories, and industrial facilities.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-sm font-semibold">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-sm font-semibold">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row"
        >
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MaintainOS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
