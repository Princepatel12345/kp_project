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
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      <ScrollRestoration />
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#db8c0a] focus:text-white focus:rounded"
      >
        Skip to content
      </a>

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/assets/logo.svg" 
                alt="Ashitech Logo" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Nav Links */}
            <ul className="flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to as any}
                    className={`nav-link ${isActive(link.to) ? "active text-[#db8c0a]" : ""}`}
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
                  className={`nav-link flex items-center gap-1 ${isProductActive() ? "active text-[#db8c0a]" : ""}`}
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
                  <ul className="w-72 bg-[#141414] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                    {productLinks.map((product, i) => (
                      <li key={product.to}>
                        <Link
                          to={product.to as any}
                          className={`block px-5 py-3.5 text-sm transition-colors border-l-2 ${
                            isActive(product.to)
                              ? "bg-[#db8c0a]/10 text-[#db8c0a] border-[#db8c0a]"
                              : "text-gray-400 border-transparent hover:bg-white/5 hover:text-white hover:border-[#db8c0a]/50"
                          }`}
                        >
                          {product.label}
                        </Link>
                        {i < productLinks.length - 1 && (
                          <div className="border-b border-white/5" />
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
                    className={`nav-link ${isActive(link.to) ? "active text-[#db8c0a]" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link to="/contact" className="btn btn-primary text-sm py-2.5 px-5">
              Get Quote
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/assets/logo.svg" 
                alt="Ashitech Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center text-white"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

      </header>

      {/* Mobile Fullscreen Menu - Completely separate from header for proper layering */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-[#0a0a0a]">
          {/* Close Button */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <img 
              src="/assets/logo.svg" 
              alt="Ashitech Logo" 
              className="h-8 w-auto"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(100vh-80px)] bg-[#0a0a0a]">
            <nav className="space-y-1">
              {/* Home & About */}
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to as any}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 border-b border-white/10 font-display text-lg tracking-wide transition ${
                    isActive(link.to) ? "text-[#db8c0a]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Products Accordion */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className={`w-full flex justify-between items-center py-4 font-display text-lg tracking-wide ${
                    isProductActive() ? "text-[#db8c0a]" : "text-gray-300"
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
                          isActive(product.to) ? "text-[#db8c0a]" : "text-gray-400 hover:text-white"
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
                  className={`block py-4 border-b border-white/10 font-display text-lg tracking-wide transition ${
                    isActive(link.to) ? "text-[#db8c0a]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-full mt-8"
            >
              Get Quote
            </Link>
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
