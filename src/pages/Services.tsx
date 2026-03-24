"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Settings, Truck, Layers, ChevronRight, X } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const creativeHighlights = [
  {
    id: "precision",
    icon: Cpu,
    title: "Precision as Standard",
    tag: "Design → Casting → Finish",
    blurb:
      "Tolerances, surface finish and metallurgy are controlled so parts fit and perform with minimal rework.",
  },
  {
    id: "process",
    icon: Settings,
    title: "Process-Led Execution",
    tag: "Tooling × Process",
    blurb:
      "Tooling, shell-building and melting are tuned to each part, improving yield and repeatability.",
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Delivery Mindset",
    tag: "Packed & Ready",
    blurb:
      "Castings are supplied in a condition that makes downstream machining, assembly and logistics simpler.",
  },
];

const productBuckets = [
  {
    id: "engineering",
    title: "General Engineering",
    subtitle: "Reliable parts for industrial systems",
    items: ["Machine brackets", "Gear housings", "Couplings & clamps"],
  },
  {
    id: "energy",
    title: "Power Generation & Control",
    subtitle: "Components that endure heat and duty cycles",
    items: ["Turbine parts", "Pump housings", "Switchgear components"],
  },
  {
    id: "fluid",
    title: "Pumps & Valves",
    subtitle: "Flow-critical geometry and sealing surfaces",
    items: ["Valve bodies & seats", "Impellers", "Stems & bonnets"],
  },
  {
    id: "automotive",
    title: "Automotive Components",
    subtitle: "Engineered to automotive expectations",
    items: ["Brackets", "Manifolds", "Steering & suspension parts"],
  },
  {
    id: "aero",
    title: "Aerospace & Defence",
    subtitle: "High-performance, low-mass solutions",
    items: ["Structural mounts", "Fuel system parts", "Housings"],
  },
  {
    id: "heavy",
    title: "Mining & Heavy Industry",
    subtitle: "Duty-rated and wear-resistant",
    items: ["Wear parts", "Lifting & conveyor hardware"],
  },
];

const capabilities = {
  production: "650 Tons / Annum",
  weight: "From a few grams up to 80 kg",
  maxSize: "Up to 600 × 600 × 600 mm",
  standards: "ASTM, AISI, DIN, EN, GOST, GIS & others",
  finishing: [
    "Passivation & pickling",
    "Electro polishing & plating",
    "Zinc / Chrome / Nickel finishes",
  ],
};

/* Categorized images */
const categorizedProducts = [
  {
    id: "aerospace",
    title: "Aerospace & Defence",
    color: "from-violet-500/20 to-violet-900/5",
    accent: "#a78bfa",
    images: [
      "/assets/services/cat/aerospace1.webp",
      "/assets/services/cat/aerospace2.webp",
      "/assets/services/cat/aerospace3.webp",
    ],
  },
  {
    id: "automotive",
    title: "Automotive Components",
    color: "from-orange-500/20 to-orange-900/5",
    accent: "#fb923c",
    images: [
      "/assets/services/cat/automotive1.webp",
      "/assets/services/cat/automotive2.webp",
      "/assets/services/cat/automotive3.webp",
      "/assets/services/cat/automotive4.webp",
    ],
  },
  {
    id: "fire",
    title: "Fire Safety Components",
    color: "from-red-500/20 to-red-900/5",
    accent: "#f87171",
    images: [
      "/assets/services/cat/fire1.webp",
      "/assets/services/cat/fire2.webp",
    ],
  },
  {
    id: "general",
    title: "General Engineering",
    color: "from-sky-500/20 to-sky-900/5",
    accent: "#38bdf8",
    images: [
      "/assets/services/cat/general1.webp",
      "/assets/services/cat/general2.webp",
      "/assets/services/cat/general3.webp",
    ],
  },
  {
    id: "hardware",
    title: "Industrial Hardware",
    color: "from-amber-500/20 to-amber-900/5",
    accent: "#fbbf24",
    images: ["/assets/services/cat/hardware.webp"],
  },
  {
    id: "pump",
    title: "Pumps & Valves",
    color: "from-emerald-500/20 to-emerald-900/5",
    accent: "#34d399",
    images: [
      "/assets/services/cat/pump_valve1.webp",
      "/assets/services/cat/pump_valve2.webp",
      "/assets/services/cat/pump_valve3.webp",
      "/assets/services/cat/pump_valve4.webp",
      "/assets/services/cat/pump_valve5.webp",
      "/assets/services/cat/pump_valve6.webp",
    ],
  },
];

/* All 20 product shots for the full gallery */

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-lg p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={src} alt={alt} className="w-full h-auto object-contain" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   CATEGORY BLOCK – editorial layout
───────────────────────────────────────────── */
function CategoryBlock({
  category,
  index,
}: {
  category: (typeof categorizedProducts)[0];
  index: number;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  /* Compute grid layout classes based on count */
  const gridClass = "grid-cols-2 sm:grid-cols-3"

  return (
    <>
      {lightbox && (
        <Lightbox
          src={lightbox}
          alt={category.title}
          onClose={() => setLightbox(null)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: index * 0.07 }}
        className="group"
      >
        {/* Category heading bar */}
        <div
          className="flex items-center gap-3 mb-4 px-1"
          style={{ color: category.accent }}
        >
          <div
            className="h-px flex-1 max-w-[32px]"
            style={{ background: category.accent }}
          />
          <span className="text-xs font-bold tracking-[0.22em] uppercase opacity-90">
            {category.title}
          </span>
          <div
            className="h-px flex-1"
            style={{ background: `linear-gradient(to right, ${category.accent}66, transparent)` }}
          />
        </div>

        {/* Images grid */}
        <div
          className={`grid ${gridClass} gap-3`}
        >
          {category.images.map((src, imgIdx) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setLightbox(src)}
              className="relative overflow-hidden rounded-2xl cursor-zoom-in border border-white/8 bg-black/40 shadow-[0_8px_28px_rgba(0,0,0,0.8)]"
style={{ aspectRatio: "4/3", maxHeight: "400px" }}            >

              <img
                src={src}
                alt={`${category.title} ${imgIdx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
                style={{
                  background: `radial-gradient(circle at center, ${category.accent}18 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ServicesSection() {
  const [galleryLightbox, setGalleryLightbox] = useState<string | null>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#161a1f] to-[#05070c]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/60" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-sky-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/8 blur-[100px]" />

      {/* Optional lightbox for main gallery */}
      {galleryLightbox && (
        <Lightbox
          src={galleryLightbox}
          alt="Product"
          onClose={() => setGalleryLightbox(null)}
        />
      )}

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16">
        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-xs text-sky-100 backdrop-blur mb-5"
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Layers className="w-3.5 h-3.5 text-sky-300" />
            Investment Casting Services & Capabilities
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Services — Simple, Precise, Dependable
          </motion.h2>

          <motion.p
            className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            From tooling to finished castings, we focus on stable processes and
            clear communication, so parts arrive as promised and ready for your
            machining and assembly.
          </motion.p>
        </div>

        {/* ── HIGHLIGHTS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {creativeHighlights.map((h, idx) => (
            <motion.div
              key={h.id}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-sky-400/8 blur-3xl" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-black/40 border border-white/12 flex-shrink-0">
                  <h.icon className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-sky-300 uppercase mb-1">
                    {h.tag}
                  </div>
                  <div className="text-base font-semibold text-white mb-2">
                    {h.title}
                  </div>
                  <div className="text-xs text-gray-300 leading-relaxed">
                    {h.blurb}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── SECTORS + CAPABILITIES SPLIT ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-20">
          {/* Sectors */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Layers className="w-5 h-5 text-sky-300" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Sectors & Typical Components
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {productBuckets.map((bucket) => (
                <div
                  key={bucket.id}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-xl shadow-[0_10px_32px_rgba(0,0,0,0.6)] h-full hover:border-sky-400/30 transition-colors duration-300"
                >
                  <div className="text-sm font-semibold text-white mb-0.5">
                    {bucket.title}
                  </div>
                  <div className="text-xs text-sky-300/70 mb-2">
                    {bucket.subtitle}
                  </div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {bucket.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <ChevronRight className="w-3 h-3 text-sky-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/5 border border-white/12 backdrop-blur-xl p-6 md:p-8 shadow-[0_14px_45px_rgba(0,0,0,0.85)] flex flex-col justify-center"
          >
            <div className="grid sm:grid-cols-2 gap-8 text-sm text-gray-200">
              <div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-4">
                  Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {[
                    ["Production capacity", capabilities.production],
                    ["Weight range", capabilities.weight],
                    ["Maximum casting size", capabilities.maxSize],
                    ["Material standards", capabilities.standards],
                  ].map(([label, value]) => (
                    <li key={label} className="flex flex-col gap-0.5">
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="text-sky-200 font-semibold text-sm">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-4">
                  Finishing & Value Addition
                </h4>
                <ul className="space-y-2.5">
                  {[
                    ...capabilities.finishing,
                    "Parts supplied closer to fit-and-assemble condition",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── PRODUCTS BY CATEGORY ── */}
        <div className="mb-20">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-[11px] font-bold tracking-[0.28em] text-sky-400 uppercase mb-2">
              Our Portfolio
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Products by Category
            </h3>
            <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
              Precision investment castings across industries — click any image
              to enlarge.
            </p>
          </motion.div>

          <div className="space-y-12">
            {categorizedProducts.map((cat, i) => (
              <CategoryBlock key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>

              {/* ── CTA ── */}
        <div className="text-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full backdrop-blur-2xl bg-gradient-to-r from-sky-500/70 via-sky-400/80 to-sky-500/70 border border-white/30 text-white text-sm sm:text-base font-semibold shadow-[0_16px_50px_rgba(0,0,0,0.9)] hover:shadow-sky-500/20"
          >
            Discuss a New Casting Project
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}