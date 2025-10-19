"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const industries = [
  {
    id: 1,
    title: "Defence Products",
    category: "Defence Investment Casting Manufacture",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "Our defence components are designed with high precision and manufactured to meet the exact requirements of the defence industry.",
    image: `${import.meta.env.BASE_URL}images/industries/industries1.webp`,
  },
  {
    id: 2,
    title: "Metro/Railway Products",
    category: "Railway Products Casting Manufacturer",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "We offer a wide range of product castings in Carbon Steel, Nickel Based Alloy, Stainless Steel, AAR M201 Grade E for Indian Railways.",
    image: `${import.meta.env.BASE_URL}images/industries/industries2.webp`,
  },
  {
    id: 3,
    title: "Automotive Industry",
    category: "Automobile Investment Casting Supplier",
    materials: "SS304, SS316, MS, EN Series",
    description:
      "12+ years of experience makes us a leading supplier of investment casting in the automobile sector with precision manufacturing facilities.",
    image: `${import.meta.env.BASE_URL}images/industries/industries3.webp`,
  },
  {
    id: 4,
    title: "Medical Implants",
    category: "Medical Equipments Casting Supplier",
    materials: "SS304, SS316, SS316L, Other Special Grades",
    description:
      "We manufacture and supply orthopedic implants and instruments casting as per customer specifications in stainless steel and special grades.",
    image: `${import.meta.env.BASE_URL}images/industries/industries4.webp`,
  },
  {
    id: 5,
    title: "Oil & Gas Valves",
    category: "Valves Casting through Investment Casting Process",
    materials: "SS304, SS316, SS316L",
    description:
      "We design and manufacture a wide range of valves like Gate, Ball, Check, and Butterfly valves for Oil & Gas applications.",
    image: `${import.meta.env.BASE_URL}images/industries/industries5.webp`,
  },
  {
    id: 6,
    title: "Camlock & Pipe Fittings",
    category: "Camlock Coupling Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "Camlock couplings ensure quick connection/disconnection of hoses for water, air, gas, and oil applications.",
    image: `${import.meta.env.BASE_URL}images/industries/industries6.webp`,
  },
  {
    id: 7,
    title: "Boating & Marine Industry",
    category: "Marine Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "We manufacture anchors, rod holders, deck hinges, turnbuckles, and more in SS304, SS316, and other alloys.",
    image: `${import.meta.env.BASE_URL}images/industries/industries7.webp`,
  },
  {
    id: 8,
    title: "Door & Glass Hardware",
    category: "Hardware Casting Supplier",
    materials: "SS304, SS316, SS410, MS, Copper Alloys",
    description:
      "We supply spider fittings, railing fittings, door handles, knockers, and more in multiple alloys.",
    image: `${import.meta.env.BASE_URL}images/industries/industries8.webp`,
  },
  {
    id: 9,
    title: "Fire Fighting Products",
    category: "Fire Fighting Casting Supplier",
    materials: "SS304, SS316, Copper Alloys",
    description:
      "We manufacture hydrant valves, branch pipe nozzles, and other fire safety components for commercial and residential use.",
    image: `${import.meta.env.BASE_URL}images/industries/industries9.webp`,
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-16 min-h-screen overflow-hidden">
      {/* ---------- Premium Dynamic Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg mb-12">
          Industries We Serve
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, duration: 0.2 }}
              className="relative group rounded-3xl p-0 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500"
            >
              {/* subtle glass shine */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-300 text-sm mb-1">{industry.category}</p>
                <p className="text-gray-300 text-sm mb-1">
                  <span className="font-medium">Mat:</span> {industry.materials}
                </p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{industry.description}</p>

                {/* Glassmorphism Button */}
                <Link
                  to={`/industries/${industry.id}`}
                  className="inline-block px-4 py-2 backdrop-blur-2xl bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
