import Image from "next/image";
import Link from "next/link";


interface Banners {
  id: number,
  title: string,
  subTitle: string,
  description: string,
  image: string,
  link: string,
  bgColor: string,
}

interface BannerCardsProps {
  banners: Banners[];
}

const BannerCards = ({ banners }: BannerCardsProps) => {
  return (
    <div className="w-full flex justify-start items-start gap-10 mt-5">
      {banners.map((banner) => (
            <div
            key={banner.id}
            style={{ backgroundColor: banner.bgColor }}
            className="p-8 rounded-lg flex flex-col w-[587px] h-[270px]"
          >
              <Image
                src={banner.image} 
                alt={""}  
                width={48}         
                height={52}        
                className=" object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-[#9B9BB4] mb-2">{banner.subTitle}</p>
              <h3 className="text-xl font-semibold mb-2 text[#3E445A]">{banner.title}</h3>
              <p className="text-sm text-[#9B9BB4] mb-2">{banner.description}</p>
              <Link href={banner.link}  className="text-[#40B8AE] font-medium">
                Shop Now</Link>
              
              
              
            </div>
          ))}
        </div>
      );
    };
    
 
export default BannerCards;

   
    
          