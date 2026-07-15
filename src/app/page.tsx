import FAQSection from "@/components/FAQSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PriceTrends from "@/components/PriceTrends";
import TopCategories from "@/components/TopCategories";
import UserTrust from "@/components/UserTrust";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <TopCategories/>
      <PriceTrends/>
      <FeaturedProducts/>
      <HowItWorks/>
      <UserTrust/>
      <FAQSection/>
    </div>
    
  );
}
