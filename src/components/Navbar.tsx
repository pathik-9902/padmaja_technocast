import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-white/10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg"
        >
          Padmaja Technocast
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative text-white drop-shadow-md hover:text-sky-300 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "text-sky-400 after:w-full" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2 rounded-2xl bg-gradient-to-r from-sky-400 to-sky-600 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white drop-shadow-md focus:outline-none"
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
                  `relative text-white drop-shadow-md hover:text-sky-300 transition-colors duration-300 font-medium after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? "text-sky-400 after:w-full" : ""
                  }`
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
  );
}
