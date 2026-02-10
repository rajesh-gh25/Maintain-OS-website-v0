import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | MaintainOS",
  description: "Frequently asked questions about MaintainOS CMMS software for manufacturing plants.",
}

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is MaintainOS?",
        answer:
          "MaintainOS is a modern Computerized Maintenance Management System (CMMS) designed specifically for manufacturing plants, factories, and industrial facilities. It helps you manage preventive maintenance, work orders, assets, inventory, and more—all from one platform.",
      },
      {
        question: "Who is MaintainOS designed for?",
        answer:
          "MaintainOS is built for manufacturing facilities of all sizes, including discrete manufacturing, process manufacturing, food and beverage, pharmaceutical, automotive, and other industrial operations. It's used by plant managers, maintenance supervisors, technicians, and factory owners.",
      },
      {
        question: "How is MaintainOS different from other CMMS solutions?",
        answer:
          "MaintainOS combines enterprise-grade features with modern, intuitive design. Unlike legacy CMMS solutions that require extensive training and IT support, MaintainOS is designed for rapid adoption with a mobile-first approach that technicians actually enjoy using. We focus specifically on manufacturing, so our features and workflows match how your plant actually operates.",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "How long does implementation take?",
        answer:
          "Most customers are up and running within 2-4 weeks. Our guided onboarding process includes data import, configuration, and training. For larger enterprises with complex requirements, implementation may take 6-8 weeks. We provide dedicated implementation support throughout the process.",
      },
      {
        question: "Can I import data from my current system?",
        answer:
          "Yes, we offer free data migration assistance for all plans. We can import asset data, maintenance history, parts inventory, and other information from spreadsheets, legacy CMMS systems, or ERP systems. Our team will help ensure a smooth transition.",
      },
      {
        question: "Do you offer training?",
        answer:
          "Absolutely. All plans include access to our online training library with video tutorials and documentation. Professional and Enterprise plans include live training sessions. Enterprise customers also have the option for on-site training at your facility.",
      },
    ],
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        question: "Does MaintainOS work on mobile devices?",
        answer:
          "Yes, MaintainOS includes native mobile apps for iOS and Android. Technicians can receive work orders, update tasks, scan QR codes, attach photos, and access asset information from their phones or tablets. The mobile app works offline for areas with limited connectivity.",
      },
      {
        question: "Can MaintainOS integrate with our other systems?",
        answer:
          "Yes, MaintainOS offers API access and pre-built integrations with popular ERP systems, accounting software, and IoT platforms. Enterprise customers can work with our team on custom integrations. Common integrations include SAP, Oracle, Microsoft Dynamics, and various sensor/IoT platforms.",
      },
      {
        question: "Does MaintainOS support multiple facilities?",
        answer:
          "Yes, our Professional and Enterprise plans support multi-location management. You can manage all facilities from a single platform while maintaining location-specific configurations, users, and reporting. Compare performance across locations and share best practices easily.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start. This gives you time to import some data, test the workflows, and ensure MaintainOS is right for your operation before committing.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Absolutely. You can upgrade or downgrade your plan at any time. If you upgrade, you'll get immediate access to additional features. If you downgrade, changes take effect at your next billing cycle. Our team can help you choose the right plan as your needs evolve.",
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer:
          "Yes, annual billing saves you 20% compared to monthly billing. We also offer special pricing for non-profits and educational institutions. Contact our sales team for details on volume discounts for large implementations.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "Is my data secure?",
        answer:
          "Security is a top priority. MaintainOS uses bank-level encryption (256-bit SSL) for all data transmission and storage. We host on enterprise-grade cloud infrastructure with SOC 2 Type II certification. Regular security audits, automated backups, and disaster recovery ensure your data is protected.",
      },
      {
        question: "Does MaintainOS support FDA 21 CFR Part 11 compliance?",
        answer:
          "Yes, MaintainOS includes features to support FDA 21 CFR Part 11 compliance including electronic signatures, complete audit trails, user authentication controls, and tamper-evident records. Our Enterprise plan includes additional compliance features for regulated industries.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Data is stored in secure, SOC 2 compliant data centers. For US customers, data is stored in US-based facilities. We also offer EU data residency for European customers. Enterprise customers can discuss specific data residency requirements with our team.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Find answers to common questions about MaintainOS. Can't find what you're looking for? Contact our team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="mb-6 text-xl font-semibold">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="rounded-xl border border-border bg-card px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-card p-12 text-center">
            <h2 className="text-3xl font-bold">Still Have Questions?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Our team is here to help. Contact us for personalized answers to your questions about MaintainOS.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
