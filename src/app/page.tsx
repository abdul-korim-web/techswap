import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import PriceTrends from "@/components/PriceTrends";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <TopCategories/>
      <PriceTrends/>
      <FeaturedProducts/>
    </div>
    
  );
}
