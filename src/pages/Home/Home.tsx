"use client";

import Hero from "./Hero";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import IndustriesSection from "./IndustriesSection";
import StatsSection from "./StatsSection";
import WhyChooseUs from "./WhyChooseUs";
import CoreFeatures from "./CoreFeatures";
import Customers from "./Customers";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <main className="font-sans text-gray-900 bg-white">

      {/* Hero Section */}
      <section className="bg-white shadow-md">
        <Hero />
      </section>

      {/* Welcome / About Section */}
      <section className="bg-white">
        <WelcomeSection />
      </section>

      {/* Services Section */}
      <section className="bg-gray-100">
        <ServicesSection />
      </section>

      {/* Projects / Portfolio Section */}
      <section className="bg-white">
        <ProjectsSection />
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100">
        <IndustriesSection />
      </section>

      {/* Stats / Numbers Section */}
      <section className="bg-white">
        <StatsSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100">
        <WhyChooseUs />
      </section>

      {/* Core Features Section */}
      <section className="bg-white">
        <CoreFeatures />
      </section>

      {/* Customers / Partners Section */}
      <section className="bg-gray-100">
        <Customers />
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <ContactUs />
      </section>

    </main>
  );
}
