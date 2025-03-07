"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import ProductCard from "./ProductCard"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/swiper-bundle.css"
import type { Swiper as SwiperType } from "swiper"
import { useState, useRef } from "react"

interface Product {
  id: number
  title: string
  price?: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  image: string
}

const bestSellers: Product[] = [
  {
    id: 1,
    title: "All Natural Italian-Style Chicken Meatballs",
    price: 27.25,
    originalPrice: 34.75,
    discount: 20,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 2,
    title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: 23,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 3,
    title: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
    originalPrice: 24.0,
    discount: 19,
    rating: 5,
    reviews: 7,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 4,
    title: "Blue Diamond Almonds Lightly Salted",
    price: 11.68,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  
]

const BestSellers = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="mb-10 mt-10">
      <h3 className="text-xl font-dosis font-bold uppercase">Best Sellers</h3>
      <p className="text-xs text-[#9B9BB4] mb-4">Dont miss this opportunity at a special discount just for this week.</p>

      <div className="relative mx-auto" style={{ width: "1170px" }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          onSwiper={(swiperInstance) => {
            setSwiper(swiperInstance)
            // Override navigation
            if (prevRef.current && nextRef.current) {
              swiperInstance.navigation.prevEl = prevRef.current
              swiperInstance.navigation.nextEl = nextRef.current
              swiperInstance.navigation.init()
              swiperInstance.navigation.update()
            }
          }}
          className="!overflow-visible"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id} className="!w-[200px] h-auto">
              <div className="h-full">
                <ProductCard {...product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-20 hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-20 hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default BestSellers

