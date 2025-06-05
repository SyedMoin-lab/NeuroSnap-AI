import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NeuroSnap - AI-Powered Study Booster</title>
        <meta name="description" content="Revolutionize your learning with AI that adapts to your brain patterns, optimizes your study sessions, and accelerates knowledge retention." />
        <meta name="author" content="NeuroSnap Team" />
        <meta property="og:title" content="NeuroSnap - AI-Powered Study Booster" />
        <meta property="og:description" content="Revolutionize your learning with AI that adapts to your brain patterns, optimizes your study sessions, and accelerates knowledge retention." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://neuro-snap-ai.vercel.app/work.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@neurosnap" />
        <meta name="twitter:image" content="https://neuro-snap-ai.vercel.app/work.png" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        {/* Early Access anchor for button scroll */}
        <div id="early-access"></div>
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
          columns={[
            {
              title: "Product",
              links: [
                {
                  name: "Features",
                  Icon: Brain,
                  href: "#features",
                },
                {
                  name: "Study Tools",
                  Icon: BookOpen,
                  href: "#features",
                },
                {
                  name: "Community",
                  Icon: Users,
                  href: "#contact",
                },
                {
                  name: "Early Access",
                  Icon: Mail,
                  href: "#contact",
                },
              ],
            },
            {
              title: "Support",
              links: [
                {
                  name: "Help Center",
                  Icon: MessageCircle,
                  href: "/support",
                },
                {
                  name: "Documentation",
                  Icon: FileText,
                  href: "/docs",
                },
                {
                  name: "Contact Us",
                  Icon: Mail,
                  href: "#contact",
                },
              ],
            },
            {
              title: "Legal",
              links: [
                {
                  name: "Privacy Policy",
                  Icon: Shield,
                  href: "/privacy",
                },
                {
                  name: "Terms of Service",
                  Icon: Handshake,
                  href: "/terms",
                },
              ],
            },
          ]}
          copyright="© 2024 NeuroSnap. All rights reserved. Revolutionizing education through AI."
        />
        <Toaster />
      </div>
    </>
  );
};

export default Index;
