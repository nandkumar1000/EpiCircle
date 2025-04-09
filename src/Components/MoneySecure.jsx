const MoneySecure = () => {
  return (
    <div className="bg-[#fff9dc] p-8 md:p-16 rounded-2xl">
      {/* First Block */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Your money is 100% Secure!</h1>
          <p className="text-lg text-black mb-6">
            Your asset is stored in secured vaults at Augmont and available to withdraw at any time.
          </p>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row gap-4 text-black text-lg font-medium">
            <div>
              <p className="text-gray-500">Gold Reserves:</p>
              <p className="font-bold text-xl">700 Tons</p>
            </div>
            <div>
              <p className="text-gray-500">Gold Imports(2024):</p>
              <p className="font-bold text-xl">$45.5 Billion</p>
            </div>
            <div>
              <p className="text-gray-500">Gold Consumption:</p>
              <p className="font-bold text-xl">25% of the World</p>
            </div>
          </div>

          <button className="mt-6 bg-[#ffd700] text-black px-6 py-2 font-bold rounded-full hover:bg-yellow-400 transition-all">
            Start Saving Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/09/image_120-removebg-preview.png"
            alt="Secure Vault"
            className="w-full max-w-[300px]"
          />
        </div>
      </div>

      {/* Second Block */}
      <div className="mt-16 border-4 border-yellow-400 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between bg-white">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">India’s First</h2>
          <p className="text-gray-700 mb-6">
            epiCircle, a revolutionary platform for Indian families to turn their scraps into treasures. With just a few
            clicks, effortlessly convert household scrap into valuable gold or silver, and unlock the potential for
            financial growth. Download the app today and start your journey from trash to treasure!
          </p>

          <div className="flex gap-4">
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Right Gold Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/09/image-125.png"
            alt="Gold Bars"
            className="w-full max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MoneySecure;
