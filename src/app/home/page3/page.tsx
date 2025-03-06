import BannerCards from "@/components/BannerCards";
import BestSellers from "@/components/BestSellers ";
import BlogCard from "@/components/BlogCard";
import GroceryCategoriesGrid from "@/components/GroceryCategoriesGrid";
import HeroSlider from "@/components/HeroSlider";
import ProductList from "@/components/ProductList";

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

interface Product {
  id: string;
  title: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  store: string;
}
interface ProductProps {
  products: Product[];
}

const home3Products = [
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

interface Blog {
  id: number;
  category: string;
  title: string;
  date: string;
}
interface BlogProps {
  blogs: Blog[];
}

const blogs: Blog[] = [
  {
    id: 1,
    category: "Grocery",
    title: "But I must explain to you how all this mistaken idea",
    date: "Jan 13 2025",
  },
  {
    id: 2,
    category: "Grocery",
    title: "The Problem With Typefaces on the Web",
    date: "Jan 13 2025",
  },
  {
    id: 3,
    category: "Grocery",
    title: "But I must explain to you how all this mistaken idea",
    date: "Jan 13 2025",
  },
];
export default function Home3() {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <HeroSlider />
      <GroceryCategoriesGrid />
      <BannerCards banners={banners.slice(0, 2)} />
      <BestSellers />
      <div className="h-[64px] w-full bg-[#FBEACF] p-5 text-center">
        <h3 className="text-xl text-[#202435] uppercase">
          Super discount for your{" "}
          <span className="font-bold">first purchase.</span>
        </h3>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <div className="w-[40%]">
          <div className="flex justify-center mt-6">
            <div className="w-[220px] border border-red-200 rounded-lg p-3 flex flex-col">
              <div className="mb-2">
                <h3 className="text-sm font-medium text-gray-700">
                  Deals of the week!
                </h3>
                <div className="flex gap-1 mt-1">
                  {["70", "14", "41", "11"].map((index) => (
                    <div
                      key={index}
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium ${
                        index === 0
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="relative w-full aspect-square bg-gray-300 mb-2">
                <div className="absolute top-0 left-0 bg-red-500 rounded-full w-9 h-9 flex items-center justify-center text-white text-xs font-bold">
                  18%
                </div>
              </div>
              <div>
                {" "}
                <div className="mt-auto">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400 line-through text-xs">
                      $5.49
                    </span>
                    <span className="text-red-500 font-bold text-sm">
                      $4.49
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-800 mt-1">
                    Chobani Complete Vanilla Greek Yogurt
                  </h4>
                  <p>79 IN STOCK</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 ${
                          star <= 4 ? "text-yellow-400" : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="w-full h-1.5 mt-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-full"></div>
                  <div className="text-right text-xs text-gray-500 mt-0.5">
                    79
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ProductList products={home3Products.slice(0,6)} />
        </div>
      </div>
      <BannerCards banners={banners.slice(-3)} /
      >
          <ProductList products={home3Products} />
      <BlogCard blogs={blogs} />
    </div>
  );
}
