
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
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
      <Toaster />
    </div>
  );
};

export default Index;
