import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number,
  title: string,
  subTitle?: string,
  description: string,
  discount?: number,
  image: string,
  link: string,
  color?: string,
  btn?: string ,
}

interface CategoryCardsProps {
  categories: Category[]; 
}

const CategoryCards = ({ categories }: CategoryCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
      {categories?.map((category) => (
        <div
          key={category.id}
          className="relative overflow-hidden rounded-lg bg-[#C4C4C4]"
          style={{ backgroundColor: category.color }}
        >
          <Image
            src={category.image} // Make sure category.image is a valid image URL or path
            alt={""}
            width={48}
            height={52}
            className="object-cover rounded-lg mb-4"
          />
          <div className="p-4">
            {category.subTitle && (
              <div className="text-xs text-white bg-gray-800 rounded-full p-1 w-32 text-center">
                {category.subTitle}
              </div>
            )}
            <h3 className="text-lg font-semibold mt-4">{category.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{category.description}</p>
            <Link href={category.link} passHref>
            <div
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full"
              style={{ backgroundColor: category.btn }}
            >
              Shop Now
            </div>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
