const Purpose = () => {
  const purposes = [
    {
      id: 1,
      image: "https://epicircle.earth/wp-content/uploads/2024/09/icon6.png",
      description: "Divert scrap away from landfills and oceans",
    },
    {
      id: 2,
      image: "https://epicircle.earth/wp-content/uploads/2024/09/icon7.png",
      description: "Formalize the informal scrap industry in India",
    },
    {
      id: 3,
      image: "https://epicircle.earth/wp-content/uploads/2024/09/icon1.png",
      description: "Promote a circular economy where scrap is valued as a resource",
    },
  ];

  return (
    <div className="w-full py-16 bg-[#f2f2f2]">
      <h1 className="text-center mb-3 "><b>Our Purpose</b></h1>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-stretch gap-6 px-4">
        {purposes.map((purpose) => (
          <div
            key={purpose.id}
            className="w-full sm:w-1/2 md:w-1/3 text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            <img
              src={purpose.image}
              alt={`Purpose ${purpose.id}`}
              className="w-16 h-16 mb-4"
            />
            <p className="text-gray-800 font-semibold text-sm md:text-base">
              {purpose.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
