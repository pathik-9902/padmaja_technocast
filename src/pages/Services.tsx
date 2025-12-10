"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Settings, Truck, Layers } from "lucide-react";

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

export default function ServicesSection() {
  // --- Video playlist: two videos to play sequentially in loop ---
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const videoSources = [
    "/assets/services/vid1.mp4",
    "/assets/services/vid2.mp4",
  ];
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoIndex, setVideoIndex] = useState<number>(0);

  // On videoIndex change, load the new src and play (muted to allow autoplay)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // If the src is different, update it and try to play
    if (vid.src && !vid.src.endsWith(videoSources[videoIndex])) {
      vid.pause();
      vid.load();
    }

    // Set src explicitly (helps in some environments)
    vid.src = videoSources[videoIndex];
    vid.muted = true;
    vid.playsInline = true;
    // attempt to play; browsers may require user gesture unless muted
    const playPromise = vid.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        // ignore autoplay suppression errors (video remains ready)
      });
    }

    // handler for when current video ends -> advance to next
    const handleEnded = () => {
      setVideoIndex((i) => (i + 1) % videoSources.length);
    };

    vid.addEventListener("ended", handleEnded);
    return () => {
      vid.removeEventListener("ended", handleEnded);
    };
  }, [videoIndex, videoSources]);

  // Ensure the player starts with videoIndex 0 when component mounts
  useEffect(() => {
    setVideoIndex(0);
  }, []);

  // --- Images: 20 product images ---
  const productImageCount = 20;
  const productImages = Array.from({ length: productImageCount }, (_, i) => ({
    id: `product-${i + 1}`,
    src: `/assets/services/prod${i + 1}.jpg`,
    alt: `Product ${i + 1}`,
  }));

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background theme – same metallic / dark style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#161a1f] to-[#05070c]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/60" />

      {/* Soft glow accents */}
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-sky-500/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-sky-400/16 blur-3xl" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs text-sky-100 backdrop-blur mb-4"
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Layers className="w-4 h-4 text-sky-300" />
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
            className="mt-4 max-w-4xl mx-auto text-sm sm:text-base text-gray-300"
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

        {/* Highlight row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {creativeHighlights.map((h, idx) => (
            <motion.div
              key={h.id}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/10 blur-3xl opacity-60" />
              <div className="relative flex items-start gap-3">
                <div className="p-3 rounded-xl bg-black/40 border border-white/15">
                  <h.icon className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <div className="text-xs text-sky-200 font-semibold">
                    {h.tag}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-white mt-1">
                    {h.title}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {h.blurb}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main area – video player + products */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start mb-16">
          {/* Video column (replaces the foundry photo area) */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Video player container */}
            <div className="rounded-3xl overflow-hidden border border-white/15 bg-black/40 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
              <div className="w-full h-[360px] sm:h-[420px] lg:h-[480px] relative bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  // src is set/managed in effect using videoRef for reliable playback switching
                  muted
                  playsInline
                  // do not set loop here – we want sequential playback across the two sources
                />
                {/* small overlay label */}
                <div className="absolute left-4 top-4 px-2 py-1 bg-black/60 text-xs text-white rounded">
                  Process — Live View
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300">
              The two process videos play one after another continuously. Both are muted and played inline to ensure consistent autoplay across browsers.
            </p>
          </motion.div>

          {/* Sectors / product buckets (kept intact) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-sky-300" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Sectors & Typical Components
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {productBuckets.map((bucket) => (
                <div
                  key={bucket.id}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-xl shadow-[0_10px_32px_rgba(0,0,0,0.75)] h-full"
                >
                  <div className="text-sm font-semibold text-white">
                    {bucket.title}
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    {bucket.subtitle}
                  </div>
                  <ul className="text-xs text-gray-200 space-y-1">
                    {bucket.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Products heading + 20 images grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Products</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {productImages.map((img) => (
              <div
                key={img.id}
                className="rounded-2xl overflow-hidden border border-white/12 bg-black/30 h-90 flex items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities strip */}
        <motion.div
          className="rounded-3xl bg-white/5 border border-white/12 backdrop-blur-xl p-6 md:p-8 shadow-[0_14px_45px_rgba(0,0,0,0.85)] mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-200">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                Key Capabilities
              </h4>
              <ul className="space-y-1.5">
                <li>
                  • Production capacity:{" "}
                  <span className="text-sky-200 font-medium">
                    {capabilities.production}
                  </span>
                </li>
                <li>
                  • Weight range:{" "}
                  <span className="text-sky-200 font-medium">
                    {capabilities.weight}
                  </span>
                </li>
                <li>
                  • Maximum casting size:{" "}
                  <span className="text-sky-200 font-medium">
                    {capabilities.maxSize}
                  </span>
                </li>
                <li>
                  • Material standards:{" "}
                  <span className="text-sky-200 font-medium">
                    {capabilities.standards}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-2">
                Finishing & Value Addition
              </h4>
              <ul className="space-y-1.5">
                {capabilities.finishing.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
                <li>• Parts supplied closer to fit-and-assemble condition</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-9 py-3 rounded-full backdrop-blur-2xl bg-gradient-to-r from-sky-500/70 via-sky-400/80 to-sky-500/70 border border-white/30 text-white text-sm sm:text-base font-semibold shadow-[0_16px_50px_rgba(0,0,0,0.9)]"
          >
            Discuss a New Casting Project
          </motion.a>
        </div>
      </div>
    </section>
  );
}
