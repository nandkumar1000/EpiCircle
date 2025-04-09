import { Link } from "react-router-dom";
import { GiTrashCan, GiFactory } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";

const BTB = () => {
  const cards = [
    {
      title: "Commercial Scrap Removal",
      desc: "Is accumulated scrap disrupting your business operations? Our tailored commercial scrap removal service offers a quick and efficient solution, ensuring a cleaner workspace and streamlined waste management.",
      icon: <GiTrashCan className="text-4xl text-[#f4a986]" />,
    },
    {
      title: "Large-Scale Scrap Generators",
      desc: "Are you a Large-Scale Scrap Generator looking for a seamless way to manage and dispose of scrap? Our solution simplifies collection and recycling for residential spaces, hotels, malls, and more.",
      icon: <GiFactory className="text-4xl text-[#f4a986]" />,
    },
    {
      title: "Recycling Marketplace for Businesses",
      desc: "Looking to turn your company’s scrap into someone else’s resource? Our online marketplace connects buyers and sellers in the scrap industry, maximizing the value of materials while driving efficiency and sustainability.",
      icon: <FaRecycle className="text-4xl text-[#f4a986]" />,
    },
  ];

  return (
    <div className="w-full px-4 md:px-16 py-12 bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-[#0F172A] mb-12">
        B2B Solutions Tailored for <br className="hidden md:block" />
        Your Business Needs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between items-center text-[#0F172A] hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{card.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">{card.desc}</p>

            {/* Arrow button */}
            <Link to="/Services/Business">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                ➜
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BTB;
