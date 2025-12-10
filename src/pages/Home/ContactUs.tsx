"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        { from_name: form.name, from_email: form.email, phone: form.phone, address: form.address },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Your message has been sent!");
          setForm({ name: "", email: "", phone: "", address: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* ---------- Premium Metallic Background ---------- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2b2b2b] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 animate-[pulse_8s_infinite]" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 mb-4 drop-shadow-lg">
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Get in touch with us — we’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {["name", "email", "phone", "address"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  required
                  className="w-full rounded-xl px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 backdrop-blur-lg"
                />
              ))}

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl px-4 py-2 font-semibold text-white backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Sending..." : "Submit Now"}
              </motion.button>
            </div>
          </motion.form>

          {/* Google Map */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.3221119691707!2d70.77947429999999!3d22.037270499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39583799509268af%3A0x4b3871838d78355c!2sPadmaja%20Technocast!5e0!3m2!1sen!2sin!4v1757633076102!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: "450px", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Mail, text: "info@padmajatechnocast.com" },
            { icon: Phone, text: "+91 94286 61295" },
            { icon: MapPin, text: "Rajkot, Gujarat, India" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
            >
              <item.icon className="mx-auto w-6 h-6 text-sky-300 mb-2" />
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
