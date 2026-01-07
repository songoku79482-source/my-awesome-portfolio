/**
 * SKILL ICONS - Placeholder component for skill icons
 * 
 * To add actual skill icons:
 * 1. Add images to src/assets/skills/ folder
 * 2. Import and add to skillIcons object
 */

export const skillIcons: Record<string, string> = {};

const PlaceholderIcon = ({ name }: { name: string }) => (
  <div className="w-full h-full flex items-center justify-center text-primary font-bold text-sm">
    {name.slice(0, 2).toUpperCase()}
  </div>
);

export const SkillIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const iconSrc = skillIcons[name];

  if (iconSrc) {
    return <img src={iconSrc} alt={`${name} icon`} className={`object-contain ${className}`} />;
  }

  return <PlaceholderIcon name={name} />;
};

export default SkillIcon;
