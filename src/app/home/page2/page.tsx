

import BannerCardsSection from "@/components/BannerCardsSection";
import HeroSlider from "@/components/HeroSlider";
import ProductSpecialOfferGrid from "@/components/ProductSpecialOfferGrid";
import { Button } from "@/components/ui/button";

const Page2 = () => {
  return (
    <div className="container max-w-[1170px] mx-auto">
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
         <BannerCardsSection/>
        </div>
      </div>
    </div>
  );
};

export default Page2;
