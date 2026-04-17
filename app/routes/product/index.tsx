import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { SectionHeading } from "../../components/SectionHeading";
import { ArrowRight } from "lucide-react";

const products = [
  {
    to: "/product/drum-mix",
    title: "Drum Mix Plant",
    capacity: "40 - 120 TPH",
    description: "Continuous production plants ideal for large-scale road projects.",
    image: "/assets/product-images/1-DrumMixPlant/Drum Mix Plant.jpeg",
  },
  {
    to: "/product/wet-mix-macadam",
    title: "Wet Mix Macadam Plant",
    capacity: "120 - 200 TPH",
    description: "Designed for producing wet mix macadam for road base construction.",
    image: "/assets/product-images/2-Wet Mix Macadam Plant.jpeg",
  },
  {
    to: "/product/bitumen-pressure-distributor",
    title: "MINI BITUMEN SPRAYER",
    capacity: "2500 / 4000 Ltr",
    description: "Tractor attachment with manual hand spraying and heating options.",
    image: "/assets/product-images/3-MINI BITUMEN SPRAYER.jpeg",
  },
  {
    to: "/product/mechanical-hydraulic-broomer",
    title: "Mechanical Hydraulic Broomer",
    capacity: "Tractor Mounted",
    description: "Tractor-towed road broom with 2.4m clear sweeping width and left-side dust collection.",
    image: "/assets/product-images/4-Mechanical Hydraulic Broomer.jpeg",
  },
  {
    to: "/product/asphalt-paver-machine",
    title: "Asphalt Paver Machine",
    capacity: "2.5m - 8.0m Width",
    description: "Precision paving equipment for uniform asphalt laying with smooth finish.",
    image: "/assets/product-images/5-Asphalt Paver Machine.jpeg",
  },
  {
    to: "/product/pollution-control-unit",
    title: "CONTROL CABIN & PANEL",
    capacity: "15,000 - 50,000 CFM",
    description: "Fully insulated control cabin with computerized control panel for plant operation.",
    image: "/assets/product-images/6.1-Computerized Control Panel.jpeg",
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
        keywords="road construction machinery, asphalt plant, drum mix plant, wet mix macadam, mini bitumen sprayer, control cabin and panel"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Complete range of road construction machinery engineered for performance
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="section bg-white">
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
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[#7B1C2B] text-sm font-medium">
                          {product.capacity}
                        </span>
                        <ArrowRight
                          size={18}
                          className="text-gray-500 group-hover:text-[#7B1C2B] group-hover:translate-x-1 transition-all"
                        />
                      </div>
                      <h3 className="font-display text-xl text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
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
      <section className="py-20 bg-gradient-to-r from-[#7B1C2B] to-[#9d2a3f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We also manufacture custom machinery. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact" className="btn bg-white text-[#7B1C2B] hover:bg-gray-100">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
