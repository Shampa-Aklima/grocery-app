import ProductGrid from "./ProductGrid";


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

interface ProductProps {
  products: Product[];
}


const ProductList = ({ products }: ProductProps) => {
  return (
    <div>
     <ProductGrid products={products} />
    </div>
  );
};

export default ProductList;