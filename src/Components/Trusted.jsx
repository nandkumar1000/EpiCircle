const Trusted = () => {
  return (
    <div className="bg-[#ecb190] py-12 px-4">
      <h2 className="text-4xl sm:text-5xl font-bold italic text-white text-center mb-10">
        Trusted By
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/12/new-logo1-03.jpg"
          alt="Augmont"
          className="w-48 h-auto object-contain"
        />
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/12/download.jpg"
          alt="Startup India"
          className="w-48 h-auto object-contain"
        />
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/12/msg91-original_Logo-1.png"
          alt="MSG91"
          className="w-48 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Trusted;
