import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import { Award, Users, Target, CheckCircle } from "lucide-react";
import { COMPANY_START_YEAR, getCompanyYears } from "../lib/company";

const milestones = [
  { year: "1989", title: "Foundation", description: "Kaushik Road Technologies was founded, beginning our journey in road construction machinery." },
  { year: "2000", title: "Expansion", description: "Expanded manufacturing capacity and product line." },
  { year: "2010", title: "Global Reach", description: "Started exporting to international markets across 12+ countries." },
  { year: "2020", title: "ISO Certified", description: "Achieved ISO 9001:2015 certification for quality management." },
];

const values = [
  { icon: Award, title: "Excellence", description: "We strive for excellence in every machine we manufacture." },
  { icon: Users, title: "Customer Focus", description: "Our customers' success is our primary motivation." },
  { icon: Target, title: "Innovation", description: "Continuous innovation drives our product development." },
  { icon: CheckCircle, title: "Reliability", description: "Building machinery that stands the test of time." },
];

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const companyYears = getCompanyYears();

  return (
    <>
      <SEO
        title="About Us"
        description={`Learn about Kaushik Road Technologies - ${companyYears}+ years of excellence in manufacturing road construction machinery. ISO certified, trusted by clients in 12+ countries.`}
        keywords="about KRT, Kaushik Road Technologies, road construction company, manufacturing history, ISO certified manufacturer"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#7B1C2B]/10 border border-[#7B1C2B]/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-[#7B1C2B] rounded-full animate-pulse" />
            <span className="text-[#7B1C2B] text-sm uppercase tracking-widest">Since {COMPANY_START_YEAR}</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4">
            About <span className="text-gradient">KRT</span>
          </h1>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            {companyYears}+ years of engineering excellence in road construction machinery
          </p>
        </motion.div>
      </section>

      {/* ================= COMPANY PROFILE ================= */}
      <section className="section bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Company Profile"
                subtitle={`With over ${companyYears}+ years of experience and expertise in manufacturing road construction equipment, Kaushik Road Technologies has established itself as a trusted name synonymous with quality and reliability.`}
              />

              <div className="space-y-6 mt-8">
                <p className="text-gray-700 leading-relaxed">
                  Founded in {COMPANY_START_YEAR}, the company has grown to unparalleled heights. Today, Kaushik Road Technologies stands as a leading manufacturer and exporter of road construction machinery.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has 
                  earned us the trust of clients in over 12 countries worldwide. Every 
                  machine we produce reflects our dedication to engineering excellence.
                </p>
              </div>

              <Link to="/contact" className="btn btn-primary mt-8">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://www.ashitech.com/wp-content/uploads/2020/05/about_right.jpg"
                  alt="Kaushik Road Technologies manufacturing facility"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-lg">
                  <div className="font-display text-3xl text-[#7B1C2B]">{companyYears}+</div>
                  <div className="text-gray-600 text-sm">Years of Excellence</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-lg">
                  <div className="font-display text-3xl text-[#7B1C2B]">12+</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our path to becoming an industry leader."
            centered
          />

          <div className="relative mt-16">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#7B1C2B] via-[#7B1C2B]/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="card-industrial max-w-md mx-auto md:mx-0">
                      <span className="font-display text-4xl text-[#7B1C2B]">{milestone.year}</span>
                      <h3 className="font-display text-2xl text-gray-900 mt-2">{milestone.title}</h3>
                      <p className="text-gray-700 mt-2">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 bg-[#7B1C2B] rounded-full border-4 border-gray-50 z-10 hidden md:block" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7B1C2B]/30 transition group"
              >
                <div className="w-16 h-16 bg-[#7B1C2B]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7B1C2B]/20 transition">
                  <value.icon className="w-8 h-8 text-[#7B1C2B]" />
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://www.ashitech.com/wp-content/uploads/2020/05/about2.jpg"
                alt="Kaushik Road Technologies infrastructure and manufacturing"
                className="rounded-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Infrastructure"
                subtitle="Our state-of-the-art manufacturing facility is equipped with the latest technology and machinery."
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#7B1C2B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Advanced CNC machining centers for precision manufacturing
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#7B1C2B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Dedicated quality testing laboratories
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#7B1C2B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Spacious assembly and dispatch bays
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#7B1C2B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Modern R&D center for product innovation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= QUALITY POLICY ================= */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Quality Policy"
                subtitle="At Kaushik Road Technologies, quality is not just a standard—it's our commitment to every customer."
              />

              <div className="space-y-6 mt-8">
                <p className="text-gray-700 leading-relaxed">
                  Our objective is to deliver optimum quality products meeting international 
                  standards of performance, reliability, and customer satisfaction. Every 
                  machine undergoes rigorous testing before delivery.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#7B1C2B]/10 rounded-lg border border-[#7B1C2B]/20">
                    <div className="font-display text-2xl text-[#7B1C2B]">ISO</div>
                    <div className="text-gray-600 text-sm">9001:2015 Certified</div>
                  </div>
                  <div className="p-4 bg-[#7B1C2B]/10 rounded-lg border border-[#7B1C2B]/20">
                    <div className="font-display text-2xl text-[#7B1C2B]">100%</div>
                    <div className="text-gray-600 text-sm">Quality Tested</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Quality assurance and testing"
                className="rounded-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            title="Let's Build Together"
            subtitle="Ready to discuss your project requirements? Our team is here to help."
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/product" className="btn btn-outline">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
