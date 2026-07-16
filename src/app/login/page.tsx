"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      
      const { data, error: authError } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        callbackURL:"/"
      });

      if (authError) {
        setError(authError.message || "Invalid email or password.");
        return;
      }

      toast.success("Login successful!");
   
      
    } catch (err: any) {
      alert(err.message)
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-8 rounded-3xl shadow-sm text-left">
        

        <div className="space-y-2">
          <h2 className="text-2xl font-black tracking-tight">Welcome Back</h2>
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
            Sign in to your account to access your developer hardware dashboard.
          </p>
        </div>


        {error && (
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold rounded-xl">
            ⚠️ {error}
          </div>
        )}


        <form className="space-y-5" onSubmit={handleSubmit}>
          
  
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full text-xs font-medium px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
            />
          </div>


          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Password
              </label>
              <Link 
                href="/forgot-password" 
                className="text-[11px] font-bold text-emerald-500 hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full text-xs font-medium px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
            />
          </div>


          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-3.5 w-3.5 text-emerald-600 border-zinc-300 dark:border-zinc-800 rounded bg-zinc-50 dark:bg-zinc-950 accent-emerald-500 focus:ring-0 cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-2 block text-xs font-bold text-zinc-400 dark:text-zinc-500 cursor-pointer select-none">
              Keep me signed in
            </label>
          </div>

  
          <button
            type="submit"
            disabled={loading}
            className="w-full text-xs font-black text-white bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 py-3.5 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>


        <div className="text-center pt-2">
          <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500">
            Don't have an account yet?{" "}
            <Link href="/register" className="text-emerald-500 hover:underline">
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}