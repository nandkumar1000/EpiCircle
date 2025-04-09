const BusinessOrga = () => {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThNih0gdVWFqWM6PjEPvg-TVmJxOd32e_EiDV4KgOIj34Iiiab"
          alt="About Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            For Business & Organizations
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Sustainable Solutions for Businesses & Organizations
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          In today’s rapidly evolving business landscape, sustainability is no longer just an option—it’s a necessity.
          At epiCircle, we understand the unique challenges that businesses and organisations face in managing waste
          efficiently while maintaining eco-conscious operations. Our innovative platform is designed to help you turn
          your waste into value, reduce your carbon footprint, and contribute to a circular economy.
          <br /><br />
          From large-scale operations to everyday commercial activities, our tailored solutions ensure that your
          waste management is streamlined, compliant, and sustainable. Whether you are looking to reduce operational
          scrap, manage bulk scrap, or tap into recycling opportunities, epiCircle offers reliable and efficient
          services that cater to your specific needs.
          <br /><br />
          Explore our comprehensive range of services crafted specifically for businesses and organisations.
        </p>
      </div>
    </div>
  );
};

export default BusinessOrga;
