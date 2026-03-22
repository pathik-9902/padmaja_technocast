"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Award, Users, Linkedin, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const team = [
    {
      name: "Mr. Hitesh Ranpariya",
      role: "Financial Director",
      image: "/assets/team/hitesh.webp",
      linkedin: "https://www.linkedin.com/in/hitesh-ranpariya-597427230/",
    },
    {
      name: "Mr. Krish Kotadiya",
      role: "Marketing Director",
      image: "/assets/team/krish.webp",
      linkedin: "https://www.linkedin.com/in/krish-kotadiya-7ab139283/",
    },
    {
      name: "Mr. Jashmin Chovatiya",
      role: "Operations Director",
      image: "/assets/team/jashmin.webp",
      linkedin: "https://www.linkedin.com/in/jashmin-chovatiya-872460380/",
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
    { year: "Nov 2023", title: "Production Started", capacity: "6 MT / Month", description: "Commercial production commenced with initial setup and baseline manufacturing operations." },
    { year: "Feb 2024", title: "Capacity Expansion", capacity: "8 MT / Month", description: "Process stabilization and workflow improvements increased overall production throughput." },
    { year: "May 2024", title: "ISO Certification Achieved", capacity: "10 MT / Month", description: "Quality management systems strengthened with ISO certification enabling higher output." },
    { year: "Aug 2024", title: "Operational Optimization", capacity: "12 MT / Month", description: "Enhanced manpower efficiency and cycle-time reduction improved plant productivity." },
    { year: "Nov 2024", title: "Advanced QC Implementation", capacity: "14 MT / Month", description: "Structured quality checkpoints improved consistency and production scale." },
    { year: "Feb 2025", title: "Throughput Improvement", capacity: "16 MT / Month", description: "Continuous process refinement enabled higher monthly manufacturing output." },
    { year: "May 2025", title: "PED Certification Completed", capacity: "19 MT / Month", description: "Achieved PED compliance, strengthening export readiness and operational confidence." },
    { year: "Jun 2025", title: "Shot Blasting Machine Added", capacity: "20 MT / Month", description: "Installation of 500 kg shot blasting machine improved finishing capacity." },
    { year: "Jul 2025", title: "Wax Injection Press Expansion", capacity: "21 MT / Month", description: "Addition of three new wax injection presses enhanced molding throughput." },
    { year: "Aug 2025", title: "Crucible Furnace Commissioned", capacity: "22 MT / Month", description: "300 kg crucible furnace installation strengthened melting capacity." },
    { year: "Nov 2025", title: "Infrastructure Scaling", capacity: "25 MT / Month", description: "Major equipment upgrades and layout optimization improved production flow." },
    { year: "Feb 2026", title: "GE Audit Successfully Completed", capacity: "28 MT / Month", description: "Met global audit standards demonstrating strong quality and production systems." },
  ];

  const expertise = [
    { icon: Factory, title: "Focused Facility", desc: "Infrastructure dedicated to investment casting." },
    { icon: Award, title: "Quality Mindset", desc: "Documented processes and traceability." },
    { icon: Users, title: "Experienced Leadership", desc: "Hands-on management across functions." },
    { icon: Award, title: "Customer-Oriented", desc: "Clarity on requirements, cost and timelines." },
  ];

  return (
    <div
      className="text-white font-sans"
      style={{
        background: "#0a0a0a",
        fontFamily: "'DM Sans', 'Sora', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --accent: #38bdf8;
          --accent-dim: rgba(56,189,248,0.15);
          --accent-border: rgba(56,189,248,0.3);
          --surface: rgba(255,255,255,0.04);
          --border: rgba(255,255,255,0.1);
          --text-muted: #9ca3af;
        }

        .sora { font-family: 'Sora', sans-serif; }
        .mono { font-family: 'DM Mono', monospace; }

        .noise-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .card-glow:hover {
          box-shadow: 0 0 0 1px rgba(56,189,248,0.25), 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(56,189,248,0.07);
          border-color: rgba(56,189,248,0.25) !important;
        }

        .team-card:hover .team-img-wrap {
          transform: scale(1.03);
          box-shadow: 0 0 0 3px rgba(56,189,248,0.4), 0 20px 50px rgba(0,0,0,0.7);
        }

        .team-img-wrap {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .milestone-dot::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(56,189,248,0.2);
          animation: ping 2s cubic-bezier(0,0,0.2,1) infinite;
        }

        @keyframes ping {
          75%, 100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }

        .sector-tag {
          background: rgba(56,189,248,0.06);
          border: 1px solid rgba(56,189,248,0.18);
          border-radius: 6px;
          padding: 8px 14px;
          font-size: 0.83rem;
          color: #cbd5e1;
          transition: all 0.25s ease;
        }
        .sector-tag:hover {
          background: rgba(56,189,248,0.14);
          border-color: rgba(56,189,248,0.4);
          color: #fff;
        }

        .capacity-badge {
          background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05));
          border: 1px solid rgba(56,189,248,0.3);
          color: #7dd3fc;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          padding: 3px 10px;
          border-radius: 4px;
          letter-spacing: 0.03em;
          display: inline-block;
          margin-bottom: 6px;
        }

        .hero-accent-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), transparent);
          margin: 0 auto 20px;
        }

        .glow-text {
          text-shadow: 0 0 40px rgba(56,189,248,0.3);
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 10px;
          display: block;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden grid-bg noise-overlay"
        style={{ minHeight: "420px", display: "flex", alignItems: "center" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "120px", background: "linear-gradient(to top, #0a0a0a, transparent)" }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 py-24 text-center"
        >
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rajkot, Western India
          </motion.span>

          <div className="hero-accent-line" />

          <motion.h1
            className="sora glow-text text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 tracking-tight"
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #38bdf8 40%, #f0f9ff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            PADMAJA<br />TECHNOCAST LLP
          </motion.h1>

          <motion.p
            className="text-sm md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Modern investment casting foundry delivering precision components
            for demanding industrial applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["ISO Certified", "PED Compliant", "GE Audited", "28 MT / Month"].map((tag) => (
              <span
                key={tag}
                className="mono text-xs px-3 py-1.5 rounded-full"
                style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", color: "#7dd3fc" }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-[1.15fr_1fr] gap-10 items-center rounded-3xl p-8 md:p-10 card-glow"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="sora text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Precision casting,<br />
                <span style={{ color: "var(--accent)" }}>built for industry.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Padmaja Technocast is a state-of-the-art investment casting foundry in Rajkot, Western India — led by technocrats and industry veterans with deep experience in mechanical engineering and manufacturing.
                </p>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  We focus on clear processes, clean castings and predictable delivery. Every order is handled with a balance of technical rigour and practical shop-floor understanding.
                </p>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Long-term relationships and consistent performance guide how we design, produce and support our castings.
                </p>
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="absolute -inset-3 rounded-3xl opacity-30"
                style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.2), transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(56,189,248,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}
              >
                <img
                  src="/assets/team/about.webp"
                  alt="Padmaja Technocast Plant"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="mono text-xs" style={{ color: "var(--accent)" }}>Rajkot Facility</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE DO / SECTORS ─────────────────────────────────── */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-6">
          {[
            {
              label: "Capabilities",
              title: "What We Do",
              content: (
                <div className="space-y-3">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    We manufacture precision investment castings using the lost-wax process — from small, intricate geometries to medium-sized engineered components.
                  </p>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Tooling, wax, shell, melting and finishing are handled in-house, enabling consistent dimensional performance and surface finish.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Lost-Wax Process", "In-House Tooling", "Shell Building", "Finishing"].map((t) => (
                      <span key={t} className="sector-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              label: "Industries",
              title: "Sectors We Support",
              content: (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {[
                    "General Engineering",
                    "Power & Control Systems",
                    "Pumps & Valves",
                    "Automotive Components",
                    "Aerospace & Defence",
                    "Mining & Heavy Industries",
                  ].map((s) => (
                    <div key={s} className="sector-tag flex items-center gap-2">
                      <ChevronRight size={12} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      {s}
                    </div>
                  ))}
                </div>
              ),
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-3xl p-7 md:p-8 card-glow"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="section-label">{card.label}</span>
              <h3 className="sora text-xl md:text-2xl font-semibold mb-4">{card.title}</h3>
              {card.content}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EXPERTISE STRIP ──────────────────────────────────────── */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(180deg, rgba(56,189,248,0.04) 0%, transparent 100%)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertise.map((item, idx) => (
              <motion.div
                key={item.title}
                className="rounded-2xl p-6 text-center card-glow"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
                >
                  <item.icon size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h4 className="sora text-sm md:text-base font-semibold mb-1">{item.title}</h4>
                <p className="text-xs md:text-sm" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ──────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">The People Behind the Product</span>
            <h2 className="sora text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Leadership Team
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A compact leadership group combining financial, commercial and operational strengths to drive Padmaja's growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card rounded-3xl overflow-hidden card-glow"
                style={{
                  background: "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Image area */}
                <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(0,0,0,0.4))" }}>
                  <div className="team-img-wrap">
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                        objectPosition: "top center",
                        display: "block",
                      }}
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)" }}
                  />
                  {/* Role badge on image */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="mono text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(56,189,248,0.3)", color: "#7dd3fc", backdropFilter: "blur(8px)" }}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Info area */}
                <div className="px-6 py-5">
                  <h3 className="sora text-base md:text-lg font-semibold mb-1 leading-tight">{member.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>Padmaja Technocast LLP</span>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(56,189,248,0.1)",
                          border: "1px solid rgba(56,189,248,0.25)",
                          color: "var(--accent)",
                          transition: "all 0.2s ease",
                          textDecoration: "none",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgba(56,189,248,0.2)";
                          e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(56,189,248,0.1)";
                          e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)";
                        }}
                      >
                        <Linkedin size={13} />
                        Connect
                      </a>
                    ) : (
                      <span
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-muted)" }}
                      >
                        Advisory
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ───────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20 relative"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(56,189,248,0.06), transparent)" }}
        />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Growth Story</span>
            <h2 className="sora text-3xl md:text-4xl font-bold">Milestones</h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div
              className="absolute top-0 bottom-0"
              style={{ left: "24px", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.4) 10%, rgba(56,189,248,0.4) 90%, transparent)" }}
            />

            <div className="space-y-5">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="relative pl-14"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  {/* Dot */}
                  <div
                    className="absolute milestone-dot"
                    style={{
                      left: "18px",
                      top: "14px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "2px solid rgba(10,10,10,1)",
                      boxShadow: "0 0 10px rgba(56,189,248,0.5)",
                      zIndex: 2,
                    }}
                  />

                  <div
                    className="rounded-2xl p-5 card-glow"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <span className="mono text-xs" style={{ color: "var(--text-muted)", minWidth: "70px" }}>{item.year}</span>
                      <span className="sora text-sm md:text-base font-semibold flex-1">{item.title}</span>
                      <span className="capacity-badge">{item.capacity}</span>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}