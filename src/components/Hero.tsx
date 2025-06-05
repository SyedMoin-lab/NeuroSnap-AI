import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto px-4 py-28 text-center">
      <h1 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-geist mx-auto px-6 py-3 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit mb-2">
        AI-Powered Study Booster
      </h1>
      <div className="space-y-3">
        <div className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white text-center whitespace-nowrap overflow-hidden text-ellipsis">
          Revolutionize your learning with
        </div>
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 text-center">
          NeuroSnap AI technology
        </div>
      </div>
      <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-2xl md:text-3xl leading-relaxed mt-6 mb-4">
        Transform your study sessions with AI that adapts to your brain patterns, optimizes your learning schedule, and accelerates knowledge retention.
      </p>
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
      <div className="mt-16 mx-10 relative z-10">
        <img
          src="work.png"
          className="w-full max-w-3xl mx-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-800"
          alt="Dashboard preview"
        />
      </div>
    </section>
  );
};

export default Hero;