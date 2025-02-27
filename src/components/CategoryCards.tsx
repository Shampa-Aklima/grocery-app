
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Legumes & Cereals",
    description: "Feed your family the best",
    discount: 40,
    image: "/placeholder.svg?height=200&width=400",
    link: "/shop-now",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description: "A different kind of grocery store",
    discount: 40,
    image: "/placeholder.svg?height=200&width=400",
    link: "/shop-now",
  },
];

export function CategoryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative overflow-hidden rounded-lg bg-gray-100"
        >
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="text-sm text-white/90 mt-1">
                {category.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">
                WEEKEND DISCOUNT {category.discount}%
              </span>
              <Link
                href={category.link}
                className="text-white text-sm bg-instacart-green px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
