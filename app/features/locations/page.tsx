import type { Metadata } from "next"

import { FeaturePageLayout } from "@/components/features/feature-page-layout"

export const metadata: Metadata = {
  title: "Location Management | MaintainOS",
  description: "Organize assets and maintenance by location. Perfect for multi-site operations and complex facilities.",
}

const features = [
  {
    title: "Location Hierarchy",
    description:
      "Create multi-level location structures: sites, buildings, floors, rooms, and zones. Organize assets logically.",
  },
  {
    title: "Visual Floor Plans",
    description: "Upload floor plans and maps. Place assets visually for easy identification and navigation.",
  },
  {
    title: "Location-Based Filtering",
    description: "Filter assets, work orders, and reports by location. Focus on specific areas as needed.",
  },
  {
    title: "Multi-Site Management",
    description: "Manage multiple facilities from a single platform. Compare performance across locations.",
  },
  {
    title: "Location-Specific Settings",
    description: "Configure different settings, users, and workflows per location. Accommodate local requirements.",
  },
  {
    title: "Mobile Geolocation",
    description: "Use mobile device location to suggest nearby assets and work orders. Speed up technician navigation.",
  },
]

const benefits = [
  "Improve organization for complex facilities with logical location structure",
  "Enable location-specific reporting and analysis",
  "Streamline navigation for technicians in large facilities",
  "Standardize maintenance across multiple sites while allowing local flexibility",
  "Support regulatory compliance with location-specific documentation",
]

const useCases = [
  {
    title: "Multi-Plant Operations",
    description:
      "Manage maintenance across multiple manufacturing facilities. Compare performance and share best practices.",
  },
  {
    title: "Large Facility Management",
    description: "Organize assets across large facilities with multiple buildings, floors, and production areas.",
  },
  {
    title: "Production Line Organization",
    description: "Structure assets by production line, cell, or workstation for targeted maintenance management.",
  },
  {
    title: "Campus Management",
    description: "Manage multiple buildings and support facilities across an industrial campus.",
  },
]

export default function LocationsPage() {
  return (
    <FeaturePageLayout
      iconName="MapPin"
      title="Locations"
      subtitle="Organized by Where It Matters"
      description="Structure your maintenance operations by location. From multi-site enterprises to complex facilities, organize assets and work orders the way your operation runs."
      features={features}
      benefits={benefits}
      useCases={useCases}
    />
  )
}
