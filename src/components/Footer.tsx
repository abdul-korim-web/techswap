import React from "react";
import Link from "next/link";

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Laptops", href: "/explore?category=Laptops" },
    { label: "Phones", href: "/explore?category=Phones" },
    { label: "Keyboards", href: "/explore?category=Keyboards" },
    { label: "Audio Gear", href: "/explore?category=Audio" },
    { label: "Accessories", href: "/explore?category=Accessories" },
  ];

  const resourcesLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Safety Guide", href: "/safety" },
    { label: "Verified Sellers", href: "/sellers" },
    { label: "Pricing Guidelines", href: "/pricing" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Community Rules", href: "/rules" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900/60 transition-colors duration-300">
      {/* Top Footer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          
          {/* Brand Identity Panel (4 Cols) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <Link href="/" className="inline-flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-zinc-900 dark:text-white">
                Dev<span className="text-emerald-500">Swap</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-sm">
              The premier peer-to-peer used hardware marketplace designed specifically for programmers, designers, and creators in Bangladesh. Buy, sell, and swap gear with trusted community peers.
            </p>
            {/* Social / Workspace Status indicator */}
            <div className="inline-flex items-center space-x-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850 px-3 py-1.5 rounded-xl text-[11px] font-bold text-zinc-400 dark:text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Platform Online</span>
            </div>
          </div>

          {/* Nav Links Grid (8 Cols split into 3 columns on desktop) */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            
            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                Categories
              </h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / Company */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                Platform
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Block */}
      <div className="border-t border-zinc-200/50 dark:border-zinc-900/60 bg-zinc-50 dark:bg-zinc-950/40 py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500">
          
          <div className="flex items-center space-x-1">
            <span>© {currentYear} DevSwap. Made for creators by</span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors"
            >
              Developers
            </a>
          </div>

          <div className="flex space-x-6">
            <span className="flex items-center gap-1.5 select-none text-[11px] font-bold text-zinc-400/80">
              🇧🇩 Serving techies nationwide
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}