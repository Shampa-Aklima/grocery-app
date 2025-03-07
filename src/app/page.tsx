"use client";
import Sidebar from "@/components/Sidebar";
import BestSellers from "@/components/BestSellers ";
import HotProduct from "@/components/HotProduct";
import DiscountBanner from "@/components/DiscountBanner";
import GroceryCategoriesGrid from "@/components/GroceryCategoriesGrid";
import Banner from "@/components/Banner";
import HeroSlider from "@/components/HeroSlider";
import ProductList from "@/components/ProductList";
import BannerCards from "@/components/BannerCards";

const banners: Banner[] = [
  {
    id: 1,
    title: "Legumes & Cereals",
    subTitle: "Weekend Discount 40%",
    description: "Feed your family the best",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#C4C4C4",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    subTitle: "Weekend Discount 40%",
    description: "A different kind of grocery store",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#C4C4C4",
  },
  {
    id: 3,
    title: "Cookie and Ice Cream",
    subTitle: "Weekend Discount 40%",
    description: "Up to 50% off on all products!",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#A2D1D6",
  },

  {
    id: 4,
    title: "Natural Eggs",
    subTitle: "Weekend Discount 40%",
    description: "Eat one every day",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#C4C4C4",
  },
  {
    id: 5,
    title: "Taste the Best",
    subTitle: "Weekend Discount 40%",
    description: "Shine the morning",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#C4C4C4",
  },
  {
    id: 6,
    title: "Ditch the Junk",
    subTitle: "Weekend Discount 40%",
    description: "Breakfast made better",
    image: "/images/winter-sale.jpg",
    link: "/shop now",
    bgColor: "#C4C4C4",
  },
];

const home1Products = [
  {
    id: "1",
    title: "All-Natural Indian-Style Chicken Meatballs",
    originalPrice: 9.25,
    price: 7.25,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "2",
    title: "Annie's Homegrown Sweet & Salty Kettle Corn",
    originalPrice: 5.25,
    price: 3.2,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "3",
    title: "Blue Diamond Almonds Lightly Salted",
    originalPrice: 12.99,
    price: 10.99,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "4",
    title: "Blueberries - 1 Pint Package",
    originalPrice: 4.99,
    price: 3.99,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "5",
    title: "Fage Sport Chop Cheese Creamy Original",
    originalPrice: 12.5,
    price: 10.5,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "6",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    originalPrice: 54.99,
    price: 49.99,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "7",
    title: "Fresh Organic Broccoli Crowns",
    originalPrice: 5.75,
    price: 4.45,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "8",
    title: "Chobani Complete Vanilla Greek Yogurt",
    originalPrice: 5.99,
    price: 4.49,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
];

const HomePage = () => {
  return (
    <div className="container max-w-[100%] mx-auto mt-8 ">
      <div className="flex justify-evenly ">
        <div className=" max-w-[25%]">
          <Sidebar />
        </div>
        <div className=" max-w-[65%]">
          <HeroSlider />
          <BestSellers />
          <Banner />
          <HotProduct />
          <DiscountBanner />
          <ProductList products={home1Products} />
          <BannerCards banners={banners.slice(0, 2)} />
        </div>
      </div>
      <div>
        <GroceryCategoriesGrid />
      </div>
    </div>
  );
};
export default HomePage;
