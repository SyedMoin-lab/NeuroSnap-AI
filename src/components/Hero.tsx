
import { HeroSection } from '@/components/ui/hero-section-dark';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
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
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
        }}
      />
      
      {/* Custom buttons overlay */}
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      </div>
    </div>
  );
};

export default Hero;
