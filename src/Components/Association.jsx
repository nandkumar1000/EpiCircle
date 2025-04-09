import React from "react";

const Association = () => {
  return (
    <section className="bg-[#FFF6C7] py-14 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
      {/* Left Text Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          In association with <br />
          <span className="text-yellow-500 font-extrabold italic">
            India’s Biggest Gold Player
          </span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-medium">
          Augmont is one of India’s most esteemed refinery and bullion companies, with strong ties and deep connections within the trusted jeweller community.
        </p>

        {/* Accreditation Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-3">
            <img
              src="https://th.bing.com/th/id/OIP.I6aUxNOYUZs8o7Jf5DLSMwHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5"
              alt="NABL"
              className="h-6 w-auto"
            />
            <div className="text-sm text-left">
              <p className="font-semibold text-black">NABL</p>
              <p className="text-gray-500 text-xs">Accredited</p>
            </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-3">
            <img
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0019/0721/brand.gif?itok=rkbnNgOI"
              alt="BIS"
              className="h-6 w-auto"
            />
            <div className="text-sm text-left">
              <p className="font-semibold text-black">BIS</p>
              <p className="text-gray-500 text-xs">Hallmarked</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/09/Group-1000002633.png"
          alt="Gold Coin"
          className="w-80 md:w-[450px] object-contain"
        />
      </div>
    </section>
  );
};

export default Association;
