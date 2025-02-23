import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/providers/sections/hero";
import { Features } from "@/components/providers/sections/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { StatsCounter } from "@/components/landing/stats-counter";
import { TrustIndicators } from "@/components/landing/trust-indicators";
import { Testimonials } from "@/components/providers/sections/testimonials";
import { FAQ } from "@/components/providers/sections/faq";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/providers/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Common background with subtle gradient and pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>
      
      <Navbar />
      <main className="relative pt-16">
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
    </div>
  );
}