import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import bg from "../../assets/hometalk.png";
import arrow2 from "../../assets/arrow2.png";
import arrow3 from "../../assets/arrow3.png";

const Testimonial = () => {
  return (
    <div
      className="py-48 h-full rounded-2xl hidden lg:block" // Hide on sm and md
      style={{
        background: "linear-gradient(180deg, #002366 0%, #590929 100%)",
      }}
    >
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-5 py-5 flex justify-center ">
          <div className="flex justify-between items-start">
            <img src={arrow2} className="text-white px-20 h-[20px]" alt="arrow2" />
            <div>
              <h2 className="mx-5 py-10 text-white font-bold">
                Client Testimonial
              </h2>
              <p className="text-[30px] mx-5 text-white font-bold">
                What our clients <br /><br /> say about us
              </p>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="px-10 py-10 w-[50%] h-full ">
            <Swiper
              spaceBetween={30}
              slidesPerView={2.5}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full"
            >
              <SwiperSlide>
                <div className="bg-white p-5 rounded-lg shadow-lg">
                  <span className="block mt-5 text-right text-black font-bold">- Neha Jain</span>
                  <p className="text-black font-semibold text-lg">
                    “Services given by K2K was exceptional. Every step of the way, our company is valued and heard. Delighted with your fantastic work.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-5 rounded-lg shadow-lg">
                  <span className="block mt-5 text-right text-black font-bold">- Anupam Raj</span>
                  <p className="text-black font-semibold text-lg">
                    “Your robust techie team saved us from upcoming cyber threats. Our company truly acknowledges their services.”
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-5 rounded-lg shadow-lg">
                  <span className="block mt-5 text-right text-black font-bold">- Prem Kumar</span>
                  <p className="text-black font-semibold text-lg">
                    "We’ve received numerous compliments for our stunning creatively designed responsive website looks. "
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <img src={arrow3} className="absolute right-32 h-[20px]" alt="arrow" />
    </div>
  );
};

export default Testimonial;
