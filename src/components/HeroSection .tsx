import { Button } from "./ui/button";
import { dosis } from "../app/layout";
const HeroSection = () => {
  return (
    <div>
      <div className="w-[870px] h-[484px] bg-[#C4C4C4]  p-8 rounded-lg mb-8 ">
        <div className="px-5">
          <span className="inline-block text-sm mb-2 mt-8">
            Exclusive Offer
          </span>
          <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-sm mb-2 ml-3 ">
            -20% Off
          </span>
          <h1
            className={`${dosis.className} text-7xl font-700 text-[#202425] mb-4`}
          >
            Specialist in the <br />
            grocery store
          </h1>
          <p className="text-sm mb-4 mt-2">Only this week.Don’t miss ...</p>
          <p className="font-inter">
            from
            <span className="font-dosis text-3xl text-[#D51243] font-bold">
              $7.99
            </span>
          </p>
          <Button className="variant=ghost mt-3 bg-[#35AFA0] border-1">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
