"use client";

import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import IndustriesSection from "./IndustriesSection";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import CoreFeatures from "./CoreFeatures";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Welcome / About Section */}
      <section>
        <WelcomeSection />
      </section>

      {/* Services Section */}
      <section>
        <ServicesSection />
      </section>

      {/* Projects / Portfolio Section */}
      <section>
        <ProjectsSection />
      </section>

      {/* Industries Section */}
      <section>
        <IndustriesSection />
      </section>

      {/* Stats / Numbers Section */}
      <section>
        <StatsSection />
      </section>

      {/* Why Choose Us Section */}
      <section>
        <WhyChooseUs />
      </section>

      {/* Core Features Section */}
      <section>
        <CoreFeatures />
      </section>

      {/* Contact Section */}
      <section>
        <ContactUs />
      </section>

    </main>
  );
}
