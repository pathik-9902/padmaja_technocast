"use client";

import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const leaders = [
    {
      role: "Chief Financial Officer",
      name: "Hitesh Ranpariya",
      email: "info@padmajatechnocast.com",
      phone: "+91 96625 12697",
    },
    {
      role: "Chief Marketing Officer",
      name: "Krish Kotadiya",
      email: "sales@padmajatechnocast.com",
      phone: "+91 99981 40607",
    },
    {
      role: "Chief Operating Officer",
      name: "Jashmin Chovatiya",
      email: "info@padmajatechnocast.com",
      phone: "+91 88662 75204",
    },
    {
      role: "Manager - Marketing",
      name: "Rajesh Shendge",
      email: "marketing@padmajatechnocast.com",
      phone: "+91 93736 96951",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100">
      {/* ---------- Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ---------- Header ---------- */}
      <section className="relative z-10 text-center py-20">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Reach out to Padmaja Technocast LLP. Connect with our leadership team or send us a direct message below.
        </motion.p>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="relative z-10 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {leaders.map((person) => (
            <motion.div
              key={person.name}
              whileHover={{ scale: 1.06, y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 text-center backdrop-blur-2xl bg-white/10 border border-white/20 
                shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] 
                transition-all duration-500"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{person.role}</h3>
              <p className="text-xl font-medium text-gray-200 mb-3">{person.name}</p>
              <p className="flex items-center justify-center gap-2 text-gray-400 mb-2 text-sm">
                <Mail size={16} className="text-sky-400" /> {person.email}
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-sky-400" /> {person.phone}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Contact Form ---------- */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-3xl mx-auto backdrop-blur-2xl bg-white/10 border border-white/20 
          shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] 
          rounded-3xl p-10 transition-all duration-500">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400">
            Send Us a Message
          </h2>

          {/* ---------- FORM USING FORMSUBMIT.CO ---------- */}
          <form
            action="https://formsubmit.co/mytechid.999@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="space-y-6"
          >
            {/* Hidden Config */}
            <input type="hidden" name="_subject" value="New Inquiry from Padmaja Website" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Optional Redirect */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
            ></textarea>

            <div>
              <label className="block mb-2 text-gray-300 text-sm">Attach File (optional)</label>
              <input
                name="attachment"
                type="file"
                className="w-full rounded-lg px-4 py-2 bg-white/10 border border-white/20 text-white"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-white
                bg-gradient-to-r from-sky-400/30 via-white/10 to-sky-400/30 border border-white/20 
                shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <Send size={18} className="text-sky-300" /> Submit
            </motion.button>
          </form>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="relative z-10 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400">
          Our Location
        </h2>
        <p className="text-gray-300 mb-8">Visit our corporate office for inquiries and discussions.</p>
        <div className="max-w-6xl mx-auto h-96 rounded-3xl overflow-hidden border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <iframe
            title="Padmaja Technocast LLP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.3221119691707!2d70.77947429999999!3d22.037270499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39583799509268af%3A0x4b3871838d78355c!2sPadmaja%20Technocast!5e0!3m2!1sen!2sin!4v1757633076102!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
