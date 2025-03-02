"use client";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection ";
import BestSellers from "@/components/BestSellers ";
import HotProduct from "@/components/HotProduct";
import DiscountBanner from "@/components/DiscountBanner";
import ProductGrid from "@/components/ProductGrid";
import CategoryCards from "@/components/CategoryCards";
import CustomerComment from "@/components/CustomerComment";
import TrendingSearch from "@/components/TrendingSearch";
import GroceryCategoriesGrid from "@/components/GroceryCategoriesGrid";
import Newsletter from "@/components/Newsletter";
import DownloadApp from "@/components/DownloadApp";
import FeatureSection from "@/components/FeatureSection";
import Banner from "@/components/ui/Banner";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto space-x-6 mt-16">
      <div className="flex">
        <div className="w-full">
          <Sidebar />
          <DownloadApp />
          <TrendingSearch />
          <CustomerComment />
        </div>
        <div className="w-full">
          <HeroSection />
          <BestSellers />
          <Banner/>
          <HotProduct />
          <DiscountBanner />
          <ProductGrid />
          <CategoryCards />
        </div>
      </div>
      <GroceryCategoriesGrid />
      <Newsletter />
      <FeatureSection />    
    </div>
  );
};
export default HomePage;
