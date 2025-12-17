import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModuleCard from "@/components/ModuleCard";
import {
  AlertTriangle,
  ClipboardCheck,
  FileCheck,
  Calendar,
  Shield,
  CheckSquare,
  FileText,
  ListChecks,
  FileWarning,
  GraduationCap,
  FolderOpen,
  RefreshCw,
  AlertCircle,
  Target,
  Briefcase,
  Search,
  ClipboardList,
  Bell,
  User,
  LogOut,
  Users,
  TriangleAlert,
  Eye,
  Flame,
  Skull,
  Trash2,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus !== "true") {
      navigate("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("rememberMe");
    navigate("/");
  };

  const modules = [
    {
      title: "Incident Management",
      description: "Reports, tracks, investigates, and closes incidents with SLAs and analytics.",
      url: "https://preview--ops-resolve-dash.lovable.app/dashboard",
      icon: AlertTriangle,
    },
    {
      title: "Audit Management",
      description: "Streamlines audit planning, execution, and closure.",
      url: "https://preview--soapbox-audit-craft.lovable.app/dashboard",
      icon: ClipboardCheck,
    },
    {
      title: "CAPA",
      description: "Manages corrective/preventive actions with workflows and monitoring.",
      url: "https://preview--soapbox-capa-flow.lovable.app/",
      icon: FileCheck,
    },
    {
      title: "Event Tracking",
      description: "Tracks planned/unplanned events; escalation and analytics.",
      url: "https://id-preview--66a6c22a-9185-4f11-bc75-6f851488f8e7.lovable.app/",
      icon: Calendar,
    },
    {
      title: "Risk Management",
      description: "Identifies, assesses, and mitigates organizational risks.",
      url: "https://preview--random-page.lovable.app/",
      icon: Shield,
    },
    {
      title: "Compliance Management",
      description: "Monitors compliance with internal and external regulations.",
      url: "https://preview--compliance-orb.lovable.app/",
      icon: CheckSquare,
    },
    {
      title: "Non-Compliance Reporting (NCR)",
      description: "Track and manage non-compliance events with corrective actions.",
      url: "https://id-preview--6223ccbc-ecf4-42dd-8762-474380de042e.lovable.app/",
      icon: FileWarning,
    },
    {
      title: "Checklist Management",
      description: "Create, manage, and track completion of safety checklists.",
      url: "https://id-preview--e447bfce-0b7f-4ec6-b539-02a40d86875c.lovable.app/",
      icon: ListChecks,
    },
    {
      title: "Near Miss & Reporting",
      description: "Capture and analyze near-miss incidents to prevent future accidents.",
      url: "https://id-preview--290a6b11-cd72-4c91-982a-d65938091ff8.lovable.app/",
      icon: TriangleAlert,
    },
    {
      title: "Operational Risk Management",
      description: "Real-time operational risk monitoring and mitigation.",
      url: "https://id-preview--ca0a2037-70be-45ec-a950-794182b91fd6.lovable.app/",
      icon: Briefcase,
    },
    {
      title: "Inspection",
      description: "Digital inspection forms and automated workflows.",
      url: "https://preview--soapbox-inspect-iq.lovable.app/help",
      icon: Search,
    },
    {
      title: "Job Safety Analysis (JSA)",
      description: "Systematic evaluation of job tasks and safety procedures.",
      url: "https://id-preview--2c806b9c-2226-4ae7-b27f-1bd7b4067456.lovable.app/",
      icon: ClipboardList,
    },
    {
      title: "Safety Observation Reporting",
      description: "Report and track safety observations to enhance workplace conditions.",
      url: "https://id-preview--028c806b-042b-48fa-a108-cb742fe05d07.lovable.app/",
      icon: Eye,
    },
    {
      title: "Hot Work Permits",
      description: "Manage permits for welding, cutting, and other hot work activities.",
      url: "https://id-preview--b569da81-3986-4487-aa6c-d204c7ec2c65.lovable.app/",
      icon: Flame,
    },
    {
      title: "Hazardous Material Management",
      description: "Track and control hazardous substances across your facilities.",
      icon: Skull,
      comingSoon: true,
    },
    {
      title: "Waste Management",
      description: "Monitor and manage waste disposal and recycling processes.",
      icon: Trash2,
      comingSoon: true,
    },
    {
      title: "Permit to Work (PTW)",
      description: "Digital permit system for high-risk work authorization.",
      icon: FileText,
      comingSoon: true,
    },
    {
      title: "Training Management",
      description: "Schedule, track, and certify employee training programs.",
      icon: GraduationCap,
      comingSoon: true,
    },
    {
      title: "Document Management",
      description: "Centralized repository for EHS documents and version control.",
      icon: FolderOpen,
      comingSoon: true,
    },
    {
      title: "Change Management",
      description: "Manage organizational changes with impact assessments.",
      icon: RefreshCw,
      comingSoon: true,
    },
    {
      title: "Advanced Incident Management",
      description: "Enhanced incident tracking with AI-powered insights.",
      icon: AlertCircle,
      comingSoon: true,
    },
    {
      title: "Advanced Risk Management",
      description: "Predictive risk analytics and scenario modeling.",
      icon: Target,
      comingSoon: true,
    },
    {
      title: "Advanced Compliance Management",
      description: "AI-driven compliance monitoring and regulatory updates.",
      icon: CheckSquare,
      comingSoon: true,
    },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--pine-dark))] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="SOAPBOX.CLOUD" className="h-10" />
              <div className="hidden md:block">
                <p className="text-[hsl(var(--pine-light))] text-xs">
                  Protecting People. Preserving Planet. Powering Performance.
                </p>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-[hsl(var(--sidebar-accent))]"
                  >
                    <Users className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Switch to Admin User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Switch to Manager User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Switch to Employee User
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-[hsl(var(--sidebar-accent))] relative"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="p-2">
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">New incident reported</p>
                        <p className="text-sm text-muted-foreground">Incident #2847 requires your attention</p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">Audit scheduled</p>
                        <p className="text-sm text-muted-foreground">Safety audit planned for next Monday</p>
                        <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">CAPA action overdue</p>
                        <p className="text-sm text-muted-foreground">Action item #1523 is past due date</p>
                        <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-[hsl(var(--sidebar-accent))]"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[hsl(var(--pine-dark))] mb-3">
            EHS System Modules
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-3xl mx-auto">
            Access your subscribed modules to manage environmental, health, and safety operations
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {modules.map((module, index) => (
            <div key={index} className="h-full">
              <ModuleCard {...module} />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[hsl(var(--pine-dark))] text-[hsl(var(--pine-light))] py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors text-sm">
                Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors text-sm">
                Support
              </a>
            </div>
            <p className="text-sm">© Soapbox.cloud 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
