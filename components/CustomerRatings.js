"use client";
import { useState } from "react";
import Image from "next/image";

export default function CustomerRatings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="left m-1.5 w-1/5 h-fit bg-white">
      <div className="px-3 py-2.5 m-1">
        <h1 className="text-lg font-semibold">Filters</h1>
      </div>
      {/* line break */}
      <div className="line bg-[#f6f3f3] h-[3px]"></div>
      <section className="p-3 flex flex-col gap-2.5 text-sm font-semibold">
        <div>
          <span className="text-xs font-semibold">CATEGORIES</span>
        </div>

        <div>
          <div className="flex items-center gap-1 text-gray-500">
            <span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="gray"
                ></path>
              </svg>
            </span>
            <a
              title="Mobiles &amp; Accessories"
              href="/mobiles-accessories/pr?sid=tyy&amp;q=mobiles&amp;otracker=categorytree"
            >
              Mobiles &amp; Accessories
            </a>
          </div>
        </div>

        <div>
          <div>
            <a
              title="Mobiles"
              href="/mobiles/pr?sid=tyy,4io&amp;q=mobiles&amp;otracker=categorytree"
            >
              Mobiles
            </a>
          </div>
        </div>
      </section>
      {/* line break */}
      <div className="line bg-[#f6f3f3] h-[3px]"></div>
      <section className="px-3 py-2.5">
        {/* Price Title */}
        <div>
          <div>
            <span className="text-base font-medium">Price</span>
          </div>
        </div>
        {/* Slider section */}
        <div>
          <input className="w-full" type="range" min="0" max="50000" />
        </div>
        {/* Bar heights */}
        <div>
          <div className="flex  gap-1">
            <div className="h-6 w-12 bg-gray-300">500</div>
            <div className="h-6 w-12 text-center bg-gray-300">1000</div>
            <div className="h-6 w-12 text-center bg-gray-300">2000</div>
            <div className="h-6 w-12 text-center bg-gray-300">3000</div>
            <div className="h-6 w-12 text-center bg-gray-300">5000</div>
          </div>
        </div>
        {/* Dropdowns */}
        <div className="flex items-center gap-2 mt-4">
          <div>
            <select className="border border-gray-300 rounded px-2 py-1">
              <option value="Min">Min</option>
              <option value="10000">₹10000</option>
              <option value="15000">₹15000</option>
              <option value="20000">₹20000</option>
              <option value="30000">₹30000</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">to</div>
          <div>
            <select className="border border-gray-300 rounded px-2 py-1">
              <option value="10000">₹10000</option>
              <option value="15000">₹15000</option>
              <option value="20000">₹20000</option>
              <option value="30000">₹30000</option>
              <option value="Max">₹30000+</option>
            </select>
          </div>
        </div>
      </section>
      {/* line break */}
      <div className="line bg-[#f6f3f3] h-[3px]"></div>
      <section className="px-3 py-2.5">
        <div className="FtQCb2 _3Owiq+">
          <div className="fxf7w6 rgHxCQ">Brand</div>
        </div>

        <div className="SDsN9S">
          <div className="bs1+1t">
            <div className="brand flex w-[90%] items-center my-2 gap-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 17 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="gray" fillRule="evenodd">
                  <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203" />
                  <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467" />
                </g>
              </svg>
              <input
                type="text"
                className="outline-none border-none"
                placeholder="Search Brand"
              />
              {/* line break */}
            </div>

            {["Apple", "SAMSUNG", "Google", "MOTOROLA", "vivo", "OPPO"].map(
              (brand) => (
                <div className="flex px-3 py-2.5" title={brand} key={brand}>
                  <label className="flex gap-1 text-sm">
                    <input type="checkbox" className="vn9L2C" readOnly />
                    <div className="XqNaEv"></div>
                    <div className="_6i1qKy">{brand}</div>
                  </label>
                </div>
              )
            )}
          </div>

          <div className="px-3 py-2.5">
            <span className="text-xs text-[blue]">168 MORE</span>
          </div>
        </div>
      </section>
      {/* line break */}
      <div className="line bg-[#f6f3f3] h-[3px]"></div>
      <section className="flex px-3 py-2.5 justify-between">
        <label className="flex gap-2.5">
          <input type="checkbox" readOnly />
          <div>
            <div>
              <Image src="/asured.png" width={70} height={21} alt="img" />
            </div>
          </div>
        </label>
        <div className=" rounded-full bg-gray-200 text-xs w-5 h-5 text-center items-center">
          <span>?</span>
        </div>
      </section>
      {/* line break */}
      <div className="line bg-[#f6f3f3] h-[3px]"></div>
      <section className="px-3 py-2.5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="font-medium">Customer Ratings</div>
          {/* Arrow Down Icon (rotates when open) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Toggle Content */}
        {isOpen && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center gap-2.5 text-sm">
              <input type="checkbox" readOnly />
              <div>4★ & above</div>
            </label>
            <label className="flex items-center gap-2.5 text-sm">
              <input type="checkbox" readOnly />
              <div>3★ & above</div>
            </label>
          </div>
        )}
      </section>
    </div>
  );
}
