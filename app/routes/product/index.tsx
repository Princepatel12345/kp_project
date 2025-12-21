import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { SectionHeading } from "../../components/SectionHeading";
import { ArrowRight } from "lucide-react";

const products = [
  {
    to: "/product/hot-mix",
    title: "Asphalt Batching Plant",
    capacity: "80 - 200 TPH",
    description: "High-efficiency batch mix plants for superior quality asphalt production.",
    image: "https://www.ashitech.com/wp-content/uploads/2021/07/Asphalt-Batching-Plant-1.png",
  },
  {
    to: "/product/drum-mix",
    title: "Drum Mix Plant",
    capacity: "40 - 120 TPH",
    description: "Continuous production plants ideal for large-scale road projects.",
    image: "https://www.ashitech.com/wp-content/uploads/2021/07/Drum-Mix-Plant-1.png",
  },
  {
    to: "/product/wet-mix-macadam",
    title: "Wet Mix Macadam Plant",
    capacity: "120 - 200 TPH",
    description: "Designed for producing wet mix macadam for road base construction.",
    image: "https://www.ashitech.com/wp-content/uploads/2021/07/Wet-Mix-Macadam-Plant-1.png",
  },
  {
    to: "/product/bitumen-pressure-distributor",
    title: "Bitumen Pressure Distributor",
    capacity: "4000 - 10000 Ltr",
    description: "Precision bitumen spraying for uniform surface treatment.",
    image: "https://www.ashitech.com/wp-content/uploads/2021/07/Bitumen-Pressure-Distributor-1.png",
  },
  {
    to: "/product/mechanical-hydraulic-broomer",
    title: "Mechanical Hydraulic Broomer",
    capacity: "Tractor Mounted",
    description: "Efficient road cleaning equipment for dust-free surface preparation.",
    image: "https://www.ashitech.com/wp-content/uploads/2021/07/Mechanical-Hydraulic-Broomer-1.png",
  },
];

export const Route = createFileRoute("/product/")({
  component: ProductIndex,
});

function ProductIndex() {
  return (
    <>
      <SEO
        title="Products"
        description="Explore our complete range of road construction machinery including asphalt plants, drum mix plants, wet mix macadam plants, and more."
        keywords="road construction machinery, asphalt plant, drum mix plant, wet mix macadam, bitumen distributor"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d0d0d] to-[#1a1a2e]" />
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete range of road construction machinery engineered for performance
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="section bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={product.to as any}
                  className="block group"
                >
                  <div className="card overflow-hidden">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#0d0d0d] p-6 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#db8c0a] text-sm font-medium">
                          {product.capacity}
                        </span>
                        <ArrowRight
                          size={18}
                          className="text-gray-500 group-hover:text-[#db8c0a] group-hover:translate-x-1 transition-all"
                        />
                      </div>
                      <h3 className="font-display text-xl text-white mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-[#c47d09] to-[#db8c0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We also manufacture custom machinery. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact" className="btn bg-white text-[#c47d09] hover:bg-gray-100">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
