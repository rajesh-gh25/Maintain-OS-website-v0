import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ClientOnly } from "@/components/client-only"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MaintainOS | Modern CMMS for Manufacturing",
    template: "%s | MaintainOS",
  },
  description:
    "Reduce equipment downtime by up to 45%. MaintainOS is a modern CMMS designed for manufacturing plants, factories, and industrial facilities.",
  keywords: [
    "CMMS",
    "maintenance management",
    "preventive maintenance",
    "work orders",
    "asset management",
    "manufacturing software",
    "plant maintenance",
  ],
  authors: [{ name: "MaintainOS" }],
  creator: "MaintainOS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maintainos.com",
    siteName: "MaintainOS",
    title: "MaintainOS | Modern CMMS for Manufacturing",
    description: "Reduce equipment downtime by up to 45%. Modern maintenance management for manufacturing plants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaintainOS | Modern CMMS for Manufacturing",
    description: "Reduce equipment downtime by up to 45%. Modern maintenance management for manufacturing plants.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: 'v0.app'
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ClientOnly>
          <Header />
        </ClientOnly>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
