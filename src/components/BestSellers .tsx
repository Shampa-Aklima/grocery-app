import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 27.95,
    rating: 4.5,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 32.29,
    rating: 4.0,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
    rating: 4.0,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Blue Diamond Almonds Lightly Salted",
    price: 11.68,
    rating: 4.0,
    image: "/placeholder.svg",
  },
];

const BestSellers = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h2 className=" text-xl font-bold">BEST SELLERS</h2>
          <p>Do not miss the current offers until the end of March.</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bestSellers.map((product) => (
          <div key={product.id} className="bg-[#C4C4C4]  p-4 rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-auto mb-4"
            />
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <h3 className="font-medium text-sm mb-2">{product.name}</h3>
            <p className="font-bold text-primary">
              ${product.price.toFixed(2)}
            </p>
            <Button variant="outline" className="w-full mt-2">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSellers;
