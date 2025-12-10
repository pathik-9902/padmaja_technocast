// src/components/Hero.tsx
"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Download } from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
} from "react";
import { Link } from "react-router-dom";

type Slide = {
  id: number;
  video?: string;
  poster?: string;
  heading: string;
  text: string;
};

const slides: Slide[] = [
  {
    id: 1,
    video: `src/assets/carousel/vid1.mp4`,
    heading: "Excellence in Precision Investment Castings",
    text: "Delivering high-quality, durable, and technologically advanced castings to industries worldwide.",
  },
  {
    id: 2,
    video: `src/assets/carousel/vid2.mp4`,
    heading: "Engineering Innovation & Expertise",
    text: "Combining modern technology with skilled craftsmanship to create complex, reliable components.",
  },
  {
    id: 3,
    video: `src/assets/carousel/vid1.mp4`,
    heading: "Global Quality Standards",
    text: "ISO 9001:2015 certified manufacturing ensuring consistency, precision, and timely delivery.",
  },
];

export default function Hero(): JSX.Element {
  const [offsetY, setOffsetY] = useState(0);
  const [active, setActive] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
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

  // Slider settings (no autoplay, no arrows — videos control transitions)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: false,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (i: number) => {
      setActive(i);

      // Stop all videos, only play active video
      videoRefs.current.forEach((v, idx) => {
        if (!v) return;

        if (idx === i) {
          v.currentTime = 0;
          v.muted = true;
          v.playsInline = true;

          const playPromise = v.play();
          if (playPromise && playPromise.catch) {
            playPromise.catch(() => {
              // no-op
            });
          }
        } else {
          v.pause();
          v.currentTime = 0;
        }
      });
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
  };

  // When active video finishes → go to next slide
  useEffect(() => {
    const activeVideo = videoRefs.current[active];
    if (!activeVideo) return;

    const handleEnded = () => {
      sliderRef.current?.slickNext();
    };

    activeVideo.addEventListener("ended", handleEnded);

    return () => {
      activeVideo.removeEventListener("ended", handleEnded);
    };
  }, [active]);

  // Ensure first slide auto-plays at mount
  useEffect(() => {
    const t = setTimeout(() => {
      const v = videoRefs.current[active];
      if (v) {
        v.muted = true;
        v.playsInline = true;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
    }, 300);
    return () => clearTimeout(t);
  }, [active]);

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
          {slides.map((slide, slideIndex) => (
            <div key={slide.id} className="relative w-full h-[70vh] md:h-[85vh]">
              <video
                ref={(el) => {
                  videoRefs.current[slideIndex] = el;
                }}
                src={slide.video}
                poster={slide.poster}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                style={{
                  transform: `translate3d(0, ${offsetY * 0.18}px, 0)`,
                  transition: "transform 0.35s ease-out",
                }}
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
                      href="/brochure.pdf"
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
