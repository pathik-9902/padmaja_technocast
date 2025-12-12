"use client";

import { AlertTriangle, Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function UnderMaintenance() {
  const contacts = [
    { label: "General enquiries", address: "info@padmajatechnocast.com" },
    { label: "Sales", address: "sales@padmajatechnocast.com" },
  ];

  const phones = [{ label: "Office", number: "+91 99981 40607" }];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100 bg-black">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031827] via-[#071428] to-[#001219]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-6 animate-[pulse_10s_infinite]" />

      {/* Decorative floating shapes */}
      <svg className="absolute -left-32 -top-20 w-96 opacity-10" viewBox="0 0 600 600" fill="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="200" fill="url(#g1)" />
      </svg>

      <section className="relative z-10 text-center pt-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-white/6 to-white/3 border border-white/8 backdrop-blur">
            <AlertTriangle size={20} className="text-amber-300" />
            <span className="text-sm text-gray-200 font-medium">Scheduled Maintenance</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white to-sky-300 drop-shadow-xl">
            We&rsquo;ll be back soon
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Our website is currently undergoing scheduled maintenance to improve performance and add new features.
          </p>
        </motion.div>
      </section>

      <main className="relative z-10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="col-span-1 lg:col-span-2 rounded-3xl p-8 backdrop-blur-2xl bg-gradient-to-br from-white/3 to-white/6 border border-white/6 shadow-[0_12px_40px_rgba(2,6,23,0.6)]"
          >
            <div className="flex items-start gap-6">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-sky-700 to-sky-400 flex items-center justify-center shadow-lg">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-black/40 flex items-center justify-center">
                    <Clock size={36} className="text-white/90" />
                  </div>
                </motion.div>
                <span className="absolute -bottom-2 -right-2 bg-emerald-400/90 text-black text-xs font-semibold px-2 py-1 rounded-xl">Live</span>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">Maintenance in progress</h3>
                <p className="text-gray-300 mb-4">Applying updates and performance improvements. We appreciate your patience.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
                  <div className="rounded-xl p-3 bg-white/4 border border-white/6">
                    <div className="text-xs text-gray-300">Updates</div>
                    <div className="text-lg font-semibold text-white">Core & UI</div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-4">If you have a time-sensitive request, email us and we will respond as soon as possible.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-4 bg-gradient-to-b from-white/3 to-white/6 border border-white/6">
                <div className="text-xs text-gray-400">Status</div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                  <div className="font-medium">Operational (degraded)</div>
                </div>
              </div>

              <div className="rounded-2xl p-4 bg-gradient-to-b from-white/3 to-white/6 border border-white/6">
                <div className="text-xs text-gray-400">Contact</div>
                <div className="mt-2 text-sm text-gray-200">Reach out using the channels on the right for immediate help.</div>
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl p-6 backdrop-blur-2xl bg-gradient-to-tr from-white/4 to-white/6 border border-white/6"
          >
            <h4 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white to-sky-300">Contact & Notifications</h4>

            <div className="flex flex-col gap-3 mb-6">
              {contacts.map((c) => (
                <a
                  key={c.address}
                  href={`mailto:${c.address}`}
                  className="flex items-center gap-3 rounded-xl p-3 bg-black/30 border border-white/6 hover:scale-[1.01] transition-transform"
                >
                  <Mail size={16} className="text-sky-300" />
                  <div>
                    <div className="text-sm font-medium text-gray-100">{c.label}</div>
                    <div className="text-xs text-gray-300">{c.address}</div>
                  </div>
                </a>
              ))}

              {phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 rounded-xl p-3 bg-black/30 border border-white/6 hover:scale-[1.01] transition-transform"
                >
                  <Phone size={16} className="text-sky-300" />
                  <div>
                    <div className="text-sm font-medium text-gray-100">{p.label}</div>
                    <div className="text-xs text-gray-300">{p.number}</div>
                  </div>
                </a>
              ))}
            </div>

            <form action="https://formsubmit.co/info@padmajatechnocast.com" method="POST" className="space-y-3">
              <input type="hidden" name="_subject" value="Notify me - Maintenance" />
              <input
                type="email"
                name="email"
                placeholder="Your email to be notified"
                required
                className="w-full rounded-lg px-4 py-3 bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-black bg-gradient-to-r from-sky-300 to-sky-200 border border-white/10"
              >
                <Send size={16} className="text-black" /> Notify me
              </motion.button>
            </form>

            <div className="mt-4 text-xs text-gray-400">We will only use your email to notify you about this maintenance window.</div>
          </motion.aside>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">© {new Date().getFullYear()} Padmaja Technocast LLP — All rights reserved.</div>
      </footer>
    </div>
  );
}
