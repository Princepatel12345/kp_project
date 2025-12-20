import { motion } from "framer-motion";

function Aftersales() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            After Sales & Services
          </h1>
          <span className="block w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Maintainance</h2>
            <span className="block w-14 h-1 bg-red-600 mt-3 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-6">
              Large machineries require high upkeep to maintain the safety
              standards at the site. We offer excellent maintenance assistance
              to all our customers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our efficient servicemen come to your sites at a single call to
              provide low cost maintenance quickly.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold rounded-md shadow-md">
              CONTACT US
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://www.ashitech.com/wp-content/uploads/2020/05/aftersales1.jpg"
              alt="Maintenance"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= REINSTALLATION ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Reinstallation"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f3f3f3] p-10"
          >
            <h2 className="text-3xl font-bold text-gray-900">Reinstallation</h2>
            <span className="block w-14 h-1 bg-red-600 mt-3 mb-6" />

            <p className="text-gray-600 leading-relaxed">
              Wear and tear is normal, fret not for our Ashitech professionals
              will come to your site and reinstall any machinery that needs our
              care and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SPARE PARTS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              alt="Spare Parts"
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Spare Parts</h2>
            <span className="block w-14 h-1 bg-red-600 mt-3 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4">
              Ashitech is the leading manufacturer of spare parts and
              consumables in the construction machinery sector. We inspect and
              guarantee a seamless working of all consumables to ensure a long
              life and prolonged safety of your machinery.
            </p>

            <p className="text-gray-600 leading-relaxed">
              All our spare parts are forged with the best of quality and the
              trust of Ashitech manufacturing. Reach out to our executives for
              any spare part requirements that you may have.
            </p>
          </motion.div>
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

export default Aftersales;
