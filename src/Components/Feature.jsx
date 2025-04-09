import { GiTrashCan, GiRecycle, GiEarthAmerica } from "react-icons/gi";

const Feature = () => {
  const features = [
    {
      icon: <GiTrashCan />,
      title: "Zero Waste",
      desc: "Advancing the vision of a Zero Waste Society by transforming household scrap into valuable resources, ensuring nothing goes to waste and everything contributes to a sustainable future.",
    },
    {
      icon: <GiRecycle />,
      title: "Sustainability",
      desc: "Championing sustainability through AI-driven scrap management solutions that reduce environmental impact, support economic growth, and empower communities to thrive.",
    },
    {
      icon: <GiEarthAmerica />,
      title: "Circular Economy",
      desc: "Driving the Circular Economy by turning post-consumer scrap into valuable commodities, fostering a system where waste becomes an opportunity for continuous reuse and renewal.",
    },
  ];

  return (
    <div className="w-full h-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full h-full group relative bg-[url('https://epicircle.earth/wp-content/uploads/2024/11/shape-6_2.png')] bg-no-repeat bg-center bg-contain flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12 text-center shadow-md transition-transform"
          >
            <div className="flex flex-col items-center max-w-full sm:max-w-xs">
              <div className="text-orange-400 text-4xl sm:text-5xl mb-4 transform transition-transform duration-500 group-hover:rotate-[360deg]">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0e1b3d] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0e1b3dbf]">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
