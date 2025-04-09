import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#f4f4f4] px-6 py-10 text-gray-800 relative">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="https://epicircle.earth/wp-content/uploads/2024/01/new_logo_footer.png"
          alt="logo"
          className="h-16 object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto relative">
        {/* Left Section */}
        <div className="md:w-1/2 pr-4">
          <p className="mb-6 text-justify">
            EpiCircle, a venture by Swastikahy Esolutions Pvt Ltd, is spearheading the transformation of scrap into wealth, driving India’s shift toward a circular economy. Our innovative platform connects households, businesses, and recyclers, offering seamless scrap management solutions that generate financial returns while promoting environmental sustainability. With a vision to redefine scrap practices, epiCircle turns everyday scrap into valuable resources, making eco-friendly living effortless and rewarding.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.facebook.com/epicircle/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full hover:text-[#FF6347] hover:border-[#FF6347] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/epicircle/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full hover:text-[#FF6347] hover:border-[#FF6347] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/c/epicircle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full hover:text-[#FF6347] hover:border-[#FF6347] transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/epicircle/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border-2 rounded-full hover:text-[#FF6347] hover:border-[#FF6347] transition"
            >
              <FaLinkedinIn />
            </a>  
          </div>

          <h3 className="text-sm text-gray-500">
            © Copyright 2024 by epiCircle || All Rights Reserved.
          </h3>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block w-px bg-gray-300 mx-8" />

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row md:gap-8 mt-8 md:mt-0">
          {/* Company */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <div className="flex flex-col gap-1">
              <a href="/About" className="hover:text-[#FF6347] transition">About</a>
              <a href="/Contact" className="hover:text-[#FF6347] transition">Contact Us</a>
              <a href="/Blog" className="hover:text-[#FF6347] transition">Blog</a>
              <Link to="/Impact" className="hover:text-[#FF6347] transition">Impact</Link>
              <Link to="/Career" className="hover:text-[#FF6347] transition">Career</Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Our Services</h3>
            <div className="flex flex-col gap-1">
              <a href="/TurnTOTreasure" className="hover:text-[#FF6347] transition">Turn To Treasure</a>
              <a href="/zeroWasre" className="hover:text-[#FF6347] transition">Zero Waste</a>
              <a href="/CommercialScrapRemoval" className="hover:text-[#FF6347] transition">Commercial Scrap Removal</a>
              <a href="/LargeScaleScrapGenerators" className="hover:text-[#FF6347] transition">Large-Scale Scrap Generators</a>
              <a href="/RecyclingMarketplace" className="hover:text-[#FF6347] transition">Recycling Marketplace</a>
            </div>
          </div>

          {/* Site Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Site Info</h3>
            <div className="flex flex-col gap-1">
              <a href="/Disclamer" className="hover:text-[#FF6347] transition">Disclaimer</a>
              <a href="/PrivacyPolicy" className="hover:text-[#FF6347] transition">Privacy Policy</a>
              <a href="/TermOfUse" className="hover:text-[#FF6347] transition">Terms of Use</a>
              <a href="/Cookies" className="hover:text-[#FF6347] transition">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="text-center mt-10">
        <a href="#" className="text-sm hover:text-[#FF6347] transition">Back to Top ↑</a>
      </div>
    </div>
  );
};

export default Footer;
