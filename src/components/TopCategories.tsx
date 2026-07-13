import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  slug: string;
  itemCount: number;
  image: string;
  description: string;
  gridClass: string;
  accentBg: string;
}

export default function TopCategories() {
  const categories: Category[] = [
    {
      id: "1",
      name: "Laptops & Workstations",
      slug: "laptops",
      itemCount: 240,
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
      description: "Premium MacBooks, Windows Pro & Linux developer setups.",
      gridClass: "md:col-span-3 h-[320px]",
      accentBg: "group-hover:bg-blue-500/10",
    },
    {
      id: "2",
      name: "Mechanical Keyboards",
      slug: "keyboards",
      itemCount: 185,
      image:
        "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=500&q=80",
      description:
        "Custom hot-swappable boards, premium keycaps, and switches.",
      gridClass: "md:col-span-2 h-[320px]",
      accentBg: "group-hover:bg-purple-500/10",
    },
    {
      id: "3",
      name: "Smartphones",
      slug: "phones",
      itemCount: 412,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
      description: "Flagship iPhones, Pixels, and premium Androids.",
      gridClass: "md:col-span-2 h-[280px]",
      accentBg: "group-hover:bg-emerald-500/10",
    },
    {
      id: "4",
      name: "Audiophile Gear",
      slug: "audio",
      itemCount: 95,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
      description: "Studio monitors and ANC headphones.",
      gridClass: "md:col-span-2 h-[280px]",
      accentBg: "group-hover:bg-amber-500/10",
    },
    {
      id: "5",
      name: "PC Components",
      slug: "components",
      itemCount: 134,
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
      description: "GPUs, CPUs, and desktop gear.",
      gridClass: "md:col-span-2 h-[280px]",
      accentBg: "group-hover:bg-rose-500/10",
    },
  ];

  return (
    <section className="py-24 w-full bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
              Browse by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
                Top Categories
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-medium max-w-xl">
              Find verified pre-loved tech products listed by global sellers.
            </p>
          </div>

          <Link
            href="/explore"
            className="text-sm font-bold text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors inline-flex items-center gap-1 group whitespace-nowrap"
          >
            View All Categories
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/explore?category=${category.slug}`}
              className={`group relative rounded-3xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-black/50 ${category.gridClass}`}
            >
              <div className="absolute inset-0 z-0">
                <Image
                fill
                  alt={category.name}
                  className="h-full w-full object-cover filter brightness-[0.85] dark:brightness-[0.4] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                  loading="lazy"
                  src={category.image}
                />
                <div
                  className={`absolute inset-0 bg-zinc-950/10 dark:bg-zinc-950/40 transition-colors ${category.accentBg}`}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent text-white flex flex-col justify-end h-3/5">
                <div className="flex justify-between items-end">
                  <div className="space-y-1 max-w-[80%]">
                    <h3 className="text-lg sm:text-xl font-black tracking-tight transition-colors group-hover:text-emerald-400">
                      {category.name}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 font-medium opacity-90">
                      {category.description}
                    </p>
                  </div>

                  <span className="text-[10px] font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/15 shrink-0">
                    {category.itemCount} Items
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
