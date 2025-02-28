import Link from "next/link";

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
        <div className="w-[270px] h-[403px] p-4 m-0 space-y-6 bg-[#C4C4C4]  rounded-lg">
          <p>Bacola Natural Foods</p>
          <h3 className="font-semibold mb-2">Special Organic</h3>
          <h3 className="font-semibold mb-2">Roats Burger</h3>
          <p className="text-primary font-bold">only-from</p>
          <span>$14.99</span>
        </div>
      </div>

      <div className="space-y-4 mt-4 mr-8 ">
        <div className="w-[270px] h-[403px] space-y-6 bg-[#C4C4C4] p-4 rounded-lg text-sm">
          <h3 className="font-thin mb-2 text-sm">Best bakery products</h3>
          <h3 className="font-normal mb-2 text-xl text-[#202435]">
            Freshest products
          </h3>
          <span className="font-bold mb-2 text-xl text-[#202435]">
            every hour.
          </span>
          <p className="font-thin mb-2 text-sm">only-from</p>
          <span className="text-5xl font-dosis text-[#D51243]">$14.99</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
