import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/world.png";
import logo1 from "../../assets/homelogo.png";
import arrow from "../../assets/arrow.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    
    <div
      className="px-3 py-5 bg-cover bg-center lg:h-full bg-opacity-45 rounded-lg"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="py-3 flex justify-center font-bold text-[18px] sm:text-[19px] text-black"
        data-aos="fade-up"
      >
        Explore our services
      </h2>
      <h3
        className="py-1 flex justify-center text-center font-bold text-[28px] sm:text-[32px] md:text-[35px] text-black"
        data-aos="fade-up"
      >
        We are committed to providing <br />
        <br /> the best services
      </h3>

      <div className="px-2 sm:px-4 py-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
             
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Software Development" />
             
              <div className="p-5">
                
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                    Software Development
                  </h5>
              
                <p className="mb-3 font-normal text-black">
                  Our expertise team excels in software development services, creating custom, scalable solutions tailored to your ...
                </p><a href="/software-development">
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          
          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
             
              <div className="p-5">
             
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                    Application Development
                  </h5>
              
                <p className="mb-3 font-normal text-black">
                  Our all-inclusive approach encompasses every stage of the app lifecycle, from initial concept to post-launch support...
                </p>
                <a href="/application-development" >
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
             
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
            
              <div className="p-5">
                
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                  Website Development
                  </h5>
              
                <p className="mb-3 font-normal text-black">
                Leading the way in website development services, K2K's team of experts creates the interactive customized webs...
                </p><a href="/website-development">
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
             
              <div className="p-5">
              
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                  Cloud Computing
                  </h5>
             
                <p className="mb-3 font-normal text-black">
                Our comprehensive suite of cloud services is designed to propel businesses into the future. These cloud serv...
                </p>
                <a href="/cloud-computing" >
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
             
              <div className="p-5">
              
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                  AI Engineering
                  </h5>
             
                <p className="mb-3 font-normal text-black">
                At K2K, we provide high-end AI engineering services, such as machine learning development, data analysis, busin...
                </p>
                <a href="/ai-engineering" >
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
             
              <div className="p-5">
              
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                  3D-Animaiton
                  </h5>
             
                <p className="mb-3 font-normal text-black">
                At K2K, we offer excellent animation services, which include 2D/3D animations, motion graphics, special effects, charact...
                </p>
                <a href="/3d-animation" >
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
             
              <div className="p-5">
                
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                  UI/UX & Graphics
                  </h5>
               
                <p className="mb-3 font-normal text-black">
                Our designers’ creativity craves the user’s interest by creating interactive and visually engaging UI/UX designs. This leads...
                </p>
                <a href="/ui-ux-graphics-graphics">
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              
                <img className="rounded-t-lg px-5 h-14 pt-4" src={logo1} alt="Application Development" />
              
              <div className="p-5">
               
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-black">
                  Cyber Security
                  </h5>
                
                <p className="mb-3 font-normal text-black">
                K2K IT Support & Solutions is a bulwark against digital vulnerabilities, safeguarding your digital assets with a wide range of Network Security Services...
                </p>
                <a href="/cyber-security">
                <button className="text-black py-1 text-[16px] sm:text-[18px] font-bold w-40 sm:w-48 h-9 rounded-xl flex gap-2">
                  <h3>More About Us</h3>
                  <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

         
        </Swiper>
      </div>

      <div className="flex justify-center py-10">
        <h3>
          We have an amazing variety of services to offer so{" "}
          <a href="/services">
          <span className="text-[#EC9422] underline cursor-pointer">See All Services</span>
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Content;
