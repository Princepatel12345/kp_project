import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "./SEO";
import { ContactForm } from "./ContactForm";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

interface Specification {
  label: string;
  value: string;
}

interface Feature {
  text: string;
}

interface ProductLayoutProps {
  title: string;
  description: string;
  image: string;
  specifications: Specification[];
  features: Feature[];
  seoDescription: string;
  seoKeywords: string;
}

const relatedProducts = [
  { to: "/product/drum-mix", title: "Drum Mix Plant" },
  { to: "/product/wet-mix-macadam", title: "Wet Mix Macadam Plant" },
  { to: "/product/bitumen-pressure-distributor", title: "Bitumen Distributor" },
  { to: "/product/mechanical-hydraulic-broomer", title: "Mechanical Broomer" },
  { to: "/product/asphalt-paver-machine", title: "Asphalt Paver Machine" },
  { to: "/product/pollution-control-unit", title: "Pollution Control Unit" },
];

export function ProductLayout({
  title,
  description,
  image,
  specifications,
  features,
  seoDescription,
  seoKeywords,
}: ProductLayoutProps) {
  return (
    <>
      <SEO
        title={title}
        description={seoDescription}
        keywords={seoKeywords}
        type="product"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#7B1C2B] text-sm uppercase tracking-widest mb-4"
          >
            <Link to="/product/" className="hover:underline">Products</Link>
            <span>/</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900">
            {title}
          </h1>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="section bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg mb-12"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full max-h-[400px] object-contain mx-auto"
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl text-gray-900 mb-4">Overview</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-6" />
                <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
              </motion.div>

              {/* Specifications Table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="font-display text-3xl text-gray-900 mb-4">Technical Specifications</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-6" />

                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, i) => (
                        <tr
                          key={spec.label}
                          className={`border-b border-gray-200 ${
                            i % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-6 py-4 text-gray-600 font-medium">{spec.label}</td>
                          <td className="px-6 py-4 text-gray-900">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl text-gray-900 mb-4">Key Features</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-6" />

                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="w-2 h-2 bg-[#7B1C2B] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quote Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6 mb-8">
                  <h3 className="font-display text-2xl text-gray-900 mb-6">Request A Quote</h3>
                  <ContactForm compact />
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-[#7B1C2B]/10 to-transparent rounded-lg border border-[#7B1C2B]/20 p-6 mb-8">
                  <h4 className="font-display text-xl text-gray-900 mb-4">Need Help?</h4>
                  <div className="space-y-4">
                    <a
                      href="tel:+918155060305"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#7B1C2B] transition"
                    >
                      <Phone size={18} className="text-[#7B1C2B]" />
                      +91 81550 60305
                    </a>
                    <a
                      href="tel:+918156027702"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#7B1C2B] transition"
                    >
                      <Phone size={18} className="text-[#7B1C2B]" />
                      +91 81560 27702
                    </a>
                    <a
                      href="mailto:kaushikroadtechindia@gmail.com"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#7B1C2B] transition"
                    >
                      <Mail size={18} className="text-[#7B1C2B]" />
                      kaushikroadtechindia@gmail.com
                    </a>
                    <div className="flex items-start gap-3 text-gray-600">
                      <MapPin size={18} className="text-[#7B1C2B] flex-shrink-0 mt-0.5" />
                      <span>Mehsana, Gujarat, India</span>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6">
                  <h4 className="font-display text-xl text-gray-900 mb-4">Other Products</h4>
                  <ul className="space-y-3">
                    {relatedProducts.map((product) => (
                      <li key={product.to}>
                        <Link
                          to={product.to as any}
                          className="flex items-center justify-between py-2 text-gray-600 hover:text-[#7B1C2B] transition group"
                        >
                          <span>{product.title}</span>
                          <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-[#7B1C2B] to-[#9d2a3f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for pricing, customization options, and delivery timelines.
          </p>
          <Link to="/contact" className="btn bg-white text-[#7B1C2B] hover:bg-gray-100">
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

