import { useState, useEffect } from "react";
import { User } from "lucide-react";

interface ProfileImageProps {
  className?: string;
}

const ProfileImage = ({ className = "w-full h-full" }: ProfileImageProps) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setIsLightMode(isLight);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isLight = document.documentElement.classList.contains("light");
          setIsLightMode(isLight);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Since we don't have the profile images, show a placeholder
  return (
    <div className={`${className} flex items-center justify-center bg-primary/10 rounded-full`}>
      <User className="w-1/2 h-1/2 text-primary" />
    </div>
  );
};

export default ProfileImage;
