import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  "Beverages",
  "Bread & Bakery",
  "Breakfast & Dairy",
  "Fruits & Vegetables",
  "Grocery & Staples",
  "Meat & Seafood",
];

const Sidebar = () => {
  return (
    <div className=" mx-auto flex space-x-6">
      {/* Left Sidebar (270px) */}
      <div className="w-[270px] space-y-6">
        <div className="space-y-2">
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
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Special Organic Beans Burger</h3>
            <p className="text-primary font-bold">$14.99</p>
            <Image
              src="/placeholder.svg"
              alt="Burger"
              width={400}
              height={400}
              className="w-full h-auto mt-2"
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">
              Freshest products on every hour.
            </h3>
            <p className="text-primary font-bold">$14.99</p>
            <Button className="mt-2 w-full">Shop Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
