"use client";

import { useState, memo } from "react";
import { Cpu, Settings, Truck, Layers, ChevronRight, X } from "lucide-react";

/* ---------------- DATA ---------------- */

const highlights = [
  {
    id: "p",
    icon: Cpu,
    tag: "DESIGN → CASTING → FINISH",
    title: "Precision as Standard",
    text:
      "Tolerances, surface finish and metallurgy are controlled so parts fit and perform with minimal rework.",
  },
  {
    id: "pr",
    icon: Settings,
    tag: "TOOLING × PROCESS",
    title: "Process-Led Execution",
    text:
      "Tooling, shell-building and melting are tuned to each part improving yield and repeatability.",
  },
  {
    id: "d",
    icon: Truck,
    tag: "PACKED & READY",
    title: "Delivery Mindset",
    text:
      "Castings supplied closer to fit-and-assemble condition simplifying machining and logistics.",
  },
];

const sectors = [
  {
    title: "General Engineering",
    sub: "Reliable parts for industrial systems",
    items: ["Machine brackets", "Gear housings", "Couplings & clamps"],
  },
  {
    title: "Power Generation & Control",
    sub: "Components that endure heat and duty cycles",
    items: ["Turbine parts", "Pump housings", "Switchgear components"],
  },
  {
    title: "Pumps & Valves",
    sub: "Flow-critical geometry and sealing surfaces",
    items: ["Valve bodies & seats", "Impellers", "Stems & bonnets"],
  },
  {
    title: "Automotive Components",
    sub: "Engineered to automotive expectations",
    items: ["Brackets", "Manifolds", "Steering & suspension parts"],
  },
  {
    title: "Aerospace & Defence",
    sub: "High-performance low-mass solutions",
    items: ["Structural mounts", "Fuel system parts", "Housings"],
  },
  {
    title: "Mining & Heavy Industry",
    sub: "Duty-rated wear-resistant",
    items: ["Wear parts", "Lifting & conveyor hardware"],
  },
];

const gallery = [
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

/* ---------------- LIGHTBOX ---------------- */

function Lightbox({
  src,
  close,
}: {
  src: string | null;
  close: () => void;
}) {
  if (!src) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <img src={src} className="w-full h-auto rounded-xl" />
        <button
          onClick={close}
          className="absolute top-3 right-3 bg-black/70 p-2 rounded-full"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- CATEGORY ---------------- */

const Category = memo(function Category({
  data,
  open,
}: {
  data: (typeof gallery)[0];
  open: (s: string) => void;
}) {
  return (
    <div>
      <div
        className="flex items-center gap-3 mb-4"
        style={{ color: data.accent }}
      >
        <div className="h-px w-10" style={{ background: data.accent }} />
        <span className="text-xs tracking-widest font-bold uppercase">
          {data.title}
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {data.images.map((img) => (
          <div
            key={img}
            onClick={() => open(img)}
            className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 cursor-pointer group bg-black"
          >
            <img
              src={img}
              loading="lazy"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

/* ---------------- MAIN ---------------- */

export default function ServicesSection() {
  const [lb, setLb] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0b1220] via-[#161a1f] to-[#05070c]">
      <Lightbox src={lb} close={() => setLb(null)} />

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex gap-2 items-center text-xs bg-white/10 border border-white/20 px-4 py-1 rounded-full mb-5">
            <Layers size={14} />
            Investment Casting Services & Capabilities
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Services — Simple, Precise, Dependable
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Stable processes and clear communication so parts arrive ready for
            machining and assembly.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h) => (
            <div
              key={h.id}
              className="rounded-2xl p-6 bg-white/5 border border-white/10"
            >
              <h.icon className="text-sky-300 mb-3" />
              <div className="text-xs text-sky-300 tracking-widest">
                {h.tag}
              </div>
              <div className="text-white font-semibold mt-1">{h.title}</div>
              <p className="text-gray-400 text-sm mt-2">{h.text}</p>
            </div>
          ))}
        </div>

        {/* SECTORS + CAPABILITIES */}
        <div className="grid xl:grid-cols-2 gap-10 mb-20">
          <div>
            <h3 className="text-2xl text-white mb-6 font-semibold">
              Sectors & Typical Components
            </h3>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {sectors.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl bg-white/5 border border-white/10 p-4"
                >
                  <div className="text-white font-semibold">{s.title}</div>
                  <div className="text-sky-300 text-xs mb-2">{s.sub}</div>

                  <ul className="text-gray-400 text-sm space-y-1">
                    {s.items.map((i) => (
                      <li key={i}>› {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Key Capabilities
                </h4>

                <div className="text-sm text-gray-400 space-y-3">
                  <div>
                    <div className="text-xs">Production Capacity</div>
                    <div className="text-sky-300 font-semibold">
                      650 Tons / Annum
                    </div>
                  </div>

                  <div>
                    <div className="text-xs">Weight Range</div>
                    <div className="text-sky-300 font-semibold">
                      From few grams to 80kg
                    </div>
                  </div>

                  <div>
                    <div className="text-xs">Maximum Casting Size</div>
                    <div className="text-sky-300 font-semibold">
                      Up to 600 × 600 × 600 mm
                    </div>
                  </div>

                  <div>
                    <div className="text-xs">Material Standards</div>
                    <div className="text-sky-300 font-semibold">
                      ASTM, AISI, DIN, EN, GOST, GIS
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold mb-4">
                  Finishing & Value Addition
                </h4>

                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Passivation & pickling</li>
                  <li>• Electro polishing & plating</li>
                  <li>• Zinc / Chrome / Nickel finishes</li>
                  <li>• Parts supplied near fit-assemble condition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="space-y-14 mb-20">
          {gallery.map((g) => (
            <Category key={g.id} data={g} open={(s) => setLb(s)} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold transition"
          >
            Discuss New Casting Project
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}