import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d]/90 backdrop-blur-2xl border-t border-white/10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16">
        {/* Company Info */}
        <div className="hover:translate-y-1 transition-transform duration-300">
          <h2 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-white to-sky-400 drop-shadow-lg">
            Padmaja Technocast
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Precision casting solutions, delivering unmatched quality and
            reliability worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="hover:translate-y-1 transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4 text-white/90">Quick Links</h3>
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
                  className="relative text-white/80 font-medium hover:text-sky-300 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="hover:translate-y-1 transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4 text-white/90">Contact</h3>
          <p className="text-gray-400">Email: padmajatechnocast@gmail.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>
          <p className="text-gray-400 font-semibold mb-1 mt-2">
            Main Office & Factory:
          </p>
          <address className="not-italic text-gray-400 space-y-1">
            <span>Padmaja Technocast LLP</span>
            <span>Survey no.: 21/1/P2/P1, Plot no.1</span>
            <span>Avadh Industrial Hub, B/h Avadh Cold Storage, NH-27</span>
            <span>At- Biliyala, Tal: Gondal</span>
            <span>Dist.: Rajkot, Gujarat-360 311, India</span>
          </address>
        </div>

        {/* Social Media */}
        <div className="hover:translate-y-1 transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-4 text-white/90">Follow Us</h3>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Linkedin, Mail].map((Icon, idx) => {
              const hrefs = [
                "/", // replace with actual social URLs
                "/",
                "/",
                "mailto:padmajatechnocast@gmail.com",
              ];
              return (
                <a
                  key={idx}
                  href={hrefs[idx]}
                  className="text-gray-400 hover:text-sky-400 transform hover:scale-110 transition-all duration-300"
                  target={idx === 3 ? "_blank" : undefined}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Padmaja Technocast. All rights reserved.
      </div>
    </footer>
  );
}
