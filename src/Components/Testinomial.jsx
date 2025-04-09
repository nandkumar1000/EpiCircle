import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rita Mathur",
    role: "Home Recycler",
    img: "https://epicircle.earth/wp-content/uploads/2024/11/a-photo-of-a-beautiful-indian-woman-with-a-white-b-y-MzPs5kRoWtNvFtqR3XrQ-Yd5uJA2DRAuIz54k9l1hLw.jpeg",
    text: `I used to think of scrap as just clutter, but EpiCircle has completely changed my view. The app’s ‘Trash to Treasure’ feature feels so rewarding—I'm not just clearing out junk; I’m turning it into actual value.`,
  },
  {
    name: "Vikram Desai",
    role: "Factory Manager",
    img: "https://epicircle.earth/wp-content/uploads/2024/11/a-passport-style-photo-of-a-stylish-indian-man-in-ojga2cLDToi7_-kQxaQBGw-MiPP9eGxR4-t6CqdjZFLow.jpeg",
    text: `As a manufacturing unit, managing scrap was always challenging, but EpiCircle’s service has been a game-changer. Their digital platform makes it easy to manage pickups and streamline waste.`,
  },
  {
    name: "Kavita Shah",
    role: "Eco Enthusiast",
    img: "https://epicircle.earth/wp-content/uploads/2024/11/a-realistic-passport-size-photo-of-a-beautiful-ind-V_5Fj8v6QRGEs-FLUbkxfg-B64JZYUdQCiExg9eSttFVg.jpeg",
    text: `The Green Coins concept is brilliant! I earn these coins on top of my scrap’s value and redeem vouchers. Recycling now feels impactful and rewarding.`,
  },
  {
    name: "Vikram Desai",
    role: "Eco Enthusiast",
    img: "https://epicircle.earth/wp-content/uploads/2024/11/factory.png",
    text: `The Green Coins concept is brilliant! I earn these coins on top of my scrap’s value and redeem vouchers. Recycling now feels impactful and rewarding.`,
  },
];

const Testimonial = () => {
  return (
    <section className="w-full px-6 py-10 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-8">
        What our clients say about <span className="text-[#0F172A]">EpiCircle</span>
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md px-6 py-6 max-w-md mx-auto">
              <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
              <p className="text-gray-700 text-base mb-4">{item.text}</p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#111827]">{item.name}</p>
                  {/* Optional role */}
                  {/* <p className="text-sm text-gray-500">{item.role}</p> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
