import { useRef } from "react";
import { TimeBasedGreeting } from "@/components/TimeBasedGreeting";
import { HeroSection } from "@/components/HeroSection";
import { ScrollRevealImage } from "@/components/ScrollRevealImage";
import { InteractiveQuestions } from "@/components/InteractiveQuestions";
import { MemoryCollage } from "@/components/MemoryCollage";
import { ShayariSection } from "@/components/ShayariSection";
import { HeartReveal } from "@/components/HeartReveal";
import { FinalQuestion } from "@/components/FinalQuestion";
import { EndingSection } from "@/components/EndingSection";

// Import images
import afsana1 from "@/assets/afsana-1.jpg";
import afsana4 from "@/assets/afsana-4.jpg";
import afsana7 from "@/assets/afsana-7.jpg";

const shayariData = [
  {
    image: afsana7,
    shayari: "Tum khamosh ho,\npar tumhari presence bohot bolti hai 🌙",
  },
  {
    image: afsana1,
    shayari: "Tumhari simplicity hi tumhari sabse badi khoobsurti hai 🤍",
  },
  {
    image: afsana4,
    shayari: "Afsana,\ntumhe dekh ke yeh yakeen hota hai\nke sukoon bhi ek shakal hoti hai ✨",
  },
];

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Section 1: Time-Based Greeting */}
      <TimeBasedGreeting />

      {/* Section 2: Hero with Name */}
      <HeroSection onContinue={scrollToContent} />

      {/* Section 3: Scroll-Reveal Images with Shayari */}
      <div ref={contentRef}>
        {shayariData.map((item, index) => (
          <ScrollRevealImage
            key={index}
            imageSrc={item.image}
            shayari={item.shayari}
            index={index}
          />
        ))}
      </div>

      {/* Section 4: Interactive Questions */}
      <InteractiveQuestions />

      {/* Section 5: Memory Collage */}
      <MemoryCollage />

      {/* Section 6: Shayari Section */}
      <ShayariSection />

      {/* Section 7: Heart Reveal */}
      <HeartReveal />

      {/* Section 8: Final Question */}
      <FinalQuestion />

      {/* Section 9: Ending */}
      <EndingSection />
    </main>
  );
};

export default Index;
