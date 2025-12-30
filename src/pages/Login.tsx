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
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--pine-light))]/15 via-[hsl(160,30%,96%)] to-[hsl(var(--pine-light))]/10" />
      <div className="absolute inset-0 bg-[hsl(var(--pine-dark))]/[0.06]" />
      
      {/* Abstract decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-[hsl(var(--accent))]/10 blur-2xl" />
        <div className="absolute top-20 right-1/3 w-48 h-48 rounded-full bg-[hsl(var(--pine-light))]/20 blur-3xl" />
        <div className="absolute -top-10 right-1/4 w-40 h-40 rounded-full bg-[hsl(160,40%,85%)]/30 blur-2xl" />
      </div>
      
      <div className="relative z-10 w-full max-w-md px-4 animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img 
            src={logo} 
            alt="SOAPBOX.CLOUD" 
            className="h-10"
          />
          <span className="text-xl font-bold tracking-wide text-[#1F2A2E]">SOAPBOX.CLOUD</span>
        </div>

        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1F2A2E] mb-3">
            Sign In
          </h1>
          <p className="text-[#1F2A2E] font-medium text-base mb-2">
            Engineering the Operating System for Regulated Work.
          </p>
          <p className="text-[#4A5568] text-sm leading-relaxed max-w-sm mx-auto">
            A unified, cloud-native foundation for safety, risk, and compliance — built with clarity, resilience, and governance at its core.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/60 transition-all duration-300">
          <h2 className="text-lg font-semibold text-[#1F2A2E] mb-6 text-center">
            Sign in to Soapbox.cloud
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4A5568] transition-colors group-focus-within:text-[hsl(var(--accent))]" />
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-12 bg-white border-[#CBD5E0] text-[#1F2A2E] placeholder:text-[#718096] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 rounded-xl transition-all"
                required
              />
            </div>

            <div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4A5568] transition-colors group-focus-within:text-[hsl(var(--accent))]" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-28 h-12 bg-white border-[#CBD5E0] text-[#1F2A2E] placeholder:text-[#718096] focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 rounded-xl transition-all"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[hsl(var(--accent))] hover:text-[hsl(var(--pine-dark))] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-[#CBD5E0] data-[state=checked]:bg-[hsl(var(--accent))] data-[state=checked]:border-[hsl(var(--accent))]"
              />
              <label
                htmlFor="remember"
                className="text-sm text-[#4A5568] cursor-pointer select-none"
              >
                Remember me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(160,60%,35%)] text-white font-semibold h-12 rounded-xl shadow-lg shadow-[hsl(var(--accent))]/25 hover:shadow-xl hover:shadow-[hsl(var(--accent))]/30 hover:brightness-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign in
            </Button>
          </form>

          {/* SSO Options */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2E8F0]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/90 text-[#718096]">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSSOLogin("google")}
                className="h-12 px-6 rounded-xl border-[#E2E8F0] bg-white hover:bg-[#F7FAFC] hover:border-[#CBD5E0] transition-all duration-200 shadow-sm hover:shadow-md"
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
                onClick={() => handleSSOLogin("microsoft")}
                className="h-12 px-6 rounded-xl border-[#E2E8F0] bg-white hover:bg-[#F7FAFC] hover:border-[#CBD5E0] transition-all duration-200 shadow-sm hover:shadow-md"
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
                onClick={() => handleSSOLogin("apple")}
                className="h-12 px-6 rounded-xl border-[#E2E8F0] bg-white hover:bg-[#F7FAFC] hover:border-[#CBD5E0] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="h-5 w-5 text-[#1F2A2E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Footer links inside card */}
          <div className="mt-6 flex justify-center gap-2 text-sm">
            <a href="#" className="text-[#4A5568] hover:text-[hsl(var(--accent))] hover:underline transition-colors">Privacy Policy</a>
            <span className="text-[#CBD5E0]">•</span>
            <a href="#" className="text-[#4A5568] hover:text-[hsl(var(--accent))] hover:underline transition-colors">Terms of Use</a>
          </div>
        </div>

        {/* Create account link */}
        <p className="text-center mt-6 text-sm">
          <span className="text-[#4A5568]">New here?</span>{" "}
          <button className="text-[hsl(var(--accent))] font-semibold hover:underline transition-colors">
            Create an account
          </button>
        </p>

        {/* Copyright */}
        <p className="text-center mt-4 text-xs text-[#718096]">
          © 2024 Soapbox.cloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
