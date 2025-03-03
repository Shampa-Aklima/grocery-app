import ProductSpecialOffer from "./ProductSpecialOffer";


const items = [
  {
    id: 1,
    name: "Zevia Kidz Strawberry Lemonade Zero Calorie",
    discount: 25,
    price: 7.95,
    salePrice: 5.95,
    rating: 4,
    reviews: 1,
    inStock: true,
    availableProducts: 86,
  },
  {
    id: 2,
    name: "Tropicana Pineapple Mango Drink",
    discount: 30,
    price: 3.29,
    salePrice: 2.29,
    rating: 4,
    reviews: 1,
    inStock: true,
    availableProducts: 86,
  },
  {
    id: 3,
    name: "SToK Un-Sweet Black Cold Brew Iced Coffee",
    price: 65.0,
    salePrice: 65.0,
    rating: 4,
    reviews: 1,
    inStock: true,
    availableProducts: 95,
  },
  {
    id: 4,
    name: "Sol-ti Coconut Charcoal SuperAde",
    discount: 20,
    price: 4.97,
    salePrice: 3.97,
    rating: 5,
    reviews: 1,
    inStock: true,
    availableProducts: 95,
  },
  {
    id: 5,
    name: "Simply Lemonade with Raspberry Juice",
    discount: 20,
    price: 4.88,
    salePrice: 3.88,
    rating: 5,
    reviews: 1,
    inStock: true,
    availableProducts: 95,
  },
];

const ProductSpecialOfferGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 border-2 border-[#ED174A] rounded-lg p-5">
      {items.length > 0 ? (
        items.map((item) => <ProductSpecialOffer key={item.id} item={item} />) // Pass item as prop
      ) : (
        <p>No items available.</p> // ✅ Fallback to avoid errors when `items` is empty
      )}
    </div>
  );
};

export default ProductSpecialOfferGrid;
