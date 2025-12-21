import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: "in", label: "LinkedIn", href: "#" },
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "t", label: "Twitter", href: "#" },
  { icon: "ig", label: "Instagram", href: "#" },
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
    <footer className="relative bg-[#0a0a0a] text-white">
      {/* Top accent line - using both brand colors */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#408986] via-[#db8c0a] to-[#408986]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/assets/logo.svg" 
              alt="Ashitech Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading manufacturer of road construction machinery with 35+ years of excellence. 
              Trusted by clients in over 15 countries worldwide.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#db8c0a] mt-0.5">📍</span>
                <p className="text-gray-400">
                  Plot No.14, G.I.D.C.II, Dediyasan,<br />
                  Mehsana - 384002, Gujarat, INDIA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#db8c0a]">📞</span>
                <a href="tel:+918154083000" className="text-gray-400 hover:text-[#db8c0a] transition">
                  +91 81540 83000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#db8c0a]">✉️</span>
                <a href="mailto:info@ashitech.com" className="text-gray-400 hover:text-[#db8c0a] transition">
                  info@ashitech.com
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
            <h4 className="font-display text-xl tracking-wide mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    className="text-gray-400 text-sm hover:text-[#db8c0a] transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#db8c0a]/50 group-hover:bg-[#db8c0a] transition" />
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
            <h4 className="font-display text-xl tracking-wide mb-6 text-white">
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.to}>
                  <Link
                    to={product.to as any}
                    className="text-gray-400 text-sm hover:text-[#db8c0a] transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#db8c0a]/50 group-hover:bg-[#db8c0a] transition" />
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
            <h4 className="font-display text-xl tracking-wide mb-6 text-white">
              Get In Touch
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Have questions about our machinery? Request a quote or get expert consultation.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary w-full text-center mb-6"
            >
              Request Quote
            </Link>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded hover:bg-[#db8c0a] hover:border-[#db8c0a] transition group"
                >
                  <span className="font-display text-sm text-gray-400 group-hover:text-white uppercase">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ashitech Equipment Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#db8c0a] transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#db8c0a] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

