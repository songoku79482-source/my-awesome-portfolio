import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const floatingSkills = [
  { name: "React", x: 5, y: 20, size: "lg" },
  { name: "HTML", x: 35, y: 30, size: "md" },
  { name: "CSS", x: 20, y: 15, size: "lg" },
  { name: "JavaScript", x: 45, y: 45, size: "md" },
  { name: "TypeScript", x: 70, y: 35, size: "md" },
  { name: "Node.js", x: 8, y: 55, size: "md" },
  { name: "Python", x: 60, y: 50, size: "lg" },
  { name: "MongoDB", x: 70, y: 75, size: "md" },
  { name: "Git", x: 26, y: 50, size: "sm" },
  { name: "PyTorch", x: 80, y: 15, size: "lg" },
  { name: "C++", x: 55, y: 20, size: "md" },
  { name: "MySQL", x: 38, y: 70, size: "md" },
  { name: "C", x: 25, y: 75, size: "sm" },
  { name: "Java", x: 43, y: 10, size: "md" },
  { name: "Arduino", x: 65, y: 10, size: "md" },
  { name: "PostgreSQL", x: 80, y: 60, size: "md" },
  { name: "MatLab", x: 52, y: 70, size: "sm" },
  { name: "LTSpice", x: 17, y: 40, size: "sm" },
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "TailwindCSS", "Node.js","Figma"],
  },
  {
    title: "Microcontrollers & Tools",
    skills: ["STM32F103C8T6","STM32CubeMX","Keil µVision","Arduino IDE","ST-Link","OpenOCD"],
  },
  {
    title: "PCB Design & Electronics",
    skills: ["KiCad","Schematic Design","Basic PCB Layout","Power Regulation","Clock & Reset Circuits","Digital Electronics"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning", "System Design"],
  },
  {
    title: "Software & System Design",
    skills: ["Problem Solving","Algorithmic Thinking","Constraint-Based Optimization","System Architecture","API Design (Conceptual)"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Linux", "VS Code","JetBrains IDE's","Antigravity & Cursor","Vercel & Netlify"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Express.js", "FastAPI", "PyTorch","Next.js", "Framer Motion","Flask","NumPy","Pandas"],
  },
  {
    title: "Embedded Systems & Hardware",
    skills: ["Arduino","STM32 (ARM Cortex-M)","Embedded C","GPIO","Timers & PWM","UART, SPI, I2C","IR Sensors","DC Motors","Motor Drivers (L293D)"],
  },
  {
    title: "Soft Skills",
    skills: ["Teamwork","Leadership","Technical Documentation","Rapid Prototyping","Problem Analysis","Problem Solving","Creativity", "Adaptability", "Communication"],
  },
  {
    title: "Engineering Computing & Simulation",
    skills: ["MATLAB","Scilab","LTSpice","Numerical Computing","Signal & System Analysis (Basics)","Control Systems Simulation (Basics)"],
  },
];

const CustomCursor = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]);

  if (!isInside) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full border-2 border-primary/60"
        style={{
          width: 40,
          height: 40,
          left: position.x,
          top: position.y,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute rounded-full bg-primary"
        style={{
          width: 8,
          height: 8,
          left: position.x,
          top: position.y,
          x: "-50%",
          y: "-50%",
          boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)",
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

const MouseParticles = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newParticles: Particle[] = [];
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: particleIdRef.current++,
          x,
          y,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.5 + 0.3,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2,
        });
      }

      setParticles(prev => [...prev.slice(-50), ...newParticles]);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocityX,
            y: p.y + p.velocityY,
            opacity: p.opacity - 0.02,
            size: p.size * 0.98,
          }))
          .filter(p => p.opacity > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary))`,
          }}
        />
      ))}
    </div>
  );
};

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={`h-full transition-all duration-300 ${isHovered ? "scale-[1.02]" : ""}`}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const FloatingSkillIcon = ({
  skill,
  index
}: {
  skill: typeof floatingSkills[0];
  index: number
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
    md: "w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24",
    lg: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.08 },
        scale: { duration: 0.5, delay: index * 0.08, type: "spring" },
        y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }
      }}
      whileHover={{ scale: 1.1, zIndex: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="absolute cursor-pointer flex flex-col items-center gap-1 sm:gap-2"
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <motion.div
        animate={{
          boxShadow: isHovered
            ? '0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.4), 0 0 90px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.15)'
            : '0 0 20px hsl(var(--primary) / 0.15), inset 0 0 20px hsl(var(--primary) / 0.05)',
          borderColor: isHovered
            ? 'hsl(var(--primary) / 0.8)'
            : 'hsl(var(--primary) / 0.4)',
        }}
        transition={{ duration: 0.3 }}
        className={`${sizeClasses[skill.size as keyof typeof sizeClasses]} rounded-full flex items-center justify-center`}
        style={{
          background: 'linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%)',
          border: '2px solid',
        }}
      >
        <span className="text-sm font-bold text-primary">{skill.name.slice(0, 2).toUpperCase()}</span>
      </motion.div>
      <motion.span
        animate={{
          color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.8)',
          textShadow: isHovered ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
        }}
        className="text-[10px] sm:text-xs font-medium whitespace-nowrap hidden sm:block"
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

const SkillsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackgroundEffects />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
              My Skills
            </h1>
            <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-sm sm:text-base">Technical expertise blended with creativity — explore my core competencies below.</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.2} direction="scale">
            <motion.div
              ref={containerRef}
              className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] rounded-2xl sm:rounded-3xl bg-card/30 backdrop-blur-sm border border-border/50 mb-12 sm:mb-16 overflow-hidden cursor-none"
              style={{ perspective: "1000px" }}
            >
              <CustomCursor containerRef={containerRef} />
              <MouseParticles containerRef={containerRef} />

              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                  backgroundSize: "40px 40px"
                }} />
              </div>

              {floatingSkills.map((skill, index) => (
                <FloatingSkillIcon key={skill.name} skill={skill} index={index} />
              ))}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl"
              />
            </motion.div>
          </ScrollAnimationWrapper>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            style={{ perspective: "1000px" }}
          >
            {skillCategories.map((category, index) => (
              <ScrollAnimationWrapper
                key={category.title}
                delay={index * 0.1}
                direction="up"
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                    <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper delay={0.2} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">Certifications</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              View all my technical and professional certifications
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/certificates">
                <Award className="w-4 h-4 mr-2" />
                View All Certificates
              </Link>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
