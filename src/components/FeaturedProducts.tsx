
import Link from "next/link";

import ProductCard from "./ProductCard";

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

export default async function FeaturedProducts() {
  const products: IProduct[] = [
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
      shortDescription:
        "ANC works perfectly. Minor scuffs on the left ear cup.",
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

  
  return (
    <section className="py-20 w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-400 dark:to-teal-500">
                Hardware Deals
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              Explore authentic developer gear listed directly from the tech
              workspace.
            </p>
          </div>

          <Link
            href="/explore"
            className="text-xs font-bold text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-850 px-4 py-2.5 rounded-xl transition-all shadow-sm w-fit"
          >
            View All Marketplace
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
}
