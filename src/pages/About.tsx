"use client";

import { motion } from "framer-motion";
import { Factory, Award, Users, Linkedin, Calendar } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Mr. Hitesh Ranpariya",
      role: "CFO",
      image: `/assets/team/person1.jpeg`,
      linkedin: "https://www.linkedin.com/in/hitesh-ranpariya-597427230/",
    },
    {
      name: "Mr. Krish Kotadiya",
      role: "CMO",
      image: `/assets/team/person1.jpeg`,
      linkedin: "https://www.linkedin.com/in/krish-kotadiya-7ab139283/",
    },
    {
      name: "Mr. Jashmin Chovatiya",
      role: "COO",
      image: `/assets/team/person1.jpeg`,
      linkedin: "https://www.linkedin.com/in/jashmin-chovatiya-872460380/",
    },
    {
      name: "Mr. Rajesh Shendge",
      role: "Manager – Marketing",
      image: `/assets/team/person1.jpeg`,
      linkedin: "https://www.linkedin.com/in/rajesh-shendge-a85b91303/",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Plant Established",
      description:
        "Padmaja Technocast LLP began operations in Rajkot with a dedicated investment casting facility.",
    },
    {
      year: "2023",
      title: "ISO 9001:2015 Certification",
      description:
        "Quality management systems certified for structured, auditable processes.",
    },
  ];

  return (
    <div className="bg-[#111111] text-white font-sans">
      {/* Hero */}
      <section className="relative bg-cover bg-center py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            PADMAJA TECHNOCAST LLP
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Modern investment casting foundry based in Rajkot, delivering
            reliable, precision components for industrial applications.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-center rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                About Padmaja Technocast
              </h2>
              <p className="text-sm md:text-base text-gray-200 mb-3">
                Padmaja Technocast is a state-of-the-art investment casting
                foundry in Rajkot, Western India. The company is led by
                technocrats and industry veterans with deep experience in
                mechanical engineering and manufacturing.
              </p>
              <p className="text-sm md:text-base text-gray-200 mb-3">
                We focus on clear processes, clean castings and predictable
                delivery. Every order is handled with a balance of technical
                rigour and practical shop-floor understanding.
              </p>
              <p className="text-sm md:text-base text-gray-200">
                Long-term relationships and consistent performance guide how we
                design, produce and support our castings.
              </p>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-[0_16px_45px_rgba(0,0,0,0.8)]">
                <img
                  src={`/assets/team/about.jpg`}
                  alt="Padmaja Technocast Plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What we do / Sectors */}
      <section className="pb-14 md:pb-16">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <motion.div
            className="rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-6 md:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              What We Do
            </h3>
            <p className="text-sm md:text-base text-gray-200 mb-3">
              We manufacture precision investment castings using the lost-wax
              process — from small, intricate geometries to medium-sized
              engineered components.
            </p>
            <p className="text-sm md:text-base text-gray-200">
              Tooling, wax, shell, melting and finishing are handled in-house,
              enabling consistent dimensional performance and surface finish.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl p-6 md:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Sectors We Support
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base text-gray-200">
              <li>• General Engineering</li>
              <li>• Power & Control Systems</li>
              <li>• Pumps & Valves</li>
              <li>• Automotive Components</li>
              <li>• Aerospace & Defence</li>
              <li>• Mining & Heavy Industries</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Simple expertise strip */}
      <section className="py-10 bg-[#181818]">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: "Focused Facility",
                desc: "Infrastructure dedicated to investment casting.",
              },
              {
                icon: Award,
                title: "Quality Mindset",
                desc: "Documented processes and traceability.",
              },
              {
                icon: Users,
                title: "Experienced Leadership",
                desc: "Hands-on management across functions.",
              },
              {
                icon: Award,
                title: "Customer-Oriented",
                desc: "Clarity on requirements, cost and timelines.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl text-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <item.icon className="mx-auto text-sky-400 w-8 h-8 mb-3" />
                <h4 className="text-sm md:text-base font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Leadership Team
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              A compact leadership group combining financial, commercial and
              operational strengths.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border border-white/20"
                />
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 mb-3">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sky-400 hover:text-sky-300 text-xs md:text-sm"
                >
                  <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-14 md:py-16 bg-[#181818]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Milestones
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 border-l border-white/20" />
            <div className="space-y-6">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="absolute left-3 top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400 border border-white" />
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span className="text-xs md:text-sm font-semibold text-gray-200">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
