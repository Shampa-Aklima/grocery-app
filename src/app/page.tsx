import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection ";

const HomePage=()=>{
  return(
    <div className="w-full max-w-[1200px] mx-auto flex space-x-6 mt-16">
    <Sidebar/> 
    <HeroSection/>
  </div>
  )}
export default HomePage