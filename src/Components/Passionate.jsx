import { useNavigate } from 'react-router-dom';

const Passionate = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact');
  };

  return (
    <div className="w-full bg-white text-center py-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic text-[#0f172a] drop-shadow-md mb-6">
        Passionate about Digital <br className="sm:hidden" />
        Technology ?
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f172a] drop-shadow mb-10">
        Interested in revolutionizing the Scrap <br className="sm:hidden" />
        Management Industry ?
      </p>
      <button
        onClick={handleClick}
        className="bg-[#ecb190] text-white font-bold px-8 py-4 text-lg rounded-md hover:scale-105 transition-transform"
      >
        Let's Connect
      </button>
    </div>
  );
};

export default Passionate;
