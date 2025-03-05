import CategoryCards from "@/components/CategoryCards";
import GroceryCategoriesGrid from "@/components/GroceryCategoriesGrid";
import HeroSlider from "@/components/HeroSlider";

import ProductGrid from "@/components/ProductGrid";

const sixProducts = [
  {
    id: "1",
    title: "All Natural Italian-Style Chicken Meatballs",
    price: 27.25,
    originalPrice: 34.75,
    discount: 20,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: 89,
  },
  {
    id: "2",
    title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: 23,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: 75,
  },
  {
    id: "3",
    title: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
    originalPrice: 24.0,
    discount: 19,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: 95,
  },
  {
    id: "4",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    price: 49.99,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: 95,
  },
  {
    id: "5",
    title: "Blue Diamond Almonds Lightly Salted",
    price: 11.68,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: 89,
  },
  {
    id: "6",
    title: "Blueberries - 1 Pint Package",
    price: 3.99,
    originalPrice: 4.49,
    discount: 11,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: 85,
  },
];
interface Category {
    id: number;
    title: string;
    subTitle?: string; 
    description: string;
    discount?: number;
    image: string;
    link: string;
    color?: string; 
    btn?: string; 
  }
  
  const categories: Category[] = [
    {
      id: 1,
      title: "Cookie and Ice Cream",
      subTitle: "Weekend Discount",
      description: "Bacola Weekend Discount",
      discount: 40,
      image: "/placeholder.svg?height=230&width=420",
      link: "/shop-now",
      color: "#A2D1D6",
      btn: "#233A95",
    },
    {
      id: 2,
      title: "Dairy & Eggs",
      subTitle: "Weekend Discount",
      description: "A different kind of grocery store",
      discount: 40,
      image: "/placeholder.svg?height=230&width=420",
      link: "/shop-now",
      color: "#FFD8E5",
      btn: "#ED174A",
    },
  ];
  
  

const Page3 = () => {
  return (
    <div className="container mx-auto w-[1200px] mt-5">
      <HeroSlider />
      <GroceryCategoriesGrid />
      <div className="flex">
        <div className="mb-10 mt-10 flex fles-col">
          <div className="border border-[#ED174A] rounded-lg ">
            <div>
              <h3 className="font-2xl font-semibold text-end text-[#233A95]">
                Special Offers of the week!{" "}
              </h3>
              <div className="flex ">
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

              <p className="font-xs font-regular text-[#9B9BB4]">
                Ut placerat, magna quis porttitor vulputate, magna nunc auctor
                ante.
              </p>
            </div>

            <div>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-4 p-12">
                  <div className="relative min-w-[120px]">
                    <div className="absolute -left-2 -top-2 w-12 h-12 bg-instacart-rose rounded-full flex items-center justify-center text-white font-bold">
                      18%
                    </div>
                    <div className="bg-[#C4C4C4] aspect-square w-full max-w-[120px]"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-[#C2C2D3] line-through">
                        $5.49
                      </span>
                      <span className="text-2xl font-semibold text-[#D51243]">
                        $4.49
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Chobani Complete Vanilla Greek Yogurt
                    </h3>
                    <div className="text-xs text-instacart-green font-semibold mb-3">
                      IN STOCK
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-gradient-to-r from-instacart-rose via-instacart-yellow to-instacart-green h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex flex-col items-center justify-center border border-gray-200 rounded p-2 w-12">
                        <span className="text-xs font-semibold">7h</span>
                      </div>
                      <div className="flex flex-col items-center justify-center border border-gray-200 rounded p-2 w-12">
                        <span className="text-xs font-semibold">1d</span>
                      </div>
                      <div className="flex flex-col items-center justify-center border border-gray-200 rounded p-2 w-12">
                        <span className="text-xs font-semibold">4d</span>
                      </div>
                      <div className="text-xs text-gray-500 ml-2 self-center">
                        Remains until the end
                        <br />
                        of the offer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pl-5">
          <ProductGrid products={sixProducts} />
        </div>
      </div>
      <CategoryCards categories={categories} />
      
    </div>
  );
};

export default Page3;
