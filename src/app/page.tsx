import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { StatsCounter } from "@/components/landing/stats-counter";
import { TrustIndicators } from "@/components/landing/trust-indicators";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <Hero />
        <StatsCounter />
        <Features />
        <HowItWorks />
        <TrustIndicators />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}