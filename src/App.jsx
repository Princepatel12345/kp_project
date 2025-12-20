import { ChevronRight, ChevronDown } from "lucide-react";

import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./HOME";
import About from "./About";
import Product from "./product";
import Aftersales from "./Aftersales";
import Careers from "./Careers";
import CaseStudy from "./Case Study";
import Contact from "./Contact";

import MechanicalHydraulicBroomer from "./Mechanical Hydraulic Broomer";
import AsphaltBatchingPlant from "./Asphalt Batching Plant";
import DrumMixPlant from "./Drum Mix Plant";
import WetMixMacadamPlant from "./Wet Mix Macadam Plant";
import BitumenPressureDistributor from "./Bitumen Pressure Distributor";

import "./App.css";

function App() {
  const [openProduct, setOpenProduct] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full sticky top-0 z-50 bg-white">
        <nav>
          {/* ===== MOBILE TOP BAR ===== */}
          <div className="flex items-center justify-between px-4 py-4 md:hidden bg-black">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>

          {/* ===== MOBILE FULLSCREEN MENU ===== */}
          <div
            className={`
              fixed inset-0 bg-black text-white
              transition-transform duration-300
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}
              md:hidden
            `}
          >
            {/* CLOSE */}
            <div className="flex justify-end px-6 py-4">
              <button onClick={() => setMenuOpen(false)} className="text-2xl">
                ✕
              </button>
            </div>

            <div className="px-6 uppercase text-sm tracking-widest">
              {/* HOME */}
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-gray-600 text-red-600"
              >
                Home
              </NavLink>

              {/* ABOUT */}
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-gray-600 text-gray-400"
              >
                About Us
              </NavLink>

              {/* PRODUCTS ACCORDION */}
              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="w-full flex justify-between items-center py-4 border-b border-gray-600 text-gray-400"
              >
                <span>Products</span>
                <span className="ml-2">
                  {mobileProductOpen ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </span>
              </button>

              {mobileProductOpen && (
                <div className="pl-4 text-gray-400">
                  <NavLink
                    to="/product/hot-mix"
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 border-b border-gray-600"
                  >
                    Asphalt Batching Plant
                  </NavLink>

                  <NavLink
                    to="/product/drum-mix"
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 border-b border-gray-600"
                  >
                    Drum Mix Plant
                  </NavLink>

                  <NavLink
                    to="/product/wet-mix-macadam"
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 border-b border-gray-600"
                  >
                    Wet Mix Macadam Plant
                  </NavLink>

                  <NavLink
                    to="/product/bitumen-pressure-distributor"
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 border-b border-gray-600"
                  >
                    Bitumen Pressure Distributor
                  </NavLink>

                  <NavLink
                    to="/product/mechanical-hydraulic-broomer"
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 border-b border-gray-600"
                  >
                    Mechanical Hydraulic Broomer
                  </NavLink>
                </div>
              )}

              {/* AFTER SALES */}
              <NavLink
                to="/aftersales"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-gray-600 text-gray-400"
              >
                After Sales & Services
              </NavLink>

              {/* CAREERS */}
              <NavLink
                to="/careers"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-gray-600 text-gray-400"
              >
                Careers
              </NavLink>

              {/* CASE STUDY */}
              <NavLink
                to="/case-study"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-gray-600 text-gray-400"
              >
                Case Study
              </NavLink>

              {/* CONTACT */}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-4 border-b border-gray-600 text-gray-400"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* ===== DESKTOP MENU (UNCHANGED) ===== */}
          <div className="hidden md:block border-t border-gray-200">
            <ul className="max-w-7xl mx-auto flex justify-center gap-10 py-4 text-sm font-semibold uppercase tracking-wide">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>

              <li
                className="relative"
                onMouseEnter={() => setOpenProduct(true)}
                onMouseLeave={() => setOpenProduct(false)}
              >
                <button>Products</button>
                <ul
                  className={`absolute left-0 mt-0 w-72 bg-white border shadow-xl
                  ${
                    openProduct ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <li className="px-5 py-3">
                    <NavLink to="/product/hot-mix">
                      Asphalt Batching Plant
                    </NavLink>
                  </li>
                  <li className="px-5 py-3">
                    <NavLink to="/product/drum-mix">Drum Mix Plant</NavLink>
                  </li>
                  <li className="px-5 py-3">
                    <NavLink to="/product/wet-mix-macadam">
                      Wet Mix Macadam Plant
                    </NavLink>
                  </li>
                  <li className="px-5 py-3">
                    <NavLink to="/product/bitumen-pressure-distributor">
                      Bitumen Pressure Distributor
                    </NavLink>
                  </li>
                  <li className="px-5 py-3">
                    <NavLink to="/product/mechanical-hydraulic-broomer">
                      Mechanical Hydraulic Broomer
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/aftersales">After Sales & Services</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/case-study">Case Study</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/hot-mix" element={<AsphaltBatchingPlant />} />
          <Route path="/product/drum-mix" element={<DrumMixPlant />} />
          <Route
            path="/product/wet-mix-macadam"
            element={<WetMixMacadamPlant />}
          />
          <Route
            path="/product/bitumen-pressure-distributor"
            element={<BitumenPressureDistributor />}
          />
          <Route
            path="/product/mechanical-hydraulic-broomer"
            element={<MechanicalHydraulicBroomer />}
          />
          <Route path="/aftersales" element={<Aftersales />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
