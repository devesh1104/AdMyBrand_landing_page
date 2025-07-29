import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import InteractivePricingCalculator from "@/components/InteractivePricingCalculator";
import DemoSection from "@/components/DemoSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <div className="container mx-auto px-4">
          <InteractivePricingCalculator />
        </div>
        <DemoSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
