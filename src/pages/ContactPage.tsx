import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Have a project in mind? Feel free to reach out.</p>
        </ScrollAnimationWrapper>
        <div className="max-w-lg mx-auto text-center">
          <a href="mailto:atulrpatel007@gmail.com" className="text-primary hover:underline text-lg">atulrpatel007@gmail.com</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
