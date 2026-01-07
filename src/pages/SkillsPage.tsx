import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 px-6">
        <ScrollAnimationWrapper className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">My Skills</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <p>Technical expertise blended with creativity</p>
          </div>
        </ScrollAnimationWrapper>
        <div className="text-center text-muted-foreground">
          <p>Skills section coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
