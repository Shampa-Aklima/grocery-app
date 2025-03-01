import Link from "next/link";
import { Button } from "./ui/button";
import {
  Coffee,
  Cookie,
  Sandwich,
  Egg,
  Apple,
  Snowflake,
  ShoppingCart,
  Drumstick,
} from "lucide-react";

const categories = [
  { name: "Beverages", icon: Coffee },
  { name: "Biscuits & Snacks", icon: Cookie },
  { name: "Bread & Bakery", icon: Sandwich },
  { name: "Breakfast & Dairy", icon: Egg },
  { name: "Fruits & Vegetables", icon: Apple },
  { name: "Frozen Foods", icon: Snowflake },
  { name: "Grocery & Staples", icon: ShoppingCart },
  { name: "Meat & Seafood", icon: Drumstick },
  { name: "Value of the Day", icon: "" },
  { name: "Top 100 Offers", icon: "" },
  { name: "New Arrivals", icon: "" },
];

const Sidebar = () => {
  return (
    <div className=" w-[270px] space-y-6 mx-auto flex-col py-2 ">
      <div className="w-[270px] border-2 border-[#e5e5e5] space-y-3">
        <div className="grid grid-cols-1">
          {categories.slice(0, 8).map((category, index) => (
            
            <div key={index} className="flex justify-start items-center space-x-3 p-4 ">
              
              <Link href="#"/>  
              <category.icon className="w-6 h-6 text-gray-600" />
                <span className="font-medium text-[#3E445A]">
                  {category.name}
                </span>
              
            </div>
            
          ))}
          <div className="border-t-2 font-medium text-[#3E445A] px-6 py-3 ">
            {categories.slice(8).map((category, index) => (
              <div key={index} >
                <Link href="#" >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4  mt-4 mr-12">
        <div className="w-[270px] h-[403px] bg-[#C4C4C4] p-8 rounded-lg flex flex-col">
          <p className="font-inter font-light text-white">
            Bacola Natural Foods
          </p>
          <h3 className=" text-xl font-inter font-light text-[#202435]">
            Special Organic
          </h3>
          <h3 className=" text-2xl font-semibold text-[#202435] mb-2">
            Roats Burger
          </h3>
          <p className="text-sm font-light text-[#202435]">only-from</p>
          <span className="text-3xl font-dosis font-bold text-[#D51243]">
            $14.99
          </span>
        </div>
      </div>

      <div className="space-y-4 mt-4 mr-8 ">
        <div className="w-[270px] h-[403px] bg-[#C4C4C4] p-8 rounded-lg flex flex-col">
          <h3 className="font-thin mb-2 text-sm ">Best bakery products</h3>
          <h3 className="font-thin mb-2 text-2xl text-[#202435]">
            Freshest products
          </h3>
          <span className="font-bold mb-2 text-xl text-[#202435] ">
            every hour.
          </span>
          <p className="font-thin mb-2 text-sm">only-from</p>
          <span className="text-3xl font-bold font-dosis text-[#D51243]">
            $14.99
          </span>
          <Button className="variant=ghost w-22 h-10 mt-3 bg-[#35AFA0] border-1 rounded-full">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
