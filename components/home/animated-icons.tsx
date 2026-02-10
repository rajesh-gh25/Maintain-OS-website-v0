"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
    className?: string
}

const transition = {
    duration: 0.6,
    ease: "easeInOut",
} as const

export function AnimatedDowntimeIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full"
            >
                <motion.path
                    d="M12 8v4"
                    stroke="#EF4444" // red-500
                    initial={{ pathLength: 1 }}
                    whileHover={{ pathLength: 0.5, y: -2 }}
                    transition={transition}
                />
                <motion.circle
                    cx="12" cy="12" r="10"
                    className="text-slate-400"
                />
                <motion.path
                    d="M12 16h.01"
                    stroke="#EF4444"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.5 }}
                    transition={transition}
                />
                {/* Arrow changing from down to up or checkmark? Let's do a gear stopping and starting. */
                    /* Actually user wants "Reduce Unplanned Downtime". Maybe a clock rewinding? */
                    /* Let's do a warning sign that turns into a check? No, simple is best. */
                    /* Let's do a Gear with a paused symbol that turns into play? */
                    /* Or a simple "Arrow Down" representing reduction? */
                }
                <motion.path
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
                    className="text-slate-200"
                    initial={{ opacity: 0.2 }}
                />
                <motion.path
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10" // Pulse ring
                    className="text-red-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: [0, 0.5, 0], scale: 1.2 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.svg>
            <motion.div
                className="absolute text-red-500 font-bold text-xs"
                initial={{ opacity: 0, y: 0 }}
                whileHover={{ opacity: 1, y: -20 }}
            >
                -45%
            </motion.div>
        </div>
    )
}

export function AnimatedProductivityIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full text-blue-500"
            >
                <motion.path
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    className="text-slate-300"
                />
                <motion.path
                    d="M22 4L12 14.01l-3-3"
                    className="text-blue-500"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                />
                <motion.path
                    d="m16 6 4 4"
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, delay: 0.2 }}
                />
                <motion.path
                    d="m2 12 5 5L22 4" // Checkmark drawing
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                    strokeWidth="0" // Helper
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedCostIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full text-green-500"
            >
                {/* Rupee Symbol */}
                <motion.path
                    d="M6 3h12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
                <motion.path
                    d="M6 8h12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ ...transition, delay: 0.1 }}
                />
                <motion.path
                    d="M14.5 8C14.5 11 10 13 6 13"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ ...transition, delay: 0.2 }}
                />
                <motion.path
                    d="M6 13l6 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ ...transition, delay: 0.3 }}
                />

                {/* Down Arrow indicating lower cost */}
                <motion.path
                    d="M20 21l-3-3-3 3"
                    className="text-green-600"
                    initial={{ y: -5, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
                />
                <motion.path
                    d="M17 10v11"
                    className="text-green-600"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 1 }}
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedSafetyIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full text-orange-500"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" className="text-orange-500" />
                <motion.path
                    d="m9 12 2 2 4-4"
                    className="text-white"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedGearCheckIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            {/* Gear - Rotates on hover */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full text-amber-500"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 1, type: "spring" }}
            >
                <path d="M12.29 17.5a6.52 6.52 0 0 1-6.79-6.79 6.52 6.52 0 0 1 6.79-6.79 6.52 6.52 0 0 1 6.79 6.52 6.52 6.52 0 0 1-6.79 6.79z" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m20.66 7-1.73 1" />
                <path d="m5.07 16-1.73 1" />
                <path d="m20.66 17-1.73-1" />
                <path d="m5.07 8-1.73-1" />
                <path d="M22 12h-2" />
                <path d="M4 12H2" />
                <path d="m17 20.66-1-1.73" />
                <path d="m8 5.07-1-1.73" />
                <path d="m17 3.34-1 1.73" />
                <path d="m8 18.93-1 1.73" />
            </motion.svg>
            {/* Checkmark - Scales in/Stays absolute */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute h-1/2 w-1/2 text-amber-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={transition}
            >
                <path d="M20 6 9 17l-5-5" />
            </motion.svg>
        </div>
    )
}

export function AnimatedWrenchIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full"
            >
                <motion.path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -15, 15, -15, 0] }}
                    transition={transition}
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedClipboardIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full"
            >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <motion.path
                    d="M9 12h6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 1 }}
                    transition={{ ...transition, delay: 0.1 }}
                />
                <motion.path
                    d="M9 16h6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 1 }}
                    transition={{ ...transition, delay: 0.2 }}
                />
                <motion.path
                    d="M9 8h6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 1 }}
                    transition={transition}
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedAssetIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full"
            >
                <motion.path
                    d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={transition}
                />
                <motion.path
                    d="m3.3 7 8.7 5 8.7-5"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                />
                <motion.path
                    d="M12 22V12"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedInventoryIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full"
            >
                <motion.path
                    d="M16.5 9.4 7.5 4.21"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <motion.polyline
                    points="3.29 7 12 12 20.71 7"
                    initial={{ y: -2 }}
                    whileHover={{ y: 0 }}
                    transition={transition}
                />
                <line x1="12" y1="22" x2="12" y2="12" />
                <motion.path
                    d="m7.5 19.79 9-5.19"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={transition}
                />
            </motion.svg>
        </div>
    )
}

export function AnimatedChartIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-full w-full", className)}
            >
                <motion.path d="M3 3v18h18" initial={{ pathLength: 1 }} />
                <motion.path
                    d="M18 17V9"
                    initial={{ scaleY: 0, originY: 1 }}
                    whileHover={{ scaleY: 1 }}
                    transition={transition}
                />
                <motion.path
                    d="M13 17V5"
                    initial={{ scaleY: 0, originY: 1 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ ...transition, delay: 0.1 }}
                />
                <motion.path
                    d="M8 17v-3"
                    initial={{ scaleY: 0, originY: 1 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ ...transition, delay: 0.2 }}
                />
            </svg>
        </div>
    )
}

export function AnimatedUsersIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-full w-full", className)}
            >
                <motion.path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <motion.circle
                    cx="9"
                    cy="7"
                    r="4"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={transition}
                />
                <motion.path
                    d="M22 21v-2a4 4 0 0 0-3-3.87"
                    initial={{ opacity: 0.5, x: 2 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={transition}
                />
                <motion.path
                    d="M16 3.13a4 4 0 0 1 0 7.75"
                    initial={{ opacity: 0.5, x: 2 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={transition}
                />
            </svg>
        </div>
    )
}

export function AnimatedCartIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-full w-full", className)}
            >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <motion.path
                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
                    initial={{ x: 0 }}
                    whileHover={{ x: [0, 2, -2, 0] }}
                    transition={transition}
                />
            </svg>
        </div>
    )
}

export function AnimatedGaugeIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-full w-full", className)}
            >
                <path d="m12 14 4-4" />
                <motion.path d="M3.34 19a10 10 0 1 1 17.32 0" initial={{ opacity: 1 }} />
            </svg>
            {/* Needle overlay */}
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("absolute inset-0", className)}
                initial={{ rotate: 0 }}
                style={{ originX: "50%", originY: "58%" }}
                whileHover={{ rotate: [-45, 45] }}
                transition={transition}
            >
                <path d="m12 14 0-6" />
            </motion.svg>
        </div>
    )
}

export function AnimatedLocationIcon({ className }: AnimatedIconProps) {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-full w-full", className)}
                initial={{ y: 0 }}
                whileHover={{ y: [0, -5, 0] }}
                transition={{ ...transition, repeat: Infinity, repeatType: "reverse" }}
            >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </motion.svg>
        </div>
    )
}
