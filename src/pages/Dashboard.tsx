import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SystemTabs, { SystemType } from "@/components/SystemTabs";
import ModuleCard from "@/components/ModuleCard";
import { systemModules } from "@/data/systemModules";

const Dashboard = () => {
  const [activeSystem, setActiveSystem] = useState<SystemType>("EHS");

  const currentModules = systemModules[activeSystem] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SystemTabs activeSystem={activeSystem} onSystemChange={setActiveSystem} />

      {/* Modules Content */}
      <main className="container mx-auto px-6 pb-16">
        {currentModules.map((section, sectionIdx) => (
          <div key={section.title} className="mb-10">
            <h2 className="section-heading">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {section.modules.map((module, moduleIdx) => (
                <ModuleCard
                  key={module.title}
                  {...module}
                  colorIndex={sectionIdx * 10 + moduleIdx}
                />
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="header-gradient text-white/70 py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <p className="text-sm">© Soapbox.cloud 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
