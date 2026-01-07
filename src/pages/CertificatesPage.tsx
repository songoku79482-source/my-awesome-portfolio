import { Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const CertificatesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16 px-6">
        <ScrollAnimationWrapper>
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-6 h-6 text-primary" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">Certificates</h1>
          </div>
          <p className="text-muted-foreground text-lg mb-8">Explore my certifications</p>
        </ScrollAnimationWrapper>
        <div className="text-center text-muted-foreground">
          <p>Certificates section coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
