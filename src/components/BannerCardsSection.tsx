import BannerCards from "./BannerCards";


const banners = [
  {
    id: 1,
    name: "The freshest milk products",
    description: "A family place for grocery",
    image: "/placeholder.svg?height=230&width=420",
    link: "/shop-now",
  },
  {
    id: 2,
    name: "Yogurt with Delicious Fruit",
    description: "A different kind of grocery store",
    image: "/placeholder.svg?height=230&width=420",
    link: "/shop-now",
  }
  
]
const BannerCardsSection = () => {
  return (
    <div>
      
      <BannerCards  banners={banners} />
    </div>
  );
};

export default BannerCardsSection;
