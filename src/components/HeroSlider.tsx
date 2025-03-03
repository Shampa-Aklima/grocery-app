"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface SlideProps {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  discount: string;
  buttonText: string;
  bgColor: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideProps[] = [
    {
      id: 1,
      title: "Specialist in the grocery store",
      subtitle: "Only this week. Don't miss...",
      price: "7.99",
      discount: "20% OFF",
      buttonText: "Shop Now",
      bgColor: "bg-[#C4C4C4]",
    },
    {
      id: 2,
      title: "Fresh organic vegetables",
      subtitle: "Farm to table quality",
      price: "5.99",
      discount: "15% OFF",
      buttonText: "Shop Now",
      bgColor: "bg-[#C4C4C4]",
    },
    {
      id: 3,
      title: "Premium dairy products",
      subtitle: "From local farmers",
      price: "4.99",
      discount: "10% OFF",
      buttonText: "Shop Now",
      bgColor: "bg-[#C4C4C4]",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg mb-8">
      <div
        className="h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
        role="presentation"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bgColor} w-full h-full flex flex-col justify-center px-8 md:px-12 lg:px-16`}
            style={{ width: "100%" }}
          >
            <div className="max-w-lg">
              <div className="mb-2">
                <span className="text-xs md:text-sm uppercase text-[#202435]">
                  EXCLUSIVE OFFER
                </span>
                <span className="ml-2 bg-[#038E42] text-white text-xs px-2 py-0.5 rounded">
                  {slide.discount}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#202435] mb-2">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base text-[#202435] mb-4">
                {slide.subtitle}
              </p>

              <div className="flex items-center mb-4">
                <span className="text-xs text-[#202435]">from</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D51243] ml-2">
                  ${slide.price}
                </span>
              </div>

              <button className="bg-instacart-light-green hover:bg-instacart-light-green transition-colors text-white text-sm px-4 py-2 rounded-full flex items-center">
                {slide.buttonText}
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              currentSlide === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
