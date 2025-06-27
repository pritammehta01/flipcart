"use client";
import Link from "next/link";

const mostSearched = [
  {
    title: "MOTOROLA Edge 60 5G",
    href: "/motorola-edge-60-5g-pantone-shamrock-256-gb/p/itm18a81b952d716",
  },
  {
    title: "SAMSUNG Galaxy S25 Edge",
    href: "/samsung-galaxy-s25-edge-5g-titanium-silver-256-gb/p/itm58d92f4e3af14",
  },
  { title: "MOTOROLA Razr 60", href: "/motorola-razr-60/p/itmbad80b506f2c8" },
  {
    title: "CMF Phone 2 Pro",
    href: "/cmf-nothing-phone-2-pro-5g-black-128-gb/p/itmf32457aeff519",
  },
  {
    title: "Google Pixel 9A",
    href: "/google-pixel-9a-obsidian-256-gb/p/itmf9d1fcfa566cf",
  },
  {
    title: "SAMSUNG F16",
    href: "/samsung-galaxy-f16-5g-glam-green-128-gb/p/itm74165546d7c6c",
  },
  { title: "Mobile", href: "/mobile-phones-store" },
  { title: "POCO M7", href: "/poco-m7-5g/p/itmf030852464eef" },
  {
    title: "Nothing Phone 3a",
    href: "/nothing-phone-3a-black-128-gb/p/itm49557c5a65f9c",
  },
  {
    title: "iPhone 16e",
    href: "/apple-iphone-16e-white-128-gb/p/itm7971f594b0906",
  },
  {
    title: "SAMSUNG Galaxy S25 Ultra",
    href: "/samsung-galaxy-s25-ultra-5g-titanium-silverblue-512-gb/p/itm2ce28bbf75993",
  },
  {
    title: "SAMSUNG Galaxy S25 Plus",
    href: "/samsung-galaxy-s25-plus-5g-silver-shadow-256-gb/p/itm8d76a9b476932",
  },
  {
    title: "SAMSUNG Galaxy S25",
    href: "/samsung-galaxy-s25-5g-icyblue-256-gb/p/itm3c1e495903acc",
  },
  {
    title: "iPhone 16",
    href: "/apple-iphone-16-white-128-gb/p/itm7c0281cd247be",
  },
  {
    title: "iPhone 16 Plus",
    href: "/apple-iphone-16-plus-teal-128-gb/p/itmfa939eebe8adf",
  },
  {
    title: "iPhone 16 Pro",
    href: "/apple-iphone-16-pro-white-titanium-128-gb/p/itm50f720fdcec51",
  },
  {
    title: "iPhone 16 Pro Max",
    href: "/apple-iphone-16-pro-max-black-titanium-256-gb/p/itm7e75db4f27bd5",
  },
  {
    title: "vivo V50",
    href: "/vivo-v50-5g-rose-red-128-gb/p/itm12bbdca230795",
  },
  {
    title: "OPPO Reno13 Pro",
    href: "/oppo-reno13-pro-5g-graphite-grey-256-gb/p/itmd9520193f28ac",
  },
  { title: "POCO X7", href: "/poco-x7-5g/p/itm638304f590e26" },
  {
    title: "realme 14 Pro Plus",
    href: "/realme-14-pro-5g-pearl-white-256-gb/p/itmb5105a70ea6a6",
  },
  {
    title: "REDMI Note 14 Pro+ 5G",
    href: "/redmi-note-14-pro-5g-spectre-blue-128-gb/p/itm7fa24a152cbc9",
  },
  {
    title: "OPPO Find X8",
    href: "/oppo-find-x8-5g-space-black-512-gb/p/itm0e193d19d23ff",
  },
  { title: "Flipkart Exchange", href: "/exchange-store" },
  { title: "Sell Old Phone", href: "/reset-sell-store" },
  {
    title: "Nothing Phone 2a Plus",
    href: "/nothing-phone-2a-plus/p/itm0c99b11bfe22d",
  },
  {
    title: "CMF by Nothing Phone 1",
    href: "/cmf-nothing-phone-1-5g/p/itm9bfa0dd29dbcb",
  },
  {
    title: "Infinix Note 40 Pro 5G",
    href: "/infinix-note-40-pro-5g-vintage-green-256-gb/p/itma7197f5eb7e85",
  },
  {
    title: "iPhone 15",
    href: "/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4",
  },
  {
    title: "Infinix Note 40 5G",
    href: "/infinix-note-40-5g/p/itm72c4c7b7d8834",
  },
  {
    title: "iPhone 15 Plus",
    href: "/apple-iphone-15-plus-blue-128-gb/p/itm4022c14383050",
  },
  {
    title: "vivo X Fold3 Pro",
    href: "/vivo-x-fold3-pro-celestial-black-512-gb/p/itm8dfd1a1b0900f",
  },
  { title: "Motorola g04s", href: "/motorola-g04s/p/itm6d82d81cfa8da" },
  {
    title: "Vivo x 100",
    href: "/vivo-x100-asteroid-black-256-gb/p/itm60fe0113c39cb",
  },
  {
    title: "OnePlus Nord CE 3 Lite 5G",
    href: "/oneplus-nord-ce-3-lite-5g-pastel-lime-128-gb/p/itm2cd5a4e659035",
  },
  {
    title: "SAMSUNG Flip5",
    href: "/samsung-galaxy-z-flip5-mint-256-gb/p/itm3038611e95123",
  },
  {
    title: "SAMSUNG Fold5",
    href: "/samsung-galaxy-z-fold5-phantom-black-512-gb/p/itm4d14abce6dc2f",
  },
  {
    title: "Flipkart Axis Bank Super Elite Credit card",
    href: "/superelite-credit-card-store",
  },
  { title: "5G Mobile Phones", href: "/5g-mobile-phones-store" },
  {
    title: "Moto Edge 40",
    href: "/motorola-edge-40-jet-black-256-gb/p/itmbe5b18bf1f229",
  },
  {
    title: "Grievance Redressal",
    href: "/pages/grievance-redressal-mechanism",
  },
  { title: "Help Centre", href: "/helpcentre" },
  { title: "Track Orders", href: "/helpcentre/trackOrder/i/2" },
  { title: "Manage Orders", href: "/helpcentre/manageOrder/i/3" },
  { title: "Return Orders", href: "/helpcentre/returnOrder/i/4" },
  { title: "Gift Cards Store", href: "/the-gift-card-store" },
  {
    title: "Flipkart Axis Bank Credit Card",
    href: "/flipkart-axis-bank-credit-card-store",
  },
];

import React from 'react'

const MostSearched = () => {
 return (
    <div className="flex flex-wrap gap-2  items-center">
        <h2 className="text-lg">Most searched for on Flipkart:</h2>
        {mostSearched.map(({ title, href }) => (
          <Link
            key={href}
            href=""
            className="text-gray-600 hover:underline text-xs"
          >
            {title} &nbsp;|
          </Link>
        ))}
      </div>
  );
}

export default MostSearched
