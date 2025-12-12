// src/components/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/logo.svg"; // use SVG for crisp spin

/* -------------------------
   FlipLogo component
   (continuous vertical-axis spin)
   ------------------------- */
type FlipLogoProps = {
  frontSrc: string;
  backSrc?: string;
  size?: number | string;
  duration?: number;
  perspective?: number;
  className?: string;
};

function FlipLogo({
  frontSrc,
  backSrc,
  size = 70,           // bigger now: logo looks larger
  duration = 6,
  perspective = 900,
  className = "",
}: FlipLogoProps) {
  const back = backSrc ?? frontSrc;
  const wrapperStyle: React.CSSProperties = {
    perspective: `${perspective}px`,
    width: typeof size === "number" ? `${size}px` : size,
    height: typeof size === "number" ? `${size}px` : size,
    display: "inline-block",
  };

  const animName = `spinY_${duration * 1000}`;

  return (
    <>
      <style>{`
        .ft-preserve-3d { transform-style: preserve-3d; }
        .ft-backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }

        @keyframes ${animName} {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        .ft-spin { 
          animation-name: ${animName}; 
          animation-duration: ${duration}s; 
          animation-timing-function: linear; 
          animation-iteration-count: infinite; 
        }
      `}</style>

      <div style={wrapperStyle}>
        <div className="relative w-full h-full ft-preserve-3d ft-spin">

          <div className="absolute inset-0 ft-backface-hidden flex items-center justify-center">
            <img
              src={frontSrc}
              alt="logo front"
              className={`w-full h-full object-contain ${className}`}
              draggable={false}
            />
          </div>

          <div
            className="absolute inset-0 ft-backface-hidden flex items-center justify-center"
            style={{ transform: "rotateY(180deg)" }}
          >
            <img
              src={back}
              alt="logo back"
              className={`w-full h-full object-contain ${className}`}
              style={{ transform: "scaleX(-1)" }}
              draggable={false}
            />
          </div>

        </div>
      </div>
    </>
  );
}

/* -------------------------
   Navbar
   ------------------------- */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Processes", href: "/Processes" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-white/10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center select-none" onClick={() => setIsOpen(false)}>

            {/* LOGO WITHOUT CIRCLE – BIGGER SPINNING LOTUS */}
            <FlipLogo
              frontSrc={logo}
              size={70}           // adjust to make logo big and prominent
              duration={6}
              perspective={900}
              className="h-12 w-12"
            />

            {/* Brand Text */}
            <div className="ml-3 leading-tight">
              <span className="block text-lg font-bold tracking-wide text-sky-300">
                PADMAJA
              </span>
              <span className="block text-xs md:text-sm tracking-[0.25em] text-gray-300">
                TECHNOCAST LLP
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `relative text-white drop-shadow-md hover:text-sky-300 transition-colors duration-300
                  after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full
                  ${isActive ? "text-sky-400 after:w-full" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white drop-shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#111111] border-t border-white/10 shadow-lg">
            <nav className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative text-white drop-shadow-md hover:text-sky-300 transition-colors duration-300
                    after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full
                    ${isActive ? "text-sky-400 after:w-full" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="px-6 py-2 rounded-2xl bg-gradient-to-r from-sky-400 to-sky-600 text-white font-semibold shadow-lg hover:shadow-2xl text-center transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
