import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { Briefcase, MapPin, Clock, Users, Rocket, Heart, GraduationCap } from "lucide-react";

const openings = [
  {
    title: "Production Engineer",
    department: "Manufacturing",
    location: "Mehsana, Gujarat",
    type: "Full-time",
    experience: "3-5 years",
  },
  {
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Pan India",
    type: "Full-time",
    experience: "2-4 years",
  },
  {
    title: "Service Engineer",
    department: "After Sales",
    location: "Mehsana, Gujarat",
    type: "Full-time",
    experience: "2-3 years",
  },
  {
    title: "Design Engineer",
    department: "R&D",
    location: "Mehsana, Gujarat",
    type: "Full-time",
    experience: "3-5 years",
  },
];

const benefits = [
  { icon: Rocket, title: "Career Growth", description: "Clear growth paths and promotion opportunities" },
  { icon: Heart, title: "Health Benefits", description: "Comprehensive medical insurance coverage" },
  { icon: GraduationCap, title: "Learning", description: "Continuous training and skill development" },
  { icon: Users, title: "Team Culture", description: "Collaborative and supportive work environment" },
];

export const Route = createFileRoute("/careers")({
  component: Careers,
});

function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join Kaushik Road Technologies - Build your career with India's leading road construction machinery manufacturer. View current openings and apply today."
        keywords="careers, jobs, road construction jobs, manufacturing jobs, Gujarat jobs, engineering jobs, KRT careers"
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
            Join Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Build roads, build careers. Be part of India's leading construction machinery manufacturer.
          </p>
        </motion.div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="section bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Why Kaushik Road Technologies?"
            subtitle="We offer more than just a job - we offer a career path to success."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7B1C2B]/30 transition"
              >
                <div className="w-16 h-16 bg-[#7B1C2B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-[#7B1C2B]" />
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Open Positions"
            subtitle="Explore current opportunities and find your perfect role."
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[#7B1C2B] text-sm font-medium">{job.department}</span>
                    <h3 className="font-display text-2xl text-gray-900 mt-1">{job.title}</h3>
                  </div>
                  <div className="w-12 h-12 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#7B1C2B] transition">
                    <Briefcase className="w-5 h-5 text-[#7B1C2B] group-hover:text-white transition" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#7B1C2B]" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#7B1C2B]" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#7B1C2B]" />
                    {job.experience}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-outline w-full text-sm py-2"
                >
                  Apply Now
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
            Don't See a Suitable Opening?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:hr@krt.com"
            className="btn bg-white text-[#7B1C2B] hover:bg-gray-100"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </>
  );
}
