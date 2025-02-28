

const trendingProducts = [
  {
    id: 1,
    title: "USDA Choice Angus Beef Stew Meat",
    price: 49.99,
    originalPrice: 79.99,
  },
  {
    id: 2,
    title: "Warrior Blend Organic",
    price: 29.0,
    originalPrice: 39.0,
  },
  {
    id: 3,
    title: "Encore Seafoods Stuffed Mexican Salmon",
    price: 27.49,
    originalPrice: 32.49,
  },
  {
    id: 4,
    title: "Vital Farms Pasture-Raised Egg Bites Bacon",
    price: 25.0,
    originalPrice: 29.0,
  },
  {
    id: 5,
    title: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
    originalPrice: 24.0,
  },
];

const TrendingSearch = () => {
  return (
    <div className="mr-10">
      <h2 className="text-sm font-semibold mb-4 uppercase tracking-wider mt-5">
        Trending Search
      </h2>
      <div className="space-y-6 p-4 border-2 border-[#EDEEF5]">
        {trendingProducts.map((product) => (
          <div key={product.id} className="flex gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0"></div>
            <div className="flex-1">
              <h3 className="text-xs text-[#202435] font-medium font-inter line-clamp-2">
                {product.title}
              </h3>
              <div className="mt-1 relative">
                <div className="mt-1 flex items-center">
                  {product.originalPrice && (
                    <span className="text-xs font-bold font-dosis text-[#C2C2D3] line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="font-dosis font-semibold  text-[#D51243]  ml-2">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSearch;
