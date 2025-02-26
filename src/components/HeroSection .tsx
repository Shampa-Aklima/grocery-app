import { Button } from "./ui/button";
import { dosis } from "../app/layout";
const HeroSection = () => {
  

  return (
    <div>
      <div className="w-[870px] h-[484px] bg-gray-100 p-8 rounded-lg mb-8">
        <div>
          <span className="inline-block text-sm mb-2 ">Exclusive Offer</span>
          <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-sm mb-2 ml-5">
            -20% Off
          </span>
          <h1
            className={`${dosis.className} text-5xl font-bold text-[#202425]`}
          >
            Specialist in the <br />
            grocery store
          </h1>
          <p className="text-xl font-semibold mb-4">From $7.99</p>
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
