import BannerCards from "@/components/BannerCards";
import GroceryCategoriesGrid from "@/components/GroceryCategoriesGrid";
import ProductList from "@/components/ProductList";

import SidebarBanner from "@/components/SidebarBanner";

interface Banners {
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
{
  id: 3,
  title: "Natural Eggs",
  subTitle: "Weekend Discount 40%",
  description: "Eat one every day",
  image: "/images/winter-sale.jpg",
  link: "/shop now",
  bgColor: "#C4C4C4",
},
{
  id: 4,
  title: "Taste the Best",
  subTitle: "Weekend Discount 40%",
  description: "Shine the morning",
  image: "/images/winter-sale.jpg",
  link: "/shop now",
  bgColor: "#C4C4C4",
},
{
  id: 5,
  title: "Ditch the Junk",
  subTitle: "Weekend Discount 40%",
  description: "Breakfast made better",
  image: "/images/winter-sale.jpg",
  link: "/shop now",
  bgColor: "#C4C4C4",
},
];
const home4Products = [
  
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
  
const page4 = () => {
  return (
    <div className="container w-[1200px] mx-auto mt-10 ">
      <div className="flex" >
        <SidebarBanner/>
        <ProductList products={home4Products} />
      </div>
      <div>
      <div className="w-full h-[74px] bg-instacart-rose-light px-6 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="flex items-center">
          <span className="text-instacart-rose font-regular mr-1">
            Super discount for your
          </span>
          <span className="text-instacart-rose font-bold underline">
            first purchase.
          </span>
        </div>
        <div className="flex justify-center items-center mt-2 sm:mt-0">
          <div className="border-2 border-dotted rounded-full border-[#FF6048] text-[#ED174A] px-2 py-1 text-sm font-bold font-dosis mr-2">
            FREE250AC
          </div>
          <span className="text-xs text-gray-500">
            Use discount code in checkout!
          </span>
        </div>
      </div>
    </div>
    <div className="flex" >
        <SidebarBanner/>
        <ProductList products={home4Products} />
      </div>
     


      <BannerCards banners={banners.slice(-3)}/>
      <GroceryCategoriesGrid/>
      </div>
     
   
  );
};

export default page4;
