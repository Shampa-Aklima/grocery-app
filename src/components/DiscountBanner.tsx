const DiscountBanner = () => {
  return (
    <div>
      <div className="w-[870px] h-[74px] bg-instacart-rose-light p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <span className="text-instacart-rose font-medium mr-1">
            Super discount for your
          </span>
          <span className="text-instacart-rose font-medium underline">
            first purchase.
          </span>
        </div>
        <div className="flex items-center mt-2 sm:mt-0">
          <div className="bg-white border border-gray-200 dotted b-[#FF6048] px-2 py-1 text-sm font-mono mr-2">
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
