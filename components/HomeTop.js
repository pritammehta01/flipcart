import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
export default function HomeTop() {
  return (
    <div className=" h-32 bg-white justify-center pl-10 gap-8  items-center flex text-black font-semibold">
      <div className="text-center w-20">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Kilos</span>
      </div>
      <div className="text-center w-22">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Mobiles</span>
      </div>
      <div className="text-center w-24 group cursor-pointer hover:text-[#2874f0] relative">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Fashion
             <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        </span>
      </div>
      <div className="text-center w-24 group cursor-pointer hover:text-[#2874f0] relative">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold"> Electronics
             <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
           </span>
      </div>
      <div className="text-center w-38 group cursor-pointer hover:text-[#2874f0] relative">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">
          Home & Furnitures
         <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        </span>
      </div>
      <div className="text-center w-20">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Appliances</span>
      </div>
      <div className="text-center w-30">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Flight Bookings</span>
      </div>
      <div className="text-center w-40 group cursor-pointer hover:text-[#2874f0] relative">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Beauty, Toys & More
             <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        </span>
      </div>
      <div className="text-center w-30 group cursor-pointer hover:text-[#2874f0] relative">
        <div className="w-16 h-16 mx-auto mb-2.5">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
            alt="img"
            width={64}
            height={64}
          />
        </div>
        <span className="text-sm flex items-center justify-center font-semibold">Two Wheelers
             <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        </span>
      </div>
    </div>
  );
}
