
import ShopSidebar from "./ShopSidber";
import ProductList from "@/components/ProductList";

const products = [
  {
    id: "1",
    title: "Zevia Kidz StrawberryLemonade Zero Calorie",
    originalPrice: 7.95,
    price: 5.95,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 25,
  },
  {
    id: "2",
    title: "Annie's Homegrown Sweet & Salty Kettle Corn",
    originalPrice: 5.25,
    price: 3.2,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "3",
    title: "Blue Diamond Almonds Lightly Salted",
    originalPrice: 12.99,
    price: 10.99,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "4",
    title: "Blueberries - 1 Pint Package",
    originalPrice: 4.99,
    price: 3.99,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "5",
    title: "Fage Sport Chop Cheese Creamy Original",
    originalPrice: 12.5,
    price: 10.5,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "6",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    originalPrice: 54.99,
    price: 49.99,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "7",
    title: "Fresh Organic Broccoli Crowns",
    originalPrice: 5.75,
    price: 4.45,
    rating: 5,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
  {
    id: "8",
    title: "Chobani Complete Vanilla Greek Yogurt",
    originalPrice: 5.99,
    price: 4.49,
    rating: 4,
    reviews: 1,
    store: "IN STOCK",
    discount: 20,
  },
];

const page = () => {
  return (
    <div className="container mx-auto max-w-[1200px] mt-10 ">
      <div className="flex">
        <ShopSidebar />
        <ProductList products={products} />
        </div>
       
        <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-1">
                <button className="w-8 h-8 flex items-center justify-center bg-teal-500 text-white rounded-full">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">2</button>
                <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">3</button>
                <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">...</button>
                <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">6</button>
              </div>
            </div>
          </div>
        
    
  );
};

export default page;
