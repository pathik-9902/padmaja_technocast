"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Wrench } from "lucide-react";

const reasons = [
  { id: 1, icon: <Wrench className="w-6 h-6 text-sky-300" />, text: "State-of-the-art in-house manufacturing" },
  { id: 2, icon: <Award className="w-6 h-6 text-sky-300" />, text: "ISO 9001:2015 certified quality systems" },
  { id: 3, icon: <ShieldCheck className="w-6 h-6 text-sky-300" />, text: "Metallurgically & dimensionally precise castings" },
  { id: 4, icon: <Users className="w-6 h-6 text-sky-300" />, text: "Experienced engineers and skilled workforce" },
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
                className="flex items-center gap-4 backdrop-blur-2xl bg-white/8 border border-white/10 rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.6)] transition-all duration-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.14, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-white/6 p-3 rounded-full flex items-center justify-center shadow-md">
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
            Padmaja Technocast specializes in precision investment castings using the lost-wax process. Our ISO-certified facility near Rajkot produces castings from a few grams up to 80 kg, with an 80 MT monthly capacity. We combine advanced equipment, metallurgical expertise and strict inspection protocols to deliver components that meet demanding dimensional, mechanical and surface-finish requirements.
          </motion.p>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={`src/assets//whychooseus/img1.png`}
            alt="Precision Casting Process"
            className="rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.45)] object-cover h-70 w-full hover:scale-105 transition-transform duration-300"
          />
          <motion.img
            src={`src/assets//whychooseus/img2.png`}
            alt="Advanced Manufacturing Plant"
            className="rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.45)] object-cover h-70 w-full hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Additional Details Panel */}
      <div className="relative z-10 container mx-auto px-6 mt-12">
        <motion.div
          className="backdrop-blur-2xl bg-white/6 border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Manufacturing & Technical Capabilities</h4>
              <p className="mb-3">
                We manufacture a broad range of valve components — from intricate precision geometries to robust, heavy-duty parts. Our capabilities include metallurgical testing, dimensional inspection, precision machining, coating and surface-finishing operations to ensure parts are production-ready.
              </p>

              <h4 className="text-lg font-semibold text-white mt-4 mb-2">Testing & Quality</h4>
              <p>
                Every component undergoes rigorous testing: hardness & impact testing, chemical analysis and dimensional verification. Only defect-free parts leave our facility, backed by traceability and documented inspection records.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Materials & Value-Added Services</h4>
              <p className="mb-3">
                We work with common steels and specialized alloys sourced to global standards. Clients can specify materials or rely on our metallurgical recommendations for optimal performance. Additional services include final machining, assembly, surface treatments and custom packaging.
              </p>

              <h4 className="text-lg font-semibold text-white mt-4 mb-2">Partnership Advantage</h4>
              <p>
                Partnering with Padmaja Technocast delivers competitive pricing, responsive engineering support, and end-to-end production including finishing and post-processing. Our approach is collaborative — we align manufacturing plans to customer schedules and quality requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
