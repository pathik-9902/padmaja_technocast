"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Certificates() {
  const certificates = [
    { title: "ISO 9001 Certification", year: "2015", file: "/certificates/iso9001.pdf", image: "/images/certificates/iso9001.webp" },
    { title: "IATF 16949 Certification", year: "2022", file: "/certificates/iatf16949.pdf", image: "/images/certificates/iatf16949.webp" },
    { title: "Environmental Compliance", year: "2021", file: "/certificates/env-compliance.pdf", image: "/images/certificates/env-compliance.webp" },
    { title: "Safety & Quality Standard", year: "2019", file: "/certificates/safety-quality.pdf", image: "/images/certificates/safety-quality.webp" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden text-gray-100 font-sans">
      {/* ---------- Metallic Glass Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ---------- Hero Section ---------- */}
      <section className="relative z-10 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Certifications
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Padmaja Technocast proudly holds globally recognized certifications — proof of our dedication to quality, safety, and environmental excellence.
        </motion.p>
      </section>

      {/* ---------- Certificates Grid ---------- */}
      <section className="relative z-10 py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative group rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
            >
              {/* glass shine overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-96 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-300 mb-6 text-sm tracking-wide">{cert.year}</p>

                <motion.a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full 
                    bg-gradient-to-r from-sky-400/20 via-white/10 to-sky-400/20 
                    border border-white/20 text-white font-medium shadow-md
                    hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2 text-sky-300" />
                  Download Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Call to Action ---------- */}
      <section className="relative z-10 py-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Partner With Us?
        </motion.h2>
        <motion.p
          className="text-lg mb-10 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Explore our certifications and discover why Padmaja Technocast is trusted globally for precision and excellence.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          className="inline-block px-8 py-3 rounded-full backdrop-blur-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 text-white font-semibold shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
        >
          <Link to="/contact">Get in Touch</Link>
        </motion.div>
      </section>
    </div>
  );
}
