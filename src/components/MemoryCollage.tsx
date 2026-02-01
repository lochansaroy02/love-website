import afsana2 from "@/assets/afsana-2.png";
import afsana4 from "@/assets/afsana-4.jpg";
import afsana7 from "@/assets/afsana-7.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MemoryCollage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const images = [afsana7, afsana2, afsana4];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Collage Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotate: idx === 1 ? 0 : idx === 0 ? -3 : 3 }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                rotate: idx === 1 ? 0 : idx === 0 ? -3 : 3
              } : {}}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-romantic animate-gentle-float"
              style={{
                animationDelay: `${idx * 0.5}s`,
                animationDuration: `${4 + idx}s`
              }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover object-center image-memory"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/90 italic leading-relaxed">
            "Main tumhari tasveeron ko nahi,
            <br />
            tumhare ahsaas ko yaad rakhta hoon ❤️"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
