"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Product {
  title: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  store?: string;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  store,
}: Product) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
      <div className="relative h-40 bg-[#EDEEF5]">
        {discount && (
          <div className="absolute top-2 left-2 bg-instacart-light-green text-white text-xs font-medium px-2 py-1 rounded">
            {discount}%
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col flex-grow bg-[[#C4C4C4]]">
        <div className="text-xs text-instacart-green font-semibold mt-2">
          {store}
        </div>
        <h3 className="text-sm font-medium line-clamp-2 h-10">{title}</h3>

        <div className="flex items-center mt-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${
                  i < (rating || 0) ? "text-star-yellow" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            {reviews} review{reviews !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="mt-1 flex items-center">
          {originalPrice && (
            <span className="text-xs text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-base font-semibold ml-2">
            ${price !== undefined ? price.toFixed(2) : "N/A"}
          </span>
        </div>

        <div className="flex items-center justify-center mt-2 w-34 h-12 border-2 border-[#EDEEF5] bg-transparent rounded-full">
          <button
            className="w-8 h-8 flex items-center justify-center border-3 border-gray-300 rounded-full"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-sm mx-4">{quantity}</span>
          <button
            className="w-8 h-8 flex items-center justify-center bg-instacart-yellow rounded-full"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
// import { Star } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// interface ProductCardProps {
//   id: number
//   title: string
//   price?: number
//   originalPrice?: number
//   discount?: number
//   rating: number
//   reviews: number
//   image: string
// }

// const ProductCard = ({ id, title, price, originalPrice, discount, rating, reviews, image }: ProductCardProps) => {
//   return (
//     <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
//       {discount && (
//         <div className="absolute left-4 top-4 z-10 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
//           {discount}% OFF
//         </div>
//       )}

//       <Link href={`/product/${id}`} className="relative block h-48 w-full overflow-hidden rounded-md mb-4">
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           fill
//           className="object-contain transition-transform duration-300 group-hover:scale-105"
//         />
//       </Link>

//       <div className="flex flex-col flex-grow">
//         <div className="flex items-center mb-2">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
//             />
//           ))}
//           <span className="ml-2 text-xs text-gray-500">({reviews})</span>
//         </div>

//         <h3 className="mb-2 flex-grow text-sm font-medium line-clamp-2">
//           <Link href={`/product/${id}`}>{title}</Link>
//         </h3>

//         <div className="flex items-center">
//           {originalPrice && (
//             <span className="mr-2 text-xs text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
//           )}
//           {price && <span className="text-base font-semibold text-gray-900">${price.toFixed(2)}</span>}
//         </div>
//         </div>
//         </div>
//  )
// }

// export default ProductCard
