import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Instagram Icon Component
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const socialLinks = [
  { 
    icon: "whatsapp", 
    label: "WhatsApp", 
    href: "https://wa.me/918154083000",
    IconComponent: WhatsAppIcon
  },
  { 
    icon: "instagram", 
    label: "Instagram", 
    href: "https://www.instagram.com/kaushikroadtech/",
    IconComponent: InstagramIcon
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/product/hot-mix" },
  { label: "After Sales", to: "/aftersales" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const products = [
  { label: "Asphalt Batching Plant", to: "/product/hot-mix" },
  { label: "Drum Mix Plant", to: "/product/drum-mix" },
  { label: "Wet Mix Macadam Plant", to: "/product/wet-mix-macadam" },
  { label: "Bitumen Pressure Distributor", to: "/product/bitumen-pressure-distributor" },
  { label: "Mechanical Broomer", to: "/product/mechanical-hydraulic-broomer" },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Top accent line - using both brand colors */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B1C2B] via-[#D4A12A] to-[#7B1C2B]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/Kaushik-logo.png" 
                alt="Kaushik Logo" 
                className="h-12 w-auto"
              />
              <img 
                src="/assets/KRT-clean.png" 
                alt="KRT Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Leading manufacturer of road construction machinery with 35+ years of excellence. 
              Trusted by clients in over 15 countries worldwide.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#7B1C2B] mt-0.5">📍</span>
                <p className="text-gray-600">
                  Plot No.14, G.I.D.C.II, Dediyasan,<br />
                  Mehsana - 384002, Gujarat, INDIA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#7B1C2B]">📞</span>
                <a href="tel:+918154083000" className="text-gray-600 hover:text-[#7B1C2B] transition">
                  +91 81540 83000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#7B1C2B]">✉️</span>
                <a href="mailto:info@krt.com" className="text-gray-600 hover:text-[#7B1C2B] transition">
                  info@krt.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-xl tracking-wide mb-6 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    className="text-gray-600 text-sm hover:text-[#7B1C2B] transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#7B1C2B]/40 group-hover:bg-[#7B1C2B] transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-xl tracking-wide mb-6 text-gray-900">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.to}>
                  <Link
                    to={product.to as any}
                    className="text-gray-600 text-sm hover:text-[#7B1C2B] transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#7B1C2B]/40 group-hover:bg-[#7B1C2B] transition" />
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-xl tracking-wide mb-6 text-gray-900">
              Get In Touch
            </h4>
            <p className="text-gray-600 text-sm mb-6">
              Have questions about our machinery? Request a quote or get expert consultation.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary w-full text-center mb-6"
            >
              Request Quote
            </Link>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.IconComponent;
                return (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-[#7B1C2B] hover:border-[#7B1C2B] transition group"
                  >
                    <span className="text-gray-600 group-hover:text-white transition">
                      <IconComponent />
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kaushik Road Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#7B1C2B] transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#7B1C2B] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

