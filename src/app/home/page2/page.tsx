
import HeroSlider from "@/components/HeroSlider";
import ProductGridWithBanner from "@/components/ProductGridWithBanner";
import ProductSpecialOfferGrid from "@/components/ProductSpecialOfferGrid";
import { Button } from "@/components/ui/button";
import WeekendDiscountCardSection from "@/components/WeekendDiscountCardSection";
import FeatureProductCarousel from "@/components/FeatureProductCarousel";

const products = [
  {
    id: "1",
    title: "All-Natural Indian-Style Chicken Meatballs",
    originalPrice: 9.25,
    price: 7.25,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "2",
    title: "Annie's Homegrown Sweet & Salty Kettle Corn",
    originalPrice: 5.25,
    price: 3.2,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "3",
    title: "Blue Diamond Almonds Lightly Salted",
    originalPrice: 12.99,
    price: 10.99,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "4",
    title: "Blueberries - 1 Pint Package",
    originalPrice: 4.99,
    price: 3.99,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "5",
    title: "Fage Sport Chop Cheese Creamy Original",
    originalPrice: 12.5,
    price: 10.5,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "6",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    originalPrice: 54.99,
    price: 49.99,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "7",
    title: "Fresh Organic Broccoli Crowns",
    originalPrice: 5.75,
    price: 4.45,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "8",
    title: "Chobani Complete Vanilla Greek Yogurt",
    originalPrice: 5.99,
    price: 4.49,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
];

const Page2 = () => {
  return (
    <div className="container max-w-[1200px] mx-auto">
      <div className="w-full mt-5">
        <HeroSlider />{" "}
      </div>
      <div className="flex justify-between gap-3 w-full h-[125px] bg-[#F8EFEA] rounded-md p-12">
        <h3 className="text-2xl font-semibold text-[#00B853] ">
          100% Secure delivery without contacting the courier
        </h3>
        <Button className="bg-[#00B853] rounded-full text-sm text-white">
          Shop Now
        </Button>
      </div>
      <div>
        <div>
          <div className=" mb-10 mt-10 gap-10 py-5 ">
            <div className="flex justify-center items-center gap-10">
              <div>
                <h3 className="font-2xl font-semibold text-end text-[#233A95]">
                  Special Offers of the week!
                </h3>
                <p className="font-xs font-regular text-[#9B9BB4]">
                  Ut placerat, magna quis porttitor vulputate, magna nunc auctor
                  ante.
                </p>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2 w-10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      11
                    </span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2  w-10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      14
                    </span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2  w-10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      13
                    </span>
                  </div>
                  <span>:</span>
                  <div className="flex flex-col items-center justify-center bg-[#ED174A] rounded p-2 10 h-12">
                    <span className="text-xl font-dosis font-semibold text-white">
                      16
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ProductSpecialOfferGrid />
          </div>

          <div className="p-4 bg-gray-50 min-h-screen">
            <ProductGridWithBanner products={products} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <WeekendDiscountCardSection />
      </div>
      <div className="w-max-[1200px]">
      <FeatureProductCarousel/>
      </div>
      
    </div>
  );
};

export default Page2;
