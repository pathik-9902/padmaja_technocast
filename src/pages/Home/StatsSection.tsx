"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { id: 1, value: 7000, label: "Highly Specialized Employees" },
  { id: 2, value: 90, label: "Countries Worldwide" },
  { id: 3, value: 2900, label: "Finished Projects" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg mb-12">
          Let the Numbers Speak for Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id} // <-- Add this line
              whileHover={{ scale: 1.08, y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative rounded-3xl p-8 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <span className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  0
                )}
                <span className="text-3xl text-sky-300">+</span>
              </span>
              <p className="text-gray-300 text-lg font-medium mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
