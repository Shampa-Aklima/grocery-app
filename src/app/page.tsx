
"use client";
import Sidebar from "@/components/Sidebar";
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
import Banner from "@/components/Banner";
import HeroSlider from "@/components/HeroSlider";


const HomePage = () => {
  return (
    
    <div className="container max-w-[100%] mx-auto mt-16 ">
  
      <div className="flex justify-evenly ">
        <div className=" max-w-[25%]">
          <Sidebar />
          <DownloadApp />
          <TrendingSearch />
          <CustomerComment />
        </div>
        <div className=" max-w-[65%]">
          <HeroSlider/>
          <BestSellers />
          <Banner/>
          <HotProduct />
          <DiscountBanner />
          <ProductGrid />
          <CategoryCards />
        </div>
      </div>
      <div className="w-full p-10">
      <GroceryCategoriesGrid />
      <Newsletter />
      <FeatureSection /> 
      </div>
         
    </div>
  );
};
export default HomePage;
