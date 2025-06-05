
import { Brain, Clock, BarChart3, Zap, Users, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Prioritization",
      description: "Our advanced AI learns your work patterns and automatically prioritizes tasks based on deadlines, importance, and your productivity rhythms."
    },
    {
      icon: Clock,
      title: "Smart Time Blocking",
      description: "Automatically schedule focused work sessions and breaks based on your calendar and energy levels throughout the day."
    },
    {
      icon: BarChart3,
      title: "Productivity Analytics",
      description: "Gain insights into your productivity patterns with detailed analytics and personalized recommendations for improvement."
    },
    {
      icon: Zap,
      title: "Instant Capture",
      description: "Quickly capture tasks, ideas, and notes with our lightning-fast input system that works across all your devices."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with team members, share projects, and track collective progress in real-time."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and privacy controls ensure your sensitive data and projects remain secure."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Productivity Redefined
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience the future of task management with AI-driven features designed to maximize your productivity and minimize cognitive overhead.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 hover:border-blue-300/50 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
