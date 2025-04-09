import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const Cform = () => {
  return (
    <div className="w-full bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1b1b2f] mb-6">Contact with the team</h1>

          <div className="space-y-6 text-[#1b1b2f]">
            <div>
              <h2 className="text-[#f6bfae] font-semibold text-lg">Location</h2>
              <div className="flex items-start gap-2 mt-2">
                <HiOutlineLocationMarker className="text-[#f6bfae] text-xl mt-1" />
                <p className="text-base">
                  Innov8 UCP, 9th Floor, Tower D, <br />
                  Unitech Cyber Park, Sector 39, <br />
                  Gurugram, Haryana, India - 122001
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[#f6bfae] font-semibold text-lg">Phone no</h2>
              <div className="flex items-center gap-2 mt-2">
                <FaPhoneAlt className="text-[#f6bfae]" />
                <p className="text-base">+91 9266822177</p>
              </div>
            </div>

            <div>
              <h2 className="text-[#f6bfae] font-semibold text-lg">Email</h2>
              <div className="flex items-center gap-2 mt-2">
                <MdEmail className="text-[#f6bfae]" />
                <p className="text-base">info@epicircle.in</p>
              </div>
            </div>

            <div>
              <h2 className="text-[#f6bfae] font-semibold text-lg">Social Media Links</h2>
              <div className="flex items-center gap-4 mt-3">
                <a href="#" className="text-[#1b1b2f] border-2 border-[#f6bfae] p-2 rounded-full hover:bg-[#f6bfae] transition">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-[#1b1b2f] border-2 border-[#f6bfae] p-2 rounded-full hover:bg-[#f6bfae] transition">
                  <FaYoutube />
                </a>
                <a href="#" className="text-[#1b1b2f] border-2 border-[#f6bfae] p-2 rounded-full hover:bg-[#f6bfae] transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-[#1b1b2f] border-2 border-[#f6bfae] p-2 rounded-full hover:bg-[#f6bfae] transition">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-1/2 bg-[#fff] p-8 rounded-2xl shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block font-semibold text-[#444] mb-1">Full Name*</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-b-2 border-[#f6bfae] focus:outline-none focus:border-[#f6bfae] py-1"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#444] mb-1">Your Email*</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-b-2 border-[#f6bfae] focus:outline-none focus:border-[#f6bfae] py-1"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#444] mb-1">Phone Number*</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border-b-2 border-[#f6bfae] focus:outline-none focus:border-[#f6bfae] py-1"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#444] mb-1">Your message*</label>
              <textarea
                placeholder="Type your message here"
                className="w-full border-b-2 border-[#f6bfae] focus:outline-none focus:border-[#f6bfae] py-1 resize-none h-28"
              ></textarea>
            </div>

            {/* Dummy reCAPTCHA placeholder */}
            <div className="bg-[#f5f5f5] border border-gray-300 p-3 w-fit mt-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>I'm not a robot</span>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="h-6 ml-2" />
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#f6bfae] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#e6a89c] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cform;
