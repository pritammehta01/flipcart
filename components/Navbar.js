'use client';

import { useRouter } from 'next/navigation';
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  IoCard,
  IoHeart,
  IoPersonCircle,
  IoSearchOutline,
  IoTicket,
  IoWallet,
  IoCartOutline,
  IoStorefrontOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { MdMoreVert } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/search'); // make sure the file exists at /app/search/page.js
  };
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
        <input onClick={handleClick}
          className="border-none outline-none w-full"
          type="text"
          placeholder="Search for Product  Brands and More"
        />
      </div>
      <div className="items-center text-lg flex gap-3 lg:gap-7 ">
        <div className="login w-30 text-gray-800 bg-white h-9 rounded-lg hover:bg-blue-600 hover:text-white items-center  justify-center group flex  text-lg relative">
         <IoPersonCircleOutline className="mx-2" size={22} />
          <span>Login</span>
          <MdKeyboardArrowDown size={20} className="ml-2 transform transition-transform duration-200 group-hover:rotate-180"/>
          <div className="sub-menu absolute top-10 bg-white rounded-sm  w-52 text-black font-semibold hidden group-hover:block z-5 border border-gray-300">
            <div className="flex justify-between text-sm cursor-pointer m-4">
              <span className=" cursor-pointer">New Customer?</span>
              <Link className="hover:underline text-blue-500" href="">
                Sign Up
              </Link>
            </div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="flex gap-5 m-4 text-sm  font-normal items-center">
              <IoPersonCircle className="text-[#2874f0] font-bold" size={18} />
              <span>My Profile</span>
            </div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="flex gap-5 m-4 text-sm  font-normal items-center">
              <Image src="/plus.png" width={18} height={16} alt="image" />
              <span>Flipcart Plus Zone</span>
            </div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="flex gap-5 m-4 text-sm  font-normal items-center">
              <IoCard className="text-[#2874f0] font-bold" size={18} />
              <span>Orders</span>
            </div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="flex gap-5 m-4 text-sm  font-normal items-center">
              <IoHeart className="text-[#2874f0] font-bold" size={18} />
              <span>Wishlist</span>
            </div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="flex gap-5 m-4 text-sm  font-normal items-center">
              <IoTicket className="text-[#2874f0] font-bold" size={18} />
              <span>Rewards</span>
            </div>
            <div className="line bg-[#f6f3f3] h-[3px]"></div>
            <div className="flex gap-5 m-4 text-sm  font-normal items-center">
              <IoWallet className="text-[#2874f0] font-bold" size={18} />
              <span>Gift Cards</span>
            </div>
          </div>
        </div>
        <div className="cart flex gap-2  items-center cursor-pointer">
          <IoCartOutline size={24} />
          <span className="hidden lg:block">Cart</span>
        </div>
        <div className="seller flex gap-2 items-center cursor-pointer">
          <IoStorefrontOutline size={22} />
          <span className="hidden lg:block">Become a seller</span>
        </div>
        <div className="more  cursor-pointer">
          <MdMoreVert size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
