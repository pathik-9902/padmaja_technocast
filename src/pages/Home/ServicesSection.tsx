"use client";

import { motion } from "framer-motion";
import { Cpu, Settings, Truck } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Cpu,
    title: "Precision Engineering",
    description:
      "Advanced engineering solutions ensuring high-quality, accurate castings.",
  },
  {
    id: 2,
    icon: Settings,
    title: "Innovative Technology",
    description:
      "Utilizing the latest technology to produce efficient and reliable products.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Global Delivery",
    description:
      "Serving clients worldwide with timely and secure delivery solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* ---------- Premium Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ---------- Content ---------- */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, duration: 0.2 }}
              className="relative group rounded-3xl p-8 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* subtle glass shine */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* icon with hover effect */}
              <div className="flex justify-center text-sky-300 mb-6 drop-shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <service.icon className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------- Call to Action ---------- */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="mt-14 inline-block px-8 py-3 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 text-white font-semibold shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
        >
          Get a Quote
        </motion.div>
      </div>
    </section>
  );
}
