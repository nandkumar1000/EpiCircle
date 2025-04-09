import React from 'react';
import { FaShieldAlt, FaGem, FaCoins } from 'react-icons/fa';

const Treasure = () => {
  return (
    <section className="bg-[#FFFCF1] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Turn your <span className="text-yellow-500">Scrap</span>{' '}
          <span className="font-extrabold">into</span>{' '}
          <span className="text-yellow-500">Treasure</span>
        </h1>
        <p className="text-xl font-semibold text-black">
          Earn up to 15% annual return on your gold savings
        </p>

        {/* Feature Icons Row */}
        <div className="flex flex-wrap items-center gap-4 bg-[#FFF3CF] p-4 rounded-lg shadow-sm text-sm font-medium text-gray-800">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-yellow-400 w-4 h-4" />
            100% Secure
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-2">
            <FaGem className="text-yellow-500 w-4 h-4" />
            24 Karat
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-2">
            <FaCoins className="text-yellow-500 w-4 h-4" />
            99% Pure Gold
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex items-center gap-10 mt-4 flex-wrap">
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP.CfwOVdL5HAXiDRrt5l4RZQAAAA?rs=1&pid=ImgDetMain"
              alt="Augmont"
              className="h-6 mx-auto mb-1"
            />
            <p className="text-sm text-gray-600">Gold Partner</p>
          </div>
          <div className="text-center">
            <img
              src="https://th.bing.com/th/id/OIP.2WgASrI1ebO8H2CQKsYQhQHaBk?rs=1&pid=ImgDetMain"
              alt="Razorpay"
              className="h-6 mx-auto mb-1"
            />
            <p className="text-sm text-gray-600">Payment Partner</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/09/gold-gif.gif"
          alt="Gold Bars"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
};

export default Treasure;
