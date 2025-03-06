import Link from "next/link";
import { Button } from "./ui/button";




const categories = [
    { name: "Beverages", icon: "" },
    { name: "Biscuits & Snacks", icon:"" },
    { name: "Bread & Bakery", icon: "" },
    { name: "Breakfast & Dairy", icon: "" },
    { name: "Fruits & Vegetables", icon: "" },
    { name: "Frozen Foods", icon: "" },
    { name: "Grocery & Staples", icon: "" },
    { name: "Meat & Seafood", icon: "" },
   
  ];
const SidebarBanner = () => {
    return (
        <div>
            <div className="space-y-4 mt-4 mr-8 border-1 border-[#C4C4C4] ">
            <div className="w-[380px] h-[396px] bg-[#C4C4C4] p-8 rounded-lg flex flex-col">
                <h3 className="font-thin mb-2 text-sm ">Weekly Discounts on</h3>
                <h3 className="font-thin mb-2 text-2xl text-[#202435]">
                    Fruits and Vegetables
                </h3>
                <p className="font-thin mb-2 text-sm">Bacola Weekend Discount</p>
                <Button className="variant=ghost w-22 h-10 mt-3 bg-[#233A95] border-1 rounded-full">
                    Shop Now
                </Button>
            </div>
            <div className="w-[380px] h-[396px] border-2 border-[#e5e5e5] space-y-3">
                <div className="grid grid-cols-2">
                    {categories.slice(0, 8).map((category, index) => (
                        <div key={index} className="flex justify-start items-center space-x-3 p-4 ">
                            <Link href="#"/>
                            <span className="font-medium text-[#3E445A]">
                                {category.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div>
        </div>
        </div>
        
        
    );
};

export default SidebarBanner;
