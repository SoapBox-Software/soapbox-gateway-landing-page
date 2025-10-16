import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Mail, Chrome } from "lucide-react";
import logo from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would validate credentials
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }
      navigate("/dashboard");
    }
  };

  const handleSSOLogin = (provider: string) => {
    // Mock SSO login
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--pine-dark))] p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="SOAPBOX.CLOUD" 
            className="h-16 mx-auto mb-4"
          />
          <p className="text-[hsl(var(--pine-light))] text-sm font-medium">
            Protecting People. Preserving Planet. Powering Performance.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-[hsl(var(--pine-dark))] mb-2 text-center">
            User Login Portal
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Access your EHS modules
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[hsl(var(--pine-dark))]">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-[hsl(var(--pine-light))] focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[hsl(var(--pine-dark))]">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-[hsl(var(--pine-light))] focus:border-[hsl(var(--accent))] focus:ring-[hsl(var(--accent))]"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-[hsl(var(--pine-medium))] cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-[hsl(var(--accent))] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full gradient-green text-white font-semibold h-12 hover:gradient-green-hover transition-all"
            >
              Sign In
            </Button>
          </form>

          {/* SSO Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[hsl(var(--pine-light))]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted-foreground">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSSOLogin("azure")}
                className="border-[hsl(var(--pine-light))] hover:bg-[hsl(var(--muted))]"
              >
                <Chrome className="mr-2 h-4 w-4" />
                Azure AD
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSSOLogin("google")}
                className="border-[hsl(var(--pine-light))] hover:bg-[hsl(var(--muted))]"
              >
                <Chrome className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-[hsl(var(--pine-light))] text-sm">
          <a href="#" className="hover:text-white mx-2">Terms</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white mx-2">Privacy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-white mx-2">Support</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
