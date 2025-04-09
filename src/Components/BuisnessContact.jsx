const BbuisnessContact = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 px-4 bg-white">
      <div
        className="w-full max-w-4xl rounded-[20px] border border-[#F09373] px-6 py-12 sm:px-10"
        style={{
          background: "linear-gradient(to bottom right, #e3f9e5, #fdf2e9)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0D1F3C] italic font-serif mb-4">
          Contact Us
        </h2>
        <p className="text-center text-lg sm:text-xl text-black italic font-serif mb-10">
          Whatever your scrap management needs are, we’ve got the perfect solution. <br />
          Let’s discover the ideal fit for you.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full border-b border-[#F09373] outline-none bg-transparent placeholder-gray-700 py-2"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="w-full border-b border-[#F09373] outline-none bg-transparent placeholder-gray-700 py-2"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full border-b border-[#F09373] outline-none bg-transparent placeholder-gray-700 py-2"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full border-b border-[#F09373] outline-none bg-transparent placeholder-gray-700 py-2"
          />
          <textarea
            rows="4"
            placeholder="Your message*"
            className="w-full border-b border-[#F09373] outline-none bg-transparent placeholder-gray-700 py-2"
          ></textarea>

          {/* reCAPTCHA mock placeholder */}
          <div className="w-full mt-6">
            <div className="w-[304px] h-[78px] bg-white border border-gray-300 rounded shadow-md flex items-center justify-center text-sm text-gray-600">
              I'm not a robot
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#F09373] text-white px-6 py-2 mt-6 rounded-full hover:bg-[#e6815f] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BbuisnessContact;
