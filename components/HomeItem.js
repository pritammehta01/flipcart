"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";

const HomeItem = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/flipcart-items.json");
      const data = await res.json();
      setList(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="bg-white p-2.5">
          <div className="text-2xl font-semibold">Beauty,Food ,Toys & more</div>
          <div className="no-scrollbar gap-22 flex  overflow-x-scroll flex-nowrap h-52 text-center">
            {list?.beauty?.map((food, index) => (
              <div
                key={index}
                className="my-2.5"
              >
                <div className="w-34 h-34 relative">
                  {food?.img && (
                    <Image
                      className="object-contain"
                      fill={true}
                      src={food.img}
                      alt={food.Heading || "Image"}
                    />
                  )}
                </div>
                <span>{food.Title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-2.5 my-3">
          <div className="text-2xl font-semibold">Sports, HelthCare & more</div>
          <div className="no-scrollbar gap-22  flex  overflow-x-scroll flex-nowrap h-52 text-center">
            {list?.Sports?.map((Sports, index) => (
              <div
                key={index}
                className="my-2.5"
              >
                <div className="w-34 h-34 relative">
                  {Sports?.img && (
                    <Image
                      className="object-contain"
                      fill={true}
                      src={Sports.img}
                      alt={Sports.Heading || "Image"}
                    />
                  )}
                </div>
                <span>{Sports.Title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-2.5 my-3">
          <div className="text-2xl font-semibold">Fashions Top Deals</div>
          <div className="no-scrollbar gap-22 flex  overflow-x-scroll flex-nowrap h-52 text-center">
            {list?.Fashions?.map((Fashions, index) => (
              <div
                key={index}
                className="my-2.5"
              >
                <div className="w-34 h-34 relative">
                  {Fashions?.img && (
                    <Image
                      className="object-contain"
                      fill={true}
                      src={Fashions.img}
                      alt={Fashions.Heading || "Image"}
                    />
                  )}
                </div>
                <span>{Fashions.Title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
