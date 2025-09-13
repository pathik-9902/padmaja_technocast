"use client";

import { motion } from "framer-motion";
import { Factory, Award, Users, Linkedin, Calendar } from "lucide-react";

export default function About() {
  const team = [
    { name: "Mr. Hitesh Ranpariya", role: "Chief Financial Officer", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
    { name: "Mr. Krish Kotadiya", role: "Chief Marketing Officer", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
    { name: "Mr. Jashmin Chovatiya", role: "Chief Operating Officer", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
    { name: "Mr. Rajesh Shendge", role: "Manager-Marketing", image: `${import.meta.env.BASE_URL}images/about/person1.jpeg`, linkedin: "#" },
  ];

  const milestones = [
    { year: "2023", title: "Plant Established", description: "Padmaja Technocast LLP started operations with modern precision casting technology." },
    { year: "2023", title: "ISO 9001:2015 Certified", description: "Achieved ISO certification to ensure world-class quality standards." },
  ];

  return (
    <div className="bg-white text-[#111111] font-sans">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            PADMAJA TECHNOCAST LLP
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            ‘MANUFACTURE AND SUPPLY OF INVESTMENT CASTING’ <br />
            (ISO 9001:2015 CERTIFIED COMPANY)
          </motion.p>
          <motion.address
            className="mt-4 text-gray-600 not-italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            SURVEY NO.: 21/1/P2/P1, PLOT NO.1, AVADH INDUSTRIAL HUB, B/H AVADH COLD STORAGE, NH-27, <br />
            AT- BILIYALA, TAL: GONDAL, DIST: RAJKOT, GUJARAT-360 311, INDIA
          </motion.address>
        </div>
      </section>

      {/* About / Company Info */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={`${import.meta.env.BASE_URL}images/about/about.jpg`}
          alt="Padmaja Technocast Plant"
          className="rounded-2xl shadow hover:shadow-gray-400 transition"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-gray-700">
            We are a modern Precision Investment Castings (Lost Wax Process) manufacturing plant with advanced technology near Rajkot, Gujarat, India. Our plant covers an area of 3,714 ㎡ with a construction area of over 2,145 ㎡. We have been operating since December 2023.
          </p>
          <p className="mb-4 text-gray-700">
            Our manufacturing range covers from a few grams to 80Kgs as a single piece with a production capacity of 80MT per month. We are capable of casting in various material groups including Low Alloy Steel, Carbon Steel, High Alloy Steel, Tool Steel, and more.
          </p>
          <p className="mb-4 text-gray-700">
            Our focus is to cast metallurgically, geometrically, and dimensionally complex components to serve the following sectors:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>General Engineering Components</li>
            <li>Power Generation and Control</li>
            <li>Pumps and Valves Sector</li>
            <li>Automobile Sector</li>
            <li>Aerospace and Defence</li>
            <li>Mining and Industrial Applications</li>
          </ul>
          <p className="text-gray-700">
            Padmaja Technocast has a team of qualified and experienced technical engineers, metallurgists, managers, and quality personnel. We maintain strict quality measures at each stage, from raw material to final dispatch, using tools like FMEA, Control Plan, and CAPA. We ensure timely delivery, competitive cost, and consistency in quality to earn customer confidence.
          </p>
        </motion.div>
      </section>

            {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-gray-400 transition" whileHover={{ scale: 1.05 }}>
              <Factory className="mx-auto text-red-600 w-10 h-10 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">Innovation</h3>
              <p className="text-sm sm:text-base">Modern technology ensures high-quality, precise castings.</p>
            </motion.div>
            <motion.div className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-gray-400 transition" whileHover={{ scale: 1.05 }}>
              <Award className="mx-auto text-red-600 w-10 h-10 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">Quality</h3>
              <p className="text-sm sm:text-base">Uncompromising standards from raw material to dispatch.</p>
            </motion.div>
            <motion.div className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-gray-400 transition" whileHover={{ scale: 1.05 }}>
              <Users className="mx-auto text-red-600 w-10 h-10 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">Teamwork</h3>
              <p className="text-sm sm:text-base">Skilled professionals working together to deliver excellence.</p>
            </motion.div>
            <motion.div className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-gray-400 transition" whileHover={{ scale: 1.05 }}>
              <Award className="mx-auto text-red-600 w-10 h-10 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1">Certified Excellence</h3>
              <p className="text-sm sm:text-base mb-2">ISO & IATF certifications validate quality and reliability.</p>
              <a href="/certificates" className="text-red-600 font-medium hover:text-red-500 text-sm sm:text-base">View Certificates →</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 shadow rounded-xl p-6 hover:shadow-gray-400 transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-gray-300"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="mb-4 text-gray-700">{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-600 hover:text-red-500 transition">
                <Linkedin className="w-5 h-5 mr-1" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
          <div className="relative border-l-2 border-gray-300 pl-8">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="mb-10"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center mb-2">
                  <Calendar className="w-6 h-6 text-red-600 mr-2" />
                  <span className="text-lg font-semibold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Partner with Padmaja Technocast
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Let’s shape the future of manufacturing together. Contact us today to build a reliable partnership.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-red-500 transition"
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
}
