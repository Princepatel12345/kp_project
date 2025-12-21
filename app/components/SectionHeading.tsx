import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl tracking-wide ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-gradient-to-r from-[#db8c0a] to-[#408986] mt-4 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-6 text-lg max-w-2xl ${
            light ? "text-gray-300" : "text-gray-400"
          } ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

