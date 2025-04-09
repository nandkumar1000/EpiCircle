const Revolutionizing = () => {
  return (
    <div className="w-full px-4  bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1E293B] leading-relaxed">
            We’re revolutionizing an informal industry, blending cutting-edge technology,
            infusing some exceptional customer service and execution, creating a remarkable product
            that benefits both people and the planet.
          </h1>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/09/heroSectionImg-removebg-preview.png"
            alt="Revolutionizing Image"
            className="w-64 md:w-80 lg:w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Revolutionizing;
