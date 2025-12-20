import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <motion.h1
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1.2 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            About Us
          </motion.h1>

          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="block h-1 bg-red-600 mx-auto mt-6 rounded-full"
          />
        </motion.div>
      </section>

      {/* ================= COMPANY PROFILE ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Company Profile
            </h2>
            <span className="block w-16 h-1 bg-red-600 mt-4 mb-6" />

            <p className="text-gray-600 leading-relaxed mb-4">
              With over three decades of experience and expertise in
              manufacturing road construction equipment, Ashitech has
              established itself as a trusted name synonymous with quality and
              reliability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              Founded by Mr. Manibhai Patel more than 35 years ago under the
              brand Ashirvad, the company has grown to unparalleled heights.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-8 py-4 rounded-md font-semibold shadow-xl"
              >
                CONTACT US
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://www.ashitech.com/wp-content/uploads/2020/05/about_right.jpg"
              alt="Company"
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE ================= */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://www.ashitech.com/wp-content/uploads/2020/05/about2.jpg"
            alt="Infrastructure"
            className="rounded-xl shadow-2xl w-full"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              Infrastructure
            </h2>
            <span className="block w-14 h-1 bg-red-600 mt-4 mb-6" />

            <p className="text-gray-600 leading-relaxed">
              Over three decades of enterprise and expertise have paved the way
              for Ashitech Equipments Pvt. Ltd. to emerge as a leading
              manufacturer.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              The Ashitech campus houses state-of-the-art manufacturing
              facilities with advanced production lines and offices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Expertise"
            className="rounded-xl shadow-2xl w-[80%]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Expertise</h2>
            <span className="block w-14 h-1 bg-red-600 mt-4 mb-6" />

            <p className="text-gray-600 leading-relaxed">
              Ashitech continuously evolves by upgrading designs based on market
              feedback and industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ACHIEVEMENT ================= */}
      <section className="bg-white py-20 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievement
        </motion.h2>
        <span className="block w-14 h-1 bg-red-600 mx-auto mt-4 mb-6" />

        <motion.p
          className="max-w-4xl mx-auto text-gray-600 leading-relaxed px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Today Ashitech Equipments Pvt. Ltd. stands for reliable products and
          superior service with over 999+ satisfied customers, revolutionizing
          the road equipment industry in India and abroad.
        </motion.p>
      </section>

      {/* ================= QUALITY POLICY ================= */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              Quality Policy
            </h2>
            <span className="block w-14 h-1 bg-red-600 mt-4 mb-6" />

            <p className="text-gray-600 leading-relaxed">
              At Ashitech, quality plays an essential role in every aspect of
              business. Our objective is to deliver optimum quality products
              meeting international standards of performance, reliability, and
              customer satisfaction.
            </p>
          </motion.div>

          <motion.img
            src="https://img.freepik.com/premium-photo/quality-assurance-concept_31965-14835.jpg"
            alt="Quality Policy"
            className="rounded-xl shadow-2xl w-full"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
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

export default About;
