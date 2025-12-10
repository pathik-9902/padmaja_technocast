"use client";

import { useState, type JSX } from "react";
import { motion } from "framer-motion";

type Industry = {
  id: number;
  title: string;
  category: string;
  materials: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: "Defence Products",
    category: "Defence Investment Casting Manufacture",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "Our defence components are designed with high precision and manufactured to meet the exact requirements of the defence industry.",
    image: "/assets//industries/industries1.jpg",
  },
  {
    id: 2,
    title: "Metro/Railway Products",
    category: "Railway Products Casting Manufacturer",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "We offer a wide range of product castings in Carbon Steel, Nickel Based Alloy, Stainless Steel, AAR M201 Grade E for Indian Railways.",
    image: "/assets//industries/industries2.jpg",
  },
  {
    id: 3,
    title: "Automotive Industry",
    category: "Automobile Investment Casting Supplier",
    materials: "SS304, SS316, MS, EN Series",
    description:
      "12+ years of experience makes us a leading supplier of investment casting in the automobile sector with precision manufacturing facilities.",
    image: "/assets//industries/industries3.jpg",
  },
  {
    id: 4,
    title: "Medical Implants",
    category: "Medical Equipments Casting Supplier",
    materials: "SS304, SS316, SS316L, Other Special Grades",
    description:
      "We manufacture and supply orthopedic implants and instruments casting as per customer specifications.",
    image: "/assets//industries/industries4.jpg",
  },
  {
    id: 5,
    title: "Oil & Gas Valves",
    category: "Valves Casting through Investment Casting Process",
    materials: "SS304, SS316, SS316L",
    description:
      "We design and manufacture a wide range of valves like Gate, Ball, Check, and Butterfly valves for Oil & Gas applications.",
    image: "/assets//industries/industries5.jpg",
  },
  {
    id: 6,
    title: "Camlock & Pipe Fittings",
    category: "Camlock Coupling Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "Camlock couplings ensure quick connection/disconnection of hoses for water, air, gas, and oil applications.",
    image: "/assets//industries/industries6.jpg",
  },
  {
    id: 7,
    title: "Boating & Marine Industry",
    category: "Marine Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "We manufacture anchors, rod holders, deck hinges, turnbuckles, and more in SS304, SS316, and other alloys.",
    image: "/assets//industries/industries7.jpg",
  },
  {
    id: 8,
    title: "Door & Glass Hardware",
    category: "Hardware Casting Supplier",
    materials: "SS304, SS316, SS410, MS, Copper Alloys",
    description:
      "We supply spider fittings, railing fittings, door handles, knockers, and more in multiple alloys.",
    image: "/assets//industries/industries8.jpg",
  },
  {
    id: 9,
    title: "Fire Fighting Products",
    category: "Fire Fighting Casting Supplier",
    materials: "SS304, SS316, Copper Alloys",
    description:
      "We manufacture hydrant valves, branch pipe nozzles, and other fire safety components.",
    image: "/assets//industries/industries9.jpg",
  },
];

function CardImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-t-3xl bg-gray-900">
      <div style={{ paddingTop: "60%" }} className="relative">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800" />
        )}

        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-105`}
          draggable={false}
        />

        {/* top gradient for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>
    </div>
  );
}

export default function IndustriesSection(): JSX.Element {
  return (
    <section className="relative py-16 md:py-20 bg-[#05070b] text-white overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs sm:text-sm text-sky-100 backdrop-blur mb-4 shadow-[0_6px_24px_rgba(0,0,0,0.6)]">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Casting solutions across critical industries
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-xl mb-3">
            Industries We Serve
          </h2>

          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent mb-4" />

          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            From defence and medical to marine and transportation, our
            investment castings support applications where reliability, finish
            and dimensional accuracy matter.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.06, duration: 0.3 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {industries.map((item) => (
            <motion.article
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/12 bg-gradient-to-b from-white/10 via-black/40 to-black/70 shadow-[0_14px_45px_rgba(0,0,0,0.85)]"
              aria-labelledby={`industry-${item.id}`}
            >
              {/* Image */}
              <CardImage src={item.image} alt={item.title} />

              {/* Floating badge */}
              <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 border border-white/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-sky-100 backdrop-blur">
                Casting solutions
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3
                  id={`industry-${item.id}`}
                  className="text-lg sm:text-xl font-semibold text-white mb-1"
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-sky-200 mb-2">
                  {item.category}
                </p>

                {/* Materials as chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.materials.split(",").map((mat) => (
                    <span
                      key={mat.trim()}
                      className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[11px] text-gray-100"
                    >
                      {mat.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-gray-200 text-sm sm:text-[15px] leading-relaxed line-clamp-4">
                  {item.description}
                </p>

                {/* bottom accent line */}
                <div className="mt-4 h-px w-16 bg-gradient-to-r from-sky-400/80 to-transparent" />
              </div>

              {/* Hover glass highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
