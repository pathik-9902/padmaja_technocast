"use client";

import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

const infrastructureData = [
  {
    id: 1,
    title: "Tool Design & Manufacturing",
    icon: <FaIcons.FaTools />,
    description:
      "Tooling design is a crucial part of the casting process, defining the precision, repeatability, and final quality of production.",
  },
  {
    id: 2,
    title: "Wax Injection",
    icon: <FaIcons.FaFire />,
    description:
      "A heat-disposable wax is injected into a precision metal die, forming the initial replica of the part to be cast.",
  },
  {
    id: 3,
    title: "Wax Assembly",
    icon: <FaIcons.FaCube />,
    description:
      "Wax patterns are assembled on a sprue or frame structure using sticky wax, representing the metal flow channels during casting.",
  },
  {
    id: 4,
    title: "Shell Building",
    icon: <FaIcons.FaHammer />,
    description:
      "Assemblies are repeatedly dipped in ceramic slurry and coated with refractory sand to build strong shells for metal pouring.",
  },
  {
    id: 5,
    title: "Dewaxing & Wax Recycling",
    icon: <FaIcons.FaRecycle />,
    description:
      "The ceramic-coated wax assemblies are steam dewaxed; reclaimed wax is reused for non-critical patterns.",
  },
  {
    id: 6,
    title: "Preheating / Shell Baking",
    icon: <FaIcons.FaThermometerHalf />,
    description:
      "Shells are baked at controlled temperatures before metal pouring to prevent premature solidification.",
  },
  {
    id: 7,
    title: "Metal Pouring",
    icon: <FaIcons.FaTint />,
    description:
      "Molten metal is poured into the heated shell molds after alloy composition and degassing verification.",
  },
  {
    id: 8,
    title: "Shell Removal",
    icon: <FaIcons.FaHammer />,
    description:
      "High-pressure vibration and pneumatic tools remove the outer ceramic shell, exposing the cast part.",
  },
  {
    id: 9,
    title: "Fettling & Finishing",
    icon: <FaIcons.FaCheckCircle />,
    description:
      "Castings undergo cutting, grinding, and surface finishing to remove gates, flash, and excess material.",
  },
  {
    id: 10,
    title: "Final Inspection & Documentation",
    icon: <FaIcons.FaClipboardCheck />,
    description:
      "Rigorous QC ensures dimensional accuracy, traceability, and conformity with customer specifications.",
  },
  {
    id: 11,
    title: "Packaging & Labelling",
    icon: <FaIcons.FaBoxOpen />,
    description:
      "Products are carefully packed, labelled, and prepared for global dispatch with detailed documentation.",
  },
];

export default function InfrastructurePage() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#0f1112] via-[#1b1d1f] to-[#0f1112] text-white overflow-hidden">
      {/* Metallic texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400"
        >
          Our Infrastructure & Quality Process
        </motion.h1>

        <div className="relative">
          {/* Vertical metallic line */}
          <div className="absolute left-1/2 top-0 hidden md:block h-full w-[2px] bg-gradient-to-b from-sky-400/60 via-white/40 to-sky-400/60 transform -translate-x-1/2" />

          <div className="space-y-20">
            {infrastructureData.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector dot */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 bg-sky-400 w-5 h-5 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.6)] border-2 border-white/40" />

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] p-6 rounded-3xl border border-white/15 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-sky-400/50 bg-white/10 shadow-inner">
                      <span className="text-sky-300 text-2xl">{step.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white tracking-wide">
                        Step {index + 1}: {step.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
