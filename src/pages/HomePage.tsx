import { motion } from "framer-motion";
import { MapPin, Briefcase, Mail, Github, Linkedin, Instagram, Download } from "lucide-react";
import { useState } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import ResumePreviewDialog from "@/components/ResumePreviewDialog";
import ProfileImage from "@/components/ProfileImage";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const roles = ["AI Enthusiast", "Machine Learning Beginner", "Web & App Developer", "Developer"];
const taglines = ["Full Stack Developer", "Tech Explorer", "Problem Solver", "Code Enthusiast"];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/atul-patel-673b46318/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:atulrpatel007@gmail.com", label: "Email" },
  { icon: Instagram, href: "https://www.instagram.com/atulrpatel007/", label: "Instagram" },
];

const workLinks = [
  { icon: Github, href: "https://github.com/atulrpatel007", label: "GitHub" },
];

const HomePage = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const typedText = useTypingAnimation({ texts: taglines, typingSpeed: 60, separator: " | " });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResumePreviewDialog open={resumeOpen} onOpenChange={setResumeOpen} />
      <Navbar />
      <BackgroundEffects />
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-20">
              <ScrollAnimationWrapper direction="left" delay={0.2}>
                <motion.div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full p-2 animate-glow">
                    <motion.div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden" whileHover={{ scale: 1.05 }}>
                      <ProfileImage />
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>

              <div className="flex-1 text-center lg:text-left">
                <ScrollAnimationWrapper delay={0.3}>
                  <motion.h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4">
                    Hi, I'm <span className="gradient-text animate-glow-text">Atul Patel</span>
                  </motion.h1>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.4}>
                  <motion.p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 h-7 sm:h-8">
                    <span>{typedText}</span>
                    <span className="animate-pulse text-primary">|</span>
                  </motion.p>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.5}>
                  <motion.div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-center lg:justify-start gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {roles.map((role, index) => (
                      <motion.span key={role} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + index * 0.1 }} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-card/50 text-xs sm:text-sm text-muted-foreground">
                        {role}
                      </motion.span>
                    ))}
                  </motion.div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.6}>
                  <motion.div className="flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
                    {[{ icon: MapPin, label: "Location", value: "Varanasi, India" }, { icon: Briefcase, label: "Expertise", value: "Web Dev, AI/ML" }, { icon: Mail, label: "Contact", value: "atulrpatel007@gmail.com" }].map((item, index) => (
                      <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="glass-card rounded-xl px-4 py-3 sm:px-6 sm:py-4 flex items-center gap-2 sm:gap-3">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-xs sm:text-sm font-medium truncate">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper delay={0.7}>
                  <motion.div className="flex justify-center lg:justify-start">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 sm:px-8 gap-2" onClick={() => setResumeOpen(true)}>
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                        Download Resume
                      </Button>
                    </motion.div>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </motion.div>

            <ScrollAnimationWrapper delay={0.8}>
              <motion.div className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Connect with me</h3>
                  <div className="flex gap-3 sm:gap-4">
                    {socialLinks.map((social) => (
                      <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group">
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
                      </motion.a>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">See what I'm doing</h3>
                  <div className="flex gap-3 sm:gap-4">
                    {workLinks.map((link) => (
                      <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -5 }} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all group">
                        <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
