"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID", // replace with EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          address: form.address,
        },
        "YOUR_PUBLIC_KEY" // replace with EmailJS Public Key
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
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Get in touch with us — we’d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-brand-white p-8 rounded-2xl shadow-md border border-gray-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Your Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Sending..." : "Submit Now"}
              </motion.button>
            </div>
          </motion.form>

          {/* Google Map iframe (no JS API) */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-md border border-gray-300"
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
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-brand-white rounded-xl shadow-md border border-gray-300">
            <Mail className="mx-auto w-6 h-6 text-red-600 mb-2" />
            <p className="text-gray-700">info@padmajatechnocast.com</p>
          </div>
          <div className="p-6 bg-brand-white rounded-xl shadow-md border border-gray-300">
            <Phone className="mx-auto w-6 h-6 text-red-600 mb-2" />
            <p className="text-gray-700">+91 12345 67890</p>
          </div>
          <div className="p-6 bg-brand-white rounded-xl shadow-md border border-gray-300">
            <MapPin className="mx-auto w-6 h-6 text-red-600 mb-2" />
            <p className="text-gray-700">Rajkot, Gujarat, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
