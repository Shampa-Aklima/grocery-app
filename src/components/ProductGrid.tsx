import ProductCard from "./ProductCard";

interface Product {
  id: string;  // changed to string to match the data
  title: string;
  price?: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  store?: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
