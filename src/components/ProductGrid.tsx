import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  store: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="mb-10 mt-10" >
      <h3 className="text-xl font-dosis font-bold uppercase">New Products</h3>
      <p className="text-xs text-[#9B9BB4] mb-4">
        Dont miss this opportunity at a special discount just for this week.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
