import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Legumes & Cereals",
    // subTitle:"Weekend Discount",
    description: "Feed your family the best",
    discount: 40,
    image: "/placeholder.svg?height=230&width=420",
    link: "/shop-now",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    // subTitle:"Weekend Discount",
    description: "A different kind of grocery store",
    discount: 40,
    image: "/placeholder.svg?height=230&width=420",
    link: "/shop-now",
  },
];

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative overflow-hidden rounded-lg bg-[#C4C4C4]"
        >
          <Image
            src={category.image || ""}
            alt={category.title}
            width={420}
            height={230}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-[#C4C4C4]/40 p-6 flex flex-col justify-between">
            <div>
              <span className=" text-sm font-dosis text-[#00B853] font-semibold">
                WEEKEND DISCOUNT {category.discount}%
              </span>
              {/* <h4 className="">{category.subTitle}</h4> */}
              <h3 className="text-xl font-bold text-[#3E445A]">
                {category.title}
              </h3>
              <p className="text-sm text-[#9B9BB4] mt-1">
                {category.description}
              </p>
            </div>
            <div>
              <Link
                href={category.link}
                className="text-white text-sm bg-[#C2C2D3] px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
