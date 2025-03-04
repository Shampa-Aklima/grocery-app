import Image from "next/image";
import Link from "next/link";

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
    <div className="flex justify-center items-center gap-10 mt-5">
      {banners.map((banner) => (
            <div key={banner.id} className="bg-[#C4C4C4] p-8 rounded-lg flex flex-col justify-start items-start w-[570px] h-[270px]</div>">
              <Image
                src={banner.image} 
                alt={""}  
                width={48}         
                height={52}        
                className=" object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-xl font-semibold mb-2 text[#3E445A]">{banner.name}</h3>
              <p className="text-sm text-[#9B9BB4] mb-2">{banner.description}</p>
              <Link href={banner.link}  className="text-[#40B8AE] font-medium">
                Shop Now</Link>
               
              
              
            </div>
          ))}
        </div>
      );
    };
    
 
export default BannerCards;

   
    
          