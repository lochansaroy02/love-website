import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealImageProps {
  imageSrc: string;
  shayari: string;
  index: number;
}

export const ScrollRevealImage = ({ imageSrc, shayari, index }: ScrollRevealImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
          className="relative"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-3xl shadow-romantic">
            <img
              src={imageSrc}
              alt=""
              className="w-full h-full object-cover object-center image-memory"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Shayari */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/90 italic leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
              "{shayari}"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
