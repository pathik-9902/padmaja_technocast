"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Wrench } from "lucide-react";

const reasons = [
  { id: 1, icon: <Wrench className="w-6 h-6 text-red-600" />, text: "State-of-the-Art Manufacturing Tools" },
  { id: 2, icon: <Award className="w-6 h-6 text-red-600" />, text: "ISO 9001:2015 Certified Company" },
  { id: 3, icon: <ShieldCheck className="w-6 h-6 text-red-600" />, text: "Metallurgically & Dimensionally Precise Castings" },
  { id: 4, icon: <Users className="w-6 h-6 text-red-600" />, text: "Experienced Engineers & Skilled Team" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Padmaja Technocast
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
            Excellence in Precision Casting
          </h3>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.li
                key={reason.id}
                className="flex items-center gap-3 bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="bg-red-100 p-3 rounded-full flex items-center justify-center">
                  {reason.icon}
                </span>
                <span className="text-gray-800 font-medium">{reason.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-gray-700 leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            At Padmaja Technocast, we specialize in modern Precision Investment Castings using the Lost Wax Process. 
            Our ISO-certified plant near Rajkot, Gujarat, produces castings ranging from a few grams up to 80kgs with a monthly capacity of 80MT. 
            With advanced technology and a skilled team, we ensure high-quality, reliable, and precise castings for industries worldwide.
          </motion.p>
        </motion.div>

        {/* Right Content - Images */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}images/whychooseus/img1.jpg`}
            alt="Precision Casting Process"
            className="rounded-lg shadow-lg object-cover h-56 w-full hover:scale-105 transition-transform duration-300"
          />
          <motion.img
            src={`${import.meta.env.BASE_URL}images/whychooseus/img2.jpg`}
            alt="Advanced Manufacturing Plant"
            className="rounded-lg shadow-lg object-cover h-56 w-full hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
