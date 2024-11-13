import Layout from '@/app/components/Layout'
import Hero from '@/app/components/Hero'
import Features from '@/app/components/Features'
import HowItWorks from '@/app/components/HowItWorks'
import Testimonials from '@/app/components/Testimonials'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import CTA from '@/app/components/CTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </Layout>
  )
}