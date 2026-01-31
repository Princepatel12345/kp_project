import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "../../components/SEO";

export const Route = createFileRoute("/product/pollution-control-unit")({
  component: PollutionControlUnit,
});

function PollutionControlUnit() {
  return (
    <>
      <SEO
        title="CONTROL CABIN & PANEL"
        description="Kaushik Road Technologies CONTROL CABIN & PANEL provides a fully insulated control cabin with a computerized control panel for safe, reliable, and efficient asphalt plant operation."
        keywords="control cabin, control panel, computerized control panel, asphalt plant control cabin, plant control room"
        type="product"
        image="https://placehold.co/1200x630/png?text=CONTROL+CABIN+%26+PANEL"
      />

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
            <Link to="/product" className="hover:underline">
              Products
            </Link>
            <span>/</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900">
            CONTROL CABIN &amp; PANEL
          </h1>
        </motion.div>
      </section>

      <section className="section bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg"
              >
                <div className="mb-10">
                  <h2 className="font-display text-3xl text-gray-900 mb-4">
                    Overview
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-6" />
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The CONTROL CABIN &amp; PANEL is designed to give operators a safe,
                    comfortable, and centralized point of control. The cabin structure is
                    fabricated with a robust M.S. frame and insulated for improved thermal
                    comfort, while the computerized control panel enables synchronized
                    control of key plant functions.
                  </p>
                </div>

                <div className="space-y-10">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                      <div className="aspect-[4/3]">
                        <img
                          src="https://placehold.co/900x675/png?text=CONTROL+PANEL"
                          alt="Control Panel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl text-gray-900 mb-3">
                        Computerized Control Panel
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-5" />
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        Supports automatic and manual control for coordinated burner
                        operation, mix temperature monitoring, load cell inputs, aggregate
                        handling, mineral filler, and bitumen proportioning.
                      </p>
                      <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <div className="text-gray-900 font-medium mb-2">
                          Operator-Centric Design
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Built for clear visibility, safer operation, and easier control of
                          critical plant parameters.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div className="md:order-2 overflow-hidden rounded-xl border border-gray-200 bg-white">
                      <div className="aspect-[4/3]">
                        <img
                          src="https://placehold.co/900x675/png?text=CONTROL+CABIN"
                          alt="Control Cabin"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="md:order-1">
                      <h3 className="font-display text-2xl text-gray-900 mb-3">
                        Control Cabin
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-5" />
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        Fully insulated and strategically placed for a complete view of the
                        plant. Typically supplied prewired and complete with weather-proof
                        exterior, interior lighting, glazing, and secure access.
                      </p>
                      <div className="rounded-lg border border-gray-200 bg-white p-4">
                        <div className="text-gray-900 font-medium mb-2">
                          Comfort &amp; Safety
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Improves operator comfort while providing a protected environment for
                          long shifts and consistent control.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#7B1C2B] to-[#9d2a3f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Configure Your Controls?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team for cabin layout options, panel configuration, and
            integration details.
          </p>
          <Link
            to="/contact"
            className="btn bg-white text-[#7B1C2B] hover:bg-gray-100"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
