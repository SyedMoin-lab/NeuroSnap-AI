
import { HeroSection } from '@/components/ui/hero-section-dark';

const Hero = () => {
  return (
    <HeroSection
      title="AI-Powered Study Booster"
      subtitle={{
        regular: "Revolutionize your learning with ",
        gradient: "NeuroSnap AI technology",
      }}
      description="Transform your study sessions with AI that adapts to your brain patterns, optimizes your learning schedule, and accelerates knowledge retention."
      ctaText="Start Learning"
      ctaHref="#features"
      bottomImage={{
        light: "work.png",
        dark: "work.png",
      }}
    />
  );
};

export default Hero;
