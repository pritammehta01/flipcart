import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SearchTop() {
  return (
    <div className="top w-full h-10 bg-white justify-center gap-12 items-center flex text-black text-sm font-semibold">
      <span className="flex items-center  group hover:text-[#2874f0] cursor-pointer relative">
        Electronics
        <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300">
          Mobile
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            <li>
              <Link href="/mobiles/mi">Mi</Link>
            </li>
            <li>
              <Link href="/mobiles/realme">Realme</Link>
            </li>
            <li>
              <Link href="/mobiles/samsung">Samsung</Link>
            </li>
            <li>
              <Link href="/mobiles/infinix">Infinix</Link>
            </li>
            <li>
              <Link href="/mobiles/oppo">OPPO</Link>
            </li>
            <li>
              <Link href="/mobiles/apple">Apple</Link>
            </li>
            <li>
              <Link href="/mobiles/vivo">Vivo</Link>
            </li>
            <li>
              <Link href="/mobiles/honor">Honor</Link>
            </li>
            <li>
              <Link href="/mobiles/asus">Asus</Link>
            </li>
            <li>
              <Link href="/mobiles/poco-x2">Poco X2</Link>
            </li>
            <li>
              <Link href="/mobiles/realme-narzo-10">realme Narzo 10</Link>
            </li>
            <li>
              <Link href="/mobiles/infinix-hot-9">Infinix Hot 9</Link>
            </li>
            <li>
              <Link href="/mobiles/iqoo-3">IQOO 3</Link>
            </li>
            <li>
              <Link href="/mobiles/iphone-se">iPhone SE</Link>
            </li>
            <li>
              <Link href="/mobiles/motorola-razr">Motorola razr</Link>
            </li>
            <li>
              <Link href="/mobiles/realme-narzo-10a">realme Narzo 10A</Link>
            </li>
            <li>
              <Link href="/mobiles/motorola-g8-power-lite">
                Motorola g8 power lite
              </Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex items-center group hover:text-[#2874f0] cursor-pointer relative">
        TVs &amp; Appliances
        <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300">
          Television
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            <li>
              <Link href="/television/new-launches">New Launches</Link>
            </li>
            <li>
              <Link href="/television/smart-ultra-hd">Smart & Ultra HD</Link>
            </li>
            <li>
              <Link href="/television/top-brands">Top Brands</Link>
            </li>
            <li>
              <Link href="/television/mi">Mi</Link>
            </li>
            <li>
              <Link href="/television/vu">Vu</Link>
            </li>
            <li>
              <Link href="/television/thomson">Thomson</Link>
            </li>
            <li>
              <Link href="/television/samsung">Samsung</Link>
            </li>
            <li>
              <Link href="/television/iffalcon-by-tcl">iFFALCON by TCL</Link>
            </li>
            <li>
              <Link href="/television/nokia">Nokia</Link>
            </li>
            <li>
              <Link href="/television/lg">LG</Link>
            </li>
            <li>
              <Link href="/television/realme">realme</Link>
            </li>
            <li>
              <Link href="/television/motorola">Motorola</Link>
            </li>
            <li>
              <Link href="/television/shop-by-screen-size">
                Shop by Screen Size
              </Link>
            </li>
            <li>
              <Link href="/television/screen-size/24-and-below">
                24 & below
              </Link>
            </li>
            <li>
              <Link href="/television/screen-size/28-32">28 - 32</Link>
            </li>
            <li>
              <Link href="/television/screen-size/39-43">39 - 43</Link>
            </li>
            <li>
              <Link href="/television/screen-size/48-55">48 - 55</Link>
            </li>
            <li>
              <Link href="/television/screen-size/60-and-above">
                60 & above
              </Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex items-center group hover:text-[#2874f0] cursor-pointer relative">
        Men
        <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300">
          Footwear
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            {/* Footwear Section */}
            <li>
              <Link href="/footwear/sports-shoes">Sports Shoes</Link>
            </li>
            <li>
              <Link href="/footwear/casual-shoes">Casual Shoes</Link>
            </li>
            <li>
              <Link href="/footwear/formal-shoes">Formal Shoes</Link>
            </li>
            <li>
              <Link href="/footwear/sandals-floaters">Sandals & Floaters</Link>
            </li>
            <li>
              <Link href="/footwear/flip-flops">Flip-Flops</Link>
            </li>
            <li>
              <Link href="/footwear/loafers">Loafers</Link>
            </li>
            <li>
              <Link href="/footwear/boots">Boots</Link>
            </li>
            <li>
              <Link href="/footwear/running-shoes">Running Shoes</Link>
            </li>
            <li>
              <Link href="/footwear/sneakers">Sneakers</Link>
            </li>

            {/* Men's Grooming Section */}
            <li>
              <Link href="/mens-grooming">Men&apos;s Grooming</Link>
            </li>
            <li>
              <Link href="/mens-grooming/deodorants">Deodorants</Link>
            </li>
            <li>
              <Link href="/mens-grooming/perfumes">Perfumes</Link>
            </li>
            <li>
              <Link href="/mens-grooming/beard-care">
                Beard Care & Grooming
              </Link>
            </li>
            <li>
              <Link href="/mens-grooming/shaving-aftershave">
                Shaving & Aftershave
              </Link>
            </li>
            <li>
              <Link href="/mens-grooming/sexual-wellness">Sexual Wellness</Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex items-center group hover:text-[#2874f0] cursor-pointer relative">
        Women
        <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300">
          Clothing
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            {/* Clothing Section */}

            <li>
              <Link href="/clothing/women-western-maternity">
                Women Western & Maternity Wear
              </Link>
            </li>
            <li>
              <Link href="/clothing/topwear">Topwear</Link>
            </li>
            <li>
              <Link href="/clothing/dresses">Dresses</Link>
            </li>
            <li>
              <Link href="/clothing/jeans">Jeans</Link>
            </li>
            <li>
              <Link href="/clothing/shorts">Shorts</Link>
            </li>
            <li>
              <Link href="/clothing/skirts">Skirts</Link>
            </li>
            <li>
              <Link href="/clothing/jeggings-tights">Jeggings & Tights</Link>
            </li>
            <li>
              <Link href="/clothing/trousers-capris">Trousers & Capris</Link>
            </li>

            {/* Lingerie & Sleepwear Section */}
            <li>
              <Link href="/clothing/lingerie-sleepwear">
                Lingerie & Sleepwear
              </Link>
            </li>
            <li>
              <Link href="/clothing/lingerie-sleepwear/bras">Bras</Link>
            </li>
            <li>
              <Link href="/clothing/lingerie-sleepwear/panties">Panties</Link>
            </li>
            <li>
              <Link href="/clothing/lingerie-sleepwear/lingerie-sets">
                Lingerie Sets
              </Link>
            </li>
            <li>
              <Link href="/clothing/lingerie-sleepwear/night-dresses">
                Night Dresses & Nighties
              </Link>
            </li>
            <li>
              <Link href="/clothing/lingerie-sleepwear/shapewear">
                Shapewear
              </Link>
            </li>
            <li>
              <Link href="/clothing/lingerie-sleepwear/camisoles-slips">
                Camisoles & Slips
              </Link>
            </li>
            <li>
              <Link href="/clothing/swim-beachwear">Swim & Beachwear</Link>
            </li>

            {/* Other Clothing Categories */}
            <li>
              <Link href="/clothing/party-dresses">Party Dresses</Link>
            </li>
            <li>
              <Link href="/clothing/sports-wear">Sports Wear</Link>
            </li>
            <li>
              <Link href="/clothing/winter-wear">Winter Wear</Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex items-center group hover:text-[#2874f0] cursor-pointer relative">
        Baby &amp; Kids
        <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300">
          Kids Clothing
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            {/* Main Category */}

            {/* Boys' Clothing */}
            <li>
              <Link href="/kids-clothing/boys">Boys&apos; Clothing</Link>
            </li>
            <li>
              <Link href="/kids-clothing/boys/t-shirts">T-Shirts</Link>
            </li>
            <li>
              <Link href="/kids-clothing/boys/ethnic-wear">Ethnic Wear</Link>
            </li>
            <li>
              <Link href="/kids-clothing/boys/shorts">Shorts</Link>
            </li>
            <li>
              <Link href="/kids-clothing/boys/shirts">Shirts</Link>
            </li>
            <li>
              <Link href="/kids-clothing/boys/innerwear">Innerwear</Link>
            </li>

            {/* Girls' Clothing */}
            <li>
              <Link href="/kids-clothing/girls">Girls&apos; Clothing</Link>
            </li>
            <li>
              <Link href="/kids-clothing/girls/dresses-skirts">
                Dresses & Skirts
              </Link>
            </li>
            <li>
              <Link href="/kids-clothing/girls/ethnic-wear">Ethnic Wear</Link>
            </li>
            <li>
              <Link href="/kids-clothing/girls/tshirts-tops">
                T-shirts & Tops
              </Link>
            </li>
            <li>
              <Link href="/kids-clothing/girls/innerwear">Innerwear</Link>
            </li>

            {/* Baby Boys' Clothing */}
            <li>
              <Link href="/kids-clothing/baby-boys">
                Baby Boys&apos; Clothing
              </Link>
            </li>
            <li>
              <Link href="/kids-clothing/baby-boys/combo-sets">Combo Sets</Link>
            </li>
            <li>
              <Link href="/kids-clothing/baby-boys/t-shirts">T-Shirts</Link>
            </li>
            <li>
              <Link href="/kids-clothing/baby-boys/innerwear">Innerwear</Link>
            </li>

            {/* Baby Girls' Clothing */}
            <li>
              <Link href="/kids-clothing/baby-girls">
                Baby Girls&apos; Clothing
              </Link>
            </li>
            <li>
              <Link href="/kids-clothing/baby-girls/combo-sets">
                Combo Sets
              </Link>
            </li>
            <li>
              <Link href="/kids-clothing/baby-girls/dresses-gowns">
                Dresses & Gowns
              </Link>
            </li>
            <li>
              <Link href="/kids-clothing/baby-girls/innerwear">Innerwear</Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex items-center group hover:text-[#2874f0] cursor-pointer relative">
        Home &amp; Furniture
        <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300">
          Kitchen, Cookware & Serveware
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            {/* Main Category */}

            {/* Subcategories */}
            <li>
              <Link href="/kitchen-cookware-serveware/pans">Pans</Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/tawas">Tawas</Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/pressure-cookers">
                Pressure Cookers
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/kitchen-tools">
                Kitchen tools
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/gas-stoves">
                Gas Stoves
              </Link>
            </li>

            {/* Tableware & Dinnerware */}
            <li>
              <Link href="/kitchen-cookware-serveware/tableware-dinnerware">
                Tableware & Dinnerware
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/coffee-mugs">
                Coffee Mugs
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/dinner-set">
                Dinner Set
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/barware">Barware</Link>
            </li>

            {/* Kitchen Storage */}
            <li>
              <Link href="/kitchen-cookware-serveware/kitchen-storage">
                Kitchen Storage
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/water-bottles">
                Water Bottles
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/lunch-boxes">
                Lunch Boxes
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/flasks">Flasks</Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/casseroles">
                Casseroles
              </Link>
            </li>
            <li>
              <Link href="/kitchen-cookware-serveware/kitchen-containers">
                Kitchen Containers
              </Link>
            </li>

            {/* Cleaning */}
            <li>
              <Link href="/kitchen-cookware-serveware/cleaning-supplies">
                Cleaning Supplies
              </Link>
            </li>
          </ul>
        </div>
      </span>
      <span className="flex items-center group cursor-pointer hover:text-[#2874f0] relative">
        Sports, Books &amp; More
         <MdKeyboardArrowDown size={24}  className="ml-1 transform transition-transform duration-200 group-hover:rotate-180"/>
        <div className="sub-menu absolute top-6 bg-white rounded-sm p-4 w-60 text-black hidden group-hover:block z-5 border border-gray-300 hover:block">
          Sports
          <ul className="text-gray-500 m-2 text-xs gap-4 flex flex-col">
            {/* Main Category */}

            {/* Sports Types */}
            <li>
              <Link href="/sports/cricket">Cricket</Link>
            </li>
            <li>
              <Link href="/sports/badminton">Badminton</Link>
            </li>
            <li>
              <Link href="/sports/cycling">Cycling</Link>
            </li>
            <li>
              <Link href="/sports/football">Football</Link>
            </li>
            <li>
              <Link href="/sports/skating">Skating</Link>
            </li>
            <li>
              <Link href="/sports/camping-hiking">Camping & Hiking</Link>
            </li>
            <li>
              <Link href="/sports/swimming">Swimming</Link>
            </li>

            {/* Fitness & Exercise */}
            <li>
              <Link href="/sports/exercise-fitness">Exercise Fitness</Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/cardio-equipment">
                Cardio Equipment
              </Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/home-gyms">Home Gyms</Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/support">Support</Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/dumbbells">Dumbbells</Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/ab-exercisers">
                Ab Exercisers
              </Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/shakers-sippers">
                Shakers & Sippers
              </Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/yoga-mat">Yoga Mat</Link>
            </li>
            <li>
              <Link href="/sports/exercise-fitness/gym-gloves">Gym Gloves</Link>
            </li>
          </ul>
        </div>
      </span>
      <a href="/travel/flights?otracker=nmenu_Flights">Flights</a>
      <a href="/offers-list/top-deals?screen=dynamic&amp;pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&amp;otracker=nmenu_offer-zone">
        Offer Zone
      </a>
    </div>
  );
}
