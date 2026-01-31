import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "./SEO";
import { ArrowRight } from "lucide-react";

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
  showOverview?: boolean;
  showSpecifications?: boolean;
  showFeatures?: boolean;
}

export function ProductLayout({
  title,
  description,
  image,
  specifications,
  features,
  seoDescription,
  seoKeywords,
  showOverview = true,
  showSpecifications = true,
  showFeatures = true,
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
            <Link to="/product" className="hover:underline">Products</Link>
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
          <div className="grid gap-12">
            {/* Main Content */}
            <div>
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
              {showOverview ? (
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
              ) : null}

              {/* Specifications Table */}
              {showSpecifications ? (
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
              ) : null}

              {/* Features */}
              {showFeatures ? (
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
              ) : null}
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
