import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import { GoogleMap } from "../components/GoogleMap";
import { SocialIcons } from "../components/SocialIcons";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 81550 60305", "+91 81560 27702"],
    action: { href: "tel:+918155060305", label: "Call Now" },
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["kaushikroadtechindia@gmail.com"],
    action: { href: "mailto:kaushikroadtechindia@gmail.com", label: "Send Email" },
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Plot No.345, G.I.D.C.II, Dediyasan", "Mehsana - 384002, Gujarat, INDIA"],
    action: { href: "https://www.google.com/maps/search/?api=1&query=Plot+No.345,+G.I.D.C.II,+Dediyasan,+Mehsana+-+384002,+Gujarat,+INDIA", label: "Get Directions" },
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
        description="Get in touch with Kaushik Road Technologies. Request quotes, technical support, or visit our facility in Mehsana, Gujarat, India."
        keywords="contact KRT, Kaushik Road Technologies contact, road construction machinery contact, Mehsana Gujarat, get quote"
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
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We're here to help with all your road construction machinery needs
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="section bg-white border-t border-gray-200">
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
                <div className="w-12 h-12 bg-[#7B1C2B]/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#7B1C2B]" />
                </div>
                <h3 className="font-display text-xl text-gray-900 mb-3">{info.title}</h3>
                {info.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">{line}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action.href}
                    className="inline-block mt-4 text-[#7B1C2B] text-sm hover:underline"
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

              <div className="mt-8 p-6 bg-gradient-to-br from-[#7B1C2B]/10 to-transparent rounded-lg border border-[#7B1C2B]/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#7B1C2B]" />
                  <h4 className="font-display text-xl text-gray-900">Quick Response Guaranteed</h4>
                </div>
                <p className="text-gray-700">
                  Our sales and technical team typically responds within a few hours during
                  business days. For urgent inquiries, please call us directly.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-display text-lg text-gray-900 mb-4">Follow Us</h4>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Social Icons */}
                  <SocialIcons variant="light" />
                  
                  {/* Phone Icon */}
                  <a
                    href="tel:+918155060305"
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-200 rounded hover:bg-[#7B1C2B] hover:border-[#7B1C2B] transition group"
                    aria-label="Call +91 81550 60305"
                    title="Call +91 81550 60305"
                  >
                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition" />
                  </a>
                  
                  {/* Email Icon */}
                  <a
                    href="mailto:kaushikroadtechindia@gmail.com"
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-200 rounded hover:bg-[#7B1C2B] hover:border-[#7B1C2B] transition group"
                    aria-label="Email kaushikroadtechindia@gmail.com"
                    title="Email kaushikroadtechindia@gmail.com"
                  >
                    <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition" />
                  </a>
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
      <section className="relative bg-white">
        {/* Full Width Map */}
        <div className="w-full">
          <GoogleMap 
            address="Plot No.345, G.I.D.C.II, Dediyasan, Mehsana - 384002, Gujarat, INDIA"
            height="500px"
            className="w-full"
          />
        </div>
        
        {/* Location Info Section - Compact */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            {/* Map Pin Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#7B1C2B]/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#7B1C2B]" />
              </div>
            </div>
            
            {/* Address Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl text-gray-900 mb-2 uppercase tracking-wide">
                Our Location
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Plot No.345, G.I.D.C.II, Dediyasan<br />
                Mehsana - 384002, Gujarat, INDIA
              </p>
            </div>
            
            {/* Open in Google Maps Button */}
            <div className="flex-shrink-0">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.345,+G.I.D.C.II,+Dediyasan,+Mehsana+-+384002,+Gujarat,+INDIA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-6 py-3 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                Open in Google Maps
                <MapPin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
