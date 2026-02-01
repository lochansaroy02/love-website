import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FallingPetals } from "./FallingPetals";
import { TwinklingStars } from "./TwinklingStars";

export const EndingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden gradient-night">
      <TwinklingStars />
      <FallingPetals />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
        >
          Shukriya Afsana ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-elegant text-xl md:text-2xl text-muted-foreground mb-16"
        >
          for everything....
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-6"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />

          <p className="font-elegant text-lg md:text-xl lg:text-2xl text-foreground/90 italic leading-relaxed">
            only You are my Favorite Person❤️✨"
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20"
        >
          <p className="text-muted-foreground/60 font-elegant text-sm">
            Made with ❤️ for you
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
