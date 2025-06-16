"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const ProductList = () => {
  const [list, setList] = useState(null);

  const fetchData = async () => {
    const res = await fetch("/Product.json");
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {list?.products?.map((product, index) => (
        <div key={index}>
          {/* line break */}
          <div className="line bg-[#f6f3f3] h-[3px]"></div>
          <div className="flex px-3 py-8 gap-10">
            <div className="w-40 h-48 relative">
              <Image className="object-contain"
              fill={true}
                // width={160}
                // height={200}
                src={product.image.src}
                alt={product.image.alt}
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <div className="text-lg font-semibold hover:cursor-pointer hover:text-[#2874f0]">
                {product.name}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-green-600 text-white w-max rounded-xs text-sm px-1">
                  {product.rating.value} ★
                </div>
                <span className="text-sm text-gray-600">
                  <span>{product.rating.ratings} Ratings</span>&nbsp;&amp;&nbsp;
                  <span>{product.rating.reviews} Reviews</span>
                </span>
              </div>

              <ul className="list-disc ml-5 text-sm text-gray-700">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2 w-[30%]">
              <div className="">
                <div className="text-2xl font-bold text-black hover:cursor-pointer flex gap-4 items-center mb-2">
                  {product.price.current}
                  <div>
                    <Image src="/asured.png" width={70} height={21} alt="img" />
                  </div>
                </div>
                <div className="text-sm line-through text-gray-500">
                  {product.price.original}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {product.price.discount}
                </div>
              </div>

              <div className="mt-2">
                <div className="p-1 rounded-sm">
                  <div className="text-green-600 text-xs font-bold">
                    {product.offers.label}
                  </div>
                </div>
              </div>

              <div className="mt-1">
                <div className="flex flex-wrap gap-1 text-sm text-black">
                  <div className="font-normal">Upto</div>
                  <div className="font-bold">
                    {product.offers.exchange_offer.split(" ")[1]}
                  </div>
                  <div className="font-normal">Off on Exchange</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
