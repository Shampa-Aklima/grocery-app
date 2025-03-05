import ProductList from "./ProductList";


const featureproducts = [
  {
    id: 1,
    title: "USDA Choice Angus Beef Stew Meat",
    price: 27.25,
    originalPrice: 79.99,
    discount: 49.99,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 2,
    title: "Warrior Blend Organic",
    price: 3.29,
    originalPrice: 29.00,
    discount: 39.00,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 3,
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    price: 19.5,
    originalPrice: 32.49,
    discount: 27.49,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 4,
    title: "Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar",
    originalPrice: 29.00,
    discount: 25.00,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
  {
    id: 5,
    title: "Field Roast Chao Cheese Creamy Original",
    originalPrice: 24.00,
    discount: 19.50,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
  },
];


const FeatureProductCarousel = () => {
  
    return (
      <div>
        <ProductList products={featureproducts} />
      </div>
    );
  };
  

export default FeatureProductCarousel;