"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface SlideProps {
  id: number
  title: string
  subtitle: string
  price: string
  discount: string
  buttonText: string
  bgColor: string
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
  ]

  const goToSlide = (index: number) => {
    // Handle circular navigation
    if (index < 0) {
      setCurrentSlide(slides.length - 1)
    } else if (index >= slides.length) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(index)
    }
  }

  const nextSlide = () => {
    goToSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    goToSlide(currentSlide - 1)
  }

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToSlide(currentSlide + 1)
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg mb-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides container */}
      <div className="h-full w-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full ${slide.bgColor} flex flex-col justify-center px-8 md:px-12 lg:px-16 transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="max-w-lg radius-xl">
              <div className="mb-2">
              <span className="text-xs font-dosis md:text-sm uppercase text-[#202435] ">
  EXCLUSIVE OFFER
</span>
                <span className="ml-2 h-24 bg-[#C4C4C4] text-[#038E42] text-xs px-3 py-0.5 rounded bg-gradient-to-bl from-[#00B85333] to-[#20375800]">{slide.discount}</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#202435] mb-2">{slide.title}</h2>
              <p className="text-sm md:text-base text-[#202435] mb-4">{slide.subtitle}</p>

              <div className="flex items-center mb-4">
                <span className="text-xs text-[#202435]">from</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-dosis font-bold text-[#D51243] ml-2">${slide.price}</span>
              </div>

              <button className="bg-[#35AFA0] hover:bg-[#026b32] transition-colors text-white text-sm px-4 py-2 rounded-full flex items-center">
                {slide.buttonText}
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 md:p-2 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 md:p-2 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider

