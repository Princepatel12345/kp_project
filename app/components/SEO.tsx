import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
}

export function SEO({
  title,
  description,
  keywords,
  image = "https://www.ashitech.com/wp-content/uploads/2020/06/slider-1.jpg",
  url,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Kaushik Road Technologies`;

    // Helper to set or create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Standard meta
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:image", image, true);
    if (url) setMeta("og:url", url, true);

    // Twitter
    setMeta("twitter:title", title, true);
    setMeta("twitter:description", description, true);
    setMeta("twitter:image", image, true);

    // Cleanup: restore default title on unmount
    return () => {
      document.title = "Kaushik Road Technologies - Road Construction Machinery Manufacturer";
    };
  }, [title, description, keywords, image, url, type]);

  return null;
}

