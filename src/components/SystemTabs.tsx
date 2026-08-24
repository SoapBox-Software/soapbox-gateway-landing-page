import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type SystemType = 
  | "EHS" 
  | "eQMS" 
  | "ESG"
  | "Sustainability"
  | "GRC" 
  | "BCM" 
  | "OHSM" 
  | "EMS-ENV" 
  | "EMS-ENERGY" 
  | "Asset Management"
  | "Advanced AI" 
  | "Cross Modules & Platform Services";

interface SystemTabsProps {
  activeSystem: SystemType;
  onSystemChange: (system: SystemType) => void;
}

const systems: SystemType[] = [
  "EHS",
  "eQMS",
  "ESG",
  "Sustainability",
  "GRC",
  "BCM",
  "OHSM",
  "EMS-ENV",
  "EMS-ENERGY",
  "Asset Management",
  "Advanced AI",
  "Cross Modules & Platform Services",
];

const systemDescriptions: Record<SystemType, string> = {
  "EHS": "Comprehensive tools to manage environmental, health, and safety operations.",
  "Asset Management": "End-to-end asset lifecycle, maintenance, reliability, and ISO 55001-aligned governance.",
  "Sustainability": "End-to-end sustainability management — from strategy and governance to reporting and assurance.",
  "eQMS": "Digitized, audit-ready quality management powered by intelligent workflows.",
  "ESG": "Enterprise sustainability, carbon accounting, and regulatory disclosure management.",
  "GRC": "Governance, risk, and compliance management with automated controls.",
  "BCM": "Business continuity management for organizational resilience.",
  "OHSM": "Occupational health and safety management system for workforce protection.",
  "EMS-ENV": "Environmental management system for monitoring and compliance.",
  "EMS-ENERGY": "Energy management system for efficiency and sustainability.",
  "Advanced AI": "AI-powered analytics, automation, and intelligent insights.",
  "Cross Modules & Platform Services": "Core platform capabilities and cross-functional services.",
};

const SystemTabs = ({ activeSystem, onSystemChange }: SystemTabsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Scroll so the next (right) or previous (left) partially-hidden tab becomes fully visible.
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const tabs = Array.from(container.querySelectorAll<HTMLElement>("[data-tab]"));
    const { scrollLeft, clientWidth } = container;

    if (direction === "right") {
      // First tab whose right edge extends past the visible right edge.
      const target = tabs.find(
        (t) => t.offsetLeft + t.offsetWidth > scrollLeft + clientWidth + 1
      );
      if (target) {
        // Bring this tab's left edge to the left of the viewport so its full name shows.
        container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
      } else if (canScrollRight) {
        container.scrollTo({ left: scrollLeft + 200, behavior: "smooth" });
      }
    } else {
      // Last tab whose left edge is before the visible left edge (partially cut on the left).
      let target: HTMLElement | undefined;
      for (const t of tabs) {
        if (t.offsetLeft < scrollLeft - 1) target = t;
        else break;
      }
      if (target) {
        // Bring this tab's right edge to the right of the viewport so its full name shows.
        container.scrollTo({
          left: Math.max(0, target.offsetLeft + target.offsetWidth - clientWidth),
          behavior: "smooth",
        });
      } else if (canScrollLeft) {
        container.scrollTo({ left: scrollLeft - 200, behavior: "smooth" });
      }
    }
  };

  const showLeft = isHovering && canScrollLeft;
  const showRight = isHovering && canScrollRight;

  return (
    <div className="py-6 px-6">
      <div className="container mx-auto">
        {/* Tabs with scroll */}
        <div
          className="flex items-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button
            type="button"
            aria-label="Scroll tabs left"
            onClick={() => scroll("left")}
            className={`shrink-0 h-9 w-9 flex items-center justify-center rounded-full
              text-foreground/70 hover:text-foreground hover:bg-foreground/5
              transition-all duration-300
              ${showLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex-1 overflow-hidden px-2">
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {systems.map((system) => {
                const isActive = activeSystem === system;
                return (
                  <button
                    key={system}
                    data-tab
                    onClick={() => onSystemChange(system)}
                    className={`
                      whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium
                      transition-all duration-300 border
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-muted-foreground border-border/60 hover:bg-foreground/5 hover:text-foreground"
                      }
                    `}
                    style={
                      isActive
                        ? {
                            boxShadow:
                              "0 4px 18px hsl(215 59% 33% / 0.45), 0 0 0 1px hsl(215 59% 43% / 0.6)",
                          }
                        : {}
                    }
                  >
                    {system}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll tabs right"
            onClick={() => scroll("right")}
            className={`shrink-0 h-9 w-9 flex items-center justify-center rounded-full
              text-foreground/70 hover:text-foreground hover:bg-foreground/5
              transition-all duration-300
              ${showRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Description */}
        <div className="mt-4 text-center">
          <p
            key={activeSystem}
            className="text-muted-foreground text-sm animate-fade-in"
          >
            {systemDescriptions[activeSystem]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemTabs;
