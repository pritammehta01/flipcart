import Navbar from "@/components/Navbar";
import SearchItem from "@/components/SearchItem";
import HomeTop from "@/components/HomeTop";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="line bg-[#f6f3f3] h-2"></div>
     
      {/* <SearchItem/> */}
      <main className="bg-gray-100 max-h-screen px-4">
         <HomeTop />
        <Carousel/>
        <div className="line bg-[#f6f3f3] h-2"></div>
         <div className=" bg-white p-2.5">
        
         </div>
      </main>
    </div>
  );
}
