import { useState } from "react";
import { data } from "../data/data";

export default function MenuFilter() {
  const [foods, setFoods] = useState(data);
  function FilterData(e) {
    if (e === "All") {
      setFoods(data);
    } else {
      const filteredData = data.filter((food) =>
        food.category.includes(e.toLowerCase())
      );
      setFoods(filteredData);
    }
  }

  function FilterPrice(e) {
    const filteredData = data.filter((food) => food.price === e);
    setFoods(filteredData);
  }
  return (
    <>
      <div className="max-w-[1640px] p-4 flex flex-col lg:flex-row lg:justify-between flex-wrap mx-auto">
        <h1 className="text-orange-500 font-bold text-center text-3xl w-full">
          Top Rated Menu Items
        </h1>
        <div>
          <p className="font-bold">Filter Type</p>
          <button
            className="button-filter"
            value="All"
            onClick={(e) => FilterData(e.target.value)}
          >
            All
          </button>
          <button
            className="button-filter"
            value="Burger"
            onClick={(e) => FilterData(e.target.value)}
          >
            Burgers
          </button>
          <button
            className="button-filter"
            value="Pizza"
            onClick={(e) => FilterData(e.target.value)}
          >
            Pizza
          </button>
          <button
            className="button-filter"
            value="Salad"
            onClick={(e) => FilterData(e.target.value)}
          >
            Salads
          </button>
          <button
            className="button-filter"
            value="Chicken"
            onClick={(e) => FilterData(e.target.value)}
          >
            Chicken
          </button>
        </div>
        <div className="">
          <p className="font-bold">Filter Price</p>
          <button
            className="button-filter"
            value="$"
            onClick={(e) => FilterPrice(e.target.value)}
          >
            $
          </button>
          <button
            className="button-filter"
            value="$$"
            onClick={(e) => FilterPrice(e.target.value)}
          >
            $$
          </button>
          <button
            className="button-filter"
            value="$$$"
            onClick={(e) => FilterPrice(e.target.value)}
          >
            $$$
          </button>
          <button
            className="button-filter"
            value="$$$$"
            onClick={(e) => FilterPrice(e.target.value)}
          >
            $$$$
          </button>
        </div>
      </div>
      <div className="max-w-[1640px] p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer mx-auto">
        {foods.map((item) => {
          return (
            <div
              key={item.id}
              className="shadow-lg rounded-b-lg transition duration-[300ms] ease-in-out hover:scale-105"
            >
              <img
                src={item.image}
                alt="/"
                className="object-cover w-full h-[200px] rounded-t-lg"
              />
              <div className="flex justify-between py-4 px-2">
                <h2 className="font-bold">{item.name}</h2>
                <span className="text-white bg-orange-500 rounded-full text-center py-0.5 px-2 h-fit">
                  {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
