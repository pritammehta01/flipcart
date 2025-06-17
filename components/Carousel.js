"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import React from 'react'

const Carousel=()=> {
  const scrollRef = useRef(null);

  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/2020/340/image/1bd9f11edbf77427.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/2020/340/image/05c9066df38688f4.jpeg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/2020/340/image/11980ec333f6aa03.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/2020/340/image/ff79341b24d091cd.jpg?q=60",
  ];

  const scroll = (direction) => {
    const current = scrollRef.current;
    if (!current) return;

    const scrollAmount = 1522;

    if (direction === "left") {
      if (current.scrollLeft === 0) {
        current.scrollLeft = current.scrollWidth; // Go to end
      } 
      else {
        current.scrollLeft -= scrollAmount;
      }
    } 
    else {
      const maxScrollLeft = current.scrollWidth - current.clientWidth;
      if (Math.ceil(current.scrollLeft) >= maxScrollLeft) {
        current.scrollLeft = 0; // Go back to start
      } 
      else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute left-0 w-10 rounded-r-sm h-22 top-[54%] transform -translate-y-1/2 bg-white p-2 shadow z-10"
        onClick={() => scroll("left")}
      >
        <GrFormPrevious className="text-gray-500" size={20} />
      </button>

      {/* Scrollable Items */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 py-4 scroll-smooth"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[98vw] h-63 relative overflow-hidden bg-gray-200"
          >
            <Image src={src} fill alt={`carousel-${index}`} className="object-cover" />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 w-10 rounded-l-sm h-22 top-[54%] transform -translate-y-1/2 bg-white p-2 shadow z-10"
        onClick={() => scroll("right")}
      >
        <GrFormNext className="text-gray-500" size={20} />
      </button>
    </div>
  );
}
export default Carousel
