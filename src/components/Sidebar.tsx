import Link from "next/link";
import { Button } from "./ui/button";
const categories = [
  "Beverages",
  "Biscuits & Snacks",
  "Bread & Bakery",
  "Breakfast & Dairy",
  "Fruits & Vegetables",
  "Frozen Foods",
  "Grocery & Staples",
  "Meat & Seafood",
];

const Sidebar = () => {
  return (
    <div className=" mx-auto flex-col py-2 border-2 border-[#e5e5e5]">
      <div className="w-[270px] h-[513px] space-y-6">
        <div className="space-y-2 border-b-2 p-4">
          {categories.map((category) => (
            <Link
              key={category}
              href="#"
              className="flex items-center gap-2 text-sm hover:text-primary"
            >
              {category}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 mx-auto">
          <Link href="#" className="font-inter text-sm text-[#3E445A]">
            Value of the Day
          </Link>
          <Link href="#" className="font-inter text-sm text-[#3E445A]">
            Top 100 Offers
          </Link>
          <Link href="#" className="font-inter text-sm text-[#3E445A]">
            New Arrivals
          </Link>
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
          <span className="text-3xl font-bold font-dosis text-[#D51243]">$14.99</span>
          <Button className="variant=ghost w-22 h-10 mt-3 bg-[#35AFA0] border-1 rounded-full">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
