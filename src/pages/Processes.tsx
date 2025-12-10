// src/pages/Processes.tsx
"use client";

import type React from "react";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

type ProcessesStep = {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  image: string;
};

const ProcessesData: ProcessesStep[] = [
  {
    id: 1,
    title: "Tool Design & Build",
    icon: <FaIcons.FaTools />,
    description: (
      <>
        <p className="mb-3">
          After completing the solidification analysis, our engineers move into
          tool design and build — a critical phase that defines the accuracy and
          repeatability of every casting we produce.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            3D modelling and simulation of tool design for accuracy and
            efficiency.
          </li>
          <li>
            Precision CNC machining of mold components to achieve tight
            tolerances.
          </li>
          <li>
            Careful assembly, inspection and testing before the tool enters
            production.
          </li>
        </ul>
        <p className="mt-3">
          By investing time, technology and craftsmanship in this stage, we
          ensure every mold is built to deliver dimensional accuracy and
          consistent quality.
        </p>
      </>
    ),
    image: "src/assets/processes/process1.jpg",
  },
  {
    id: 2,
    title: "Injecting Wax Patterns",
    icon: <FaIcons.FaFire />,
    description: (
      <>
        <p className="mb-3">
          Molten wax is injected into our precisely engineered molds to create
          exact replicas of the final component — the wax patterns.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>Controlled wax temperature and composition for stable flow.</li>
          <li>Optimized injection pressure and speed for clean filling.</li>
          <li>
            Carefully managed cooling to preserve shape and structural
            integrity.
          </li>
        </ul>
        <p className="mt-3">
          The precision of these patterns directly defines the quality of the
          final casting.
        </p>
      </>
    ),
    image: "src/assets/processes/process2.jpg",
  },
  {
    id: 3,
    title: "Assembly of Wax Patterns",
    icon: <FaIcons.FaCube />,
    description: (
      <>
        <p className="mb-3">
          Individual wax patterns are assembled into a tree structure where
          multiple components share a central sprue.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Multiple wax patterns are attached to a central wax sprue with
            precision.
          </li>
          <li>
            Balanced spacing and orientation support smooth metal flow and
            feeding.
          </li>
          <li>
            Gates and vents are added to control filling and reduce defects.
          </li>
        </ul>
        <p className="mt-3">
          This approach enables efficient multi-part casting without
          compromising quality.
        </p>
      </>
    ),
    image: "src/assets/processes/process3.jpg",
  },
  {
    id: 4,
    title: "Shell Building",
    icon: <FaIcons.FaHammer />,
    description: (
      <>
        <p className="mb-3">
          Shell building converts wax assemblies into strong, heat-resistant
          ceramic molds capable of withstanding molten metal.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Repeated dipping of wax assemblies into ceramic slurry and
            refractory sand.
          </li>
          <li>
            Controlled drying between coats to build shell thickness and
            strength.
          </li>
          <li>
            Carefully managed layering to capture fine details and complex
            geometries.
          </li>
        </ul>
        <p className="mt-3">
          The final ceramic shell provides the foundation for dimensional
          accuracy and surface quality.
        </p>
      </>
    ),
    image: "src/assets/processes/process4.jpg",
  },
  {
    id: 5,
    title: "De-Waxing",
    icon: <FaIcons.FaRecycle />,
    description: (
      <>
        <p className="mb-3">
          Once the shell is fully built, the wax is removed to create a precise
          hollow cavity ready for metal.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Ceramic-coated assemblies are placed in a high-temperature
            autoclave.
          </li>
          <li>
            Wax is rapidly melted and drained to form a clean internal cavity.
          </li>
          <li>
            Shells are inspected for cracks, distortion and surface integrity.
          </li>
        </ul>
        <p className="mt-3">
          De-waxing is tightly controlled to preserve the strength and detail of
          the ceramic mold.
        </p>
      </>
    ),
    image: "src/assets/processes/process5.jpg",
  },
  {
    id: 6,
    title: "Pouring of Molten Metal",
    icon: <FaIcons.FaTint />,
    description: (
      <>
        <p className="mb-3">
          Molten metal is poured into the preheated ceramic molds under strict
          process control.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Alloys are melted to precise temperature and chemistry
            specifications.
          </li>
          <li>
            Ceramic shells are preheated to avoid thermal shock and misruns.
          </li>
          <li>
            Pouring is monitored for temperature, flow rate and filling
            behaviour.
          </li>
        </ul>
        <p className="mt-3">
          As the metal cools and solidifies, it captures every feature of the
          mold, forming the final casting.
        </p>
      </>
    ),
    image: "src/assets/processes/process6.jpg",
  },
  {
    id: 7,
    title: "Heat Treatment",
    icon: <FaIcons.FaThermometerHalf />,
    description: (
      <>
        <p className="mb-3">
          Heat treatment enhances the mechanical properties, strength and
          durability of the castings.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Solution treatment to create a uniform, stable metallurgical
            structure.
          </li>
          <li>
            Quenching to lock in the desired microstructure and properties.
          </li>
          <li>
            Aging to optimize hardness, toughness and wear resistance.
          </li>
        </ul>
        <p className="mt-3">
          Carefully controlled cycles ensure each casting meets its performance
          requirements in service.
        </p>
      </>
    ),
    image: "src/assets/processes/process7.jpg",
  },
  {
    id: 8,
    title: "Finishing",
    icon: <FaIcons.FaCheckCircle />,
    description: (
      <>
        <p className="mb-3">
          The finishing stage refines each casting to its final functional and
          visual form.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Cutting, grinding and deburring to remove gates, risers and flash.
          </li>
          <li>
            Polishing and surface conditioning for the required finish.
          </li>
          <li>
            Coatings, treatments and anodizing (where applicable) for protection
            and aesthetics.
          </li>
        </ul>
        <p className="mt-3">
          Every part is finished to align with the customer’s fit, function and
          appearance expectations.
        </p>
      </>
    ),
    image: "src/assets/processes/process8.jpg",
  },
  {
    id: 9,
    title: "Machining",
    icon: <FaIcons.FaCogs />,
    description: (
      <>
        <p className="mb-3">
          When required, castings are machined to achieve exact dimensions and
          complex functional features.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>Advanced CNC machining supported by CAD/CAM systems.</li>
          <li>
            Creation of threads, slots, precise bores and critical mating
            surfaces.
          </li>
          <li>
            Dimensional consistency maintained across small batches and
            large-volume runs.
          </li>
        </ul>
        <p className="mt-3">
          This stage ensures components integrate seamlessly into assemblies and
          final products.
        </p>
      </>
    ),
    image: "src/assets/processes/process9.jpg",
  },
  {
    id: 10,
    title: "Inspection",
    icon: <FaIcons.FaClipboardCheck />,
    description: (
      <>
        <p className="mb-3">
          Quality checks are embedded throughout production, with a comprehensive
          final inspection before dispatch.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>Visual inspection for surface condition and obvious defects.</li>
          <li>
            Dimensional measurement using calibrated instruments and gauges.
          </li>
          <li>
            Functional checks and, where required, non-destructive testing
            (NDT).
          </li>
        </ul>
        <p className="mt-3">
          Detailed records support full traceability and continuous improvement.
        </p>
      </>
    ),
    image: "src/assets/processes/process10.jpg",
  },
  {
    id: 11,
    title: "Packing & Dispatch",
    icon: <FaIcons.FaBoxOpen />,
    description: (
      <>
        <p className="mb-3">
          The final step ensures every component reaches the customer safely and
          ready for use.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Custom packaging designed to protect parts from transit damage.
          </li>
          <li>
            Use of eco-friendly materials wherever practical and feasible.
          </li>
          <li>
            Clear labelling, documentation and logistics coordination for on-time
            delivery.
          </li>
        </ul>
        <p className="mt-3">
          From our foundry to your facility, products are handled with the same
          care we apply during manufacturing.
        </p>
      </>
    ),
    image: "src/assets/processes/process11.jpg",
  },
];

export default function ProcessesPage(): React.ReactElement {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#0f1112] via-[#1b1d1f] to-[#0f1112] text-white overflow-hidden">
      {/* Metallic texture overlay */}
      <div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Soft glow accents */}
      <div className="pointer-events-none absolute -left-40 top-32 h-72 w-72 rounded-full bg-sky-500/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-sky-400/14 blur-3xl" />

      <div className="relative z-10 max-w-6xl lg:max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400">
            Our Processes & Quality Journey
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            Every casting passes through a defined, tightly controlled sequence
            of steps — from tooling and wax to inspection and dispatch — to
            ensure consistent quality and performance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center vertical timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-sky-400/70 via-white/50 to-sky-400/70 shadow-[0_0_30px_rgba(56,189,248,0.6)]" />

          <div className="space-y-16">
            {ProcessesData.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Connector dot */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-sky-400 w-8 h-8 rounded-full items-center justify-center shadow-[0_0_24px_rgba(56,189,248,0.8)] border-2 border-white/70"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-bold text-white">
                      {step.id}
                    </span>
                  </motion.div>

                  {/* Image card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full lg:w-[48%] rounded-3xl overflow-hidden border border-white/15 bg-black/40 shadow-[0_18px_55px_rgba(0,0,0,0.8)] ${
                      isEven ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="relative w-full h-52 sm:h-64 md:h-72">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                      {/* Floating title bar */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-flex items-center gap-3 rounded-2xl bg-black/60 border border-white/20 px-4 py-2 backdrop-blur-xl">
                          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-sky-400/60 text-sky-300 text-xl">
                            {step.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] uppercase tracking-[0.22em] text-sky-200">
                              Step {index + 1}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-white">
                              {step.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full lg:w-[48%] p-6 md:p-7 rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl shadow-[0_14px_45px_rgba(0,0,0,0.7)] ${
                      isEven ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4 lg:hidden">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-sky-400/60 text-sky-300 text-xl">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.22em] text-sky-200">
                          Step {index + 1}
                        </div>
                        <h2 className="text-lg md:text-xl font-semibold text-white">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <div className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
