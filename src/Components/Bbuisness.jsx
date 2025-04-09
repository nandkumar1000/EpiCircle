import { FaTruck, FaHandshake, FaRecycle, FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Commercial Scrap Removal",
    description:
      "Is your business struggling with scrap accumulation? Our tailored Commercial Scrap Removal service ensures efficient collection, eco-friendly disposal, and enhanced productivity with full transparency.",
    icon: <FaTruck className="text-[#F09373] text-6xl" />,
  },
  {
    title: "Bulk Scrap Management for Large-Scale Generators",
    description:
      "epiCircle’s Bulk Scrap Management service offers seamless collection, sorting, and disposal for large-scale scrap generators, ensuring compliance and supporting sustainability with eco-friendly methods.",
    icon: <FaHandshake className="text-[#F09373] text-6xl" />,
  },
  {
    title: "Recycling Marketplace for Businesses",
    description:
      "epiCircle’s Recycling Marketplace connects businesses to buy and sell scrap materials, turning waste into revenue while promoting a circular economy and sustainability.",
    icon: <FaRecycle className="text-[#F09373] text-6xl" />,
  },
];

const Bbuisness = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow-md p-6 flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Bucket with icon inside */}
            <div className="absolute -top-8 w-full flex justify-center">
              <div className="relative w-50 h-45">
                <img
                  src="https://epicircle.earth/wp-content/uploads/2024/11/shape-18_2.png"
                  alt="bucket"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Content below bucket */}
            <div className="mt-16">
              <h3 className="text-lg sm:text-xl font-semibold text-[#0D1F3C] italic font-serif mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="mt-6">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <FaArrowRight className="text-gray-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bbuisness;
