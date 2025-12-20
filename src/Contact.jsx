import { motion } from "framer-motion";
function Contact() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT IMAGE ================= */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
              alt="Contact"
              className="w-full max-w-md object-cover rounded-md"
            />
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Stay in Contact With Us
            </h2>
            <span className="block w-12 h-1 bg-red-600 mt-3 mb-8" />

            <form className="space-y-6">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="text"
                placeholder="Contact No*"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows="4"
                placeholder="Other Requirements..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              />

              {/* ================= CAPTCHA PLACEHOLDER ================= */}
              <div className="border border-gray-300 rounded-md p-4 inline-block">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-sm text-gray-700">I'm not a robot</span>
                </div>
              </div>

              {/* ================= SUBMIT BUTTON ================= */}
              <button
                type="submit"
                className="mt-6 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition px-12 py-3 rounded-full font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1f1f1f] text-white py-24">
        {/* Top Red Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Ashitech Equipment</h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              Ashitech Equipment is a trusted brand in road construction machine
              industry as a manufacturer & exporter of heavy duty highway making
              equipment & machinery. We design & manufacture energy efficient
              machines for all your road construction needs.
            </p>

            <div className="border-t border-gray-600 my-6" />

            <h4 className="font-semibold mb-3">Reach Us:</h4>
            <p className="text-gray-300 leading-relaxed text-sm">
              Plot No.14, G.I.D.C.II, Dediyasan, Mehsana - 384002, Gujarat,
              INDIA.
            </p>

            <h4 className="font-semibold mt-8 mb-4">Follow Us:</h4>
            <div className="flex gap-4">
              {["in", "f", "t", "ig"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-md hover:bg-red-600 transition cursor-pointer"
                >
                  <span className="font-bold uppercase">{icon}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= MIDDLE COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Request A Quote</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              <span className="text-yellow-400 font-semibold">
                For Business:
              </span>{" "}
              Do you have questions about how{" "}
              <span className="font-semibold text-white">
                Ashitech Equipment Pvt. Ltd.
              </span>{" "}
              can help your company?
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Send us an email{" "}
              <span className="text-white">sales@ashitech.com</span> |{" "}
              <span className="text-white">info@ashitech.com</span> and we’ll
              get in touch shortly, or call us on{" "}
              <span className="text-white">+91 81540 83000</span> between 09:30
              and 19:00 Monday to Friday.
            </p>

            <div className="border-t border-gray-600 my-6" />

            <p className="text-sm text-gray-400">
              <span className="text-yellow-400 font-semibold">Note:</span> Your
              details are kept strictly confidential as per our Company Privacy
              Policy.
            </p>
          </motion.div>

          {/* ================= RIGHT COLUMN (FORM) ================= */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="First Name*"
              className="w-full px-4 py-3 rounded-md bg-white text-black outline-none"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 rounded-md  bg-white text-black outline-none"
            />

            <input
              type="text"
              placeholder="Contact No*"
              className="w-full px-4 py-3 rounded-md  bg-white text-black outline-none"
            />

            <textarea
              placeholder="Other Requirements..."
              rows={4}
              className="w-full px-4 py-3 rounded-md  bg-white text-black outline-none"
            />

            {/* Fake reCAPTCHA box (UI only) */}
            <div className="bg-white text-black p-4 rounded-md flex items-center gap-3">
              <input type="checkbox" />
              <span className="text-sm">I'm not a robot</span>
              <span className="ml-auto text-xs text-gray-500">reCAPTCHA</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

export default Contact;
