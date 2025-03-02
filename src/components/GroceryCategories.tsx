interface Category {
  name: string;
  count: number;
  span: string;
}

interface GroceryCategoriesProps {
  categories: Category[];
}

const GroceryCategories: React.FC<GroceryCategoriesProps> = ({
  categories,
}) => {
  return (
    <div className="grid grid-cols-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`${category.span} bg-transparent p-4 flex gap-5 border-2 border-[#E4E5EE]`}>
          <div className="w-16 h-16 bg-gray-200 rounded-sm overflow-hidden flex-shrink-0"></div>
          <div>
            <h3 className="text-xm font-semibold text-[#202435]">{category.name}</h3>
            <span className="text-sm text-[#202435]">
              {category.count} items
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroceryCategories;
