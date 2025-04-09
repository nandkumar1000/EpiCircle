const Journey = () => {
  return (
    <div className="w-full py-16 bg-white px-4">
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto gap-10">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#ff6347]">OUR JOURNEY</h1>
          <h3 className="mt-4 text-lg font-semibold text-[#1e293b]">
            Each minor effort in scrap management marks a major advance toward a sustainable future.
          </h3>
          <p className="mt-4 text-gray-600">
            Every small action creates a transformative impact. epiCircle has grown to become the premier
            choice for major scrap generators, recyclers, and small to medium enterprises. Today, we’re
            redefining scrap as the new eco-currency, demonstrating that every piece of waste holds the
            potential to drive sustainability and fuel the circular economy.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/09/Goal-bro.png"
            alt="Journey Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Journey;
