import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, Sparkles, User, GraduationCap, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    studyHours: '',
    subjects: '',
    challenges: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the early access submission function
      const { error } = await supabase.functions.invoke('submit-early-access', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Welcome to NeuroSnap! 🧠✨",
        description: "Thank you for joining! We'll send you early access details and personalized study tips soon.",
        className: "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none",
      });
      setFormData({ name: '', email: '', school: '', studyHours: '', subjects: '', challenges: '', goals: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Early Access</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Boost Your Learning?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of students who are already experiencing smarter, more effective study sessions.
          </p>
        </div>

        <div className="bg-card backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border shadow-xl animate-fade-in delay-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-card-foreground font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-purple-500 rounded-xl"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-purple-500 rounded-xl"
                  placeholder="john@university.edu"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="school" className="text-card-foreground font-medium flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  School/University
                </Label>
                <Input
                  id="school"
                  name="school"
                  type="text"
                  value={formData.school}
                  onChange={handleChange}
                  className="bg-background border-border focus:border-purple-500 rounded-xl"
                  placeholder="Harvard University"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studyHours" className="text-card-foreground font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Study Hours per Day
                </Label>
                <select
                  id="studyHours"
                  name="studyHours"
                  value={formData.studyHours}
                  onChange={handleChange}
                  className="w-full bg-background border border-border focus:border-purple-500 rounded-xl px-3 py-2 text-sm text-foreground"
                >
                  <option value="">Select hours</option>
                  <option value="1-2">1-2 hours</option>
                  <option value="3-4">3-4 hours</option>
                  <option value="5-6">5-6 hours</option>
                  <option value="7+">7+ hours</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subjects" className="text-card-foreground font-medium">
                Main Subjects/Fields of Study
              </Label>
              <Input
                id="subjects"
                name="subjects"
                type="text"
                value={formData.subjects}
                onChange={handleChange}
                className="bg-background border-border focus:border-purple-500 rounded-xl"
                placeholder="e.g., Computer Science, Medicine, Business, Engineering"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="challenges" className="text-card-foreground font-medium">
                What study challenges do you face?
              </Label>
              <Textarea
                id="challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                className="bg-background border-border focus:border-purple-500 rounded-xl min-h-[100px] resize-none"
                placeholder="e.g., Difficulty concentrating, information retention, time management, exam anxiety..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals" className="text-card-foreground font-medium">
                What are your learning goals?
              </Label>
              <Textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                className="bg-background border-border focus:border-purple-500 rounded-xl min-h-[100px] resize-none"
                placeholder="e.g., Improve grades, faster learning, better retention, exam preparation..."
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Join NeuroSnap Early Access
                </div>
              )}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              By submitting this form, you agree to receive updates about NeuroSnap. 
              We respect your privacy and will help optimize your learning journey.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
