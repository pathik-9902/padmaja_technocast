"use client";

const industries = [
  {
    id: 1,
    title: "Defence Products",
    category: "Defence Investment Casting Manufacture",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "Our defence components are designed with high precision and manufactured to meet the exact requirements of the defence industry.",
    image: `${import.meta.env.BASE_URL}images/industries/industries1.webp`,
  },
  {
    id: 2,
    title: "Metro/Railway Products",
    category: "Railway Products Casting Manufacturer",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "We offer a wide range of product castings in Carbon Steel, Nickel Based Alloy, Stainless Steel, AAR M201 Grade E for Indian Railways.",
    image: `${import.meta.env.BASE_URL}images/industries/industries2.webp`,
  },
  {
    id: 3,
    title: "Automotive Industry",
    category: "Automobile Investment Casting Supplier",
    materials: "SS304, SS316, MS, EN Series",
    description:
      "12+ years of experience makes us a leading supplier of investment casting in the automobile sector with precision manufacturing facilities.",
    image: `${import.meta.env.BASE_URL}images/industries/industries3.webp`,
  },
  {
    id: 4,
    title: "Medical Implants",
    category: "Medical Equipments Casting Supplier",
    materials: "SS304, SS316, SS316L, Other Special Grades",
    description:
      "We manufacture and supply orthopedic implants and instruments casting as per customer specifications in stainless steel and special grades.",
    image: `${import.meta.env.BASE_URL}images/industries/industries4.webp`,
  },
  {
    id: 5,
    title: "Oil & Gas Valves",
    category: "Valves Casting through Investment Casting Process",
    materials: "SS304, SS316, SS316L",
    description:
      "We design and manufacture a wide range of valves like Gate, Ball, Check, and Butterfly valves for Oil & Gas applications.",
    image: `${import.meta.env.BASE_URL}images/industries/industries5.webp`,
  },
  {
    id: 6,
    title: "Camlock & Pipe Fittings",
    category: "Camlock Coupling Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "Camlock couplings ensure quick connection/disconnection of hoses for water, air, gas, and oil applications.",
    image: `${import.meta.env.BASE_URL}images/industries/industries6.webp`,
  },
  {
    id: 7,
    title: "Boating & Marine Industry",
    category: "Marine Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "We manufacture anchors, rod holders, deck hinges, turnbuckles, and more in SS304, SS316, and other alloys.",
    image: `${import.meta.env.BASE_URL}images/industries/industries7.webp`,
  },
  {
    id: 8,
    title: "Door & Glass Hardware",
    category: "Hardware Casting Supplier",
    materials: "SS304, SS316, SS410, MS, Copper Alloys",
    description:
      "We supply spider fittings, railing fittings, door handles, knockers, and more in multiple alloys.",
    image: `${import.meta.env.BASE_URL}images/industries/industries8.webp`,
  },
  {
    id: 9,
    title: "Fire Fighting Products",
    category: "Fire Fighting Casting Supplier",
    materials: "SS304, SS316, Copper Alloys",
    description:
      "We manufacture hydrant valves, branch pipe nozzles, and other fire safety components for commercial and residential use.",
    image: `${import.meta.env.BASE_URL}images/industries/industries9.webp`,
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-10 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#111111] mb-8">
          Industries We Serve
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#111111] mb-1">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#4B5563] mb-1">{industry.category}</p>
                <p className="text-sm text-[#4B5563] mb-1">
                  <span className="font-medium">Mat:</span> {industry.materials}
                </p>
                <p className="text-sm text-[#4B5563] mb-2 line-clamp-2">
                  {industry.description}
                </p>

                <a
                  href="#"
                  className="inline-block px-3 py-1.5 bg-[#DC2626] text-white text-sm font-medium rounded-lg hover:bg-[#EF4444] transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
