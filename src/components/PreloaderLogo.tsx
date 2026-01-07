import { Code2 } from "lucide-react";

interface PreloaderLogoProps {
  className?: string;
}

const PreloaderLogo = ({ className = "w-20 h-20" }: PreloaderLogoProps) => {
  // Placeholder - you can add your logo to src/assets/ folder
  // and import it like: import preloaderLogo from "@/assets/preloader-logo.png";
  return (
    <div className={`${className} flex items-center justify-center`}>
      <Code2 className="w-full h-full text-primary" />
    </div>
  );
};

export default PreloaderLogo;
