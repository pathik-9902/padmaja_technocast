"use client";

import * as FaIcons from "react-icons/fa";

const infrastructureData = [
  {
    id: 1,
    title: "Tool Design & Manufacturing",
    icon: <FaIcons.FaTools className="w-6 h-6 text-red-600" />,
    description:
      "Tooling design is an essential part of the design process. It is a prototypical model of a tool that manufacturers use to create parts and tools. Tooling design plays a crucial role as it affects the quality of production in the end-user industry.",
  },
  {
    id: 2,
    title: "Wax Injection",
    icon: <FaIcons.FaFire className="w-6 h-6 text-red-600" />,
    description:
      "A heat-disposable wax is injected into a metal die and then subsequently removed from the die to provide a wax replica of the desired geometry.",
  },
  {
    id: 3,
    title: "Wax Assembly",
    icon: <FaIcons.FaCube className="w-6 h-6 text-red-600" />,
    description:
      "Depending on the size and complexity of the design these wax patterns are assembled to a sprue or frame structure using a sticky wax. This assembly represents the metal flow channels during the casting operation and must be performed consistently.",
  },
  {
    id: 4,
    title: "Shell Building",
    icon: <FaIcons.FaHammer className="w-6 h-6 text-red-600" />,
    description:
      "The wax assembly moves into a temperature-controlled room where it is dipped into a ceramic slurry mixture, then coated with refractory sand to create a shell. This is repeated until the shell thickness is adequate.",
  },
  {
    id: 5,
    title: "Dewaxing & Wax Recycling",
    icon: <FaIcons.FaRecycle className="w-6 h-6 text-red-600" />,
    description:
      "Once the shell coated wax assembly has dried, it is moved into a steam autoclave for dewaxing. The reclaimed wax is reused for non-critical assembly requirements.",
  },
  {
    id: 6,
    title: "Preheating / Shell Baking",
    icon: <FaIcons.FaThermometerHalf className="w-6 h-6 text-red-600" />,
    description:
      "The shell molds are heated to a specific temperature prior to metal pour to avoid premature solidification.",
  },
  {
    id: 7,
    title: "Metal Pouring",
    icon: <FaIcons.FaTint className="w-6 h-6 text-red-600" />,
    description:
      "During this preheat cycle, the molten alloy is degassed and checked to ensure the chemistry is within specification allowances.",
  },
  {
    id: 8,
    title: "Shell Removal",
    icon: <FaIcons.FaHammer className="w-6 h-6 text-red-600" />,
    description:
      "The shell-coated castings are moved to a high-pressure pneumatic vibrator to remove the majority of the shell.",
  },
  {
    id: 9,
    title: "Fettling, Casting Finishing & Traceability",
    icon: <FaIcons.FaCheckCircle className="w-6 h-6 text-red-600" />,
    description:
      "Castings undergo visual inspection, heat number traceability, and belt grinding operations to remove excess material such as gates and flash.",
  },
  {
    id: 10,
    title: "Final Inspection & Documentation",
    icon: <FaIcons.FaCheckCircle className="w-6 h-6 text-red-600" />,
    description:
      "Final QC/QA inspection ensures that customer requirements have been met, completing all final certifications.",
  },
  {
    id: 11,
    title: "Packaging & Labelling",
    icon: <FaIcons.FaBoxOpen className="w-6 h-6 text-red-600" />,
    description:
      "Focus on packaging and labelling ensures the customer can easily unbox and identify the products legibly.",
  },
];

export default function InfrastructurePage() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Our Infrastructure & Quality Checks
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {infrastructureData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              {item.icon}
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
            </div>

            <div className="flex flex-col flex-1">
              {/* Description */}
              <p className="text-gray-700 mb-4 flex-1">{item.description}</p>

              {/* Image placeholder with fixed height */}
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
