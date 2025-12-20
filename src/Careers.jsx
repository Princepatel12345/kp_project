import { motion } from "framer-motion";

function Careers() {
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
            Careers
          </h1>
          <span className="block w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <span className="block w-12 h-1 bg-red-600 mt-3 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              We’re looking for people to join the team who are as excited as we
              are to help build the company that empowers the future generation
              of engineers to be successful.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-semibold rounded-md shadow-md">
              CONTACT US
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Career Growth"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= JOB CARDS ================= */}
      <section className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            "MECHANICAL ENGINEERS",
            "DESIGN DEVELOPERS",
            "ADMINISTRATION STAFF",
          ].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-200 py-10 text-center font-semibold text-gray-900 border-l-4 border-red-600 hover:bg-gray-300 transition cursor-pointer"
            >
              {role}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPLY FORM ================= */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-semibold text-gray-900 mb-12 uppercase"
          >
            Please fill up the form below to apply for a position with us.
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-red-600"
            />

            <input
              type="email"
              placeholder="Your Email *"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Your Phone Number *"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-red-600"
            />

            <select className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none focus:border-red-600">
              <option>Select The Position *</option>
              <option>Mechanical Engineer</option>
              <option>Design Developer</option>
              <option>Administration Staff</option>
            </select>

            {/* CV Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Attach Your CV <span className="text-red-600">*</span>
                <span className="block text-xs text-gray-500 mt-1">
                  Max 4MB | PDF, DOC, DOCX, TXT
                </span>
              </label>

              <div className="relative flex items-center gap-4">
                {/* Hidden file input */}
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx,.txt"
                  className="hidden"
                />

                {/* Custom button */}
                <label
                  htmlFor="cv-upload"
                  className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md text-sm font-semibold transition"
                >
                  Choose File
                </label>

                {/* File name placeholder */}
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
            </div>

            {/* Fake reCAPTCHA */}
            <div className="flex items-center gap-3 border p-4 rounded-md w-fit">
              <input type="checkbox" />
              <span className="text-sm">I'm not a robot</span>
              <span className="text-xs text-gray-500 ml-6">reCAPTCHA</span>
            </div>

            <p className="text-xs text-gray-500">
              Note: All fields are required
            </p>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 font-semibold rounded-md"
            >
              SUBMIT
            </button>
          </motion.form>
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

export default Careers;
