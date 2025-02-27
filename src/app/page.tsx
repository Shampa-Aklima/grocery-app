import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection ";
import BestSellers from "@/components/BestSellers ";
import HotProduct from "@/components/HotProduct";
import DiscountBanner from "@/components/DiscountBanner"
import ProductGrid from "@/components/ProductGrid";
import { CategoryCards } from "@/components/CategoryCards";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex space-x-6 mt-16">
      <Sidebar />
      <div className="w-full">
        <HeroSection />
        <BestSellers/>
        <HotProduct/>
        <DiscountBanner/>
        <ProductGrid />
        <CategoryCards/>
      </div>
    </div>
  );
};
export default HomePage;
