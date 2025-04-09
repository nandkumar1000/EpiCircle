import React from 'react';

const articles = [
  {
    category: "Waste Management",
    title: "Understanding the True Impact of Your Waste: A Look at the Lifecycle of Trash",
    desc: "In an era where environmental awareness is at an all-time…",
    img: "https://epicircle.earth/wp-content/uploads/2024/11/a-split-screen-photo-showing-the-environmental-imp-C_HPWyFnSxOcuYrAPI81vA-N-DwxNoMQcyRTRG5Q6eZkw.jpeg",
    link: "#",
  },
  {
    category: "Recycling",
    title: "The Benefits of Recycling for Your Community’s Sustainability Objectives",
    desc: "Community-driven recycling initiatives are becoming one of the most successful…",
    img: "https://epicircle.earth/wp-content/uploads/2024/11/global-recycling-png.png",
    link: "#",
  },
  {
    category: "Circular Economy",
    title: "How Technology is Revolutionising Waste Management and Driving the Circular Economy?",
    desc: "As the world grapples with escalating waste generation and environmental…",
    img: "https://epicircle.earth/wp-content/uploads/2024/09/pexels-tomfisk-2344264-2048x1364.jpg",
    link: "#",
  },
];

const EcoArticles = () => {
  return (
    <div className="p-6 md:p-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((item, idx) => (
          <a
            href={item.link}
            key={idx}
            className="group rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-orange-300 font-semibold mb-1">— {item.category}</p>
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-500 mt-2">{item.desc}</p>
              <span className="text-orange-400 mt-4 inline-block font-semibold hover:underline">
                Read More
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EcoArticles;
