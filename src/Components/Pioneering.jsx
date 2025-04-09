const Pioneering = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-100 via-white to-purple-100 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic text-[#0f172a] drop-shadow-lg mb-4">
        Pioneering a Scrap-Free India
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 font-medium">
        Transforming Homes and Cities, One Step at a Time
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold text-gray-800 mb-4">
        {["Gurugram", "Jaipur", "Chandigarh", "Mohali", "Panchkula"].map((city) => (
          <span key={city} className="flex items-center gap-1">
            <span className="text-orange-400">✔️</span> {city}
          </span>
        ))}
      </div>

      <p className="text-gray-500 text-sm sm:text-base">
        Coming Soon:– Delhi-NCR || Mumbai || Bangalore || Pune || Ahmedabad || Hyderabad
      </p>
    </div>
  );
};

export default Pioneering;
