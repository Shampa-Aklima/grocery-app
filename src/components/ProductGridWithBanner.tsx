"use client"

import type React from "react"
import { Plus, Minus } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"
import Image from "next/image"

type Product = {
  id: string
  title: string
  price?: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  store?: string
  image?: string
}

interface ProductGridWithBannerProps {
  products: Product[]
  title?: string
}

const ProductGridWithBanner: React.FC<ProductGridWithBannerProps> = ({ products, title = "BEST SELLERS" }) => {
  
  const leftProducts = products.slice(0, 4)
  const rightProducts = products.slice(4, 8)

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm text-gray-500">The most popular choices loved by the world of clients</p>
        </div>
        <button className="text-sm flex items-center text-gray-600 hover:text-gray-900">
          View All <span className="ml-1">→</span>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {leftProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                reviews={product.reviews}
                store={product.store}
                image={product.image || "/placeholder.svg?height=200&width=200"}
              />
            </div>
          ))}
        </div>

      
        <div className="col-span-1 flex flex-col items-center justify-center bg-gray-200 p-6 rounded-lg h-[730px]">
          <p className="text-sm text-red-500 font-light mb-1">delicious</p>
          <h3 className="font-light text-lg text-gray-800 mb-0">The freshest of</h3>
          <p className="font-bold text-lg text-gray-800 mb-2">all products</p>
          <p className="text-xs text-gray-500 font-light mb-1">just-in deals</p>
          <p className="text-xs text-gray-500 font-light mb-1">only-from</p>
          <span className="text-3xl font-bold text-[#D51243]">$14.99</span>
          <Button className="bg-[#35AFA0] hover:bg-[#35AFA0]/90 text-white rounded-full px-6 py-2 text-sm mt-2">
            Shop Now
          </Button>
        </div>

        
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {rightProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                reviews={product.reviews}
                store={product.store}
                image={product.image || "/placeholder.svg?height=200&width=200"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ProductCardProps {
  title: string
  price?: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  image: string
  store?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  store,
}) => {
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="bg-white rounded-lg shadow-sm h-full flex flex-col overflow-hidden">
      <div className="relative h-48 bg-gray-200">
        {discount && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
            {discount}%
          </div>
        )}
        {/* Placeholder for product image */}
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-1">{store || "IN STOCK"}</div>
        <h3 className="text-sm font-medium line-clamp-2 mb-1">{title}</h3>

        <div className="flex items-center mb-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
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

        <div className="flex items-center mb-2">
          {originalPrice && (
            <span className="text-xs text-gray-500 line-through mr-2">${originalPrice.toFixed(2)}</span>
          )}
          <span className="text-base font-semibold text-black">${price !== undefined ? price.toFixed(2) : "N/A"}</span>
        </div>

        <div className="flex items-center justify-between mt-auto border border-gray-200 rounded-full py-1 px-2">
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full"
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          >
            <Minus className="w-3 h-3 text-gray-600" />
          </button>
          <span className="text-sm mx-2">{quantity}</span>
          <button
            className="w-6 h-6 flex items-center justify-center bg-yellow-400 rounded-full"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductGridWithBanner

