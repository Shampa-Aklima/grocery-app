import { ShoppingBag, Truck, Tag } from "lucide-react"

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
]
const FeatureSection=() =>{
    return (
      
     
        <div className="container mx-auto px-4 mb-16">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {features.map((feature, index) => (
         <div key={index} className="flex items-center justify-center space-x-3">
           <feature.icon className="w-6 h-6 text-gray-600" />
           <span className="text-gray-600 text-sm">{feature.text}</span>
         </div>
       ))}

</div>
</div>
  )
}
export default FeatureSection;