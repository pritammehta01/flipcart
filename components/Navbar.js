import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { IoCartOutline, IoPersonCircleOutline, IoSearchOutline, IoStorefrontOutline } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white flex w-full h-17  items-center gap-8">
      <div className="logo ml-7">
        <Image
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          width={160}
          height={120}
          alt="Picture of the author"
        />
      </div>
      <div className="search text-center flex items-center text-lg px-2.5 py-5 h-8 gap-1 bg-[#eff3fb] w-[30%] lg:w-[49%] rounded-lg text-black">
        <IoSearchOutline className="text-slate-500" size={24} />
        <input
          className="border-none outline-none w-full"
          type="text"
          placeholder="Search for Product  Brands and More"
        />
      </div>
      <div className="items-center text-lg flex gap-3 lg:gap-7 ">
        <div className="login flex px-2 gap-2 size group rounded-md h-9 items-center hover:text-white hover:bg-blue-500 cursor-pointer">
          <IoPersonCircleOutline size={24} />
          <span>Login</span>
           <MdKeyboardArrowDown size={18}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
         
        </div>
        <div className="cart flex gap-2  items-center cursor-pointer">
            <IoCartOutline size={24} />
           <span className="hidden lg:block">Cart</span>

        </div>
        <div className="seller flex gap-2 items-center cursor-pointer">
           <IoStorefrontOutline size={22} />
          <span className="hidden lg:block" >Become a seller</span>
        </div>
        <div className="more  cursor-pointer">
           <MdMoreVert size={20}  />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
