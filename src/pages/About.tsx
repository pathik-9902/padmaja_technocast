"use client";

import { motion } from "framer-motion";
import { Factory, Award, Users, Linkedin, Calendar } from "lucide-react";

export default function About() {
  const team = [
    { name: "Mr. Hitesh Ranpariya", role: "CFO", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
    { name: "Mr. Krish Kotadiya", role: "CMO", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
    { name: "Mr. Jashmin Chovatiya", role: "COO", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
    { name: "Mr. Rajesh Shendge", role: "Manager-Marketing", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
  ];

  const milestones = [
    { year: "2023", title: "Plant Established", description: "Padmaja Technocast LLP started operations with modern precision casting technology." },
    { year: "2023", title: "ISO 9001:2015 Certified", description: "Achieved ISO certification to ensure world-class quality standards." },
  ];

  return (
    <div className="bg-[#111111] text-white font-sans">
      {/* Hero Panel */}
      <section className="relative bg-[url('/images/about/bg-industrial.jpg')] bg-cover bg-center py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            PADMAJA TECHNOCAST LLP
          </motion.h1>
          <motion.p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
            Precision Investment Castings – ISO 9001:2015 Certified <br />
            High-Quality Components for Industrial Applications
          </motion.p>
        </div>
      </section>

      {/* About / Services Panel */}
      <section className="py-16 container mx-auto px-6">
        <motion.div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <img src={`${import.meta.env.BASE_URL}images/about/about.jpg`} alt="Plant" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Our Services</h2>
            <p className="mb-4 text-gray-300">
              Specializing in <strong>Precision Investment Casting</strong> using the Lost Wax Process. Our facility produces castings from a few grams to 80kg with 80MT monthly capacity.
            </p>
            <p className="mb-4 text-gray-300">
              We serve metallurgically, geometrically, and dimensionally complex components for sectors like:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>General Engineering</li>
              <li>Power Generation & Control Systems</li>
              <li>Pumps & Valves</li>
              <li>Automobile Components</li>
              <li>Aerospace & Defence</li>
              <li>Mining & Heavy Industries</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Expertise / Values Panel */}
      <section className="py-12 md:py-16 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: "Modern Manufacturing", desc: "Advanced tooling & plant facilities." },
              { icon: Award, title: "Certified Quality", desc: "ISO 9001:2015 certified processes." },
              { icon: Users, title: "Skilled Team", desc: "Engineers & metallurgists delivering excellence." },
              { icon: Award, title: "Reliable Delivery", desc: "On-time production & dispatch." },
            ].map((item, i) => (
              <motion.div key={i} className="p-6 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.05 }}>
                <item.icon className="mx-auto text-sky-400 w-10 h-10 mb-3" />
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Panel */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div key={index} className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }}>
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-white/20" />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="mb-4 text-gray-300">{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-400 hover:text-sky-300 transition">
                <Linkedin className="w-5 h-5 mr-1" /> LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones Panel */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
          <div className="relative border-l-2 border-white/20 pl-8">
            {milestones.map((item, index) => (
              <motion.div key={index} className="mb-10" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2, duration: 0.6 }}>
                <div className="flex items-center mb-2">
                  <Calendar className="w-6 h-6 text-sky-400 mr-2" />
                  <span className="text-lg font-semibold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
