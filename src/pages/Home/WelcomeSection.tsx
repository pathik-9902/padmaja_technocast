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
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "mission"
  );

  const tabs = {
    mission: {
      title: "Our Mission",
      icon: ShieldCheck,
      content:
        "We deliver top-quality investment castings that redefine precision, reliability, and performance — built through disciplined processes and full transparency.",
      features: [
        {
          icon: ShieldCheck,
          title: "Relentless Quality",
          desc: "Continuous process control so every casting meets specification.",
        },
        {
          icon: Users,
          title: "Customer-Led Delivery",
          desc: "Collaborative engineering and responsive planning for success.",
        },
      ],
    },
    vision: {
      title: "Our Vision",
      icon: Globe,
      content:
        "To transform the investment casting industry using advanced metallurgical, digital, and sustainable manufacturing technologies.",
      features: [
        {
          icon: Globe,
          title: "Technology-Forward",
          desc: "AI, IoT and modern metallurgy for deeper insight and consistency.",
        },
        {
          icon: Award,
          title: "Sustainable Growth",
          desc: "Environment-first processes without compromising performance.",
        },
      ],
    },
    values: {
      title: "Our Values",
      icon: Handshake,
      content:
        "Integrity, accountability, and customer-first thinking guide every decision — building partnerships that grow stronger over time.",
      features: [
        {
          icon: Handshake,
          title: "Partnership",
          desc: "Clear communication, reliability, and aligned goals.",
        },
        {
          icon: Smile,
          title: "Continuous Improvement",
          desc: "Investing in better processes and smarter technology.",
        },
      ],
    },
  };

  const aims = [
    "Empower engineers with casting expertise blended with modern technology.",
    "Become a trusted partner by converting complex ideas into manufacturable solutions.",
    "Advance eco-friendly alloys and reduce production impact.",
    "Use AI and IoT to strengthen quality control and efficiency.",
    "Encourage cross-disciplinary collaboration for next-gen components.",
    "Innovate continually to produce highly detailed and miniature castings.",
  ];

  return (
    <motion.section
      className="relative py-24 min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [1, 0.96, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
{/* ---------- Premium Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1450px] mx-auto px-8 text-center"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Badge */}
        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-1.5 text-sm text-sky-100 backdrop-blur shadow-lg"
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Precision Investment Casting • Rajkot, Gujarat
          </motion.div>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-xl mb-4"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
          >
            Padmaja Technocast LLP
          </motion.h1>

          <p className="text-gray-200 text-xl md:text-2xl font-semibold mb-6">
            Welcome to the home of precision investment casting.
          </p>

          <div className="mx-auto h-px w-48 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent mb-7" />

          {/* Intro paragraphs */}
          <div className="max-w-4xl mx-auto text-left text-gray-300 text-lg leading-relaxed space-y-5">
            {[
              "Based in Rajkot, Gujarat, Padmaja Technocast LLP has shaped metal into precision components since 2016.",
              "We support ferrous and non-ferrous alloys for valves, pumps, and engineering applications with dependable quality.",
              "Purposeful design and controlled metallurgy ensure assemblies work better, last longer, and perform consistently.",
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {Object.keys(tabs).map((key) => {
                const tab = key as keyof typeof tabs;
                const active = activeTab === tab;
                const Icon = tabs[tab].icon;
                return (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileHover={{ y: -2 }}
                    className={`px-5 py-2.5 rounded-2xl text-base flex items-center gap-2 font-medium border transition-all ${
                      active
                        ? "bg-gradient-to-r from-sky-500/70 via-sky-400/80 to-sky-500/70 text-white border-white/30 shadow-xl"
                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tabs[tab].title}
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              className="rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-7 shadow-xl mb-10"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-gray-200 text-lg leading-relaxed">
                {tabs[activeTab].content}
              </p>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tabs[activeTab].features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl bg-white/10 backdrop-blur-xl p-6 border border-white/20 shadow-lg text-center"
                >
                  <div className="h-14 w-14 mx-auto mb-3 flex items-center justify-center bg-sky-500/15 rounded-2xl border border-sky-400/40">
                    <f.icon className="w-7 h-7 text-sky-300" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Aims */}
        <motion.div
          className="mt-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">We Aim To</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {aims.map((aim, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-3 bg-white/5 p-4 rounded-2xl border border-white/10"
              >
                <span className="h-2.5 w-2.5 mt-1 rounded-full bg-sky-400" />
                <p className="text-gray-200 text-base leading-relaxed">
                  {aim}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
