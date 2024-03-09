import { categories } from "../data/data";
import { useState } from "react";

export default function FoodSection() {
  const [category, setCategory] = useState(categories);
  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 max-w-[1640px] gap-4">
      <h1 className="col-span-2 md:col-span-3 lg:col-span-4 text-orange-500 font-bold text-center text-3xl">
        Top Rated Menu Items
      </h1>
      {category.map((item) => {
        return (
          <div
            key={item.id}
            className="flex bg-gray-100 rounded-lg justify-between items-center py-4 cursor-pointer transition duration-300  hover:bg-gray-200"
          >
            <span className="mx-4 font-bold md:text-lg lg:text-xl">
              {item.name}
            </span>
            <img src={item.image} alt="/" className="w-1/3 mr-2" />
          </div>
        );
      })}
    </div>
  );
}
