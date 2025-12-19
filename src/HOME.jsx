import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";

/* ================= PRODUCT SLIDES ================= */
const productSlides = [
  {
    image:
      "https://www.ashitech.com/wp-content/uploads/2021/07/Asphalt-Batching-Plant-1.png",
    link: "/product/hot-mix",
  },
  {
    image:
      "https://www.ashitech.com/wp-content/uploads/2021/07/Drum-Mix-Plant-1.png",
    link: "/product/drum-mix",
  },
  {
    image:
      "https://www.ashitech.com/wp-content/uploads/2021/07/Wet-Mix-Macadam-Plant-1.png",
    link: "/product/wet-mix-macadam",
  },
  {
    image:
      "https://www.ashitech.com/wp-content/uploads/2021/07/Bitumen-Pressure-Distributor-1.png",
    link: "/product/bitumen-pressure-distributor",
  },
  {
    image:
      "https://www.ashitech.com/wp-content/uploads/2021/07/Mechanical-Hydraulic-Broomer-1.png",
    link: "/product/mechanical-hydraulic-broomer",
  },
];

/* ================= ACHIEVEMENTS ================= */
const achievementSlides = [
  {
    title: "Our Achievements",
    text: "We thoroughly research before manufacturing our novel road carpeting machine systems.",
    image: "https://www.ashitech.com/wp-content/uploads/2020/06/motivation.jpg",
  },
  {
    title: "Advanced Manufacturing",
    text: "Highly modern technology and precision engineering ensure durability.",
    image: "https://www.ashitech.com/wp-content/uploads/2020/06/SDP09202.jpg",
  },
];

function Home() {
  const [productCurrent, setProductCurrent] = useState(0);
  const [achievementCurrent, setAchievementCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setProductCurrent((p) => (p + 1) % productSlides.length),
      3500
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setAchievementCurrent((p) => (p + 1) % achievementSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] pt-20 overflow-hidden">
        <img
          src="https://www.ashitech.com/wp-content/uploads/2020/06/slider-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 text-white"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-widest text-xs mb-4">
            Welcome to Ashitech
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Combine Technologies <br />
            for <span className="text-red-600">Better Quality</span>
          </h1>
          <p className="mt-6 max-w-xl text-gray-300">
            Enhancing quality through innovation and technology.
          </p>
        </motion.div>
      </section>

      {/* ================= PRODUCTS INTRO ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Our Products</h2>
            <div className="flex items-center gap-3 mt-4"></div>
          </div>

          <p className="md:col-span-2 text-gray-700 leading-relaxed">
            We design and manufacture high-end road construction machines that
            perform reliably under critical conditions Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quae expedita obcaecati
            eligendi! Deleniti praesentium vel nesciunt molestias maxime,
            asperiores quo? Nostrum rem magnam aliquid eius dolore rerum
            repellat, iure atque.
          </p>
        </div>
      </section>

      {/* ================= PRODUCT CAROUSEL ================= */}
      <section className="bg-gray-100 pb-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative h-[320px] md:h-[360px] overflow-hidden bg-black rounded-xl">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${productCurrent * 100}%)` }}
            >
              {productSlides.map((slide, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center justify-center"
                >
                  <Link to={slide.link}>
                    <img
                      src={slide.image}
                      alt=""
                      className="max-h-72 object-contain transition hover:scale-105"
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={() =>
                setProductCurrent(
                  (productCurrent - 1 + productSlides.length) %
                    productSlides.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full"
            >
              ❮
            </button>

            <button
              onClick={() =>
                setProductCurrent((productCurrent + 1) % productSlides.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://ashitech.com/wp-content/uploads/2020/05/home_counter_bg.jpg?id=258"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${achievementCurrent * 100}%)`,
              }}
            >
              {achievementSlides.map((a, i) => (
                <div
                  key={i}
                  className="min-w-full grid md:grid-cols-2 items-center"
                >
                  <img
                    src={a.image}
                    alt=""
                    className="h-[260px] md:h-[420px] w-full object-cover"
                  />
                  <div className="p-10">
                    <h2 className="text-3xl font-bold">{a.title}</h2>
                    <span className="block w-16 h-1 bg-red-600 my-6" />
                    <p className="text-gray-600 leading-relaxed">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= COUNTERS ================= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="https://ashitech.com/wp-content/uploads/2020/05/home_counter_bg.jpg?id=258"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          {[
            { value: 35, label: "Experience Of Years", suffix: "+" },
            { value: 15, label: "Countries Presence", suffix: "+" },
            { value: "ISO", label: "9001 : 2008 Certified" },
            { value: 888, label: "Successful Installations", suffix: "+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold">
                {typeof item.value === "number" ? (
                  <CountUp end={item.value} duration={3} />
                ) : (
                  item.value
                )}
                {item.suffix && (
                  <span className="text-red-600 ml-1">{item.suffix}</span>
                )}
              </h3>
              <span className="block w-12 h-[2px] bg-red-600 mx-auto my-4" />
              <p className="text-xs uppercase tracking-widest text-gray-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="bg-[#f4f3f2] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-20">
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2">
            <motion.h2
              className="text-3xl font-bold tracking-wide uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Equipments at a Glance
            </motion.h2>

            {/* Decorative Line */}
            <div className="mt-4 mb-8">
              <span className="block w-12 h-[3px] bg-red-600"></span>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Ashitech Equipment Pvt. Ltd. has been growing ceaselessly growth
              as the prime road construction machinery manufacturer. Our
              top-selling road work machinery equipment includes stationary
              batch mix plant, drum mix plant, wet mix plant, drum mix plant,
              four bin feeder, small paving machine, bitumen tank, bitumen
              pressure distributor, automatic wet mix macadam plant, automatic
              stationary wet mix macadam plant to name a few.
            </p>

            {/* ================= FEATURE BOXES ================= */}
            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Research",
                  text: "We research the best technology, ideate prototypes, and finally design and manufacture machinery to give most economic use of machinery.",
                  icon: (
                    <svg
                      className="w-14 h-14 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.7 6.3l3 3-8.4 8.4H6.3v-3z" />
                      <path d="M12 3v3M3 12h3M21 12h-3M12 21v-3" />
                    </svg>
                  ),
                },
                {
                  title: "Production",
                  text: "Our production facilities are quality assured & have the best machines to produce world class machinery which is sturdy, lasting & safe.",
                  icon: (
                    <svg
                      className="w-14 h-14 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h18v6H3zM3 9h18v12H3z" />
                      <path d="M8 15h8" />
                    </svg>
                  ),
                },
                {
                  title: "Service",
                  text: "Ashitech offers superior service aptly reflected by our satisfied clients in over 15 countries. A brand our clients trust.",
                  icon: (
                    <svg
                      className="w-14 h-14 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 4v16M17 4v16" />
                      <path d="M4 12h16" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 text-center shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="flex justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE INFO ================= */}
          <div className="space-y-16">
            {[
              {
                title: "ISO Certified",
                text: "Certified as per the highest certification standards.",
                icon: "🏅",
              },
              {
                title: "Worldwide",
                text: "Over three decades of enterprise, experience and expertise have paved the way for Ashitech Equipments Pvt. Ltd. in over 15 countries.",
                icon: "🌍",
              },
              {
                title: "Quality Policy",
                text: "Our superior products and international standards of performance, quality & reliability are the root of our success.",
                icon: "🛡️",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-red-600 text-4xl">{item.icon}</div>
                <div>
                  <h4 className="font-bold uppercase mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
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

export default Home;
