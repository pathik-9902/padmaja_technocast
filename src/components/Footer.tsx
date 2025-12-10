import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.svg"; // adjust if needed

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0c0d] text-white border-t border-white/10">
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />

      <div className="relative container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Company Info */}
        <div className="space-y-4 hover:translate-y-1 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Lotus Logo" className="w-12 h-12 drop-shadow-lg" />
            <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400">
              Padmaja Technocast
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Precision casting solutions delivering unmatched quality and
            reliability across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 hover:translate-y-1 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-white/90">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="relative text-white/80 hover:text-sky-300 font-medium transition-colors duration-300
                    after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 hover:translate-y-1 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-white/90">Contact</h3>

          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:padmajatechnocast@gmail.com"
              className="text-sky-300 hover:underline"
            >
              info@padmajatechnocast.com
            </a>
          </p>
          <p className="text-gray-400">Phone: +91 99981 40607</p>

          <div>
            <p className="text-gray-300 font-semibold mb-1 mt-3">
              Main Office & Factory:
            </p>
            <address className="not-italic text-gray-400 space-y-1">
              <span>Padmaja Technocast LLP</span>
              <span>Survey No.: 21/1/P2/P1, Plot No. 1</span>
              <span>Avadh Industrial Hub, NH-27</span>
              <span>B/h Avadh Cold Storage, Biliyala</span>
              <span>Tal: Gondal, Dist: Rajkot, Gujarat - 360311, India</span>
            </address>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-4 hover:translate-y-1 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-white/90">Follow Us</h3>
          <div className="flex space-x-5">
            {[Facebook, Twitter, Linkedin, Mail].map((Icon, idx) => {
              const hrefs = [
                "/", // replace with correct URLs
                "/",
                "/",
                "mailto:padmajatechnocast@gmail.com",
              ];
              return (
                <a
                  key={idx}
                  href={hrefs[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                    bg-white/5 border border-white/10 shadow-md
                    text-gray-300 hover:text-sky-300 hover:bg-white/10 hover:border-sky-400
                    transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Padmaja Technocast. All rights reserved.
      </div>
    </footer>
  );
}
