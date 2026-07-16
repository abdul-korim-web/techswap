"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

 interface IProduct {
  _id?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  condition: "Like New" | "Excellent" | "Good" | "Fair";
  category: "Laptops" | "Phones" | "Keyboards" | "Audio" | "Accessories";
  images: string[];
  location: string;
  rating: number;
  createdAt: Date;
  sellerId: string;
  sellerName: string;
  sellerEmail: string;
  isAvailable: boolean;
  durationUsed: number;
  hasDefects: boolean;
  defectsDescription?: string;
}

const dummyProduct: IProduct = {
  _id: "prod-1",
  title: 'MacBook Pro 14" M2 Pro (16GB/512GB)',
  shortDescription:
    "Used for development work, immaculate condition with zero scratches.",
  fullDescription:
    "Up for sale is my absolute workhorse. This MacBook Pro has been meticulously cared for, always transported inside a premium sleeve. Running Xcode and Docker flawlessly. Selling because my company just issued a new workstation. Comes with the original fast charger, MagSafe cable, and the box.",
  price: 1450,
  condition: "Like New",
  category: "Laptops",
  images: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  ],
  location: "Dhaka, Bangladesh",
  rating: 4.8,
  createdAt: new Date(),
  sellerId: "seller-123",
  sellerName: "Rahat Kerma",
  sellerEmail: "rahat@dev.com",
  isAvailable: true,
  durationUsed: 5,
  hasDefects: false,
};

export default function ProductDetailsPage() {
  const product = dummyProduct;

  const depreciationData = [
    { month: "Brand New", value: 2000 },
    { month: "Month 2", value: 1800 },
    { month: "Month 4", value: 1600 },
    { month: "Current (Month 5)", value: product.price },
    { month: "Month 8 (Est.)", value: 1300 },
    { month: "Month 12 (Est.)", value: 1150 },
  ];

  const conditionStyles = {
    "Like New":
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Excellent:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Good: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Fair: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8 text-left space-x-2">
          <Link href="/explore" className="hover:text-emerald-500">
            Explore
          </Link>
          <span>/</span>
          <span className="text-zinc-400">{product.category}</span>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white truncate">
            {product.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-850/60 relative">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-left space-y-2">
              <h4 className="text-xs font-black text-amber-600 dark:text-amber-400 tracking-wider uppercase">
                ⚠️ Safe Handshake Notice
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                Please physically test this{" "}
                {product.category.slice(0, -1).toLowerCase()} before initiating
                payment. Always trade in daylight at busy public spaces like
                subway stations or popular cafes.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-6 sm:p-8 rounded-3xl text-left space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-black tracking-tight">
                  Price Depreciation Analysis
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold">
                  See how this product's value shifts over months of usage
                  compared to market estimations.
                </p>
              </div>

              <div className="h-[240px] w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={depreciationData}>
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#10b981"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#10b981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#3f3f46"
                      strokeOpacity={0.15}
                    />
                    <XAxis
                      dataKey="month"
                      stroke="#888888"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `$${v}`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "12px",
                        fontSize: "11px",
                        color: "#fff",
                      }}
                      labelClassName="font-bold text-zinc-400"
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      name="Est. Value"
                      stroke="#10b981"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border tracking-wider uppercase ${conditionStyles[product.condition]}`}
                >
                  Condition: {product.condition}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">
                  Used: {product.durationUsed} Months
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-900 pb-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    Asking Price
                  </span>
                  <div className="text-3xl font-black text-emerald-500 dark:text-emerald-400">
                    ${product.price.toLocaleString()}
                  </div>
                </div>
                {product.isAvailable ? (
                  <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold px-3 py-1.5 rounded-full select-none">
                    ⚡ Available
                  </span>
                ) : (
                  <span className="bg-zinc-500/10 text-zinc-500 border border-zinc-500/20 text-xs font-bold px-3 py-1.5 rounded-full select-none">
                    🔒 Sold Out
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-5 rounded-2xl">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-zinc-400 dark:text-zinc-500">
                  Device Location
                </span>
                <span className="font-bold">📍 {product.location}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-zinc-400 dark:text-zinc-500">
                  Defects & Flaws
                </span>
                {product.hasDefects ? (
                  <span className="font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    Yes (See details)
                  </span>
                ) : (
                  <span className="font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    None (Immaculate)
                  </span>
                )}
              </div>
              {product.hasDefects && product.defectsDescription && (
                <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-850/40 text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                  ⚠️{" "}
                  <span className="font-bold text-zinc-700 dark:text-zinc-300">
                    Seller Note:
                  </span>{" "}
                  {product.defectsDescription}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Seller's Description
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                {product.fullDescription}
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black">
                      {product.sellerName}
                    </span>
                    <span className="text-xs text-emerald-500 select-none">
                      ✓
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
                    {product.sellerEmail}
                  </p>
                </div>
                <div className="text-right space-y-0.5">
                  <span className="text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                    Seller Rating
                  </span>
                  <span className="text-xs font-black text-amber-500">
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 pt-2">
                <a
                  href={`mailto:${product.sellerEmail}?subject=Inquiry about ${encodeURIComponent(product.title)}`}
                  className="w-full text-center text-xs font-black text-white bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 py-3.5 rounded-xl transition-all shadow-sm"
                >
                  Contact Seller via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
