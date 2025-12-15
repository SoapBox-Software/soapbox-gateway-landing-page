import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  url?: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

const ModuleCard = ({ title, description, url, icon: Icon, comingSoon }: ModuleCardProps) => {
  const handleAccess = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[hsl(var(--border))] p-6 hover-lift hover:shadow-lg hover:glow-effect transition-all flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl gradient-green">
          <Icon className="h-6 w-6 text-white" />
        </div>
        {comingSoon && (
          <span className="px-3 py-1 bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] text-xs font-semibold rounded-full">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-[hsl(var(--pine-dark))] mb-2">
        {title}
      </h3>
      <p className="text-[hsl(var(--muted-foreground))] text-sm mb-6 flex-grow">
        {description}
      </p>

      <Button
        onClick={handleAccess}
        disabled={comingSoon}
        className={`w-full font-semibold rounded-lg ${
          comingSoon
            ? "bg-muted text-muted-foreground cursor-not-allowed"
            : "gradient-green text-white hover:gradient-green-hover"
        }`}
      >
        {comingSoon ? (
          <>
            <Lock className="mr-2 h-4 w-4" />
            Coming Soon
          </>
        ) : (
          <>
            ACCESS NOW
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
};

export default ModuleCard;
