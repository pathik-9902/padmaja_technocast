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
    <div className="text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-white py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Certifications
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Padmaja Technocast is proud to hold international certifications demonstrating our commitment to quality, safety, and environmental standards.
          </motion.p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Certificates</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-4">{cert.year}</p>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-md font-medium shadow hover:bg-red-500 transition"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Ready to Partner With Us?
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Explore our certifications and see why Padmaja Technocast is a trusted industrial partner globally.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-500 transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
