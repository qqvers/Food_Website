export default function Top() {
  return (
    <div className="max-w-[1640px] p-4 w-full m-auto">
      <div className="relative max-h-500">
        <div className="absolute pl-16 text-5xl md:text-6xl lg:text-7xl font-bold w-full h-full text-white bg-black/30 flex flex-col justify-center max-h-[500px]">
          <div>
            The <span className="text-orange-500">Best</span>
          </div>
          <div>
            <span className="text-orange-500">Foods</span> Delivered
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
        />
      </div>
    </div>
  );
}
