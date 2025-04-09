import React from "react";
import { FaClipboardCheck, FaWater, FaTree } from "react-icons/fa";

const EnvironmentalStats = () => {
  const stats = [
    {
      icon: <FaClipboardCheck size={36} />,
      value: "40,000",
      suffix: " kg",
      label: "Scrap Diverted from Landfill",
    },
    {
      icon: <FaWater size={36} />,
      value: "692,200",
      suffix: " L",
      label: "Water Saved",
    },
    {
      icon: <FaTree size={36} />,
      value: "387",
      suffix: "",
      label: "No. of Trees Saved",
    },
  ];

  return (
    <section className="bg-[#f4ae91] py-16">
      <div className="max-w-6xl mx-auto px-6 text-white text-center">
        <h2 className="text-4xl font-semibold mb-12">
          Environmental <span className="italic font-bold">Contribution</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white text-[#f4ae91] p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold">
                {stat.value}
                {stat.suffix}
              </h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalStats;
