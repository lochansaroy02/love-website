import afsana5 from "@/assets/afsana-5.jpg";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const questions = [
  {
    question: "Ek personal sawal poochun?",
    button: "Haan ❤️",
  },
  {
    question: "Kya tumhe lagta hai\nke kuch log bina koshish ke hi\ndil ke kareeb aa jaate hain?",
    button: "Haan 💫",
  },
  {
    question: "Kya tum bhi maanti ho\nke izzat ke saath ki gayi mohabbat\nsabse khoobsurat hoti hai?",
    button: "Bilkul 🌸",
  },
];

export const InteractiveQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const handleAnswer = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={afsana5}
          alt=""
          className="w-full h-full object-cover object-center blur-md scale-105"
          style={{ filter: "brightness(0.4) saturate(0.8) blur(8px)" }}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {!completed ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-elegant text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed whitespace-pre-line mb-12">
                {questions[currentQuestion].question}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAnswer}
                className="px-10 py-4 bg-primary/20 hover:bg-primary/30 text-foreground font-elegant text-xl rounded-full border border-primary/40 hover:border-primary/70 transition-all duration-300"
              >
                {questions[currentQuestion].button}
              </motion.button>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-10">
                {questions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx <= currentQuestion ? "bg-primary" : "bg-primary/30"
                      }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-elegant text-2xl md:text-3xl lg:text-4xl text-foreground italic">
                "Bas… meri feelings bhi kuch aisi hi hain ❤️"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
