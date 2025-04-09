import { FaApple, FaGooglePlay } from "react-icons/fa";
import { GiRecycle, GiEarthAmerica, GiTrashCan, GiPalm } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-100 via-white to-purple-100 flex items-center justify-center px-6 py-16 relative overflow-hidden">

      {/* Background Right Image */}
      <div className="absolute inset-0 flex justify-end items-center z-0 pointer-events-none">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRFxLwJYAdg9cXlJplBqKgDU0Ehw53pD1HM5eAGJ656JRfKDc5"
          className="hidden md:block w-1/2 h-full object-cover opacity-110"
          alt="Background Visual"
        />
      </div>

      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10">

        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            It All Starts With <br />
            <span className="text-orange-400 italic underline decoration-[6px]">Scrap</span> & Lots Of Tech
          </h1>

          <p className="text-gray-700 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Track scrap pickup, reduce waste, and build a sustainable tomorrow. Join us in the recycling revolution.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <a
              href="https://apps.apple.com/us/app/epicircle/id6711347475"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <FaApple className="text-2xl mr-3" />
              <span>
                <p className="text-sm">Download on</p>
                <p className="font-semibold text-md">the App Store</p>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.epicirclecustomer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              <FaGooglePlay className="text-2xl mr-3" />
              <span>
                <p className="text-sm">GET IT ON</p>
                <p className="font-semibold text-md">Google Play</p>
              </span>
            </a>
          </div>
        </div>

        {/* Spacer for layout on larger screens */}
        <div className="flex-1 hidden md:block" />
      </div>

      {/* Decorative Background Icons */}
      <div className="absolute top-5 left-5 text-green-400 text-4xl opacity-20 z-0">
        <GiRecycle />
      </div>
      <div className="absolute bottom-5 right-6 text-green-500 text-4xl opacity-20 z-0">
        <GiPalm />
      </div>
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-purple-400 text-5xl opacity-10 z-0">
        <GiTrashCan />
      </div>
      <div className="absolute top-1/4 right-12 text-blue-500 text-5xl opacity-10 z-0">
        <GiEarthAmerica />
      </div>
    </div>
  );
};

export default HeroSection;
