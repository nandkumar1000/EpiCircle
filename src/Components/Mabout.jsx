const Mabout = () => {
  return (
    <div className="w-full relative h-[300px] md:h-[400px] lg:h-[500px]">
      {/* Background Image (50% height of parent) */}
      <div className="absolute top-0 left-0 w-full h-1/2">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTUXXV8Jmi0gJPEawL8reCZR1n_8ZuPelVbV-VPavy6JsrRReC"
          alt="About Background"
          className="w-full h-full object-cover z-[-1]"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Centered Text on Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mabout;
