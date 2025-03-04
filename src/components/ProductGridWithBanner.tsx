import ProductGrid from "./ProductGrid";
import { Button } from "./ui/button";
const ProductGridWithBanner = () => {
    return (
        <div className=" flex">
           <ProductGrid/>
           <div className="space-y-4 mt-4 mr-8 ">
        <div className="w-[270px] h-[403px] bg-[#C4C4C4] p-8 rounded-lg flex flex-col">
          <h3 className="font-thin mb-2 text-sm ">Best bakery products</h3>
          <h3 className="font-thin mb-2 text-2xl text-[#202435]">
            Freshest products
          </h3>
          <span className="font-bold mb-2 text-xl text-[#202435] ">
            every hour.
          </span>
          <p className="font-thin mb-2 text-sm">only-from</p>
          <span className="text-3xl font-bold font-dosis text-[#D51243]">
            $14.99
          </span>
          <Button className="variant=ghost w-22 h-10 mt-3 bg-[#35AFA0] border-1 rounded-full">
            Shop Now
          </Button>
        </div>
      </div>
            <ProductGrid/>
        </div>
    );
};

export default ProductGridWithBanner;