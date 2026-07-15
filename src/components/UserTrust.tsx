import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface TopSeller {
  id: string;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  dealsCompleted: number;
  joinedDate: string;
}

export default async function UserTrust() {
  const stats: Stat[] = [
    {
      value: "12,450+",
      label: "Items Swapped",
      icon: "📦",
    },
    {
      value: "5,800+",
      label: "Active Developers",
      icon: "💻",
    },
    {
      value: "4.95 / 5",
      label: "Average Rating",
      icon: "⭐",
    },
    {
      value: "100%",
      label: "Handshake Guarantee",
      icon: "🤝",
    },
  ];

  const topSellers: TopSeller[] = [
    {
      id: "seller-1",
      name: "Sabbir Rahman",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
      role: "Lead Fullstack Dev",
      rating: 5.0,
      dealsCompleted: 34,
      joinedDate: "Joined Jan 2024",
    },
    {
      id: "seller-2",
      name: "Tanjim Chowdhury",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      role: "UI/UX Specialist",
      rating: 4.9,
      dealsCompleted: 28,
      joinedDate: "Joined May 2024",
    },
    {
      id: "seller-3",
      name: "Fariha Kabir",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      role: "QA Engineer",
      rating: 4.9,
      dealsCompleted: 21,
      joinedDate: "Joined Sep 2024",
    },
  ];

  return (
    <section className="py-20 w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide w-fit">
                📊 Platform Vibe Check
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
                Our Community in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
                  Numbers
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                We are building Bangladesh's most reliable peer-to-peer tech
                marketplace. No fake profiles, no overpriced listings—just pure
                developer-to-developer trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-850/60 rounded-2xl space-y-1 hover:border-emerald-500/10 hover:shadow-sm transition-all"
                >
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <h3 className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                  Top Rated Sellers
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                  Highest rated peers based on actual handshake feedback.
                </p>
              </div>
              <Link
                href="/sellers"
                className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                View all profiles
              </Link>
            </div>

            <div className="space-y-4">
              {topSellers.map((seller) => (
                <div
                  key={seller.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/70 rounded-2xl hover:border-zinc-300 dark:hover:border-zinc-800 transition-all duration-300 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full relative overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200 dark:border-zinc-800">
                      <Image
                        src={seller.avatar}
                        alt={seller.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                          {seller.name}
                        </h4>
                        <span
                          className="text-xs text-emerald-500 shrink-0 select-none"
                          title="Verified Professional"
                        >
                          ✓
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold truncate">
                        {seller.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-100 dark:border-zinc-850/60 justify-between shrink-0">
                    <div className="text-left sm:text-right space-y-0.5">
                      <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Rating
                      </div>
                      <div className="text-xs font-black text-zinc-900 dark:text-white flex items-center gap-1">
                        ⭐ {seller.rating.toFixed(1)}
                      </div>
                    </div>

                    <div className="text-left sm:text-right space-y-0.5">
                      <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Deals Completed
                      </div>
                      <div className="text-xs font-black text-emerald-500 dark:text-emerald-400">
                        {seller.dealsCompleted} successful swaps
                      </div>
                    </div>

                    <div className="hidden md:block text-right space-y-0.5">
                      <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Member Since
                      </div>
                      <div className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                        {seller.joinedDate.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
