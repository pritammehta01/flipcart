import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import HomeTop from "@/components/HomeTop";
import Carousel from "@/components/Carousel";
import HomeItem from "@/components/HomeItem";
import MostSearched from "@/components/MostSearched";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="line bg-[#f6f3f3] h-2"></div>

      {/* <SearchItem/> */}
      <main className="bg-gray-100 h-fit px-4">
        <HomeTop />
        <Carousel />
        <div className="line bg-[#f6f3f3] h-2"></div>
        <HomeItem />
      </main>
      <div className="line bg-[#8b8686] h-[1px] my-2"></div>
      <footer>
        <div className="bg-gray-100 h-fit px-4 mb-10">
          <div className="text-lg text-gray-500">
            <span>Top Stories:&nbsp;</span>
            <span>Brand Directory</span>
          </div>
          <MostSearched />
        </div>

        {/* footer  */}
        <div className="flex px-16 py-10 gap-8 text-sm bg-[#212121] text-gray-200">
          {/* ABOUT */}
          <div>
            <div className="font-semibold mb-2 text-gray-500">ABOUT</div>
            <Link
              href="/helpcentre?otracker=footer_navlinks"
              aria-label="Contact Us"
              className="block"
            >
              Contact Us
            </Link>
            <Link
              href="https://corporate.flipkart.net/corporate-home"
              aria-label="About Us"
              className="block"
            >
              About Us
            </Link>
            <Link
              href="https://www.flipkartcareers.com/?otracker=footer_navlinks"
              aria-label="Careers"
              className="block"
            >
              Careers
            </Link>
            <Link
              href="http://stories.flipkart.com/?otracker=footer_navlinks"
              aria-label="Flipkart Stories"
              className="block"
            >
              Flipkart Stories
            </Link>
            <Link
              href="http://stories.flipkart.com/category/top-stories/news/"
              aria-label="Press"
              className="block"
            >
              Press
            </Link>
            <Link
              href="/corporate-information"
              aria-label="Corporate Information"
              className="block"
            >
              Corporate Information
            </Link>
          </div>

          {/* GROUP COMPANIES */}
          <div>
            <div className="font-semibold mb-2 text-gray-500">
              GROUP COMPANIES
            </div>
            <a
              href="https://www.myntra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              Myntra
            </a>
            <a
              href="https://www.cleartrip.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              Cleartrip
            </a>
            <a
              href="https://www.shopsy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              Shopsy
            </a>
          </div>

          {/* HELP */}
          <div>
            <div className="font-semibold mb-2 text-gray-500">HELP</div>
            <Link
              href="/pages/payments"
              aria-label="Payments"
              className="block"
            >
              Payments
            </Link>
            <Link
              href="/pages/shipping"
              aria-label="Shipping"
              className="block"
            >
              Shipping
            </Link>
            <Link
              href="/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG"
              aria-label="Cancellation & Returns"
              className="block"
            >
              Cancellation & Returns
            </Link>
            <Link
              href="/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG"
              aria-label="FAQ"
              className="block"
            >
              FAQ
            </Link>
          </div>

          {/* CONSUMER POLICY */}
          <div>
            <div className="font-semibold mb-2 text-gray-500">
              CONSUMER POLICY
            </div>
            <Link
              href="/pages/returnpolicy?otracker=footer_navlinks"
              className="block"
            >
              Cancellation & Returns
            </Link>
            <Link
              href="/pages/terms?otracker=footer_navlinks"
              className="block"
            >
              Terms Of Use
            </Link>
            <Link
              href="/pages/paymentsecurity?otracker=footer_navlinks"
              className="block"
            >
              Security
            </Link>
            <Link
              href="/pages/privacypolicy?otracker=footer_navlinks"
              className="block"
            >
              Privacy
            </Link>
            <Link href="/sitemap?otracker=footer_navlinks" className="block">
              Sitemap
            </Link>
            <Link
              href="/pages/grievance-redressal-mechanism?otracker=footer_navlinks"
              className="block"
            >
              Grievance Redressal
            </Link>
            <Link
              href="/pages/ewaste-compliance-tnc?otracker=footer_navlinks"
              className="block"
            >
              EPR Compliance
            </Link>
          </div>

          {/* CONTACT ADDRESS */}
          <div className="max-w-xs">
            <div className="font-semibold mb-2 text-gray-500">Mail Us:</div>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103, Karnataka, India</p>
            <div className="font-semibold mt-4">Social:</div>
            <div className="flex gap-2 mt-2">
              <a href="https://www.facebook.com/flipkart" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com/flipkart" aria-label="Twitter">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.youtube.com/flipkart" aria-label="YouTube">
                <IoLogoYoutube size={24} />
              </a>
              <a
                href="https://www.instagram.com/flipkart"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* REGISTERED OFFICE */}
          <div className="max-w-xs">
            <div className="font-semibold mb-2 text-gray-500">
              Registered Office Address:
            </div>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103, Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>
              Telephone:{" "}
              <a href="tel:044-45614700" className="underline">
                044-45614700
              </a>{" "}
              /{" "}
              <a href="tel:044-67415800" className="underline">
                044-67415800
              </a>
            </p>
          </div>
        </div>
         <div className="line bg-[#514848] h-[1px]"></div>
        <div className="flex flex-wrap items-center h-14  px-24  justify-between text-[13px] bg-[#212121] text-white">
          {/* Become a Seller */}
          <div className="flex items-center gap-2">
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt="Become a Seller"
              width={13}
              height={12}
            />
            <a
              href="https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Become a Seller"
              className="hover:underline"
            >
              Become a Seller
            </a>
          </div>

          {/* Advertise */}
          <div className="flex items-center gap-2">
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt="Advertise"
              width={14}
              height={14}
            />
            <a
              href="https://brands.flipkart.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Advertise"
              className="hover:underline"
            >
              Advertise
            </a>
          </div>

          {/* Gift Cards */}
          <div className="flex items-center gap-2">
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt="Gift Cards"
              width={13}
              height={13}
            />
            <Link
              href="/the-gift-card-store?otracker=footer_navlinks"
              aria-label="Gift Cards"
              className="hover:underline"
            >
              Gift Cards
            </Link>
          </div>

          {/* Help Center */}
          <div className="flex items-center gap-2">
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt="Help Center"
              width={13}
              height={13}
            />
            <Link
              href="/helpcentre?otracker=footer_navlinks"
              aria-label="Help Center"
              className="hover:underline"
            >
              Help Center
            </Link>
          </div>

          {/* Copyright */}
          <span className="text-center">
            © 2007-2025 <span className="font-semibold">Flipkart.com</span>
          </span>

          {/* Payment Image */}
          <Image
            src="/payment-method.svg"
            alt="Payment methods"
            width={400}
            height={64}
          />
        </div>
      </footer>
    </div>
  );
}
