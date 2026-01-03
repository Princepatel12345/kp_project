import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import { Wrench, RefreshCw, Package, HeadphonesIcon, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Large machineries require high upkeep to maintain safety standards. We offer excellent maintenance assistance with efficient servicemen who respond quickly at low cost.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
  },
  {
    icon: RefreshCw,
    title: "Reinstallation",
    description: "Wear and tear is normal. Our KRT professionals will come to your site and reinstall any machinery that needs our care and expertise.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
  {
    icon: Package,
    title: "Spare Parts",
    description: "We are the leading manufacturer of spare parts and consumables. All parts are forged with the best quality and backed by the trust of Kaushik Road Technologies manufacturing.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800",
  },
];

const benefits = [
  { icon: HeadphonesIcon, title: "24/7 Support", description: "Round-the-clock technical assistance" },
  { icon: Clock, title: "Quick Response", description: "Same-day service in most areas" },
  { icon: Shield, title: "Genuine Parts", description: "100% authentic KRT components" },
];

export const Route = createFileRoute("/aftersales")({
  component: AfterSales,
});

function AfterSales() {
  return (
    <>
      <SEO
        title="After Sales & Services"
        description="Comprehensive after-sales support for Kaushik Road Technologies machinery. Maintenance, reinstallation, spare parts, and 24/7 technical assistance."
        keywords="after sales service, machinery maintenance, spare parts, equipment service, KRT support"
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
            After Sales <span className="text-gradient">Services</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Comprehensive support to keep your machinery running at peak performance
          </p>
        </motion.div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-gray-50 to-transparent rounded-lg border border-gray-200"
              >
                <div className="w-14 h-14 bg-[#7B1C2B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-[#7B1C2B]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Complete after-sales support to ensure your machinery operates efficiently."
            centered
          />

          <div className="space-y-24 mt-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 bg-[#7B1C2B] rounded-lg flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-4xl text-gray-900 mb-4">{service.title}</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#7B1C2B] to-[#D4A12A] mb-6" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Need Assistance?"
                subtitle="Our service team is ready to help you with any maintenance, spare parts, or technical support requirements."
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-6 h-6 text-[#7B1C2B]" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Call Our Service Hotline</p>
                    <div className="space-y-1">
                      <a href="tel:+918155060305" className="text-xl text-gray-900 hover:text-[#7B1C2B] transition block">
                        +91 81550 60305
                      </a>
                      <a href="tel:+918156027702" className="text-xl text-gray-900 hover:text-[#7B1C2B] transition block">
                        +91 81560 27702
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
