import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export const FinalQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-wine/30 via-background to-romantic-night" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsl(350 50% 25% / 0.4), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-elegant text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-12">
                Afsana,
                <br />
                <span className="text-primary">agar tum kabhi chaaho</span>
                <br />
                ke hum aur baat karein…
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(350 60% 50% / 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setAnswered(true)}
                className="px-10 py-5 bg-primary/20 hover:bg-primary/30 text-foreground font-display text-lg md:text-xl rounded-full border border-primary/50 hover:border-primary transition-all duration-500"
              >
                Kya hum ek nayi shuruaat kar sakte hain? 🤍
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl"
              >
                💕
              </motion.div>
              
              <p className="font-elegant text-2xl md:text-3xl text-foreground italic">
                "Shayad yeh bas shuruaat hai..."
              </p>
              
              <p className="text-muted-foreground font-elegant text-lg">
                Tumhara intezaar rahega 🌙
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
