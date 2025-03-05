import BannerCards from "@/components/BannerCards";
import BestSellers from "@/components/BestSellers ";
import BlogCard from "@/components/BlogCard";
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

const products: Product[] = [
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
  category:string;
  title: string;
  date:string
}
interface BlogProps {
  blogs: Blog[];
}

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





export default function Home3() {
  return (
    <div className="container mx-auto min-w-[1200px] px-4 py-8">
      <HeroSlider />
      <GroceryCategoriesGrid />
      <BannerCards banners={banners.slice(0,2)} />
      <BestSellers />
      <div className="h-[64px] w-[1200px] bg-[#FBEACF] p-5 text-center">
        <h3 className="text-xl text-[#202435]  uppercase">
          Super discount for your{" "}
          <span className="font-bold">first purchase.</span>{" "}
        </h3>
      </div>
      <ProductGrid products={products} />
      <BannerCards banners={banners.slice(-3)}/>
      <BlogCard blogs={blogs}/>
    </div>
    
  );
}
