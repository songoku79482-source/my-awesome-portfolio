import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative mb-12">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-32 h-32 rounded-full bg-primary/20 blur-xl"
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative w-32 h-32 rounded-full border-2 border-muted-foreground/20"
        >
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
               animate={{
                 scale: [1, 1.05, 1],
                 boxShadow: [
                   '0 0 30px hsl(var(--primary) / 0.7), 0 0 60px hsl(var(--primary) / 0.4), 0 0 90px hsl(var(--primary) / 0.2), inset 0 0 30px hsl(var(--primary) / 0.15)',
                 ],
               }}
               transition={{
                 duration: 2.5,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
              className="absolute inset-0 w-32 h-32 rounded-full bg-transparent"
            />
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Code2 className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground text-sm mb-4 tracking-widest uppercase"
        >
          Loading Portfolio
        </motion.p>

        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-muted-foreground mt-2"
        >
          {progress}%
        </motion.p>
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default PreLoader;
