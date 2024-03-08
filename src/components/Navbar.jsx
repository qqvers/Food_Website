import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center text-2xl md:text-3xl lg:text-4xl">
        <div className="cursor-pointer">
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
    </div>
  );
}
