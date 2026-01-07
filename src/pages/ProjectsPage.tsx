import { FolderGit2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimationWrapper className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FolderGit2 className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">My Work</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">A collection of my recent projects and contributions</p>
          </ScrollAnimationWrapper>
          <div className="text-center text-muted-foreground">
            <p>Projects coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
