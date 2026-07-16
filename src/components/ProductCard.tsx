import Link from "next/link";
import Image from "next/image";


export interface Product {
  _id: string;
  title: string;
  shortDescription: string;
  price: number;
  images: string[];
  condition: "Like New" | "Excellent" | "Good" | "Fair";
  durationUsed: number;
  sellerName: string;
  rating: number;
  hasDefects: boolean;
  defectsDescription?: string;
  category: string;
  location: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  const conditionStyles: Record<Product["condition"], string> = {
    "Like New":
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Excellent:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Good: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Fair: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  };

  return (
    <div className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/70 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 relative">
      <div className="aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 relative overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.jpg"} 
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <span
          className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-md border backdrop-blur-sm shadow-sm select-none ${conditionStyles[product.condition]}`}
        >
          {product.condition}
        </span>

        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-md border border-zinc-200/20 bg-black/40 text-white backdrop-blur-sm select-none">
          Used:{" "}
          {product.durationUsed >= 12
            ? `${Math.floor(product.durationUsed / 12)} Year${product.durationUsed % 12 > 0 ? ` ${product.durationUsed % 12}m` : ""}`
            : `${product.durationUsed} Months`}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500 font-semibold">
            <span className="truncate max-w-[120px]">
              👤 {product.sellerName}
            </span>
            <span className="flex items-center gap-0.5 text-amber-500">
              ⭐ {product.rating.toFixed(1)}
            </span>
          </div>

          <h3 className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight line-clamp-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            <Link href={`/products/${product._id}`}>
              <span className="absolute inset-0 z-10" />
              {product.title}
            </Link>
          </h3>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-1.5 select-none">
            {product.hasDefects ? (
              <span
                className="text-[10px] font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.5 rounded-md truncate max-w-full"
                title={product.defectsDescription}
              >
                ⚠️ Issues: {product.defectsDescription || "Has Defects"}
              </span>
            ) : (
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-md">
                🛡️ No Defects
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
          <span className="text-base font-black text-zinc-900 dark:text-white">
            ${product.price.toLocaleString()}
          </span>

          <div className="flex gap-1">
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-800/40 px-2 py-0.5 rounded-md">
              {product.category}
            </span>
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-800/40 px-2 py-0.5 rounded-md">
              📍 {product.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}