import afsana6 from "@/assets/afsana-6.jpg";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Heart } from "lucide-react";
import { useRef, useState } from "react";

const heartMessages = [
  "Mujhe tumhari soch pasand hai",
  "Mujhe tumhari simplicity se pyaar hai",
  "Mujhe tumhari khamoshi samajh aati hai",
];

export const HeartReveal = () => {
  const [clickedHearts, setClickedHearts] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const handleHeartClick = (index: number) => {
    if (!clickedHearts.includes(index)) {
      const newClicked = [...clickedHearts, index];
      setClickedHearts(newClicked);

      if (newClicked.length === 3) {
        setTimeout(() => setRevealed(true), 800);
      }
    }
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20 gradient-night">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="hearts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-16">
                Har dil mein ek raaz hai... 💫
              </h2>

              <div className="flex justify-center gap-8 md:gap-16 mb-12">
                {[0, 1, 2].map((idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleHeartClick(idx)}
                    className="relative group"
                    disabled={clickedHearts.includes(idx)}
                  >
                    <Heart
                      size={60}
                      className={`transition-all duration-500 ${clickedHearts.includes(idx)
                        ? "fill-primary text-primary"
                        : "text-primary/50 group-hover:text-primary"
                        } ${clickedHearts.includes(idx) ? "animate-heart-beat" : ""}`}
                    />

                    {/* Revealed message */}
                    <AnimatePresence>
                      {clickedHearts.includes(idx) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48"
                        >
                          <p className="font-elegant text-sm md:text-base text-foreground/80">
                            {heartMessages[idx]}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>

              <p className="text-muted-foreground font-elegant text-lg mt-20">
                Har dil pe click karo ✨
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Revealed Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-3xl shadow-glow"
              >
                <img
                  src={afsana6}
                  alt=""
                  className="w-full h-full object-cover object-center image-memory"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

              {/* Final Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground italic leading-relaxed"
              >
                "I love You so much ❤️"
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
