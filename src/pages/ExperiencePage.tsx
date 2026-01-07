import { Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 px-6">
        <ScrollAnimationWrapper className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Career Journey</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Experience</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">My professional career and achievements</p>
        </ScrollAnimationWrapper>
        <div className="text-center text-muted-foreground">
          <p>Experience section coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
