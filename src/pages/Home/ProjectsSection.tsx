"use client";

const projects = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/projects/project1.jpg`,
    title: "Steel Casting Plant",
    category: "Industrial",
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/projects/project2.jpg`,
    title: "Heavy Machinery Parts",
    category: "Engineering",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/projects/project3.jpg`,
    title: "Automotive Components",
    category: "Automobile",
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/projects/project4.jpg`,
    title: "Energy Equipment",
    category: "Energy",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] mb-10">
          Our Recent Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full flex flex-col justify-end items-center text-white p-3 sm:p-4
                              opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-red-600">
                  {project.category}
                </span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
