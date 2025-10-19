"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/projects/project1.jpg`,
    title: "Steel Casting Plant",
    category: "Industrial",
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/projects/project2.jpg`,
    title: "Heavy Machinery Parts",
    category: "Engineering",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/projects/project3.jpg`,
    title: "Automotive Components",
    category: "Automobile",
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/projects/project4.jpg`,
    title: "Energy Equipment",
    category: "Energy",
  },
];

export default function ProjectsSection() {
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
          Our Recent Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, duration: 0.2 }}
              className="relative group rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full flex flex-col justify-end items-center text-center p-4 opacity-100 sm:opacity-100 transition-opacity duration-300">
                <span className="text-sm md:text-base uppercase tracking-wide text-sky-300 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mt-1 drop-shadow-lg">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- Call to Action ---------- */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="mt-14 inline-block px-8 py-3 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 text-white font-semibold shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
        >
          Explore More Projects
        </motion.div>
      </div>
    </section>
  );
}
