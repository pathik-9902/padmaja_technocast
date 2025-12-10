import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/download.svg"; // lotus without background

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
      {/* Custom CSS injected inline */}
      <style>
        {`
          .spin-slow:hover {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <header className="fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-white/10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center select-none">

            {/* Circular Lotus */}
            <div
              className="
                spin-slow
                h-12 w-12 rounded-full 
                border border-pink-400/70 
                bg-transparent
                flex items-center justify-center
                shadow-lg
              "
            >
              <img
                src={logo}
                alt="Padmaja Lotus Logo"
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Brand Text */}
            <div className="ml-3 leading-tight">
              <span className="block text-lg font-bold tracking-wide text-sky-300">
                PADMAJA
              </span>
              <span className="block text-xs md:text-sm tracking-[0.25em] text-gray-300">
                TECHNOCAST
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
