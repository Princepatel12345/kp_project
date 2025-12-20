import { motion } from "framer-motion";
function DrumMixPlant() {
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
            DrumMixPlant
          </h1>
          <span className="block w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* ===== LEFT CONTENT ===== */}
          <div className="lg:col-span-2 space-y-6">
            <motion.img
              src="https://www.ashitech.com/wp-content/uploads/2021/07/Asphalt-Batching-Plant-Machine.png"
              alt="Asphalt Batching Plant"
              className="w-full rounded-lg shadow-xl bg-black"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <p className="text-gray-700 leading-relaxed">
              Ashitech is one of the leading asphalt batching plant
              manufacturers in India. Our batch mix plants are designed to
              deliver superior quality asphalt mixes with high efficiency,
              reliability, and low maintenance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our asphalt plants reduce thermal loss, improve fuel efficiency,
              and ensure consistent output quality. Each plant is engineered
              using cutting-edge technology to meet global industry standards.
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-black px-6 py-3 font-semibold">
                Technical Specification
              </button>
              <button className="bg-gray-900 text-white px-6 py-3 font-semibold">
                Salient Features
              </button>
            </div>

            {/* ===== TECHNICAL TABLE ===== */}
            <div className="overflow-x-auto mt-8">
              <table className="w-full border border-gray-300 text-sm">
                <tbody>
                  {[
                    ["Plant Capacity", "80 – 200 TPH"],
                    ["Batch Size", "1000 – 2500 Kg"],
                    ["Dryer Type", "4 Way Friction Drive"],
                    ["Burner Type", "Fully Automatic Modulating"],
                    ["Fuel", "Diesel / LDO / Furnace Oil"],
                    ["Control Panel", "PLC / SCADA Based"],
                    ["Bag Filter Type", "Reverse Airflow"],
                  ].map(([label, value], i) => (
                    <tr key={i} className="border-b">
                      <td className="p-3 font-medium bg-gray-100">{label}</td>
                      <td className="p-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <div className="space-y-8">
            {/* REQUEST A QUOTE */}
            <div className="bg-red-600 text-black p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">REQUEST A QUOTE</h3>

              <form className="space-y-3">
                <input
                  className="w-full bg-white p-2 text-black"
                  placeholder="Full Name"
                />
                <input
                  className="w-full p-2  bg-white text-black"
                  placeholder="Email ID"
                />
                <input
                  className="w-full p-2  bg-white text-black"
                  placeholder="Contact No."
                />
                <textarea
                  className="w-full p-2  bg-white text-black"
                  placeholder="Other Requirements"
                />
                <button className="bg-white text-red-600 px-4 py-2 font-semibold w-full">
                  Submit
                </button>
              </form>
            </div>

            {/* LATEST POSTS */}
            <div>
              <h4 className="font-bold mb-4">OUR LATEST POST</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>Functions of Asphalt Batchmix Plant</li>
                <li>How to Choose Between Drum & Batch Mix Plant</li>
                <li>Benefits of Using a Road Broomer</li>
              </ul>
            </div>

            {/* REACH US */}
            {/* REACH US */}
            <div className="bg-[#f3f3f3] border border-gray-300 p-6 text-gray-700">
              <h4 className="text-xl font-medium tracking-wide mb-2">
                REACH US
              </h4>

              <div className="h-px bg-gray-400 mb-5" />

              <p className="text-sm leading-relaxed mb-6">
                We are always happy to help you, get touch with us today itself!
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="uppercase text-gray-500 font-semibold mb-1">
                    CALL US:
                  </p>
                  <p>+91 81540 83000</p>
                </div>

                <div>
                  <p className="uppercase text-gray-500 font-semibold mb-1">
                    EMAIL US:
                  </p>
                  <p>sales@ashitech.com</p>
                  <p>info@ashitech.com</p>
                </div>

                <div>
                  <p className="uppercase text-gray-500 font-semibold mb-3">
                    FOLLOW US:
                  </p>

                  <div className="flex gap-4">
                    {["f", "t", "in", "ig"].map((icon, i) => (
                      <div
                        key={i}
                        className="w-11 h-11 bg-gray-400 text-white flex items-center justify-center rounded-md text-lg font-bold cursor-pointer hover:bg-gray-600 transition"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
export default DrumMixPlant;
