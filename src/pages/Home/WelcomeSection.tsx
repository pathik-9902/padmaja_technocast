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
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6">

        {/* Hero Intro */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            WELCOME TO PADMAJA TECHNOCAST LLP
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            We specialize in precision investment casting and machining solutions.
            With a team carrying 20+ years of expertise, we deliver excellence in
            ferrous and non-ferrous products for global industries.
          </p>
        </motion.div>

        {/* 20+ Years of Expertise (Now Above Tabs) */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-red-50 to-red-100 p-8 rounded-2xl shadow-lg mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <motion.h2
              className="text-5xl sm:text-6xl font-extrabold text-red-600 mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              20+
            </motion.h2>
            <p className="text-gray-900 text-lg sm:text-xl font-semibold">
              Years of Combined Expertise
            </p>
          </div>
          <p className="text-gray-600 max-w-md sm:ml-6 text-center sm:text-left">
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
                  className={`px-5 py-2 rounded-md font-medium transition text-sm ${
                    activeTab === key
                      ? "bg-red-600 text-white shadow"
                      : "bg-white text-gray-900 border border-gray-300 hover:bg-red-50"
                  }`}
                >
                  {tabs[key as keyof typeof tabs].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              className="text-gray-600 mb-6 text-sm sm:text-base"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tabs[activeTab as keyof typeof tabs].content}
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tabs[activeTab as keyof typeof tabs].features.map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h3 className="text-md font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
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
