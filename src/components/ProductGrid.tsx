
import ProductCard from "./ProductCard"

const products = [
  {
    id: 1,
    title: "All Natural Italian-Style Chicken Meatballs",
    price: 27.25,
    originalPrice: 34.75,
    discount: 20,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "89 in stock",
  },
  {
    id: 2,
    title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    originalPrice: 4.29,
    discount: 23,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "75 in stock",
  },
  {
    id: 3,
    title: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
    originalPrice: 24.0,
    discount: 19,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "95 in stock",
  },
  {
    id: 4,
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    price: 49.99,
    rating: 5,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "95 in stock",
  },
  {
    id: 5,
    title: "Blue Diamond Almonds Lightly Salted",
    price: 11.68,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "89 in stock",
  },
  {
    id: 6,
    title: "Blueberries - 1 Pint Package",
    price: 3.99,
    originalPrice: 4.49,
    discount: 11,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "85 in stock",
  },
  {
    id: 7,
    title: "Fresh Organic Broccoli Crowns",
    price: 4.85,
    originalPrice: 5.99,
    discount: 19,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "74 in stock",
  },
  {
    id: 8,
    title: "Chobani Complete Vanilla Greek Yogurt",
    price: 4.49,
    originalPrice: 5.49,
    discount: 18,
    rating: 4,
    reviews: 1,
    image: "/placeholder.svg?height=220&width=220",
    store: "79 in stock",
  },
]

 const ProductGrid =()=>{
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductGrid ;