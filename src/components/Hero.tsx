"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const featuredProducts = [
    {
      title: "MacBook Pro M2",
      price: "$1,299",
      condition: "Like New",
      image: "💻",
      bg: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Keychron Q1 Pro",
      price: "$140",
      condition: "Excellent",
      image: "⌨️",
      bg: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Sony WH-1000XM5",
      price: "$280",
      condition: "Good",
      image: "🎧",
      bg: "from-amber-500/20 to-orange-500/20",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) =>
        prev === featuredProducts.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  return (
    <section className="relative min-h-[90vh] lg:h-[70vh] lg:min-h-[550px] lg:max-h-[700px] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300 pt-20 lg:pt-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide w-fit">
            <span>✨ The Tech Resale Revolution</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-800 dark:text-white leading-[1.15] lg:leading-[1.1]">
            Upgrade Your Tech. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
              Sell the Old.
            </span>
          </h1>

          <p className="max-w-md sm:max-w-xl text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
            The ultimate premium resale marketplace for developers and remote
            workers. Buy certified pre-loved gear or cash out your old setup
            instantly.
          </p>

          {/* Premium Search / CTA Bar */}
          <div className="flex flex-col sm:flex-row items-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 rounded-2xl w-full max-w-lg shadow-sm focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all gap-2 sm:gap-0">
            <input
              type="text"
              placeholder="Search keyboards, laptops, monitors..."
              className="w-full bg-transparent px-3 py-2 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none text-center sm:text-left"
            />
            <Link
              href="/explore"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10 w-full sm:w-auto text-center shrink-0 whitespace-nowrap active:scale-95"
            >
              Find Gear
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center relative h-[380px] sm:h-[400px] lg:h-[350px] w-full mt-4 lg:mt-0 ">
          {featuredProducts.map((product, index) => {
            const isSelected = activeCard === index;
            const offset = index - activeCard;

            return (
              <div
                key={index}
                onClick={() => setActiveCard(index)}
                className={`absolute w-[260px] sm:w-[280px] h-[330px] sm:h-[350px] rounded-3xl p-6 bg-gradient-to-b ${product.bg} border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl shadow-2xl flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out `}
                style={{
                  transform: isSelected
                    ? "translateX(0px) scale(1) rotate(0deg)"
                    : `translateX(${offset * 25}px) scale(0.9) rotate(${offset * 4}deg)`,
                  zIndex: isSelected ? 30 : 20 - Math.abs(offset),
                  opacity: isSelected ? 1 : 0.35,
                  pointerEvents: isSelected ? "auto" : "none",
                }}
              >
                <div className="flex justify-between items-start">
                  <span className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-sm">
                    {product.condition}
                  </span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 px-3 py-1 rounded-full shadow-sm">
                    {product.price}
                  </span>
                </div>

                <div className="text-6xl sm:text-7xl text-center my-auto filter drop-shadow-md select-none">
                  {product.image}
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-black text-white dark:text-white tracking-tight">
                    {product.title}
                  </h3>
                  <Link
                    href={`/items/details`}
                    className="block w-full bg-white dark:bg-zinc-900 text-center py-2.5 rounded-xl text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm transition-all hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2.5 z-20">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveCard(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeCard === index
                ? "w-6 bg-emerald-500"
                : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
