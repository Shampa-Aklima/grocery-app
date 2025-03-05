"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import type { Swiper as SwiperType } from "swiper";

interface Product {
  id: number;
  title: string;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  store:number
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold uppercase">
        Best Sellers
        </h2>
        <a
          href="#"
          className="text-xs flex items-center justify-center text-[#9B9BB4] bg-[#D9D9E9] h-8 w-28 rounded-xl"
        >
          View all →
        </a>
      </div>
      <p className="text-xs text-gray-500 mb-4">
      Do not miss the current offers until the end of March. </p>

      <div className="relative mx-auto" >
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          onSwiper={setSwiper}
          className="overflow-visible !important"
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} className="!w-[200px] h-auto">
              <div className="h-full">
                <ProductCard {...product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={prevRef}
          onClick={() => swiper?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-20 hover:bg-gray-50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiper?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center z-20 hover:bg-gray-50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
