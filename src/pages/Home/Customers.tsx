"use client";

import { motion } from "framer-motion";

type Customer = { id: number; logo: string; name: string };

const customers: Customer[] = [
  { id: 1, logo: `${import.meta.env.BASE_URL}images/customers/customers1.webp`, name: "Customer 1" },
  { id: 2, logo: `${import.meta.env.BASE_URL}images/customers/customers2.webp`, name: "Customer 2" },
  { id: 3, logo: `${import.meta.env.BASE_URL}images/customers/customers3.webp`, name: "Customer 3" },
  { id: 4, logo: `${import.meta.env.BASE_URL}images/customers/customers4.webp`, name: "Customer 4" },
  { id: 5, logo: `${import.meta.env.BASE_URL}images/customers/customers5.webp`, name: "Customer 5" },
  { id: 6, logo: `${import.meta.env.BASE_URL}images/customers/customers6.webp`, name: "Customer 6" },
  { id: 7, logo: `${import.meta.env.BASE_URL}images/customers/customers7.webp`, name: "Customer 7" },
  { id: 8, logo: `${import.meta.env.BASE_URL}images/customers/customers8.webp`, name: "Customer 8" },
];

// Duplicate array to create infinite scroll
const loopedCustomers = [...customers, ...customers];

export default function CustomersShowcase() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Our Valued Customers
        </motion.h2>

        {/* Scrolling Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 sm:gap-16 md:gap-20 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {loopedCustomers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] md:min-w-[200px] relative"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
