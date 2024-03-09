import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { FaTags } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

export default function Navbar() {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center text-2xl md:text-3xl lg:text-4xl">
        <div className="cursor-pointer" onClick={() => setShowLeftMenu(true)}>
          <IoMdMenu size={40} />
        </div>
        <h1>
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden bg-gray-200 ml-2 pr-2 rounded-full xl:flex items-center justify-center">
          <span className="text-xs bg-black text-white rounded-full px-2 py-2 m-1">
            Delivery
          </span>
          <span className="text-xs">Pickup</span>
        </div>
      </div>

      <div className="flex items-center bg-gray-200 px-2 py-2 rounded-full w-[300px] md:w-[500px] lg:w-[700px] ">
        <CiSearch size={25} />
        <input
          type="text"
          placeholder="Search food"
          className="pl-1 bg-transparent focus:outline-none"
        />
      </div>

      <div className="hidden cursor-pointer lg:flex items-center text-white py-2 px-4 bg-black rounded-full ">
        <FaShoppingCart size={20} className="mr-1" />
        <span>Cart</span>
      </div>

      <div
        className={
          showLeftMenu
            ? "fixed bg-black/80 w-full h-full top-0 left-0 z-10 visible"
            : "fixed bg-black/80 w-full h-full top-0 left-0 z-10 invisible"
        }
      ></div>

      <div
        className={
          showLeftMenu
            ? "fixed bg-white w-[300px] h-full top-0 left-0 z-10 flex flex-col p-4 duration-300"
            : "fixed bg-white w-[300px] h-full top-0 left-[-100%] z-10 flex flex-col p-4 duration-300"
        }
      >
        <div className="text-3xl flex justify-between items-center">
          <h1>
            Best<span className="font-bold"> Eats</span>
          </h1>
          <IoMdClose
            className="cursor-pointer"
            onClick={() => setShowLeftMenu(false)}
          />
        </div>

        <div className="flex items-center text-2xl my-4 mt-8">
          <FaTruck className="mr-4" />
          <button className="menu-button">Orders</button>
        </div>
        <div className="flex items-center text-2xl my-4">
          <FaHeart className="mr-4" />
          <button className="menu-button">Favourites</button>
        </div>
        <div className="flex items-center text-2xl my-4">
          <FaWallet className="mr-4" />
          <button className="menu-button">Wallet</button>
        </div>
        <div className="flex items-center text-2xl my-4">
          <IoMdHelpCircle className="mr-4" />
          <button className="menu-button">Help</button>
        </div>
        <div className="flex items-center text-2xl my-4">
          <FaTags className="mr-4" />
          <button className="menu-button">Promotions</button>
        </div>
        <div className="flex items-center text-2xl my-4">
          <FaStar className="mr-4" />
          <button className="menu-button">Best Ones</button>
        </div>
        <div className="flex items-center text-2xl my-4">
          <FaUserFriends className="mr-4" />
          <button className="menu-button">Invite Friends</button>
        </div>
      </div>
    </div>
  );
}
