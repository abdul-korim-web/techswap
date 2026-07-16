"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession, signOut } from "@/lib/auth-client"; 

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  
  const { data, isPending } = useSession();
  const user = data?.user as any; 
  const isLoggedIn = !!user;


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);


  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive(href)
        ? "text-emerald-500 dark:text-emerald-400 font-bold"
        : "text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400"
    }`;


  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Safety Guide", href: "/safety" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 border-b border-slate-100 dark:border-zinc-800/80 shadow-sm backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          

          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tight text-emerald-500">
              RE<span className="text-zinc-900 dark:text-white">MARKET</span>
            </Link>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            {baseLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            ))}

     
            <div className="flex items-center space-x-5 border-l border-zinc-200 dark:border-zinc-800 pl-6">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all duration-200"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <svg className="h-5 w-5 stroke-[2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 stroke-[2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {isPending ? (
                <div className="h-8 w-8 rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
              ) : isLoggedIn ? (
        
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 focus:outline-none p-1 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative flex items-center justify-center font-bold text-emerald-500 text-sm">
                      {user.image ? (
                        <Image src={user.image} alt={user.name} fill className="object-cover" />
                      ) : (
                        user.name?.[0] || "U"
                      )}
                    </div>
                  </button>

                  {isProfileOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)} />
                      <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 rounded-2xl shadow-xl z-20 p-2 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="p-3 border-b border-zinc-100 dark:border-zinc-800/60">
                          <p className="text-xs font-black truncate text-zinc-900 dark:text-white">{user.name}</p>
                          <p className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 truncate">{user.email}</p>
                          <span className="mt-1 inline-block text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            {user.role}
                          </span>
                        </div>

                        <div className="py-1.5 space-y-0.5">
                          <Link
                            href="/dashboard"
                            onClick={() => setIsProfileOpen(false)}
                            className={`w-full block text-left text-xs font-bold px-3 py-2 rounded-xl transition-colors ${isActive("/dashboard") ? "bg-emerald-500/10 text-emerald-500" : "hover:bg-zinc-50 dark:hover:bg-zinc-950 text-zinc-700 dark:text-zinc-300"}`}
                          >
                            Dashboard
                          </Link>

                  
                          {user.role === "seller" && (
                            <>
                              <Link
                                href="/items/add"
                                onClick={() => setIsProfileOpen(false)}
                                className={`w-full block text-left text-xs font-bold px-3 py-2 rounded-xl transition-colors ${isActive("/items/add") ? "bg-emerald-500/10 text-emerald-500" : "hover:bg-zinc-50 dark:hover:bg-zinc-950 text-zinc-700 dark:text-zinc-300"}`}
                              >
                                ➕ Add Item
                              </Link>
                              <Link
                                href="/items/manage"
                                onClick={() => setIsProfileOpen(false)}
                                className={`w-full block text-left text-xs font-bold px-3 py-2 rounded-xl transition-colors ${isActive("/items/manage") ? "bg-emerald-500/10 text-emerald-500" : "hover:bg-zinc-50 dark:hover:bg-zinc-950 text-zinc-770 dark:text-zinc-300"}`}
                              >
                                📋 Manage Items
                              </Link>
                            </>
                          )}
                        </div>

                        <div className="pt-1.5 border-t border-zinc-100 dark:border-zinc-800">
                          <button
                            onClick={async () => {
                              setIsProfileOpen(false);
                              await signOut();
                              window.location.reload();
                            }}
                            className="w-full text-left text-xs font-black text-rose-500 hover:bg-rose-500/10 px-3 py-2 rounded-xl transition-colors"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
     
                <>
                  <Link href="/login" className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400">
                    Sign In
                  </Link>
                  <Link href="/register" className="px-4 py-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-all duration-200 shadow-sm shadow-emerald-500/20">
                    Join Free
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {isDarkMode ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 5.657a4 4 0 118 0 4 4 0 01-8 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>


      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-900 shadow-xl`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {baseLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-base font-medium ${isActive(link.href) ? "text-emerald-500 bg-emerald-500/5" : "text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:bg-zinc-50 dark:hover:bg-zinc-900"}`}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn && (
            <>
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-base font-medium ${isActive("/dashboard") ? "text-emerald-500 bg-emerald-500/5" : "text-zinc-600 dark:text-zinc-400"}`}
              >
                Dashboard
              </Link>
   
              {user.role === "seller" && (
                <>
                  <Link
                    href="/items/add"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl text-base font-medium ${isActive("/items/add") ? "text-emerald-500 bg-emerald-500/5" : "text-zinc-600 dark:text-zinc-400"}`}
                  >
                    ➕ Add Item
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl text-base font-medium ${isActive("/items/manage") ? "text-emerald-500 bg-emerald-500/5" : "text-zinc-600 dark:text-zinc-400"}`}
                  >
                    📋 Manage Items
                  </Link>
                </>
              )}
            </>
          )}

          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 mt-4">
            {isLoggedIn ? (
              <button
                onClick={async () => {
                  setIsOpen(false);
                  await signOut();
                  window.location.reload();
                }}
                className="w-full text-center py-3 text-base font-semibold text-white dark:text-zinc-950 bg-zinc-900 dark:bg-white rounded-xl"
              >
                Logout
              </button>
            ) : (
              <div className="space-y-2">
                <Link href="/login" onClick={() => setIsOpen(false)} className="block w-full text-center py-2.5 text-base font-semibold text-zinc-600 dark:text-zinc-400">
                  Sign In
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 text-base font-semibold text-white bg-emerald-500 rounded-xl">
                  Join Free
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}