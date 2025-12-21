import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 81540 83000", "+91 2762 250 831"],
    action: { href: "tel:+918154083000", label: "Call Now" },
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["sales@ashitech.com", "info@ashitech.com"],
    action: { href: "mailto:sales@ashitech.com", label: "Send Email" },
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Plot No.14, G.I.D.C.II, Dediyasan", "Mehsana - 384002, Gujarat, INDIA"],
    action: { href: "https://maps.google.com", label: "Get Directions" },
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday - Friday: 9:30 AM - 7:00 PM", "Saturday: 9:30 AM - 2:00 PM"],
    action: null,
  },
];

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Ashitech Equipment. Request quotes, technical support, or visit our facility in Mehsana, Gujarat, India."
        keywords="contact Ashitech, road construction machinery contact, Mehsana Gujarat, get quote"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0d0d0d] to-[#1a1a2e]" />
        <div className="absolute inset-0 bg-pattern opacity-10" />

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're here to help with all your road construction machinery needs
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="section bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-industrial"
              >
                <div className="w-12 h-12 bg-[#db8c0a]/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#db8c0a]" />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-400 text-sm">{line}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action.href}
                    className="inline-block mt-4 text-[#db8c0a] text-sm hover:underline"
                  >
                    {info.action.label} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form and our team will get back to you within 24 hours."
              />

              <div className="mt-8 p-6 bg-gradient-to-br from-[#db8c0a]/10 to-transparent rounded-lg border border-[#db8c0a]/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#db8c0a]" />
                  <h4 className="font-display text-xl text-white">Quick Response Guaranteed</h4>
                </div>
                <p className="text-gray-400">
                  Our sales and technical team typically responds within a few hours during
                  business days. For urgent inquiries, please call us directly.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-lg text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {["LinkedIn", "Facebook", "Twitter", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded hover:bg-[#db8c0a] hover:border-[#db8c0a] transition"
                      aria-label={social}
                    >
                      <span className="font-display text-xs text-gray-400 hover:text-white">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="h-[400px] bg-[#141414] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#db8c0a] mx-auto mb-4" />
            <h3 className="font-display text-2xl text-white mb-2">Our Location</h3>
            <p className="text-gray-400 mb-4">
              Plot No.14, G.I.D.C.II, Dediyasan<br />
              Mehsana - 384002, Gujarat, INDIA
            </p>
            <a
              href="https://maps.google.com/?q=Ashitech+Equipment+Mehsana"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
