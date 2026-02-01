import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import afsana3 from "@/assets/afsana-3.jpg";

const shayaris = [
  "Main tumse ishq ka daawa nahi karta,\nBas itna maanta hoon\nke tum bohot khaas ho 🌙",
  "Afsana,\ntumhari izzat meri mohabbat ka pehla rule hai 🤍",
  "Tum meri aadat nahi,\nmeri dua ban chuki ho ✨",
];

export const ShayariSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={afsana3}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.3) saturate(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="space-y-16">
          {shayaris.map((shayari, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: idx * 0.4 }}
            >
              <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed whitespace-pre-line">
                "{shayari}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
