const HotProduct = () => {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold uppercase">
            Hot product for this week
          </h2>
          <a
            href="#"
            className="text-xs flex items-center justify-center text-[#9B9BB4] bg-[#D9D9E9] h-8 w-28 rounded-xl"
          >
            View all →
          </a>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          Dont miss this opportunity at a special discount just for this week.
        </p>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative min-w-[120px]">
              <div className="absolute -left-2 -top-2 w-12 h-12 bg-instacart-rose rounded-full flex items-center justify-center text-white font-bold">
                18%
              </div>
              <div className="bg-gray-300 aspect-square w-full max-w-[120px]"></div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 line-through">
                  $5.49
                </span>
                <span className="text-lg font-semibold">$4.49</span>
              </div>
              <h3 className="text-base font-medium mb-2">
                Chobani Complete Vanilla Greek Yogurt
              </h3>
              <div className="text-xs text-instacart-green font-semibold mb-3">
                IN STOCK
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-instacart-rose via-instacart-yellow to-instacart-green h-2 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <div className="flex gap-2">
                <div className="flex flex-col items-center justify-center border border-gray-200 rounded p-2 w-12">
                  <span className="text-xs font-semibold">7h</span>
                </div>
                <div className="flex flex-col items-center justify-center border border-gray-200 rounded p-2 w-12">
                  <span className="text-xs font-semibold">1d</span>
                </div>
                <div className="flex flex-col items-center justify-center border border-gray-200 rounded p-2 w-12">
                  <span className="text-xs font-semibold">4d</span>
                </div>
                <div className="text-xs text-gray-500 ml-2 self-center">
                  Remains until the end
                  <br />
                  of the offer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotProduct;
