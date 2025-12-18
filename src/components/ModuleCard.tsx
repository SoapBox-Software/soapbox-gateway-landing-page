import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  url?: string;
  icon: LucideIcon;
  comingSoon?: boolean;
  colorIndex?: number;
}

const iconColors = [
  "text-blue-500",
  "text-emerald-500",
  "text-purple-500",
  "text-orange-500",
  "text-pink-500",
  "text-cyan-500",
  "text-amber-500",
  "text-indigo-500",
  "text-rose-500",
  "text-teal-500",
];

const iconBgColors = [
  "bg-blue-100",
  "bg-emerald-100",
  "bg-purple-100",
  "bg-orange-100",
  "bg-pink-100",
  "bg-cyan-100",
  "bg-amber-100",
  "bg-indigo-100",
  "bg-rose-100",
  "bg-teal-100",
];

const ModuleCard = ({ title, description, url, icon: Icon, comingSoon, colorIndex = 0 }: ModuleCardProps) => {
  const isDisabled = !url || comingSoon;
  const colorIdx = colorIndex % iconColors.length;

  const handleClick = () => {
    if (url && !comingSoon) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-xl border border-[hsl(var(--border))] p-5 transition-all flex flex-col h-full ${
        isDisabled
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer hover-lift hover:shadow-lg hover:glow-effect"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2.5 rounded-lg ${iconBgColors[colorIdx]}`}>
          <Icon className={`h-5 w-5 ${iconColors[colorIdx]}`} />
        </div>
        <h3 className="text-base font-semibold text-[hsl(var(--pine-dark))]">
          {title}
        </h3>
      </div>

      <p className="text-[hsl(var(--muted-foreground))] text-sm flex-1">
        {description}
      </p>

      {comingSoon && (
        <span className="mt-3 px-3 py-1 bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-xs font-semibold rounded-full w-fit">
          Coming Soon
        </span>
      )}
    </div>
  );
};

export default ModuleCard;
