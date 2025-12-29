import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }
      navigate("/dashboard");
    }
  };

  const handleSSOLogin = (provider: string) => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[hsl(var(--pine-light))]/10 via-white to-[hsl(var(--pine-light))]/5 p-4">
      {/* Logo at top */}
      <div className="flex items-center gap-2 mb-6">
        <img 
          src={logo} 
          alt="SOAPBOX.CLOUD" 
          className="h-8"
        />
        <span className="text-lg font-semibold text-[hsl(var(--pine-dark))]">SOAPBOX.CLOUD</span>
      </div>

      {/* Header Text */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[hsl(var(--pine-dark))] mb-1">
          Sign in to Soapbox.cloud
        </h1>
        <p className="text-[hsl(var(--accent))] font-medium text-base">
          EHS & Sustainability Simplified.
        </p>
        <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
          Access your centralized platform for environmental, health, safety, and sustainability management.
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-sm">
        <div className="glass-card rounded-2xl p-6 shadow-xl border border-white/40">
          <h2 className="text-lg font-semibold text-[hsl(var(--pine-dark))] mb-4 text-center">
            Sign in to Soapbox.cloud
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-11 bg-white/80 border-[hsl(var(--pine-light))]/30 focus:border-[hsl(var(--accent))] rounded-lg"
                required
              />
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-11 bg-white/80 border-[hsl(var(--pine-light))]/30 focus:border-[hsl(var(--accent))] rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end mt-1">
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-[hsl(var(--accent))]"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-[hsl(var(--pine-light))]"
              />
              <label
                htmlFor="remember"
                className="text-sm text-[hsl(var(--pine-medium))] cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full gradient-green text-white font-semibold h-11 rounded-lg hover:opacity-90 transition-all"
            >
              Sign in
            </Button>
          </form>

          {/* SSO Options */}
          <div className="mt-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[hsl(var(--pine-light))]/30"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white/60 text-muted-foreground">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleSSOLogin("google")}
                className="h-10 w-10 rounded-lg border-[hsl(var(--pine-light))]/30 bg-white/60 hover:bg-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleSSOLogin("microsoft")}
                className="h-10 w-10 rounded-lg border-[hsl(var(--pine-light))]/30 bg-white/60 hover:bg-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                  <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleSSOLogin("apple")}
                className="h-10 w-10 rounded-lg border-[hsl(var(--pine-light))]/30 bg-white/60 hover:bg-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Footer links inside card */}
          <div className="mt-5 flex justify-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-[hsl(var(--accent))]">Privacy Policy</a>
            <a href="#" className="hover:text-[hsl(var(--accent))]">Terms of Use</a>
          </div>
        </div>

        {/* Create account link */}
        <p className="text-center mt-4 text-sm text-muted-foreground">
          New here?{" "}
          <button className="text-[hsl(var(--accent))] font-medium hover:underline">
            Create an account
          </button>
        </p>

        {/* Copyright */}
        <p className="text-center mt-4 text-xs text-muted-foreground/60">
          © 2024 Soapbox.cloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
