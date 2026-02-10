import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturesSection } from "@/components/home/features-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CTASection />
    </>
  )
}
