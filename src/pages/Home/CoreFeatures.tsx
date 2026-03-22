"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Wrench, DollarSign, Smile } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BadgeCheck size={36} className="text-sky-300" />,
    title: "Quality Assurance",
    description:
      "Ensuring top quality through strict compliance with international standards.",
  },
  {
    id: 2,
    icon: <Wrench size={36} className="text-sky-300" />,
    title: "Certified Mechanics",
    description:
      "Skilled and certified professionals delivering precision engineering.",
  },
  {
    id: 3,
    icon: <DollarSign size={36} className="text-sky-300" />,
    title: "Competitive Prices",
    description:
      "Offering cost-effective solutions without compromising quality.",
  },
  {
    id: 4,
    icon: <Smile size={36} className="text-sky-300" />,
    title: "Client Satisfaction",
    description:
      "Building trust and long-term relationships with our valued clients.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* ---------- Premium Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 mb-10 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Features
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="relative group rounded-3xl p-6 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
              whileHover={{ scale: 1.08, y: -4 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Subtle glass shine */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-center mb-4 drop-shadow-md group-hover:scale-110 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
