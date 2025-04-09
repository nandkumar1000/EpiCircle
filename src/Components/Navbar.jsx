import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand logo */}
        <Link to="/Home">
          <img
            src="https://epicircle.earth/wp-content/uploads/2024/02/EPI-CIRCLE-FINAL-LOGO-PNG-1-2-1.png"
            alt="EpiCircle"
            className="w-32 md:w-40"
          />
        </Link>

        {/* Hamburger / Close Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FiX className="text-3xl text-black" />
            ) : (
              <FiMenu className="text-3xl text-black" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/Home" className="text-xl text-black hover:text-green-600 font-semibold">
            Home
          </Link>
          <Link to="/About" className="text-xl text-black hover:text-green-600 font-semibold">
            About Us
          </Link>
          <Link to="/Blog" className="text-xl text-black hover:text-green-600 font-semibold">
            Blog
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="text-xl text-black hover:text-green-600 font-semibold"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              Our Services
            </button>
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-blue-900 text-white rounded shadow-lg z-10 w-52"
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  to="/Services/Resident"
                  className="block px-4 py-2 hover:bg-blue-800"
                  onClick={() => setDropdownOpen(false)}
                >
                  For Residents
                </Link>
                <Link
                  to="/Services/Business"
                  className="block px-4 py-2 hover:bg-blue-800"
                  onClick={() => setDropdownOpen(false)}
                >
                  For Business & Organisation
                </Link>
              </div>
            )}
          </div>

          <Link to="/Contact" className="text-xl text-black hover:text-green-600 font-semibold">
            Contact Us
          </Link>
        </div>

        {/* Trash To Treasure Button */}
        <div className="hidden md:flex">
          <Link
            to="/TrashToTreasure"
            className="relative group w-48 h-16 bg-[tomato] rounded-md flex items-center justify-center text-center text-white font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
          >
            <b>Trash To Treasure</b>
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="white"
            >
              <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start mt-4 gap-4 px-4">
          <Link to="/Home" className="text-xl text-black hover:text-green-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/About" className="text-xl text-black hover:text-green-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/Blog" className="text-xl text-black hover:text-green-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <details className="w-full">
            <summary className="text-xl text-black hover:text-green-600 font-semibold cursor-pointer">Our Services</summary>
            <div className="bg-blue-900 text-white rounded px-4 py-2 mt-2">
              <Link to="/Services/Resident" className="block py-1 hover:bg-blue-800" onClick={() => setMobileMenuOpen(false)}>
                For Residents
              </Link>
              <Link to="/Services/Business" className="block py-1 hover:bg-blue-800" onClick={() => setMobileMenuOpen(false)}>
                For Business & Organisation
              </Link>
            </div>
          </details>
          <Link to="/Contact" className="text-xl text-black hover:text-green-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <Link
            to="/TrashToTreasure"
            className="relative group w-full h-16 bg-[tomato] rounded-md flex items-center justify-center text-center text-white font-semibold text-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            onClick={() => setMobileMenuOpen(false)}
          >
            Trash To Treasure
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="white"
            >
              <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
