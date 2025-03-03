import { Star } from "lucide-react";

// Define the type for the `item` prop that includes all the properties you want to destructure
interface Item {
  id: number;
  name: string;
  discount?: number;
  price: number;
  salePrice: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  availableProducts: number;
}

interface ItemCardProps {
  item: Item; // Accepts an object of type Item
}

const ProductSpecialOffer = ({ item }: ItemCardProps) => {
  const { name, discount, price, salePrice, rating, reviews, inStock, availableProducts } = item;

  return (
    <div className="relative flex flex-col bg-white p-4 border border-gray-200 rounded-lg">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-[#40B8AE] text-white text-sm px-2 py-1 z-10 rounded">{discount}%</div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square bg-gray-200 mb-4 rounded-lg">
        {/* Image can go here */}
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow">
        {/* Stock Status */}
        <div className="text-xs text-[#40B8AE] uppercase font-medium mb-2">
          {inStock ? "IN STOCK" : "OUT OF STOCK"}
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{reviews} review</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 text-sm line-through">${price.toFixed(2)}</span>
          <span className="text-red-500 font-bold">${salePrice.toFixed(2)}</span>
        </div>

        {/* Available Products */}
        <div className="text-xs text-gray-500">Available products: {availableProducts}</div>
      </div>
    </div>
  );
};

export default ProductSpecialOffer;
