import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { ProgrammeSection } from '@/components/programme-section'
import { OfferSection } from '@/components/offer-section'
import { ComptablesSection } from '@/components/comptables-section'
import { QuoteBlock } from '@/components/quote-block'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ProblemSection />
        <ProgrammeSection />
        <OfferSection />
        <ComptablesSection />
        <QuoteBlock />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
