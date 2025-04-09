import React from "react";

const Hit = () => {
  return (
    <section className="w-full bg-[#FFFBE7] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section - Text Steps */}
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          How it Works <span className="text-yellow-500">?</span>
        </h2>

        {/* Step 1 */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center mt-1">
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-full w-1 bg-yellow-200 flex-grow"></span>
          </div>
          <p className="text-lg font-semibold text-black">
            Schedule your Scrap Pick-up
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center mt-1">
            <span className="h-3 w-3 rounded-full bg-yellow-300"></span>
            <span className="h-full w-1 bg-yellow-200 flex-grow"></span>
          </div>
          <p className="text-lg text-gray-700">
            Sell your <span className="text-yellow-500 font-semibold">SCRAP</span> to our Eco-Warriors
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center mt-1">
            <span className="h-3 w-3 rounded-full bg-yellow-300"></span>
            <span className="h-full w-1 bg-yellow-200 flex-grow"></span>
          </div>
          <p className="text-lg text-gray-700">
            Redeem as <span className="text-yellow-500 font-semibold">GOLD/ SILVER</span>
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center mt-1">
            <span className="h-3 w-3 rounded-full bg-yellow-200"></span>
          </div>
          <p className="text-lg text-gray-700">
            Earn upto 15% annual returns on your{" "}
            <span className="text-yellow-500 font-semibold">GOLD SAVINGS</span>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/09/Gold-2.png"
          alt="App Interface"
          className="w-72 md:w-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hit;
