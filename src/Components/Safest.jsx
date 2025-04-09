const Safest = () => {
  return (
    <>
      <section className="w-full bg-[#FFF9CF] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Why <span className="text-yellow-500">Gold</span> is the Safest Asset <br />
            to Invest ?
          </h2>

          <p className="text-xl text-black font-medium">What Statistics reveal :</p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Gold Reserves */}
            <div>
              <p className="text-gray-600 font-medium">Gold Reserves:</p>
              <p className="text-xl font-bold text-black border-b-2 border-yellow-400 w-fit">700 Tons</p>
            </div>

            {/* Gold Imports */}
            <div className="hidden sm:block border-l border-gray-400 mx-4"></div>

            <div>
              <p className="text-gray-600 font-medium">Gold Imports (2024):</p>
              <p className="text-xl font-bold text-black border-b-2 border-yellow-400 w-fit">$45.5 Billion</p>
            </div>

            {/* Gold Consumption */}
            <div className="hidden sm:block border-l border-gray-400 mx-4"></div>

            <div>
              <p className="text-gray-600 font-medium">Gold Consumption:</p>
              <p className="text-xl font-bold text-black border-b-2 border-yellow-400 w-fit">25% of the World</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300 w-fit">
            Start Saving Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/09/image-119.png"
            alt="Gold Safe"
            className="w-[280px] md:w-[400px] object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Safest;
