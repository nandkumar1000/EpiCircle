const Hour = () => {
  return (
    <div className="w-full px-4 py-12 bg-white">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 text-[#333]">Need of the Hour</h1>
      
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto">
        
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
            The Urgent Crisis: A Broken Scrap <br className="hidden md:block" /> Management System
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            In the developing world, the recovery of post-consumer scrap is powered by a vibrant yet informal scrap ecosystem. Despite its significance, this system often operates on the fringes, with municipalities, multinational corporations, and scrap management companies struggling to effectively connect with these grassroots stakeholders. Consequently, the informal sector remains largely disconnected from formal waste management systems, leaving a critical gap in the circular economy.
          </p>

          <h2 className="mt-6 text-xl md:text-2xl font-bold text-[#1a1a1a]">
            Our Game-Changing Solution: Innovating <br className="hidden md:block" /> Scrap-Tech for a Sustainable Future
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            Enter epiCircle—a trailblazing Scrap-Tech venture that’s redefining the way we manage scrap. Leveraging advanced technology, we don’t just collect scrap; we meticulously tag and analyze household dry scrap, turning it into a valuable resource. Our AI-driven platform seamlessly integrates informal eco-warriors into the formal scrap management framework, unlocking new efficiencies and environmental benefits.
            <br /><br />
            By harnessing the existing informal infrastructure within cities, epiCircle delivers cost-effective and low-carbon scrap management solutions that meet the growing needs of urban centers across India. As our cities expand and economies flourish, epiCircle is here to ensure that waste becomes a cornerstone of sustainable development.
          </p>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 relative">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/01/about-1.jpg"
            alt="Primary"
            className="w-full rounded-xl shadow-lg"
          />
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/01/project-4-1.jpg"
            alt="Secondary"
            className="absolute top-4 right-4 w-32 md:w-40 rounded-xl border-4 border-white shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Hour;
