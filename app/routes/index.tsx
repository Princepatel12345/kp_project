import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import {
  ArrowRight,
  Award,
  Globe,
  Shield,
  Wrench,
  Factory,
  HeadphonesIcon,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { COMPANY_START_YEAR, getCompanyYears } from "../lib/company";
import { directionsUrl } from "../lib/facilityLocation";

/* ================= PRODUCT SLIDES ================= */
const productSlides = [
  {
    image: "/assets/product-images/1-DrumMixPlant/Drum Mix Plant.jpeg",
    link: "/product/drum-mix",
    title: "Drum Mix Plant",
    capacity: "40 - 120 TPH",
  },
  {
    image: "/assets/product-images/2-Wet Mix Macadam Plant.jpeg",
    link: "/product/wet-mix-macadam",
    title: "Wet Mix Macadam Plant",
    capacity: "120 - 200 TPH",
  },
  {
    image: "/assets/product-images/3-MINI BITUMEN SPRAYER.jpeg",
    link: "/product/bitumen-pressure-distributor",
    title: "MINI BITUMEN SPRAYER",
    capacity: "2500 / 4000 Ltr",
  },
  {
    image: "/assets/product-images/4-Mechanical Hydraulic Broomer.jpeg",
    link: "/product/mechanical-hydraulic-broomer",
    title: "Mechanical Hydraulic Broomer",
    capacity: "Tractor Mounted",
  },
  {
    image: "/assets/product-images/5-Asphalt Paver Machine.jpeg",
    link: "/product/asphalt-paver-machine",
    title: "Asphalt Paver Machine",
    capacity: "2.5m - 8.0m Width",
  },
  {
    image: "/assets/product-images/6.2-Control Cabin.jpeg",
    link: "/product/pollution-control-unit",
    title: "CONTROL CABIN & PANEL",
    capacity: "15,000 - 50,000 CFM",
  },
];

/* ================= FEATURES ================= */
const features = [
  {
    icon: Wrench,
    title: "Research & Development",
    description: "We research the best technology, ideate prototypes, and finally design machinery for maximum efficiency.",
  },
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description: "Our facilities are quality assured with best-in-class machines producing world-class, sturdy, and safe equipment.",
  },
  {
    icon: HeadphonesIcon,
    title: "After Sales Service",
    description: "Superior service reflected by satisfied clients in over 12 countries. A brand our clients trust completely.",
  },
];

/* ================= CERTIFICATIONS ================= */
const certifications = [
  { icon: Globe, title: "Global Presence", subtitle: "12+ Countries" },
  { icon: Shield, title: "Quality Assured", subtitle: "International Standards" },
];

export const Route = createFileRoute("/")({
  component: Home,
});

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="font-display text-5xl md:text-6xl lg:text-7xl text-gray-900">
        {isInView ? (
          <CountUp end={value} duration={2.5} />
        ) : (
          "0"
        )}
        <span className="text-[#7B1C2B]">{suffix}</span>
      </div>
      <div className="w-12 h-0.5 bg-[#D4A12A]/50 mx-auto my-4" />
      <p className="text-gray-600 text-sm uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

function Home() {
  const [productCurrent, setProductCurrent] = useState(0);
  const [productLightboxOpen, setProductLightboxOpen] = useState(false);
  const [productLightboxIndex, setProductLightboxIndex] = useState(0);
  const companyYears = getCompanyYears();

  const openProductLightbox = useCallback((index: number) => {
    setProductLightboxIndex(index);
    setProductLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeProductLightbox = useCallback(() => {
    setProductLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const productLightboxPrev = useCallback(() => {
    setProductLightboxIndex((prev) =>
      prev === 0 ? productSlides.length - 1 : prev - 1
    );
  }, []);

  const productLightboxNext = useCallback(() => {
    setProductLightboxIndex((prev) =>
      prev === productSlides.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleProductLightboxKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeProductLightbox();
      if (e.key === "ArrowLeft") productLightboxPrev();
      if (e.key === "ArrowRight") productLightboxNext();
    },
    [closeProductLightbox, productLightboxPrev, productLightboxNext]
  );

  const stats = [
    { value: companyYears, label: "Years Experience", suffix: "+" },
    { value: 12, label: "Countries Served", suffix: "+" },
    { value: 888, label: "Installations", suffix: "+" },
    { value: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  useEffect(() => {
    if (productLightboxOpen) return;
    const timer = setInterval(() => {
      setProductCurrent((p) => (p + 1) % productSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [productLightboxOpen]);

  useEffect(() => {
    if (!productLightboxOpen) return;
    setProductCurrent(productLightboxIndex);
  }, [productLightboxOpen, productLightboxIndex]);

  return (
    <>
      <SEO
        title="Road Construction Machinery Manufacturer"
        description={`Kaushik Road Technologies - Leading manufacturer of road construction machinery including asphalt plants, drum mix plants, wet mix macadam plants. ${companyYears}+ years of excellence in over 12 countries.`}
        keywords="asphalt plant, drum mix plant, wet mix macadam, road construction machinery, bitumen distributor, India, KRT, Kaushik Road Technologies"
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden bg-white">
        {/* Background Image - Beautiful Highway */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584527810790-01a904be796b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover object-center"
            alt="Long straight highway road"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-16 h-[2px] bg-[#D4A12A]" />
              <span className="text-[#7B1C2B] text-sm uppercase tracking-[0.3em] font-semibold">
                Since {COMPANY_START_YEAR}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-[0.9] mb-8"
            >
              Your Trusted
              <br />
              <span className="text-[#7B1C2B]">Road Machinery</span>
              <br />
              <span className="text-[#D4A12A]">Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              India's premier manufacturer of road construction machinery.
              Engineering excellence with {companyYears}+ years of innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/product" className="btn btn-primary">
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline border-[#D4A12A] text-[#D4A12A] hover:bg-[#D4A12A] hover:text-white">
                Get A Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-8 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-[#7B1C2B] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="section bg-gray-50 relative border-t border-gray-200">
        <div className="absolute inset-0 bg-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <SectionHeading
                title="Our Products"
                subtitle="We design and manufacture high-performance road construction machinery that delivers reliability, efficiency, and durability under the most demanding conditions."
              />

              <div className="space-y-4 mt-8">
                {productSlides.map((product, i) => (
                  <Link
                    key={product.link}
                    to={product.link as any}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 group ${
                      i === productCurrent
                        ? "bg-[#7B1C2B]/10 border-[#7B1C2B] text-[#7B1C2B]"
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#7B1C2B]/50 hover:text-[#7B1C2B]"
                    }`}
                  >
                    <span className="font-display text-lg tracking-wide">{product.title}</span>
                    <span className="text-sm opacity-60">{product.capacity}</span>
                  </Link>
                ))}
              </div>

              <Link to="/product" className="btn btn-primary mt-8">
                View All Products
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right - Product Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50" />

                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openProductLightbox(productCurrent)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openProductLightbox(productCurrent);
                    }
                  }}
                  aria-label="View product image larger"
                  className="absolute inset-0 z-[1] group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#7B1C2B] focus-visible:ring-inset"
                >
                  <div className="absolute inset-0">
                    {productSlides.map((slide, i) => (
                      <motion.img
                        key={slide.link}
                        src={slide.image}
                        alt={slide.title}
                        draggable={false}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 pointer-events-none ${
                          i === productCurrent
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <ZoomIn className="w-5 h-5 text-[#7B1C2B]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-transparent z-[2] pointer-events-none">
                  <h3 className="font-display text-2xl text-gray-900">
                    {productSlides[productCurrent].title}
                  </h3>
                  <p className="text-[#7B1C2B] text-sm mt-1">
                    {productSlides[productCurrent].capacity}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-2 z-[3]">
                  {productSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setProductCurrent(i);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === productCurrent ? "bg-[#7B1C2B] w-6" : "bg-gray-300"
                      }`}
                      aria-label={`Go to product ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#D4A12A]/30 rounded-lg -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#7B1C2B]/5 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://ashitech.com/wp-content/uploads/2020/05/home_counter_bg.jpg?id=258"
            className="w-full h-full object-cover opacity-5"
            alt="Construction site background"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Why Choose Kaushik Road Technologies"
            subtitle={`Over ${companyYears}+ years of engineering excellence, innovation, and customer-first approach.`}
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="card-industrial hover:border-l-[#7B1C2B] transition-colors">
                  <div className="w-14 h-14 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#7B1C2B]/20 transition">
                    <feature.icon className="w-7 h-7 text-[#7B1C2B]" />
                  </div>
                  <h3 className="font-display text-2xl text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-transparent rounded-lg border border-gray-200 w-full min-w-0"
              >
                <div className="w-16 h-16 bg-[#7B1C2B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-8 h-8 text-[#7B1C2B]" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-gray-900">{cert.title}</h4>
                  <p className="text-gray-600 text-sm">{cert.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <SectionHeading
                title="Ready to Start Your Project?"
                subtitle="Get in touch with our experts for customized solutions tailored to your road construction needs."
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7B1C2B]">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Call Us Directly</p>
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

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7B1C2B]">✉️</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email Us</p>
                    <a href="mailto:kaushikroadtechindia@gmail.com" className="text-xl text-gray-900 hover:text-[#7B1C2B] transition">
                      kaushikroadtechindia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#7B1C2B]">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Visit Our Facility</p>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl text-gray-900 hover:text-[#7B1C2B] transition mt-1"
                    >
                      Plot No.345, G.I.D.C.II, Dediyasan,<br />
                      Mehsana - 384002, Gujarat, INDIA
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {productLightboxOpen && productSlides[productLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeProductLightbox}
            onKeyDown={handleProductLightboxKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Product image lightbox"
          >
            <button
              type="button"
              onClick={closeProductLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                productLightboxPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                productLightboxNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={productLightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={encodeURI(productSlides[productLightboxIndex].image)}
                alt={productSlides[productLightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </motion.div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2 bg-black/50 backdrop-blur-sm rounded-lg">
              {productSlides.map((slide, i) => (
                <button
                  key={slide.link}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setProductLightboxIndex(i);
                  }}
                  className={`shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all ${
                    i === productLightboxIndex
                      ? "ring-2 ring-[#D4A12A] ring-offset-2 ring-offset-black opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <img
                    src={encodeURI(slide.image)}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
