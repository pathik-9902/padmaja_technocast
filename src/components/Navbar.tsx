import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-[#DC2626]">
          Padmaja<span className="text-[#374151]"> Technocast</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[#111111] hover:text-[#DC2626] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#374151] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-300">
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[#111111] hover:text-[#DC2626] transition-colors duration-300 font-medium after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white text-center px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
