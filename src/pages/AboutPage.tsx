import { User, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import ProfileImage from "@/components/ProfileImage";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Get to Know Me</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">A passionate developer who loves creating beautiful web experiences</p>
        </ScrollAnimationWrapper>
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <ProfileImage />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl font-bold mb-4">Hello! I'm Atul Patel</h2>
              <p className="text-muted-foreground leading-relaxed">
                I am a 2nd-year Electronics and VLSI student at NIT Surat, specializing in bridging software with hardware. Proficient in Python, C++, Java, and Web/App development.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
