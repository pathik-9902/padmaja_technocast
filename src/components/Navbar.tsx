import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react" // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-400">
            Padmaja Technocast
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
            <Link to="/industries" className="hover:text-blue-400 transition">Industries</Link>
            <Link to="/quality" className="hover:text-blue-400 transition">Quality</Link>
            <Link to="/enquiry" className="hover:text-blue-400 transition">Enquiry</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 space-y-2 px-4 pb-4">
          <Link to="/" className="block py-2 hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="block py-2 hover:text-blue-400 transition">About</Link>
          <Link to="/services" className="block py-2 hover:text-blue-400 transition">Services</Link>
          <Link to="/industries" className="block py-2 hover:text-blue-400 transition">Industries</Link>
          <Link to="/quality" className="block py-2 hover:text-blue-400 transition">Quality</Link>
          <Link to="/enquiry" className="block py-2 hover:text-blue-400 transition">Enquiry</Link>
          <Link to="/contact" className="block py-2 hover:text-blue-400 transition">Contact</Link>
        </div>
      )}
    </nav>
  )
}
