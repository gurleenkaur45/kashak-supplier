import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isLogin ? "Logged in successfully!" : "Account created successfully!");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-card border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto mb-3">
            <span className="font-display font-bold text-primary-foreground text-xl">NP</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {isLogin ? "Sign in to your Nepal AutoParts account" : "Join Nepal AutoParts today"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              required
              placeholder="Full Name"
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          )}
          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-primary hover:underline font-medium">
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
