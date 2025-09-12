"use client";

import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/hero/hero1.jpeg",
    heading: "Excellence in Precision Investment Castings",
    text: "Delivering high-quality, durable, and technologically advanced castings to industries worldwide.",
  },
  {
    id: 2,
    image: "/images/hero/hero2.jpeg",
    heading: "Engineering Innovation & Expertise",
    text: "Combining modern technology with skilled craftsmanship to create complex, reliable components.",
  },
  {
    id: 3,
    image: "/images/hero/hero3.jpeg",
    heading: "Global Quality Standards",
    text: "ISO 9001:2015 certified manufacturing ensuring consistency, precision, and timely delivery.",
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-red-600 p-2 md:p-3 rounded-full transition"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-red-600 p-2 md:p-3 rounded-full transition"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
    </button>
  );
}

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-6 w-full flex justify-center gap-2 md:gap-3 z-10">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white/60 hover:bg-white rounded-full"></div>
    ),
  };

  return (
    <section className="relative w-full h-[90vh] md:h-[95vh] overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-black/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></span>
        ))}
      </div>

      <Slider {...settings} className="h-full relative z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative h-[90vh] md:h-[95vh] w-full"
            tabIndex={activeSlide === index ? 0 : -1}
            aria-hidden={activeSlide === index ? "false" : "true"}
            {...(activeSlide !== index ? { inert: true } : {})}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `translateY(${offsetY * 0.2}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Hero content */}
            {activeSlide === index && (
              <div className="relative z-20 flex items-center justify-center h-full">
                <div className="text-center text-white px-4 sm:px-6 max-w-2xl md:max-w-3xl lg:max-w-4xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-snug md:leading-tight drop-shadow-lg">
                    {slide.heading}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 drop-shadow">
                    {slide.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href="/brochure.pdf"
                      download
                      className="bg-red-600 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-md font-semibold hover:bg-red-500 transition shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" /> Download Brochure
                    </a>
                    <a
                      href="/contact"
                      className="bg-white text-black px-5 py-3 sm:px-6 sm:py-3 rounded-md font-semibold hover:bg-gray-200 transition shadow-lg text-sm sm:text-base"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
}
