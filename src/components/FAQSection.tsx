"use client";

import React from "react";
import { Accordion } from "@heroui/react";
import {
  Box,
  ChevronDown,
  CreditCard,
  Receipt,
  ShieldCheck,
  CircleQuestion,
} from "@gravity-ui/icons";

interface FAQItem {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export default function FAQSection() {
  const faqItems: FAQItem[] = [
    {
      title: "How do I verify the product's condition before buying?",
      content:
        "Check the 'Condition' badge on the product page. For 'Like New' or 'Excellent' items, request original purchase receipts or warranty cards. Always meet in person to physically test buttons, screen response, and run diagnostic tests.",
      icon: <Box />,
    },
    {
      title: "How should I make the payment?",
      content:
        "Never pay in advance or send money online before inspecting the item. We strongly recommend cash-on-delivery or direct mobile banking transfers (bKash/Nagad) only after you have met the seller and verified the product.",
      icon: <CreditCard />,
    },
    {
      title: "Can I return a product if I find a defect later?",
      content:
        "Since this is a peer-to-peer (P2P) marketplace, returns depend entirely on your mutual agreement with the seller. We advise negotiating a 24-hour testing warranty with the seller before finalizing the deal.",
      icon: <Receipt />,
    },
    {
      title: "How can I stay safe from potential scams?",
      content:
        "Always meet in highly populated, public places like coffee shops, shopping malls, or metro stations. Avoid secluded areas, never share personal financial credentials, and trust your instincts—if a deal looks too good to be true, it probably is.",
      icon: <ShieldCheck />,
    },
    {
      title: "What does the 'Duration Used' and 'Defects' field mean?",
      content:
        "Sellers are required to declare exactly how many months they used the device and disclose any issues (e.g., rigid keys, screen scratches). Checking these fields helps you evaluate the fair pricing of the hardware.",
      icon: <CircleQuestion />,
    },
  ];

  return (
    <section className="py-20 w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 text-center items-center space-y-3">
          <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            💬 Help Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
              Questions
            </span>
          </h2>
          <p className="max-w-md text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            Got questions about swapping, buying, or listing your tech? We have got you covered.
          </p>
        </div>

        {/* HeroUI v3 Accordion */}
        <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-850/60 rounded-3xl p-4 sm:p-8">
          <Accordion className="w-full divide-y divide-zinc-200/60 dark:divide-zinc-800/60">
            {faqItems.map((item, index) => (
              <Accordion.Item key={index} className="py-2 first:pt-0 last:pb-0">
                <Accordion.Heading>
                  <Accordion.Trigger className="py-4 flex w-full items-center justify-between text-left text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    <span className="flex items-center">
                      {item.icon && (
                        <span className="mr-3 size-4 shrink-0 text-zinc-400 dark:text-zinc-500">
                          {item.icon}
                        </span>
                      )}
                      {item.title}
                    </span>
                    <Accordion.Indicator className="text-zinc-400 dark:text-zinc-500 transition-transform duration-200">
                      <ChevronDown />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="pb-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {item.content}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}