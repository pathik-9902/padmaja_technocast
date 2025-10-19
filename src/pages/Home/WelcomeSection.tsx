"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  ShieldCheck,
  Smile,
  Award,
  Handshake,
} from "lucide-react";

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: "Our Mission",
      content:
        "To manufacture and deliver high-performance precision investment castings and machining solutions with unmatched quality, reliability, and efficiency. We continuously improve our processes to meet and exceed customer expectations.",
      features: [
        {
          icon: ShieldCheck,
          title: "Quality Assurance",
          desc: "Strict quality checks at every stage of casting and machining.",
        },
        {
          icon: Users,
          title: "Expert Team",
          desc: "Led by professionals with 20+ years of domain expertise.",
        },
      ],
    },
    vision: {
      title: "Our Vision",
      content:
        "To be a globally recognized leader in investment casting and machining solutions, setting benchmarks for precision, innovation, and customer trust.",
      features: [
        {
          icon: Globe,
          title: "Global Presence",
          desc: "Building long-term collaborations with clients worldwide.",
        },
        {
          icon: Award,
          title: "Innovation Focus",
          desc: "Driving excellence through advanced technology and R&D.",
        },
      ],
    },
    values: {
      title: "Our Values",
      content:
        "We operate with integrity, customer focus, and a commitment to continuous improvement. Our relationships are built on trust, respect, and consistent performance.",
      features: [
        {
          icon: Handshake,
          title: "Client Relationships",
          desc: "Transparent, reliable, and customer-first approach.",
        },
        {
          icon: Smile,
          title: "Customer Satisfaction",
          desc: "Delivering value through precision and timely service.",
        },
      ],
    },
  };

  return (
    <section className="relative py-16 min-h-screen overflow-hidden">
      {/* ---------- Premium Dynamic Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ---------- Content ---------- */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Hero Intro */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg mb-4">
            WELCOME TO PADMAJA TECHNOCAST LLP
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            We specialize in precision investment casting and machining solutions.
            With a team carrying 20+ years of expertise, we deliver excellence in
            ferrous and non-ferrous products for global industries.
          </p>
        </motion.div>

        {/* 20+ Years of Expertise */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <motion.h2
              className="text-5xl sm:text-6xl font-extrabold text-sky-400 mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              20+
            </motion.h2>
            <p className="text-white text-lg sm:text-xl font-semibold">
              Years of Combined Expertise
            </p>
          </div>
          <p className="text-gray-300 max-w-md sm:ml-6 text-center sm:text-left">
            Our team brings over 20 years of combined experience in precision
            investment casting and machining, delivering unmatched quality,
            reliability, and innovation.
          </p>
        </motion.div>

        {/* Tabs + Features */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Section */}
          <div className="flex-1">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
              {Object.keys(tabs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-2 rounded-2xl font-medium transition text-sm ${
                    activeTab === key
                      ? "bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/20"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {tabs[key as keyof typeof tabs].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              className="text-gray-300 mb-6 text-sm sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tabs[activeTab as keyof typeof tabs].content}
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tabs[activeTab as keyof typeof tabs].features.map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 0.2 }}
                    className="relative group rounded-3xl p-6 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] text-center"
                  >
                    {/* subtle glass shine */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-sky-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
                    </div>
                    <h3 className="text-md font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
