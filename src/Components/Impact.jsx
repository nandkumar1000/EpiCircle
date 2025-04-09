const Impact = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-r from-[#dff1e3] to-[#f2f2f2] relative overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
          What Impact are we <br /> Creating?
        </h3>
        <h6 className="text-md md:text-lg text-gray-600 mt-3">
          We See Scrap As A Catalyst For Positive Change
        </h6>
      </div>

      {/* Center Image Positioned in Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/09/editedbin-removebg-preview.png"
          alt="EpiCircle Bin"
          className="w-64 md:w-80 lg:w-[350px] opacity-30"
        />
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 lg:gap-y-0 z-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right px-4">
          <div className="mb-12">
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/11/icon1_2.png"
              alt="Eco Warrior"
              className="w-16 h-16 mx-auto md:mx-0 mb-4"
            />
            <h4 className="text-xl font-semibold italic text-[#0f172a]">
              Uplifting Lives of Eco - Warriors
            </h4>
            <p className="text-gray-600 mt-2 max-w-sm text-sm">
              We elevate grassroots eco-warriors by integrating them into formal scrap
              management systems, enriching their livelihoods and ensuring their vital
              contributions are celebrated and rewarded.
            </p>
          </div>

          <div>
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/11/icon3_2.png"
              alt="Economic Growth"
              className="w-16 h-16 mx-auto md:mx-0 mb-4"
            />
            <h4 className="text-xl font-semibold italic text-[#0f172a]">
              Stimulating Economic Prosperity
            </h4>
            <p className="text-gray-600 mt-2 max-w-sm text-sm">
              Transforming household scrap into valuable resources, we unlock new economic avenues,
              cut scrap disposal costs, and spark growth, linking sustainability with economic vitality.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 mt-24 md:mt-0">
          <div className="mb-12">
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/11/icon2_2.png"
              alt="Green Cities"
              className="w-16 h-16 mx-auto md:mx-0 mb-4"
            />
            <h4 className="text-xl font-semibold italic text-[#0f172a]">
              Championing Environmental Excellence
            </h4>
            <p className="text-gray-600 mt-2 max-w-sm text-sm">
              Our cutting-edge AI technology slashes the carbon footprint of scrap management,
              driving the creation of greener cities and pristine environments through optimized processes.
            </p>
          </div>

          <div>
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/11/icon4_2.png"
              alt="Circular Economy"
              className="w-16 h-16 mx-auto md:mx-0 mb-4"
            />
            <h4 className="text-xl font-semibold italic text-[#0f172a]">
              Driving the Circular Economy
            </h4>
            <p className="text-gray-600 mt-2 max-w-sm text-sm">
              Leading the charge in the Circular Economy, we ensure that materials are perpetually repurposed,
              turning scrap into an opportunity for a resource-efficient future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
