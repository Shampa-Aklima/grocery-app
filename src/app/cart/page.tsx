"use client"

import { useState } from "react"
import { X, Heart, Share2, Minus, Plus } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"

export default function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState("medium")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cart Items */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gray-100 rounded mr-4"></div>
              <div className="flex-1">
                <h3 className="font-medium">All Natural Italian-Style Chicken Meatballs</h3>
                <div className="text-sm text-gray-500">$7.25</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button className="px-3 py-1">
                    <Minus size={16} />
                  </button>
                  <span className="px-3 py-1">1</span>
                  <button className="px-3 py-1">
                    <Plus size={16} />
                  </button>
                </div>
                <button>
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-end mb-4">
                <button onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="flex">
                  <div className="w-20 space-y-2 mr-4">
                    <div className="w-20 h-20 bg-gray-100 rounded cursor-pointer"></div>
                    <div className="w-20 h-20 bg-gray-100 rounded cursor-pointer"></div>
                    <div className="w-20 h-20 bg-gray-100 rounded cursor-pointer"></div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="aspect-square bg-gray-100 rounded"></div>
                    <button className="absolute top-1/2 -translate-y-1/2 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                      &gt;
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h2 className="text-2xl font-bold mb-2">SkinnyPop Popcorn SkinnyPack Original</h2>
                  <div className="text-xl mb-4">$15.00 - $25.00</div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Available in:</h3>
                    <div className="flex gap-4">
                      <button
                        className={`px-4 py-2 rounded border ${selectedSize === "small" ? "border-emerald-500" : ""}`}
                        onClick={() => setSelectedSize("small")}
                      >
                        small
                      </button>
                      <button
                        className={`px-4 py-2 rounded border ${selectedSize === "medium" ? "border-emerald-500" : ""}`}
                        onClick={() => setSelectedSize("medium")}
                      >
                        medium
                      </button>
                      <button
                        className={`px-4 py-2 rounded border ${selectedSize === "large" ? "border-emerald-500" : ""}`}
                        onClick={() => setSelectedSize("large")}
                      >
                        large
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center border rounded">
                      <button className="px-4 py-2" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2">{quantity}</span>
                      <button className="px-4 py-2" onClick={() => setQuantity(quantity + 1)}>
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-500 text-white py-3 rounded-md mb-4">Add to Cart</button>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <button className="flex items-center justify-center gap-2 border rounded-md py-2">
                      <Heart size={18} />
                      Wishlist
                    </button>
                    <button className="flex items-center justify-center gap-2 border rounded-md py-2">
                      <Share2 size={18} />
                      Share
                    </button>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Product Details:</h3>
                    <p className="text-sm text-gray-600">
                      Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate Vitamin
                      B1, Riboflavin Vitamin B2, Folic Acid), Palm and/or Canola Oil, Cocoa (Processed with Alkali),
                      High Fructose Corn Syrup, Leavening (Baking Soda and/or Calcium Phosphate), Cornstarch, Salt...
                      <button className="text-emerald-500">Read More</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

