import { Cpu, Settings, Truck } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Cpu className="w-10 h-10 text-red-600" />,
    title: "Precision Engineering",
    description:
      "Advanced engineering solutions ensuring high-quality, accurate castings.",
  },
  {
    id: 2,
    icon: <Settings className="w-10 h-10 text-red-600" />,
    title: "Innovative Technology",
    description:
      "Utilizing the latest technology to produce efficient and reliable products.",
  },
  {
    id: 3,
    icon: <Truck className="w-10 h-10 text-red-600" />,
    title: "Global Delivery",
    description:
      "Serving clients worldwide with timely and secure delivery solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col bg-white items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-650 text-base md:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
