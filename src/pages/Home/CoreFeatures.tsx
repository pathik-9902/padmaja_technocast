"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Wrench, DollarSign, Smile } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BadgeCheck className="w-8 h-8 text-red-600" />,
    title: "Quality Assurance",
    description:
      "Ensuring top quality through strict compliance with international standards.",
  },
  {
    id: 2,
    icon: <Wrench className="w-8 h-8 text-red-600" />,
    title: "Certified Mechanics",
    description:
      "Skilled and certified professionals delivering precision engineering.",
  },
  {
    id: 3,
    icon: <DollarSign className="w-8 h-8 text-red-600" />,
    title: "Competitive Prices",
    description:
      "Offering cost-effective solutions without compromising quality.",
  },
  {
    id: 4,
    icon: <Smile className="w-8 h-8 text-red-600" />,
    title: "Client Satisfaction",
    description:
      "Building trust and long-term relationships with our valued clients.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Optional subtle pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-5 pointer-events-none" />

      <div className="relative container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-brand-black mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Features
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A high level of Quality Control in compliance with national and international regulations and standards.  
          We are committed to delivering products and services that exceed customer expectations, are safe, environmentally conscious, and compliant with safety regulations.  
          Our reputation for reliability is our key asset.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-brand-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <span className="bg-brand-lighter-gray p-4 rounded-full shadow-sm">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
