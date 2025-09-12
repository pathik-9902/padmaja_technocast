"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, value: 7000, label: "Highly Specialized Employees" },
  { id: 2, value: 90, label: "Countries Worldwide" },
  { id: 3, value: 2900, label: "Finished Projects" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Let the numbers speak for us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition bg-white"
            >
              <span className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  0
                )}
                <span className="text-3xl text-red-600">+</span>
              </span>
              <p className="text-gray-650 text-base md:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
