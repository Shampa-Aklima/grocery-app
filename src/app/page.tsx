import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection ";
import BestSellers from "@/components/BestSellers ";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex space-x-6 mt-16">
      <Sidebar />
      <div className="w-full">
        <HeroSection />
        <BestSellers />
      </div>
    </div>
  );
};
export default HomePage;
