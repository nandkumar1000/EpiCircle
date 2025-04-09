const Preloader = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
      {/* Circle Outline */}
      <div className="w-28 h-28 border-2 border-white rounded-full mb-8"></div>

      {/* EPICIRCLE Text with Fade Effect */}
      <h1 className="text-6xl font-light tracking-widest flex space-x-1">
        <span className="text-white">E</span>
        <span className="text-white">P</span>
        <span className="text-white">I</span>
        <span className="text-white">C</span>
        <span className="text-white/60">I</span>
        <span className="text-white/50">R</span>
        <span className="text-white/40">C</span>
        <span className="text-white/30">L</span>
        <span className="text-white">E</span>
      </h1>
    </div>
  );
};

export default Preloader;
