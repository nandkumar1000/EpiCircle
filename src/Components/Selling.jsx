const Selling = () => {
  return (
    <section className="bg-[#f4b393] py-10 px-6 md:px-16 rounded-[30px] my-8">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left text */}
        <div className="text-white font-semibold text-3xl md:text-5xl leading-snug font-serif max-w-md">
          <p>Selling these</p>
          <p className="mt-2">Scrap Items</p>
          <p className="mt-2">can earn you</p>
          <p className="mt-2">Treasure</p>
        </div>

        {/* Right list */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-white font-medium text-lg mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Paper</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Iron</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Plastic</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Tin</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Aluminium</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Brass</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Steel</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>E-waste</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Copper</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✔</span> <span>Glass Bottles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selling;
