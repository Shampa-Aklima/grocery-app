const GroceryCategoriesGrid = () => {
  const categories = [
    { name: "Beverages", count: 11, position: "top-left" },
    { name: "Meat & Seafood", count: 8, position: "top-right" },
    { name: "Frozen Foods", count: 6, position: "top-right" },
    { name: "Fruits & Vegetables", count: 8, position: "bottom-left" },
    { name: "Grocery & Staples", count: 12, position: "bottom-middle" },
    { name: "Household Needs", count: 9, position: "bottom-right" },
    { name: "Snacks & Bakery", count: 6, position: "top-middle" },
    { name: "Breakfast & Dairy", count: 8, position: "top-right" },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-7">
      <div className="col-span-1 row-span-2 bg-gray-100 p-3 flex flex-col justify-end">
        <div className="text-sm font-medium">Beverages</div>
        <div className="text-xs text-gray-500">11 items</div>
      </div>
      {categories.slice(1).map((category, index) => (
        <div
          key={index}
          className="bg-gray-200 p-3 flex flex-col justify-end"
        >
          <div className="text-sm font-medium">{category.name}</div>
          <div className="text-xs text-gray-500">{category.count} items</div>
        </div>
      ))}
    </div>
  );
};

export default GroceryCategoriesGrid;
