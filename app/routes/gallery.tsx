import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../components/SEO";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3, LayoutGrid, Camera } from "lucide-react";

/* ================= GALLERY CATEGORIES ================= */
const categories = [
  { id: "all", label: "All" },
  { id: "products", label: "Products" },
  { id: "projects", label: "Projects" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "events", label: "Events & Exhibitions" },
];

/* ================= GALLERY IMAGES ================= */
const galleryImages = [
  // Products
  {
    id: 1,
    src: "https://www.ashitech.com/wp-content/uploads/2021/07/Drum-Mix-Plant-1.png",
    title: "Drum Mix Plant",
    category: "products",
    description: "40-120 TPH capacity asphalt drum mix plant",
  },
  {
    id: 2,
    src: "https://www.ashitech.com/wp-content/uploads/2021/07/Wet-Mix-Macadam-Plant-1.png",
    title: "Wet Mix Macadam Plant",
    category: "products",
    description: "High-capacity wet mix macadam plant for road construction",
  },
  {
    id: 3,
    src: "https://www.ashitech.com/wp-content/uploads/2021/07/Bitumen-Pressure-Distributor-1.png",
    title: "MINI BITUMEN SPRAYER",
    category: "products",
    description: "2500/4000 Ltr capacity tractor mounted mini bitumen sprayer",
  },
  {
    id: 4,
    src: "https://www.ashitech.com/wp-content/uploads/2021/07/Mechanical-Hydraulic-Broomer-1.png",
    title: "Mechanical Hydraulic Broomer",
    category: "products",
    description: "Tractor-towed road broom with 2.4m clear sweeping width",
  },
  // Projects
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    title: "Highway Project - Gujarat",
    category: "projects",
    description: "Major highway construction project using our machinery",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    title: "Road Construction - Maharashtra",
    category: "projects",
    description: "State highway development project",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop",
    title: "Infrastructure Development",
    category: "projects",
    description: "Urban road infrastructure project",
  },
  // Manufacturing
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&auto=format&fit=crop",
    title: "Manufacturing Facility",
    category: "manufacturing",
    description: "Our state-of-the-art manufacturing unit",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    title: "Quality Testing Lab",
    category: "manufacturing",
    description: "Precision testing and quality assurance",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop",
    title: "Welding Operations",
    category: "manufacturing",
    description: "Expert welding and fabrication work",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format&fit=crop",
    title: "Assembly Line",
    category: "manufacturing",
    description: "Modern assembly and production line",
  },
  // Events
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    title: "EXCON Exhibition 2024",
    category: "events",
    description: "Showcasing our products at EXCON trade fair",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop",
    title: "Industry Conference",
    category: "events",
    description: "Participating in road construction industry summit",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop",
    title: "Product Launch Event",
    category: "events",
    description: "Launching new machinery at our facility",
  },
  // More Products & Projects
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1584527810790-01a904be796b?w=800&auto=format&fit=crop",
    title: "Completed Highway",
    category: "projects",
    description: "Finished highway built with our equipment",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    title: "CNC Machining",
    category: "manufacturing",
    description: "Precision CNC machining for components",
  },
];

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gridView, setGridView] = useState<"grid" | "masonry">("grid");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [closeLightbox, goToPrevious, goToNext]
  );

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our gallery showcasing Kaushik Road Technologies' products, projects, manufacturing facilities, and exhibitions. See our road construction machinery in action."
        keywords="gallery, road construction machinery photos, asphalt plant images, KRT products, manufacturing facility, exhibitions"
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-[#7B1C2B] via-[#5a141f] to-[#3d0d15]" />
          <div className="absolute inset-0 bg-pattern opacity-10" />
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A12A]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A12A]/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm"
          >
            <Camera className="w-4 h-4 text-[#D4A12A]" />
            <span className="text-white/90 text-sm uppercase tracking-widest">
              Our Visual Journey
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Gallery
          </h1>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our products, projects, manufacturing excellence, and milestones
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="font-display text-3xl text-[#D4A12A]">{galleryImages.length}+</div>
              <div className="text-white/60 text-sm">Photos</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="font-display text-3xl text-[#D4A12A]">{categories.length - 1}</div>
              <div className="text-white/60 text-sm">Categories</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FILTERS & CONTROLS ================= */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-display uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[#7B1C2B] text-white shadow-lg shadow-[#7B1C2B]/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setGridView("grid")}
                className={`p-2 rounded-md transition-all ${
                  gridView === "grid"
                    ? "bg-white shadow text-[#7B1C2B]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setGridView("masonry")}
                className={`p-2 rounded-md transition-all ${
                  gridView === "masonry"
                    ? "bg-white shadow text-[#7B1C2B]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                aria-label="Masonry view"
              >
                <LayoutGrid size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results count */}
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-sm mb-8"
          >
            Showing <span className="text-[#7B1C2B] font-semibold">{filteredImages.length}</span>{" "}
            {filteredImages.length === 1 ? "image" : "images"}
            {activeCategory !== "all" && (
              <> in <span className="text-gray-900">{categories.find((c) => c.id === activeCategory)?.label}</span></>
            )}
          </motion.p>

          {/* Grid */}
          <motion.div
            layout
            className={`grid gap-6 ${
              gridView === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    gridView === "masonry" ? "break-inside-avoid mb-6" : ""
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden ${
                      gridView === "grid" ? "aspect-square" : ""
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        gridView === "grid" ? "h-full" : "h-auto"
                      }`}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ZoomIn className="w-5 h-5 text-[#7B1C2B]" />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#7B1C2B] text-white text-xs uppercase tracking-wider rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {image.category}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-display text-xl text-white mb-1">
                        {image.title}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {lightboxOpen && filteredImages[currentImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <h3 className="font-display text-2xl text-white mb-1">
                  {filteredImages[currentImageIndex].title}
                </h3>
                <p className="text-white/70">
                  {filteredImages[currentImageIndex].description}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#7B1C2B] text-white text-xs uppercase tracking-wider rounded-full">
                    {filteredImages[currentImageIndex].category}
                  </span>
                  <span className="text-white/50 text-sm">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] p-2 bg-black/50 backdrop-blur-sm rounded-lg">
              {filteredImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(i);
                  }}
                  className={`shrink-0 w-16 h-16 rounded-md overflow-hidden transition-all ${
                    i === currentImageIndex
                      ? "ring-2 ring-[#D4A12A] ring-offset-2 ring-offset-black opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
