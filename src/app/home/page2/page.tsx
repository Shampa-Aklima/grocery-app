import BannerCards from "@/components/BannerCards";
import BlogCard from "@/components/BlogCard";
import HeroSlider from "@/components/HeroSlider";
import ProductGridWithBanner from "@/components/ProductGridWithBanner";
import ProductSpecialOfferGrid from "@/components/ProductSpecialOfferGrid";
import { Button } from "@/components/ui/button";

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

const products = [
  {
    id: "1",
    title: "Zevia Kidz StrawberryLemonade Zero Calorie",
    originalPrice: 7.95,
    price: 5.95,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 25,
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
const blogs:Blog[] = [
  {
    id: 1,
    category:"Grocery",
    title: "But I must explain to you how all this mistaken idea",
    date:"Jan 13 2025"
  },
  {
    id: 2,
    category:"Grocery",
    title: "The Problem With Typefaces on the Web",
    date:"Jan 13 2025"
  },
  {
    id: 3,
    category:"Grocery",
    title: "But I must explain to you how all this mistaken idea",
    date:"Jan 13 2025"
  }
]
const Page2 = () => {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <div className="w-full mt-5">
        <HeroSlider />{" "}
      </div>
      <div className="flex justify-between gap-3 w-full h-[125px] bg-[#F8EFEA] rounded-md p-12">
        <h3 className="text-2xl font-semibold text-[#00B853] ">
          100% Secure delivery without contacting the courier
        </h3>
        <Button className="bg-[#00B853] rounded-full text-sm text-white">
          Shop Now
        </Button>
      </div>
      <div>
        <div>
          <div className=" mb-10 mt-10 gap-10 py-5 ">
            <div className="flex justify-center items-center gap-10">
              <div>
                <h3 className="font-2xl font-semibold text-end text-[#233A95]">
                  Special Offers of the week!
                </h3>
                <p className="font-xs font-regular text-[#9B9BB4]">
                  Ut placerat, magna quis porttitor vulputate, magna nunc auctor
                  ante.
                </p>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2 w-10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      11
                    </span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2  w-10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      14
                    </span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2  w-10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      13
                    </span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2 10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      16
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ProductSpecialOfferGrid />
          </div>
          <BannerCards banners={banners.slice(-3)} />
          <div className="p-4 bg-gray-50 min-h-screen">
            <ProductGridWithBanner products={products} />
          </div>
          <div className="h-[64px] w-[1200px] bg-[#FFEEF2] p-5 text-center">
            <h3 className="text-xl text-[#202435] uppercase font-bold"> Save an Extra 5-10 % On Every Autoship Order!  </h3>
          </div>
          <BlogCard blogs={blogs}/>

         
        </div>
      </div>
    </div>
  );
};

export default Page2;
