"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trendData = {
  laptops: [
    { month: "Jan", avgPrice: 950, peakPrice: 1200 },
    { month: "Feb", avgPrice: 920, peakPrice: 1150 },
    { month: "Mar", avgPrice: 890, peakPrice: 1100 },
    { month: "Apr", avgPrice: 940, peakPrice: 1250 },
    { month: "May", avgPrice: 980, peakPrice: 1300 },
    { month: "Jun", avgPrice: 1050, peakPrice: 1350 },
  ],
  keyboards: [
    { month: "Jan", avgPrice: 120, peakPrice: 150 },
    { month: "Feb", avgPrice: 125, peakPrice: 160 },
    { month: "Mar", avgPrice: 140, peakPrice: 180 },
    { month: "Apr", avgPrice: 135, peakPrice: 175 },
    { month: "May", avgPrice: 150, peakPrice: 190 },
    { month: "Jun", avgPrice: 165, peakPrice: 210 },
  ],
  phones: [
    { month: "Jan", avgPrice: 650, peakPrice: 800 },
    { month: "Feb", avgPrice: 620, peakPrice: 780 },
    { month: "Mar", avgPrice: 590, peakPrice: 750 },
    { month: "Apr", avgPrice: 610, peakPrice: 820 },
    { month: "May", avgPrice: 680, peakPrice: 890 },
    { month: "Jun", avgPrice: 720, peakPrice: 950 },
  ],
};

type CategoryKey = "laptops" | "keyboards" | "phones";

export default function PriceTrends() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("laptops");

  return (
    <section className="py-20 w-full bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide w-fit">
              <span>📈 Live Market Index</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Used Device <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
                Price Trends
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
              আমাদের প্ল্যাটফর্মের রিয়েল-টাইম ডেটা অ্যানালিটিক্স। কেনার আগে
              দেখে নিন গত ৬ মাসে আপনার পছন্দের গ্যাজেটের গড় ও সর্বোচ্চ দামের
              পরিবর্তন।
            </p>

            <div className="flex flex-row lg:flex-col gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border border-zinc-200/50 dark:border-zinc-800">
              {(["laptops", "keyboards", "phones"] as CategoryKey[]).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 lg:w-full text-left px-4 py-3 text-xs font-bold rounded-xl capitalize transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-white dark:bg-zinc-800 text-emerald-500 dark:text-emerald-400 shadow-sm"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {tab === "phones" ? "Smartphones" : tab}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-2 w-full h-[350px] sm:h-[400px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-850 p-4 sm:p-6 rounded-3xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 blur-[80px] pointer-events-none" />

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={trendData[activeTab]}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPeak" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="currentColor"
                  className="text-zinc-200 dark:text-zinc-800/60"
                />

                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                  className="text-[11px] font-bold fill-zinc-400 dark:fill-zinc-500"
                />

                <YAxis
                  tickLine={false}
                  axisLine={false}
                  dx={-5}
                  tickFormatter={(value) => `$${value}`}
                  className="text-[11px] font-bold fill-zinc-400 dark:fill-zinc-500"
                />

                <Tooltip
  content={({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 rounded-xl shadow-lg text-zinc-900 dark:text-white text-xs">
          <p className="font-black mb-1">{label}</p>
          {payload.map((item: any, index: number) => (
            <p key={index} className="font-medium" style={{ color: item.color }}>
              {item.name}: {item.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  }}
/>

                <Area
                  name="Avg Resale Price"
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#colorAvg)"
                />

                <Area
                  name="Peak Retail Price"
                  type="monotone"
                  dataKey="peakPrice"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fillOpacity={1}
                  fill="url(#colorPeak)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
