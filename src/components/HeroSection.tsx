import afsana6 from "@/assets/afsana-6.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const HeroSection = ({ onContinue }: { onContinue: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const fullText = "Tumhari tasveer dekh ke sirf chehra nahi, ehsaas yaad aata hai 🤍";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={afsana6}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.7) saturate(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="absolute inset-0 image-vignette" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 animate-glow-pulse"
          style={{
            opacity: glowIntensity,
            textShadow: "0 0 40px hsl(350 60% 50% / 0.5)"
          }}
        >
          Afsana
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="min-h-[80px] mb-12"
        >
          <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/90 italic leading-relaxed">
            "{displayedText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            "
          </p>
        </motion.div>

        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={onContinue}
            className="px-8 py-4 bg-secondary/80 hover:bg-secondary text-foreground font-elegant text-lg rounded-full border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-romantic"
          >
            Dil ki baat aage padho 🤍
          </motion.button>
        )}
      </div>
    </section>
  );
};
