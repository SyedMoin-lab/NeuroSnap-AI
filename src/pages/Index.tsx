
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import { Footer } from "@/components/ui/footer";
import { 
  Brain, 
  BookOpen, 
  Users, 
  Mail, 
  MessageCircle, 
  FileText,
  Shield,
  Handshake,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";
import { HeroSection } from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Features />
      <ContactForm />
      <Footer
        className="mt-20"
        brand={{
          name: "NeuroSnap",
          description: "Transform your learning with AI-powered study sessions that adapt to your brain patterns and optimize your educational journey.",
        }}
        socialLinks={[
          {
            name: "Twitter",
            href: "https://twitter.com/neurosnap",
          },
          {
            name: "LinkedIn", 
            href: "https://linkedin.com/company/neurosnap",
          },
          {
            name: "GitHub",
            href: "https://github.com/neurosnap",
          },
        ]}
        copyright="© 2024 NeuroSnap. All rights reserved. Revolutionizing education through AI."
      />
      <Toaster />
    </div>
  );
};

export default Index;
