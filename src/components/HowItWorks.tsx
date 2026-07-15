import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface Guideline {
  title: string;
  description: string;
  icon: string;
  type: "buyer" | "seller";
}

export default async function HowItWorks() {
  const steps: Step[] = [
    {
      number: "01",
      title: "List Your Gear",
      description: "Take clear photos of your tech, specify its exact condition, log its usage duration, and publish your listing.",
      icon: "📦",
    },
    {
      number: "02",
      title: "Chat & Agree",
      description: "Connect directly with verified buyers or sellers via secure chat. Agree on a fair price and a convenient meetup location.",
      icon: "💬",
    },
    {
      number: "03",
      title: "Safe Handshake",
      description: "Meet up in a secure public space, inspect the hardware thoroughly yourself, and complete the instant transaction.",
      icon: "🤝",
    },
  ];

  const guidelines: Guideline[] = [
    {
      title: "Inspect Before Paying",
      description: "Never send money upfront. Always meet the seller in person to boot up, run diagnostics, and inspect the item.",
      icon: "🔍",
      type: "buyer",
    },
    {
      title: "Public Meetups Only",
      description: "Arrange deals in crowded, well-lit public zones like subway stations, busy cafes, or shopping centers.",
      icon: "🛡️",
      type: "buyer",
    },
    {
      title: "Honest Listing Details",
      description: "Disclose any cosmetic scuffs, internal hardware faults, or functional issues clearly in your description.",
      icon: "📝",
      type: "seller",
    },
    {
      title: "Instant Secure Payments",
      description: "Accept cash or secure, real-time mobile/digital bank transfers only after the buyer has fully verified the device.",
      icon: "💵",
      type: "seller",
    },
  ];

  return (
    <section className="py-20 w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="flex flex-col mb-16 text-center items-center space-y-3">
          <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            🛡️ Safe Trading Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            How It Works &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
              Safety Protocols
            </span>
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            An open, secure, peer-to-peer marketplace designed specifically for developers and tech enthusiasts.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-850/65 rounded-3xl text-left hover:border-emerald-500/30 transition-all duration-300"
            >
     
              <div className="absolute top-6 right-8 text-4xl font-black text-zinc-200 dark:text-zinc-800/60 select-none">
                {step.number}
              </div>

          
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center text-2xl shadow-sm border border-zinc-200/50 dark:border-zinc-800/80 mb-6">
                {step.icon}
              </div>

  
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

 
        <div className="p-8 sm:p-12 bg-zinc-900 dark:bg-zinc-900/20 border border-zinc-800 rounded-3xl text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between relative z-10">
      
            <div className="max-w-md space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                Security Protocol
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Safety First Initiative
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                Buying used hardware requires vigilance. We enforce these clean, protective guidelines to ensure every peer-to-peer transaction is transparent, reliable, and risk-free.
              </p>
            </div>

        
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {guidelines.map((guide, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-zinc-950/60 border border-zinc-850 rounded-2xl space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{guide.icon}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase border tracking-wider ${
                      guide.type === "buyer" 
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
                        : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    }`}>
                      {guide.type === "buyer" ? "Buyer" : "Seller"}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-white">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {guide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}