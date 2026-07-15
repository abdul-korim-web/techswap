"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export interface IProduct {
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

const DUMMY_PRODUCTS: IProduct[] = [
  {
    _id: "prod-1",
    title: 'MacBook Pro 14" M2 Pro (16GB/512GB)',
    shortDescription:
      "Used for development work, immaculate condition with zero scratches.",
    fullDescription: "Detailed description here...",
    price: 1450,
    condition: "Like New",
    category: "Laptops",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    ],
    location: "Dhaka",
    rating: 4.8,
    createdAt: new Date(),
    sellerId: "seller-123",
    sellerName: "Rahat Kerma",
    sellerEmail: "rahat@dev.com",
    isAvailable: true,
    durationUsed: 5,
    hasDefects: false,
  },
  {
    _id: "prod-2",
    title: "Keychron Q1 Pro Mechanical Keyboard",
    shortDescription:
      "Gateron Brown switches. Slightly dirty caps but fully functional.",
    fullDescription: "Detailed description here...",
    price: 160,
    condition: "Good",
    category: "Keyboards",
    images: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
    ],
    location: "Chattogram",
    rating: 4.2,
    createdAt: new Date(),
    sellerId: "seller-456",
    sellerName: "Asif Zubayer",
    sellerEmail: "asif@dev.com",
    isAvailable: true,
    durationUsed: 14,
    hasDefects: true,
    defectsDescription: "Volume knob is a bit stiff, everything else works.",
  },
  {
    _id: "prod-3",
    title: "iPhone 15 Pro Max - 256GB Natural Titanium",
    shortDescription: "Battery health 92%. Screen protector pre-installed.",
    fullDescription: "Detailed description here...",
    price: 980,
    condition: "Excellent",
    category: "Phones",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    ],
    location: "Sylhet",
    rating: 4.5,
    createdAt: new Date(),
    sellerId: "seller-789",
    sellerName: "Tanvir Ahmed",
    sellerEmail: "tanvir@dev.com",
    isAvailable: true,
    durationUsed: 8,
    hasDefects: false,
  },
  {
    _id: "prod-4",
    title: "Sony WH-1000XM5 Wireless Headphones",
    shortDescription: "ANC works perfectly. Minor scuffs on the left ear cup.",
    fullDescription: "Detailed description here...",
    price: 270,
    condition: "Fair",
    category: "Audio",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    ],
    location: "Dhaka",
    rating: 3.9,
    createdAt: new Date(),
    sellerId: "seller-999",
    sellerName: "Sajjad Hossain",
    sellerEmail: "sajjad@dev.com",
    isAvailable: true,
    durationUsed: 22,
    hasDefects: true,
    defectsDescription: "Slight leather peeling on the inside of the band.",
  },
];

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCondition, setSelectedCondition] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("newest");

  const categories = [
    "All",
    "Laptops",
    "Phones",
    "Keyboards",
    "Audio",
    "Accessories",
  ];
  const conditions = ["All", "Like New", "Excellent", "Good", "Fair"];

  const conditionStyles = {
    "Like New":
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Excellent:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Good: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Fair: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  };

  const filteredProducts = useMemo(() => {
    let result = [...DUMMY_PRODUCTS];

    if (search.trim() !== "") {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (selectedCondition !== "All") {
      result = result.filter(
        (product) => product.condition === selectedCondition,
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    return result;
  }, [search, selectedCategory, selectedCondition, sortBy]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-left space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Explore All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
              Hardware
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            Find, filter, and secure deals on verified pre-owned developer gear.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-6 rounded-2xl mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 text-left">
                Search Products
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by keyword, brand, or model..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full text-xs font-medium bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 text-left">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs font-bold bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-3 outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5 text-left">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs font-bold bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-3 outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-850/40 text-left">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mr-4 mb-2">
              Condition:
            </span>
            <div className="inline-flex flex-wrap gap-2">
              {conditions.map((cond) => (
                <button
                  key={cond}
                  onClick={() => setSelectedCondition(cond)}
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
                    selectedCondition === cond
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6 text-left">
          <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
            Showing{" "}
            <span className="text-zinc-900 dark:text-white font-black">
              {filteredProducts.length}
            </span>{" "}
            items
          </p>
          {(search ||
            selectedCategory !== "All" ||
            selectedCondition !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
                setSelectedCondition("All");
                setSortBy("newest");
              }}
              className="text-xs font-bold text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 rounded-3xl space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              No products match your criteria
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
              Try adjusting your search keywords, clear filters, or check out
              another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
