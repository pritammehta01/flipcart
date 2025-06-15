import React from "react";
import Image from "next/image";
import SearchTop from "./SearchTop";
import CustomerRatings from "./CustomerRatings";
import ProductList from "./ProductList";
import {
  IoCard,
  IoHeart,
  IoPerson,
  IoPersonCircle,
  IoSearchOutline,
  IoTicket,
  IoWallet,
} from "react-icons/io5";
import Link from "next/link";

const SearchItem = () => {
  return (
    <div>
      <nav className="bg-blue-500 flex w-full h-14  items-center justify-center pl-7 sticky top-0 z-10">
        <div className="logo mr-3">
          <Image
            style={{ objectFit: "fill" }}
            src="/flipkart-search.png"
            width={75}
            height={20}
            alt="Picture of the author"
          />
          <div className="flex max-h-fit items-center">
            <div className="text-[11px] text-white mr-1">Explore</div>
            <div className="text-[#ffe500] font-bold text-[11px] mr-0.5">
              Plus
            </div>
            <div className="w-2.5 h-2.5">
              <Image
                style={{ objectFit: "fill" }}
                src="/plus.png"
                width={12}
                height={12}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="search text-center flex items-center px-3  h-9 gap-1 bg-white w-[38%] mr-9">
          <input
            className="border-none outline-none w-full text-black placeholder-black text-sm"
            type="text"
            placeholder="Search for Product  Brands and More"
          />
          <IoSearchOutline className="text-[#2874f0] font-bold" size={24} />
        </div>
        <div className="items flex gap-10 text-white  text-lg">
          <div className="login w-30 bg-white h-[30px] text-blue-500 items-center justify-center group flex font-bold text-[15px] relative">
            <span>Login</span>
            <div className="sub-menu absolute top-11 bg-white rounded-sm  w-52 text-black font-semibold hidden group-hover:block z-5 border border-gray-300">
              <div className="flex justify-between text-sm cursor-pointer m-4">
                <span className=" cursor-pointer">New Customer?</span>
                <Link className="hover:underline text-blue-500" href="">
                  Sign Up
                </Link>
              </div>
              <div className="line bg-[#f6f3f3] h-[3px]"></div>
              <div className="flex gap-5 m-4 text-sm  font-normal items-center">
                <IoPersonCircle
                  className="text-[#2874f0] font-bold"
                  size={18}
                />
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
          <div className="seller flex">
            <span>Become a seller</span>
          </div>
          <div className="cart flex items-center text-white font-bold text-[16px]">
            <span>More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              width="14"
              height="14"
              color="#fff"
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
          <div className="cart flex text-white font-bold text-[16px] gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              width="18"
              height="18"
              color="#fff"
              fill="#fff"
            >
              <path
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Cart</span>
          </div>
        </div>
      </nav>
      <SearchTop />
      {/* main */}
      <div className="flex">
        <CustomerRatings />
        <div className="right bg-white w-full m-1.5">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
