import Image from "next/image";

interface Banners {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface BannerCardsProps {
  banners: Banners[];
}

const BannerCards = ({ banners }: BannerCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {banners.map((banner) => (
        <div key={banner.id} className="bg-white p-4 rounded-lg shadow-md">
          <Image
            src={banner.image} 
            alt={banner.name}   
            width={420}         
            height={230}        
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{banner.name}</h3>
          <p className="text-gray-500 mb-2">{banner.description}</p>
          <a href={banner.link} className="text-[#40B8AE] font-medium">
            Explore
          </a>
        </div>
      ))}
    </div>
  );
};

export default BannerCards;