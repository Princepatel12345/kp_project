import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxo6mnIX-X8RAoYvI8i7QmYrOhJudsvki-wBpyw6l4TvRCtpYK8P9coJimyZB7Siqr/exec";

interface ContactFormProps {
  compact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate consent
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please agree to the privacy policy to proceed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Use URLSearchParams for form-urlencoded format (works better with Google Apps Script)
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("phone", formData.phone);
      formBody.append("company", formData.company);
      formBody.append("message", formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // With no-cors mode, we can't read the response
      // So we assume success if no error was thrown
      setStatus("success");
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setConsent(false);

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Failed to submit form. Please try again or contact us directly."
      );
    }
  };

  // Success state
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex flex-col items-center justify-center text-center py-12 ${
          compact ? "" : "bg-white p-8 rounded-lg border border-gray-200 shadow-lg"
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        </motion.div>
        <h3 className="font-display text-2xl text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 max-w-sm">
          Your inquiry has been submitted successfully. Our team will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`space-y-4 ${compact ? "" : "bg-white p-8 rounded-lg border border-gray-200 shadow-lg"}`}
      onSubmit={handleSubmit}
    >
      {!compact && (
        <h3 className="font-display text-2xl text-gray-900 mb-6">
          Request A Quote
        </h3>
      )}

      {/* Error Message */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      )}

      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          required
          disabled={status === "submitting"}
          className="input disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          disabled={status === "submitting"}
          className="input disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Email Address"
        />
      </div>

      <div className={compact ? "space-y-4" : "grid md:grid-cols-2 gap-4"}>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          required
          disabled={status === "submitting"}
          className="input disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Phone Number"
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          disabled={status === "submitting"}
          className="input disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Company Name"
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your requirements..."
        rows={compact ? 3 : 4}
        disabled={status === "submitting"}
        className="input disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Requirements"
      />

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id={compact ? "privacy-consent-compact" : "privacy-consent"}
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          disabled={status === "submitting"}
          className="mt-1 w-4 h-4 accent-[#7B1C2B] disabled:opacity-50"
        />
        <label
          htmlFor={compact ? "privacy-consent-compact" : "privacy-consent"}
          className="text-sm text-gray-600"
        >
          I agree to the privacy policy and consent to being contacted regarding my inquiry.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your information is kept strictly confidential.
      </p>
    </motion.form>
  );
}

