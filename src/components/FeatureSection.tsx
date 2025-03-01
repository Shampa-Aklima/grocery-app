import { ShoppingBag, Truck, Tag, CircleDollarSign } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    text: "Everyday fresh products",
  },
  {
    icon: Truck,
    text: "Free delivery for order over $70",
  },
  {
    icon: Tag,
    text: "Daily Mega Discounts",
  },
  {
    icon: CircleDollarSign,
    text: "Best price on the market",
  },
];
const FeatureSection = () => {
  return (
    <div className="min-w-[1200px] px-4 mb-16 mt-10">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 border-b-2 ">
    {features.map((feature, index) => (
      <div
        key={index}
        className="flex items-center justify-center space-x-3 border-r-2 border-[#a7a7aa]"
      >
        <feature.icon className="w-6 h-6 text-gray-600" />
        <span className="text-gray-600 text-sm">{feature.text}</span>
      </div>
    ))}
  </div>
</div>

  );
};
export default FeatureSection;
