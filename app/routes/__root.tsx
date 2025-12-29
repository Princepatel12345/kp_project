import { useState, lazy, Suspense, useEffect } from "react";
import {
  Outlet,
  createRootRoute,
  Link,
  useRouterState,
  ScrollRestoration,
} from "@tanstack/react-router";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { Footer } from "../components/Footer";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: RootComponent,
});

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/aftersales", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/case-study", label: "Case Study" },
  { to: "/contact", label: "Contact" },
];

const productLinks = [
  { to: "/product/hot-mix", label: "Asphalt Batching Plant" },
  { to: "/product/drum-mix", label: "Drum Mix Plant" },
  { to: "/product/wet-mix-macadam", label: "Wet Mix Macadam Plant" },
  { to: "/product/bitumen-pressure-distributor", label: "Bitumen Pressure Distributor" },
  { to: "/product/mechanical-hydraulic-broomer", label: "Mechanical Hydraulic Broomer" },
];

function RootComponent() {
  const [openProduct, setOpenProduct] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Manual scroll to top on route change for best UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const isActive = (path: string) => currentPath === path;
  const isProductActive = () => currentPath.startsWith("/product");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollRestoration />
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#7B1C2B] focus:text-white focus:rounded"
      >
        Skip to content
      </a>

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-20">
            {/* Left Logo - Kaushik */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/assets/Kaushik-logo.png" 
                alt="Kaushik Logo" 
                className="h-18 w-auto"
              />
            </Link>

            {/* Nav Links - Center */}
            <ul className="flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    className={`nav-link ${isActive(link.to) ? "active text-[#7B1C2B]" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Products Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenProduct(true)}
                onMouseLeave={() => setOpenProduct(false)}
              >
                <button
                  className={`nav-link flex items-center gap-1 ${isProductActive() ? "active text-[#7B1C2B]" : ""}`}
                  aria-expanded={openProduct}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openProduct ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    openProduct ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <ul className="w-72 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    {productLinks.map((product, i) => (
                      <li key={product.to}>
                        <Link
                          to={product.to as any}
                          className={`block px-5 py-3.5 text-sm transition-colors border-l-2 ${
                            isActive(product.to)
                              ? "bg-[#7B1C2B]/10 text-[#7B1C2B] border-[#7B1C2B]"
                              : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-[#7B1C2B] hover:border-[#7B1C2B]/50"
                          }`}
                        >
                          {product.label}
                        </Link>
                        {i < productLinks.length - 1 && (
                          <div className="border-b border-gray-100" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {navLinks.slice(2).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    className={`nav-link ${isActive(link.to) ? "active text-[#7B1C2B]" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Logo - KRT */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center">
                <img 
                  src="/assets/KRT-clean.png" 
                  alt="KRT Logo" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between h-16">
            {/* Left Logo - Kaushik */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/assets/Kaushik-logo.png" 
                alt="Kaushik Logo" 
                className="h-18 w-auto"
              />
            </Link>

            {/* Right Logo - KRT */}
            <div className="flex items-center gap-2">
              <img 
                src="/assets/KRT-clean.png" 
                alt="KRT Logo" 
                className="h-12 w-auto"
              />
              {/* Menu Toggle */}
              <button
                onClick={() => setMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center text-gray-900"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

      </header>

      {/* Mobile Fullscreen Menu - Completely separate from header for proper layering */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-white">
          {/* Close Button */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <img 
              src="/assets/Kaushik-logo.png" 
              alt="Kaushik Logo" 
              className="h-14 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-gray-900"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-80px)] bg-white">
            <nav className="space-y-1">
              {/* Home & About */}
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to as any}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 border-b border-gray-200 font-display text-lg tracking-wide transition ${
                    isActive(link.to) ? "text-[#7B1C2B]" : "text-gray-700 hover:text-[#7B1C2B]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Products Accordion */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className={`w-full flex justify-between items-center py-4 font-display text-lg tracking-wide ${
                    isProductActive() ? "text-[#7B1C2B]" : "text-gray-700"
                  }`}
                >
                  <span>Products</span>
                  {mobileProductOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {mobileProductOpen && (
                  <div className="pb-4 pl-4 space-y-1">
                    {productLinks.map((product) => (
                      <Link
                        key={product.to}
                        to={product.to as any}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-3 text-sm transition ${
                          isActive(product.to) ? "text-[#7B1C2B]" : "text-gray-600 hover:text-[#7B1C2B]"
                        }`}
                      >
                        {product.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links */}
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to as any}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 border-b border-gray-200 font-display text-lg tracking-wide transition ${
                    isActive(link.to) ? "text-[#7B1C2B]" : "text-gray-700 hover:text-[#7B1C2B]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ================= MAIN CONTENT ================= */}
      <main id="main-content" className="flex-1 pt-20 md:pt-20">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  );
}
