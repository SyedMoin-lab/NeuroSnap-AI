
import { Footer } from '@/components/ui/footer';
import { Blocks, CodeXml, CreditCard, Handshake, Scale, Webhook, BookOpen, Brain, Target } from 'lucide-react';

const NewFooter = () => {
  return (
    <Footer
      className="bg-background text-foreground border-t"
      brand={{
        name: "NeuroSnap",
        description: "AI-powered study booster that adapts to your learning patterns and accelerates knowledge retention.",
      }}
      socialLinks={[
        {
          name: "Twitter",
          href: "https://twitter.com/neurosnap",
        },
        {
          name: "Discord",
          href: "https://discord.gg/neurosnap",
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/company/neurosnap",
        },
      ]}
      columns={[
        {
          title: "Product",
          links: [
            {
              name: "Features",
              Icon: Blocks,
              href: "#features",
            },
            {
              name: "Pricing",
              Icon: CreditCard,
              href: "#pricing",
            },
            {
              name: "API Access",
              Icon: Webhook,
              href: "#api",
            },
            {
              name: "Documentation",
              Icon: CodeXml,
              href: "/docs",
            },
          ],
        },
        {
          title: "Study Tools",
          links: [
            {
              name: "AI Flashcards",
              Icon: BookOpen,
              href: "/flashcards",
            },
            {
              name: "Smart Notes",
              Icon: Brain,
              href: "/notes",
            },
            {
              name: "Progress Tracking",
              Icon: Target,
              href: "/progress",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Privacy Policy",
              Icon: Scale,
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
      copyright="NeuroSnap Inc. © 2024 - Empowering minds through AI"
    />
  );
};

export default NewFooter;
