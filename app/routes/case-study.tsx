import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRight, MapPin, Calendar, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "National Highway Construction - Gujarat",
    client: "NHAI (National Highways Authority of India)",
    location: "Gujarat, India",
    year: "2023",
    product: "Asphalt Batching Plant",
    capacity: "160 TPH",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
    highlights: [
      "Completed 120km highway stretch",
      "Zero downtime during project",
      "15% fuel efficiency improvement",
    ],
    description: "Kaushik Road Technologies supplied a 160 TPH Asphalt Batching Plant for the construction of a national highway connecting major cities in Gujarat. The project was completed ahead of schedule with exceptional quality standards.",
  },
  {
    id: 2,
    title: "Airport Runway Upgrade - Karnataka",
    client: "Airports Authority of India",
    location: "Karnataka, India",
    year: "2022",
    product: "Drum Mix Plant",
    capacity: "120 TPH",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    highlights: [
      "International quality standards met",
      "24/7 operation capability",
      "Minimal noise levels achieved",
    ],
    description: "A specialized Drum Mix Plant was deployed for runway resurfacing at a major international airport. The plant met stringent aviation industry standards for asphalt quality.",
  },
  {
    id: 3,
    title: "Rural Road Development - Maharashtra",
    client: "State PWD",
    location: "Maharashtra, India",
    year: "2023",
    product: "Wet Mix Macadam Plant",
    capacity: "200 TPH",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800",
    highlights: [
      "500km rural roads constructed",
      "Employment for 200+ workers",
      "Award-winning project delivery",
    ],
    description: "Multiple Wet Mix Macadam plants were deployed across Maharashtra for a major rural road connectivity project, improving transportation infrastructure for thousands of villages.",
  },
  {
    id: 4,
    title: "Expressway Project - Rajasthan",
    client: "State Highway Authority",
    location: "Rajasthan, India",
    year: "2024",
    product: "Multiple Plants",
    capacity: "200+ TPH",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
    highlights: [
      "6-lane expressway construction",
      "Integrated plant solution",
      "Record production achieved",
    ],
    description: "A comprehensive machinery package including asphalt and wet mix plants was supplied for a major expressway project, demonstrating Kaushik Road Technologies' capability for large-scale projects.",
  },
];

export const Route = createFileRoute("/case-study")({
  component: CaseStudy,
});

function CaseStudy() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="Explore Kaushik Road Technologies success stories - Major road construction projects across India featuring our machinery. NHAI, Airport, Expressway projects."
        keywords="case study, road construction projects, NHAI projects, highway construction, success stories, KRT projects"
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
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Success stories from our projects across India and beyond
          </p>
        </motion.div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore how Kaushik Road Technologies machinery has powered major infrastructure projects."
            centered
          />

          <div className="space-y-20 mt-16">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-[#7B1C2B] text-white text-xs px-3 py-1 rounded-full">
                          {study.product}
                        </span>
                        <span className="bg-white/90 text-gray-900 text-xs px-3 py-1 rounded-full">
                          {study.capacity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#7B1C2B]" />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#7B1C2B]" />
                      {study.year}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl text-gray-900 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-[#7B1C2B] mb-6">{study.client}</p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {study.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#7B1C2B] flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="btn btn-primary">
                    Discuss Your Project
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-[#7B1C2B] to-[#9d2a3f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Kaushik Road Technologies machinery can power your next infrastructure project.
          </p>
          <Link to="/contact" className="btn bg-white text-[#7B1C2B] hover:bg-gray-100">
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
