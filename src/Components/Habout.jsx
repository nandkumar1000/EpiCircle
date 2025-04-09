import { Link } from 'react-router-dom';

const Habout = () => {
  return (
    <div className="w-full bg-[#f4a986] text-white px-4 sm:px-6 md:px-16 py-10 relative">
      {/* Vertical/Top "About Us" Text */}
      <div className="block md:hidden text-center mb-6">
        <h2 className="text-black text-lg font-bold">About Us</h2>
      </div>

      <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90">
        <h2 className="text-black text-lg font-bold">About Us</h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
        {/* Left Heading Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-snug">
            Turning Scrap <br />
            into Treasure: <span className="italic font-bold text-white">The</span> <br />
            <span className="italic font-bold text-white">EpiCircle</span> <br />
            <span className="italic font-bold text-white">Revolution</span>
          </h1>
        </div>

        {/* Right Content Section */}
        <div className="md:w-1/2 space-y-6 text-white mt-4 md:mt-0">
          <p className="text-sm sm:text-base leading-relaxed">
            In the developing world, scrap recovery is driven by a vibrant but informal ecosystem,
            often disconnected from formal waste management. This creates a critical gap in the
            circular economy, as municipalities and corporations struggle to collaborate with grassroots stakeholders.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Enter <span className="font-bold text-white">EpiCircle—a revolutionary Scrap-Tech venture</span> that’s redefining the way we manage scrap.
            Leveraging advanced technology, we don’t just collect scrap; we meticulously tag and analyze
            household dry scrap, <span className="font-bold text-white">turning it into a valuable resource.</span> Our
            <span className="font-bold text-white"> AI-driven platform </span> seamlessly integrates informal eco-warriors into the
            formal system, delivering <span className="font-bold text-white">cost-effective, low-carbon solutions</span> for
            urban waste management. By harnessing existing infrastructure, EpiCircle ensures that
            <span className="font-bold text-white"> scrap becomes a key driver of sustainable growth </span> in India’s expanding cities.
          </p>

          {/* Button with Link */}
          <Link to="/about">
            <button className="mt-4 px-6 py-3 bg-transparent border border-black text-white font-semibold rounded-md hover:bg-black transition duration-300 flex items-center gap-2">
              Know More
              <span className="text-lg">➜</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Habout;
