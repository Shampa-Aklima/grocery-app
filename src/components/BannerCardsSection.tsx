import BannerCards from "./BannerCards";


const banners = [
  {
    id: 1,
    name: "Fresh Dairy",
    description: "The best selection of fresh dairy products.",
    image: "/placeholder.svg?height=230&width=420",
    link: "/shop-now",
  },
  {
    id: 2,
    name: "Organic Fruits",
    description: "Explore a wide range of organic fruits.",
    image: "/placeholder.svg?height=230&width=420",
    link: "/shop-now",
  }
  
]
const BannerCardsSection = () => {
  return (
    <div>
      
      <BannerCards banners={banners} />
    </div>
  );
};

export default BannerCardsSection;