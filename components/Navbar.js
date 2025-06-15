import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCartOutline, IoPersonCircle, IoPersonCircleOutline, IoSearchOutline, IoStorefrontOutline } from "react-icons/io5";
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
      <div className="search text-center flex items-center px-2.5 py-5 h-8 gap-1 bg-[#e3eaf9] w-[30%] lg:w-[49%] rounded-md text-gray-600">
        <IoSearchOutline size={24} />
        <input
          className="border-none outline-none w-full"
          type="text"
          placeholder="Search for Product  Brands and More"
        />
      </div>
      <div className="items-center flex gap-3 lg:gap-10 ">
        <div className="login flex px-2 gap-2 size group rounded-md h-9 items-center hover:text-white hover:bg-blue-500 cursor-pointer">
          <IoPersonCircleOutline size={24} />
          <span>Login</span>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          width="14"
          height="14"
          className="ml-1 transform transition-transform duration-300 group-hover:rotate-180 group-hover:text-white"
          color="black"
          fill="none"
        >
          <path
            d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
         
        </div>
        <div className="cart flex gap-2 size cursor-pointer">
            <IoCartOutline size={24} />
           <span className="hidden lg:block">Cart</span>

        </div>
        <div className="seller flex gap-2 size cursor-pointer">
           <IoStorefrontOutline size={24} />
          <span className="hidden lg:block" >Become a seller</span>
        </div>
        <div className="more size cursor-pointer">
           <MdMoreVert size={24}  />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
