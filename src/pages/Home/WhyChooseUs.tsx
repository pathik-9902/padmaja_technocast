"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Wrench } from "lucide-react";

const reasons = [
  { id: 1, icon: <Wrench className="w-6 h-6 text-sky-300" />, text: "State-of-the-Art Manufacturing Tools" },
  { id: 2, icon: <Award className="w-6 h-6 text-sky-300" />, text: "ISO 9001:2015 Certified Company" },
  { id: 3, icon: <ShieldCheck className="w-6 h-6 text-sky-300" />, text: "Metallurgically & Dimensionally Precise Castings" },
  { id: 4, icon: <Users className="w-6 h-6 text-sky-300" />, text: "Experienced Engineers & Skilled Team" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* ---------- Premium Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg">
            Why Choose Padmaja Technocast
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-white/80 mb-6">
            Excellence in Precision Casting
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.li
                key={reason.id}
                className="flex items-center gap-4 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-white/10 p-3 rounded-full flex items-center justify-center shadow-md">
                  {reason.icon}
                </span>
                <span className="text-white font-medium">{reason.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-gray-300 leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            At Padmaja Technocast, we specialize in modern Precision Investment Castings using the Lost Wax Process. 
            Our ISO-certified plant near Rajkot, Gujarat, produces castings ranging from a few grams up to 80kgs with a monthly capacity of 80MT. 
            With advanced technology and a skilled team, we ensure high-quality, reliable, and precise castings for industries worldwide.
          </motion.p>
        </motion.div>

        {/* Right Content - Images */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}images/whychooseus/img1.jpg`}
            alt="Precision Casting Process"
            className="rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] object-cover h-56 w-full hover:scale-105 transition-transform duration-300"
          />
          <motion.img
            src={`${import.meta.env.BASE_URL}images/whychooseus/img1.jpg`}
            alt="Advanced Manufacturing Plant"
            className="rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] object-cover h-56 w-full hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
