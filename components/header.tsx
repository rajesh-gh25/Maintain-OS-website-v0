"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Wrench,
  ClipboardList,
  Box,
  Package,
  BarChart3,
  Users,
  ShoppingCart,
  Gauge,
  MapPin,
  Menu,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

/* ---------------- DATA ---------------- */

const features = [
  { title: "Preventive Maintenance", href: "/features/preventive-maintenance", description: "Schedule and automate maintenance tasks", icon: Wrench },
  { title: "Work Orders", href: "/features/work-orders", description: "Create, assign, and track work orders", icon: ClipboardList },
  { title: "Asset Management", href: "/features/asset-management", description: "Track and manage all your assets", icon: Box },
  { title: "Inventory Management", href: "/features/parts-inventory", description: "Manage spare parts and supplies", icon: Package },
  { title: "Dashboard & Reports", href: "/features/dashboard-reports", description: "Real-time analytics and insights", icon: BarChart3 },
  { title: "Vendors", href: "/features/vendors", description: "Manage vendor relationships", icon: Users },
  { title: "Purchase Orders", href: "/features/purchase-orders", description: "Streamline procurement processes", icon: ShoppingCart },
  { title: "Meters", href: "/features/meters", description: "Track usage-based maintenance", icon: Gauge },
  { title: "Locations", href: "/features/locations", description: "Organize assets by location", icon: MapPin },
]

const solutions = [
  { title: "For Plant Managers", href: "/solutions/plant-managers", description: "Gain visibility and control over maintenance operations" },
  { title: "For Maintenance Teams", href: "/solutions/maintenance-teams", description: "Streamline daily tasks and improve efficiency" },
  { title: "For Factory Owners", href: "/solutions/factory-owners", description: "Maximize ROI and reduce operational costs" },
  { title: "For Multi-Location Plants", href: "/solutions/multi-location", description: "Standardize maintenance across all facilities" },
]

/* ---------------- COMPONENTS ---------------- */

function NavItem({
  title,
  children,
  href
}: {
  title: string;
  children?: React.ReactNode;
  href?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex items-center h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {href ? (
        <Link
          href={href}
          className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          {title}
        </Link>
      ) : (
        <button
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1",
            isHovered ? "text-primary" : "text-muted-foreground hover:text-primary"
          )}
        >
          {title}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isHovered ? "rotate-180" : "")} />
        </button>
      )}

      <AnimatePresence>
        {isHovered && children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2 z-50 w-max"
          >
            <div
              className="bg-popover border border-border rounded-xl shadow-xl overflow-hidden p-6 z-50 relative"
              onClick={() => setIsHovered(false)}
            >
              {/* Invisible bridge to prevent pointer events gap */}
              <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------- HEADER ---------------- */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Wrench className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">MaintainOS</span>
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2 h-full">
          <NavItem title="Features">
            <div className="grid w-[600px] gap-2 md:grid-cols-3">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-muted group"
                >
                  <feature.icon className="mt-0.5 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{feature.title}</div>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </NavItem>

          <NavItem title="Solutions">
            <div className="grid w-[400px] gap-2">
              {solutions.map((solution) => (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="block rounded-md p-3 transition-colors hover:bg-muted group"
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{solution.title}</div>
                  <p className="text-xs text-muted-foreground">{solution.description}</p>
                </Link>
              ))}
            </div>
          </NavItem>

          <NavItem title="Industries" href="/industries" />
          <NavItem title="Pricing" href="/pricing" />
          <NavItem title="About" href="/about" />
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <Link href="/demo">Get a Demo</Link>
            </Button>
          </motion.div>
        </div>

        {/* MOBILE */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]" />
        </Sheet>

      </div>
    </header>
  )
}
