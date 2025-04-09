import React from "react";
import { Link } from "react-router-dom";

const Scrap = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-r from-[#e8f5e9] via-[#fff3e0] to-[#f3e5f5]">
      {/* Left Section (Truck Image) */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/11/section-image_2.png"
          alt="epicircle truck dumping coins"
          className="w-full max-w-[600px] object-contain"
        />
      </div>

      {/* Right Section (Text and Button) */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-snug">
          <span className="italic">Put your </span>
          <span className="font-extrabold italic">SCRAP</span>
          <span className="italic"> to Work</span>
          <br />
          <span className="italic">Convert it into </span>
          <span className="font-extrabold italic">TREASURE</span>
        </h1>
        <Link to="/Services/Business">
          <button className="bg-[#fcae91] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#fb8c7a] transition duration-300">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Scrap;
