export default function Order() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1640px] mx-auto pt-16 px-4 text-white ">
      <div className="relative h-full w-full mb-8 mr-4">
        <div className="absolute p-4 flex flex-col justify-between h-full bg-black/30 w-full  rounded-2xl">
          <div>
            <h1 className="text-2xl font-bold">Sun's Out, BOGO's Out</h1>
            <span>Through 8/26</span>
          </div>
          <div>
            <button className="cursor-pointer py-2 px-4 rounded-2xl bg-white text-black">
              Order Now
            </button>
          </div>
        </div>

        <img
          className="w-full  h-[200px]  object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1691690575331-a513ceafe4e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>

      <div className="relative h-full w-full  mb-8 mr-4">
        <div className="absolute p-4 flex flex-col justify-between h-full bg-black/30 w-full rounded-2xl">
          <div>
            <h1 className="text-2xl font-bold">New Restaurants</h1>
            <span>Added Daily</span>
          </div>
          <div>
            <button className="cursor-pointer py-2 px-4 rounded-2xl bg-white text-black">
              Order Now
            </button>
          </div>
        </div>

        <img
          className="w-full  h-[200px]  object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>

      <div className="relative h-full w-full ">
        <div className="absolute p-4 flex flex-col justify-between h-full bg-black/30 w-full  rounded-2xl">
          <div>
            <h1 className="text-2xl font-bold">We Deliver Desserts Too</h1>
            <span>Tasty Treats</span>
          </div>
          <div>
            <button className="cursor-pointer py-2 px-4 rounded-2xl bg-white text-black">
              Order Now
            </button>
          </div>
        </div>

        <img
          className="w-full  h-[200px]  object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
    </div>
  );
}
