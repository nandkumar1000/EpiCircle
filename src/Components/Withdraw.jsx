const Withdraw = () => {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://epicircle.earth/wp-content/uploads/2024/09/Frame-1000004793.png"
              alt="Withdraw Anytime"
              className="w-[280px] md:w-[420px] object-contain"
            />
          </div>
          {/* Right Text Section */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-yellow-500 text-xl font-semibold">No Lock in period</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-black">Withdraw Anytime</h1>
            <p className="text-gray-700 text-lg">
              Your gold isn’t locked away, you can exit anytime without any charge.
            </p>
          </div>


        </div>
      </section>
    </>
  );
};

export default Withdraw;
