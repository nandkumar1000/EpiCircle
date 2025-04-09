import { Link } from "react-router-dom";
import { FaTrashAlt, FaHandsHelping } from "react-icons/fa";

const Household = () => {
  return (
    <div className="w-full px-4 py-8">
      <h1 className="text-2xl md:text-3xl text-center font-semibold">
        Making Sustainable Living Effortless for Every <br className="hidden md:block" />
        Household
      </h1>

      <p className="text-center mt-4 max-w-4xl mx-auto text-gray-700">
        At epiCircle, we believe that creating a cleaner, greener future starts at home.
        With our innovative solutions, residents can easily manage household scrap, reduce waste,
        and contribute to a more sustainable society. We empower you to turn your waste into something
        valuable while simplifying your participation in eco-friendly living. Whether you’re looking
        to declutter your space or help build a zero-waste community, our services are tailored to meet your needs.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Left Box */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 text-center max-w-md relative">
          <div className="relative mb-4">
            <div className="absolute inset-x-0 -top-6 flex justify-center z-10">
              <FaTrashAlt className="text-[tomato] text-8xl bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-300" />
            </div>
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/11/shape-18_2.png"
              alt="bucket"
              className="mx-auto"
            />
          </div>
          <Link to="/turn-trash-to-treasure" className="text-lg font-semibold text-[tomato] hover:underline">
            Turn Trash to Treasure
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            Turn your household waste into assets with epiCircle’s Trash to Treasure program,
            where you can sell scrap and redeem earnings for gold or silver, with returns of 11–15%.
          </p>
          <Link
            to="/turn-trash-to-treasure"
            className="inline-block mt-4 text-[tomato] border border-[tomato] px-4 py-2 rounded-full hover:bg-[tomato] hover:text-white transition"
          >
            →
          </Link>
        </div>

        {/* Right Box */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 text-center max-w-md relative">
          <div className="relative mb-4">
            <div className="absolute inset-x-0 -top-6 flex justify-center z-10">
              <FaHandsHelping className="text-[tomato] text-8xl bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-300" />
            </div>
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/11/shape-18_2.png"
              alt="bucket"
              className="mx-auto"
            />
          </div>
          <Link to="/zero-waste-society" className="text-lg font-semibold text-[tomato] hover:underline">
            Zero-Waste Society
          </Link>
          <p className="mt-2 text-sm text-gray-600">
            Join epiCircle’s Zero-Waste Society initiative to transform your residential community into
            a hub of sustainability by selling collective scrap and ensuring waste is recycled, not landfilled.
          </p>
          <Link
            to="/zero-waste-society"
            className="inline-block mt-4 text-[tomato] border border-[tomato] px-4 py-2 rounded-full hover:bg-[tomato] hover:text-white transition"
          >
            →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Household;
