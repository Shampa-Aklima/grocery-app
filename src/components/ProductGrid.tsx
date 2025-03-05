import ProductCard from "./ProductCard";

interface Product {
  id: string;  
  title: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  store?: string;
 
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
    {products?.length > 0 ? (
      products.map((product) => <ProductCard key={product.id} {...product} />)
    ) : (
      <p className="col-span-full text-center text-gray-500">No products available.</p>
    )}
  </div>
  );
};

export default ProductGrid;

