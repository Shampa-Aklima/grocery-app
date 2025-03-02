import GroceryCategories from "./GroceryCategories";

export interface Category {
  name: string;
  count: number;
  span: string;
}
const categories: Category[] = [
  { name: "Beverages", count: 11, span: "col-span-1 row-span-2" },
  { name: "Snacks & Bakery", count: 6, span: "col-span-1" },
  { name: "Breads & Bakery", count: 6, span: "col-span-1" },
  { name: "Frozen Foods", count: 6, span: "col-span-1" },
  { name: "Fruits & Vegetables", count: 8, span: "col-span-1" },
  { name: "Grocery & Staples", count: 12, span: "col-span-1" },
  { name: "Household Needs", count: 9, span: "col-span-1" },
  { name: "Meat & Seafood", count: 8, span: "col-span-1" },
];

const GroceryCategoriesGrid: React.FC = () => {
  return (
    <div className="max-w-[1200px]">
      <div className="w-full mt-6 px-4">
        <div>
            <GroceryCategories categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default GroceryCategoriesGrid;
