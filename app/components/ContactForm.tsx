import { motion } from "framer-motion";

interface ContactFormProps {
  compact?: boolean;
}

export function ContactForm({ compact = false }: ContactFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`space-y-4 ${compact ? "" : "bg-white p-8 rounded-lg border border-gray-200 shadow-lg"}`}
      onSubmit={(e) => e.preventDefault()}
    >
      {!compact && (
        <h3 className="font-display text-2xl text-gray-900 mb-6">
          Request A Quote
        </h3>
      )}
      
      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <input
          type="text"
          placeholder="Full Name *"
          required
          className="input"
          aria-label="Full Name"
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          className="input"
          aria-label="Email Address"
        />
      </div>

      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          className="input"
          aria-label="Phone Number"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="input"
          aria-label="Company Name"
        />
      </div>

      <textarea
        placeholder="Tell us about your requirements..."
        rows={compact ? 3 : 4}
        className="input"
        aria-label="Requirements"
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy-consent"
          className="mt-1 w-4 h-4 accent-[#7B1C2B]"
        />
        <label htmlFor="privacy-consent" className="text-sm text-gray-600">
          I agree to the privacy policy and consent to being contacted regarding my inquiry.
        </label>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Submit Inquiry
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your information is kept strictly confidential.
      </p>
    </motion.form>
  );
}

