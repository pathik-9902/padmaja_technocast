// src/components/Hero.tsx
"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Download } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type JSX } from "react";
import { Link } from "react-router-dom";

type Slide = {
  id: number;
  image: string;
  alt?: string;
  heading: string;
  text: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: `src/assets/carousel/img1.png`,
    alt: "Precision casting close-up",
    heading: "Excellence in Precision Investment Castings",
    text: "Delivering high-quality, durable, and technologically advanced castings to industries worldwide.",
  },
  {
    id: 2,
    image: `src/assets/carousel/img2.png`,
    alt: "Engineering and tooling",
    heading: "Engineering Innovation & Expertise",
    text: "Combining modern technology with skilled craftsmanship to create complex, reliable components.",
  },
  {
    id: 3,
    image: `src/assets/carousel/img3.png`,
    alt: "Quality inspection",
    heading: "Global Quality Standards",
    text: "ISO 9001:2015 certified manufacturing ensuring consistency, precision, and timely delivery.",
  },
  // optional 4th slide
  {
    id: 4,
    image: `src/assets/carousel/img4.png`,
    alt: "Finished components",
    heading: "Delivering on Time, Every Time",
    text: "Robust supply chain and on-time delivery for critical manufacturing partners.",
  },
];

export default function Hero(): JSX.Element {
  const [offsetY, setOffsetY] = useState(0);
  const [active, setActive] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  // Parallax Background Movement
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Metallic floating particles
  const particles = useMemo(
    () =>
      [...Array(28)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dur: `${3 + Math.random() * 3}s`,
        delay: `${Math.random() * 2}s`,
        size: `${1 + Math.random() * 2}px`,
        opacity: `${0.06 + Math.random() * 0.12}`,
      })),
    []
  );

  // Slider settings: autoplay, infinite, no arrows, no pause on hover
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease",
    afterChange: (i: number) => {
      setActive(i);
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-6 w-full flex justify-center z-30 pointer-events-auto">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-2.5 h-2.5 rounded-full transition-all ${
          i === active ? "scale-110 bg-white" : "bg-white/40"
        }`}
      />
    ),
    lazyLoad: "ondemand" as const,
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1112] via-[#1a1c1e] to-[#0f1112]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* metallic particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p, idx) => (
          <span
            key={idx}
            className="absolute rounded-full animate-float"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: `rgba(255,255,255,${p.opacity})`,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-20">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full h-[70vh] md:h-[85vh]">
              <img
                src={slide.image}
                alt={slide.alt ?? slide.heading}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                style={{
                  transform: `translate3d(0, ${offsetY * 0.18}px, 0)`,
                  transition: "transform 0.35s ease-out",
                }}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/40" />

              {/* HERO TEXT */}
              <div className="relative z-30 flex items-center justify-center h-full">
                <div className="text-center px-4 sm:px-6 max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow">
                    {slide.heading}
                  </h2>

                  <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6">
                    {slide.text}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href="https://drive.google.com/file/d/1QAYFwIyTIqDj_3CvtINoLY8nrnRsAT7U/view?usp=drive_link"
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm sm:text-base font-semibold bg-white/10 border border-white/20 text-white shadow hover:bg-white/20 transition"
                    >
                      <Download className="w-4 h-4" />
                      Download Brochure
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm sm:text-base font-semibold bg-white/10 border border-white/20 text-white shadow hover:bg-white/20 transition"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
