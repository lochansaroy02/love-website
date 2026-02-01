import afsana1 from "@/assets/afsana-1.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingParticles } from "./FloatingParticles";

export const TimeBasedGreeting = () => {
  const [greeting, setGreeting] = useState({ text: "", emoji: "" });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting({ text: "Good Morning, Sana", emoji: "🌸" });
    } else if (hour >= 12 && hour < 18) {
      setGreeting({ text: "Good Afternoon, Sana", emoji: "☀️" });
    } else if (hour >= 18 && hour < 21) {
      setGreeting({ text: "Good Evening, Sana", emoji: "🌙" });
    } else {
      setGreeting({ text: "Good Evening, Sana", emoji: "🌙" });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src={afsana1}
          alt=""
          className="w-full h-full object-cover object-top scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 image-vignette" />
      </div>

      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
            {greeting.text} <span className="inline-block animate-gentle-float">{greeting.emoji}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="font-elegant text-xl md:text-2xl text-muted-foreground italic mt-8 max-w-2xl mx-auto"
        >
          "Yeh chhoti si duniya sirf tumhare liye banayi gayi hai"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent mx-auto" />
          <p className="text-primary/60 text-sm font-elegant mt-4 animate-soft-pulse">
            Neeche scroll karo
          </p>
        </motion.div>
      </div>
    </section>
  );
};
