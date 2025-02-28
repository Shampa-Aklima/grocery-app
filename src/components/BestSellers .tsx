"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard  from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";

const products = [
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
];

const BestSellers = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold uppercase">
          Hot product for this week
        </h2>
        <a
          href="#"
          className="text-xs flex items-center justify-center text-[#9B9BB4] bg-[#D9D9E9] h-8 w-28 rounded-xl"
        >
          View all →
        </a>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Dont miss this opportunity at a special discount just for this week.
      </p>

      <div className="relative mx-auto" style={{ width: "870px" }}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!w-[200px] h-auto">
              <div className="h-full">
                <ProductCard {...product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-10">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-10">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BestSellers;
