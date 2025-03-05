import BannerCards from "@/components/BannerCards";
import BestSellers from "@/components/BestSellers ";
import GroceryCategoriesGrid from "@/components/GroceryCategoriesGrid";
import HeroSlider from "@/components/HeroSlider";
import ProductGrid from "@/components/ProductGrid";

interface Banner {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  link: string;
  bgColor: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: "Cookie and Ice Cream",
    subTitle: "Weekend Discount 40%",
    description: "Up to 50% off on all products!",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#A2D1D6",
  },
  {
    id: 2,
    title: "Cookie and Ice Cream",
    subTitle: "Weekend Discount 40%",
    description: "Up to 50% off on all products!",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#FFD8E5",
  },
];

  interface Product {
    id: string;  
    title: string;
    price?: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    store?: number;
    image: string;
  }

export default function Home3() {
  return (
    <div className="container mx-auto min-w-[1200px] px-4 py-8">
      <HeroSlider />
      <GroceryCategoriesGrid />
      <BannerCards banners={banners} />
      <BestSellers />
      <div className="h-[64px] w-[1200px] bg-[#FBEACF] p-5 text-center">
        <h3 className="text-xl text-[#202435]  uppercase">Super discount for your <span className="font-bold">first purchase.</span> </h3>
      </div>
      <ProductGrid/>
    </div>
  );
}
