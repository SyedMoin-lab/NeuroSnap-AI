import { HeroSection } from '@/components/ui/hero-section-dark';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <HeroSection
      title="AI-Powered Study Booster"
      subtitle={{
        regular: "Revolutionize your learning with ",
        gradient: "NeuroSnap AI technology",
      }}
      description="Transform your study sessions with AI that adapts to your brain patterns, optimizes your learning schedule, and accelerates knowledge retention."
      ctaText=""
      ctaHref=""
      bottomImage={{
        light: "work.png",
        dark: "work.png",
      }}
    >
      {/* Feature Buttons Section - after description */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <Button 
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
          onClick={() => window.location.href = '/signup'}
        >
          Start Learning
        </Button>
        <Button 
          variant="outline"
          className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Early Access
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </HeroSection>
  );
};

export default Hero;