import React from "react";
import Link from "next/link";

interface Protocol {
  title: string;
  description: string;
  badge: "Critical" | "Pro Tip" | "Policy";
  icon: string;
}

export default async function SafetyGuidePage() {
  const buyerProtocols: Protocol[] = [
    {
      title: "The Golden Rule: Cash on Handshake",
      description: "Never send partial or full payments online before you have physically held and inspected the item. Ignore stories about 'high demand' or 'shipping constraints' that require upfront deposits.",
      badge: "Critical",
      icon: "💵",
    },
    {
      title: "Run Hardware Diagnostics",
      description: "When inspecting a device, boot it up fully. For laptops, test all USB ports, check battery health percentages, verify Wi-Fi connectivity, and check the screen for dead pixels using online test patterns.",
      badge: "Pro Tip",
      icon: "⚙️",
    },
    {
      title: "Verify Serial Numbers & iCloud/Google Accounts",
      description: "Match the hardware serial number with the retail box if provided. Ensure the previous owner has completely signed out of iCloud, Find My, or Google Device Protection before parting ways.",
      badge: "Critical",
      icon: "🔑",
    },
  ];

  const sellerProtocols: Protocol[] = [
    {
      title: "Verify Payment Clearing On-Spot",
      description: "If the buyer pays via mobile banking (bKash/Nagad), do not let them leave based on a 'successful transaction screenshot' on their device. Wait until you receive the SMS notification on your own phone or verify your bank balance directly.",
      badge: "Critical",
      icon: "📱",
    },
    {
      title: "Document Existing Conditions",
      description: "Protect yourself from false claims by capturing close-up photos of serial numbers and unique cosmetics flaws before meeting up. State structural defects openly in your product listing.",
      badge: "Policy",
      icon: "📸",
    },
    {
      title: "Reset to Factory Defaults",
      description: "For your own digital privacy, securely wipe your solid-state drives (SSDs) or perform a complete factory reset on phones to clear saved tokens, browser cookies, and personal storage.",
      badge: "Pro Tip",
      icon: "🧹",
    },
  ];

  const badgeStyles = {
    Critical: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    "Pro Tip": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Policy: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation Breadcrumb */}
        <nav className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mb-8 text-left">
          <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-900 dark:text-white">Safety Guide</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12 text-left space-y-3 border-b border-zinc-200/60 dark:border-zinc-900 pb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            🛡️ DevSwap Shield Protocol
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
            Peer-to-Peer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
              Safety Regulations
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed max-w-2xl">
            Trading second-hand engineering hardware requires diligence. We enforce a strict face-to-face marketplace model to minimize risk. Review these workflows before scheduling your swap.
          </p>
        </div>

        {/* Global Mandatory Strategy Block */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850/60 p-6 sm:p-8 rounded-3xl text-left space-y-4 mb-12 shadow-sm">
          <h3 className="text-lg font-black tracking-tight flex items-center gap-2">
            📍 Safe Zone Meetup Framework
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
            We strictly advocate for public handshakes. Never schedule a transaction at a private residence or isolated workspace. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/40 dark:border-zinc-850/40 rounded-xl text-xs font-bold text-zinc-500 dark:text-zinc-400">
              ✅ Metro/Subway Stations
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/40 dark:border-zinc-850/40 rounded-xl text-xs font-bold text-zinc-500 dark:text-zinc-400">
              ✅ Busy Shopping Malls
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/40 dark:border-zinc-850/40 rounded-xl text-xs font-bold text-zinc-500 dark:text-zinc-400">
              ✅ Mainstream Coffee Shops
            </div>
          </div>
        </div>

        {/* Segmented Guidelines Stack */}
        <div className="space-y-12">
          
          {/* Buyer Protocols Section */}
          <div className="space-y-6 text-left">
            <div className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-xl font-black tracking-tight">For Smart Buyers</h2>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">Mitigate systemic asset risks before checking out items.</p>
            </div>
            
            <div className="space-y-4">
              {buyerProtocols.map((protocol, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-850/60 rounded-2xl flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="text-2xl bg-zinc-50 dark:bg-zinc-950 p-2 rounded-xl border border-zinc-200/40 dark:border-zinc-850/40 shrink-0">
                    {protocol.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {protocol.title}
                      </h4>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase ${badgeStyles[protocol.badge]}`}>
                        {protocol.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                      {protocol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Protocols Section */}
          <div className="space-y-6 text-left">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-xl font-black tracking-tight">For Safe Sellers</h2>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">Protect your equipment and financial value from scam behaviors.</p>
            </div>

            <div className="space-y-4">
              {sellerProtocols.map((protocol, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-850/60 rounded-2xl flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="text-2xl bg-zinc-50 dark:bg-zinc-950 p-2 rounded-xl border border-zinc-200/40 dark:border-zinc-850/40 shrink-0">
                    {protocol.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {protocol.title}
                      </h4>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border tracking-wider uppercase ${badgeStyles[protocol.badge]}`}>
                        {protocol.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                      {protocol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Report Block CTA */}
        <div className="mt-16 p-6 bg-rose-500/5 border border-rose-500/20 rounded-3xl text-center space-y-3">
          <h4 className="text-sm font-black text-rose-600 dark:text-rose-400 tracking-tight">
            Encountered Suspicious Behavior?
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium max-w-md mx-auto leading-relaxed">
            If a marketplace peer asks you to bypass safe workflows or exhibits fraudulent listing descriptions, immediately alert our review board.
          </p>
          <div className="pt-1">
            <Link 
              href="mailto:support@devswap.com"
              className="inline-block text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 px-4 py-2 rounded-xl transition-all shadow-sm"
            >
              Report Fraud Action
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}