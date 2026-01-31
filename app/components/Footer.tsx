import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SocialIcons } from "./SocialIcons";
import { Phone, Mail } from "lucide-react";
import { getCompanyYears } from "../lib/company";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/product" },
  { label: "Gallery", to: "/gallery" },
  { label: "After Sales", to: "/aftersales" },
  { label: "Contact", to: "/contact" },
];

const products = [
  { label: "Drum Mix Plant", to: "/product/drum-mix" },
  { label: "Wet Mix Macadam Plant", to: "/product/wet-mix-macadam" },
  { label: "MINI BITUMEN SPRAYER", to: "/product/bitumen-pressure-distributor" },
  { label: "Mechanical Broomer", to: "/product/mechanical-hydraulic-broomer" },
  { label: "Asphalt Paver Machine", to: "/product/asphalt-paver-machine" },
  { label: "CONTROL CABIN & PANEL", to: "/product/pollution-control-unit" },
];

export function Footer() {
  const companyYears = getCompanyYears();

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
              Leading manufacturer of road construction machinery with {companyYears}+ years of excellence. 
              Trusted by clients in over 12 countries worldwide.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#7B1C2B] mt-0.5">📍</span>
                <p className="text-gray-600">
                  Plot No.345, G.I.D.C.II, Dediyasan,<br />
                  Mehsana - 384002, Gujarat, INDIA
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7B1C2B] mt-0.5">📞</span>
                <div className="space-y-1">
                  <a href="tel:+918155060305" className="text-gray-600 hover:text-[#7B1C2B] transition block">
                    +91 81550 60305
                  </a>
                  <a href="tel:+918156027702" className="text-gray-600 hover:text-[#7B1C2B] transition block">
                    +91 81560 27702
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#7B1C2B]">✉️</span>
                <a href="mailto:kaushikroadtechindia@gmail.com" className="text-gray-600 hover:text-[#7B1C2B] transition">
                  kaushikroadtechindia@gmail.com
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

            <div className="mb-6">
              <h4 className="font-display text-lg text-gray-900 mb-4">Follow Us</h4>
              <div className="flex flex-wrap items-center gap-3">
                {/* Social Icons */}
                <SocialIcons />
                
                {/* Phone Icon */}
                <a
                  href="tel:+918155060305"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-[#7B1C2B] hover:border-[#7B1C2B] transition group"
                  aria-label="Call +91 81550 60305"
                  title="Call +91 81550 60305"
                >
                  <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition" />
                </a>
                
                {/* Email Icon */}
                <a
                  href="mailto:kaushikroadtechindia@gmail.com"
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-[#7B1C2B] hover:border-[#7B1C2B] transition group"
                  aria-label="Email kaushikroadtechindia@gmail.com"
                  title="Email kaushikroadtechindia@gmail.com"
                >
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition" />
                </a>
              </div>
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
