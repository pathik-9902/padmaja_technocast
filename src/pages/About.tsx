"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Factory, Award, Users, Linkedin, Calendar } from "lucide-react";
import { useRef } from "react";

/* ================= PREMIUM IMAGE ================= */

function PremiumImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.img
      loading="lazy"
      decoding="async"
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  /* ===== TIMELINE PROGRESS ===== */

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothTimeline = useSpring(timelineProgress, {
    stiffness: 60,
    damping: 20,
  });

  const lineHeight = useTransform(smoothTimeline, [0, 1], ["0%", "100%"]);

  /* ===== DATA ===== */

  const team = [
    {
      name: "Mr. Hitesh Ranpariya",
      role: "Financial Director",
      image: "/assets/team/hitesh.webp",
      linkedin:
        "https://www.linkedin.com/in/hitesh-ranpariya-597427230/",
    },
    {
      name: "Mr. Krish Kotadiya",
      role: "Marketing Director",
      image: "/assets/team/krish.webp",
      linkedin:
        "https://www.linkedin.com/in/krish-kotadiya-7ab139283/",
    },
    {
      name: "Mr. Jashmin Chovatiya",
      role: "Operations Director",
      image: "/assets/team/jashmin.webp",
      linkedin:
        "https://www.linkedin.com/in/jashmin-chovatiya-872460380/",
    },
    {
      name: "Mr. Sanjay Kotadiya",
      role: "Advisory Director",
      image: "/assets/team/sanjay.webp",
      linkedin: "",
    },
    {
      name: "Mr. Pramod Kotadiya",
      role: "Advisory Director",
      image: "/assets/team/pramod.webp",
      linkedin: "",
    },
    {
      name: "Mr. Pankaj Paghdar",
      role: "Advisory Director",
      image: "/assets/team/pankaj.webp",
      linkedin: "",
    },
  ];

  const milestones = [
    { year: "Nov 2023", title: "Production Started", capacity: "6 MT / Month", description: "Commercial production commenced." },
    { year: "Feb 2024", title: "Capacity Expansion", capacity: "8 MT / Month", description: "Process optimisation increased throughput." },
    { year: "May 2024", title: "ISO Certification", capacity: "10 MT / Month", description: "Structured quality management enabled scaling." },
    { year: "Aug 2024", title: "Operational Optimisation", capacity: "12 MT / Month", description: "Cycle-time reduction improved productivity." },
    { year: "Nov 2024", title: "Advanced QC", capacity: "14 MT / Month", description: "Consistency improvements strengthened output." },
    { year: "Feb 2025", title: "Throughput Improvement", capacity: "16 MT / Month", description: "Continuous process refinement." },
    { year: "May 2025", title: "PED Certification", capacity: "19 MT / Month", description: "Export readiness enhanced." },
    { year: "Jun 2025", title: "Shot Blasting Machine", capacity: "20 MT / Month", description: "Finishing capacity increased." },
    { year: "Jul 2025", title: "Wax Press Expansion", capacity: "21 MT / Month", description: "Moulding throughput strengthened." },
    { year: "Aug 2025", title: "Crucible Furnace", capacity: "22 MT / Month", description: "Melting capacity scaled." },
    { year: "Nov 2025", title: "Infrastructure Scaling", capacity: "25 MT / Month", description: "Major equipment upgrades." },
    { year: "Feb 2026", title: "GE Audit", capacity: "28 MT / Month", description: "Global manufacturing benchmark achieved." },
  ];

  const expertise = [
    { icon: Factory, title: "Focused Facility", desc: "Infrastructure dedicated to investment casting." },
    { icon: Award, title: "Quality Discipline", desc: "Traceable and documented production systems." },
    { icon: Users, title: "Industrial Leadership", desc: "Hands-on metallurgical experience." },
    { icon: Award, title: "Customer Alignment", desc: "Predictable delivery planning & cost transparency." },
  ];

  return (
    <div ref={container} className="bg-[#050505] text-white overflow-x-hidden">

      {/* STORY */}
      <section className="py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl font-bold mb-6">Engineering-Driven Foundry</h2>
            <p className="text-gray-300 mb-4">
              Integrated wax, shell, melting and finishing processes ensure controlled metallurgical output.
            </p>
            <p className="text-gray-300 mb-4">
              Continuous equipment upgrades enable progressive capacity scaling without quality compromise.
            </p>
            <p className="text-gray-300">
              Long-term partnerships built through delivery reliability and transparent commercial execution.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
            <div className="absolute -inset-10 bg-sky-500/10 blur-3xl rounded-[40px]" />
            <PremiumImage
              src="/assets/team/about.webp"
              alt="about"
              className="rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/10"
            />
          </motion.div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -14, scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-[28px] p-8 backdrop-blur-xl"
            >
              <item.icon className="text-sky-400 w-10 h-10 mb-5" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

   {/* ===== PREMIUM LEADERSHIP (BETTER IMAGE FIT) ===== */}
<section className="py-24 md:py-28">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 md:mb-16">
      Leadership
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

      {team.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
          whileHover={{ y: -10 }}
          style={{ willChange: "transform" }}
          className="bg-white/[0.04] border border-white/10 rounded-[26px] overflow-hidden
                     shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                     transition-transform duration-300"
        >

          {/* TALLER IMAGE AREA */}
          <div className="relative w-full aspect-[4/3.5] overflow-hidden">
            <img
              src={m.image}
              alt={m.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* CONTENT */}
          <div className="p-7 md:p-8 text-center bg-black/40 backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-semibold leading-snug">
              {m.name}
            </h3>

            <p className="text-gray-400 text-sm mt-1 mb-4">
              {m.role}
            </p>

            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-400 text-sm
                           hover:text-sky-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            )}
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* INSANE PREMIUM TIMELINE */}
      <section ref={timelineRef} className="py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-24">
            Production Capacity Growth Journey
          </h2>

          <div className="relative">

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

            <motion.div
              style={{ height: lineHeight }}
              className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-sky-400 origin-top"
            />

            <div className="space-y-16">

              {milestones.map((m, i) => {
                const left = i % 2 === 0;

                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 80, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="grid md:grid-cols-2 gap-10 items-center relative"
                  >

                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-sky-400 rounded-full border border-white shadow-[0_0_15px_rgba(56,189,248,0.8)]" />

                    <div className={left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}>
                      <div className="bg-white/5 border border-white/10 rounded-[22px] p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

                        <div className="flex items-center gap-2 text-sky-400 text-xs mb-3 justify-start md:justify-end">
                          <Calendar className="w-3.5 h-3.5" />
                          {m.year}
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {m.title}
                        </h3>

                        <div className="text-3xl md:text-4xl font-extrabold text-sky-400 mb-3">
                          {m.capacity}
                        </div>

                        <p className="text-gray-400 text-sm">
                          {m.description}
                        </p>

                      </div>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}