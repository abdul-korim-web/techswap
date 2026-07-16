"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "./../../lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);


      const signUpPayload: any = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: "https://example.com/image.png",
        role: formData.role,
        callbackURL: "/",
      };

      const { data, error: authError } = await authClient.signUp.email(signUpPayload);

      if (authError) {
        setError(authError.message || "Something went wrong during registration.");
        toast.error(authError.message || "Registration failed.");
        return;
      }

      toast.success("Registration successful!");
      router.push("/");
      router.refresh();
      
    } catch (err: any) {
      setError(err.message || "Something went wrong during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-8 rounded-3xl shadow-sm text-left">
        
        <div className="space-y-2">
          <h2 className="text-2xl font-black tracking-tight">Create an account</h2>
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
            Join our marketplace to discover or list tech hardware.
          </p>
        </div>

        {error && (
          <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold rounded-xl">
            ⚠️ {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full text-xs font-medium px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
            />
          </div>

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
            <label htmlFor="role" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Account Type / Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full text-xs font-bold px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors cursor-pointer text-zinc-700 dark:text-zinc-300"
            >
              <option value="user">Regular Buyer (User)</option>
              <option value="seller">Hardware Seller</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Password
            </label>
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

          <div className="space-y-1.5">
            <label htmlFor="confirmPassword" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full text-xs font-medium px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
            />
          </div>

          <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 leading-relaxed">
            By registering, you agree to follow our{" "}
            <Link href="/safety" className="text-emerald-500 hover:underline">
              Safety Regulations
            </Link>{" "}
            and face-to-face transaction protocols.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-xs font-black text-white bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 py-3.5 rounded-xl transition-all shadow-sm disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}