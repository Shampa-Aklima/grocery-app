const DiscountBanner = () => {
  return (
    <div>
      <div className="w-[full] h-[74px] bg-instacart-rose-light px-6 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="flex items-center">
          <span className="text-instacart-rose font-regular mr-1">
            Super discount for your
          </span>
          <span className="text-instacart-rose font-bold underline">
            first purchase.
          </span>
        </div>
        <div className="flex justify-center items-center mt-2 sm:mt-0">
          <div className="border-2 border-dotted rounded-full border-[#FF6048] text-[#ED174A] px-2 py-1 text-sm font-bold font-dosis mr-2">
            FREE250AC
          </div>
          <span className="text-xs text-gray-500">
            Use discount code in checkout!
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
