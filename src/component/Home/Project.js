import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import project from "../../assets/project.png";
import logo1 from "../../assets/school.png";

const Project = () => {
  const projects = [
    { title: 'K2K School ERP', description: 'Our expert team excels in software development services, creating custom, scalable solutions tailored to your needs.', img: logo1 },
    { title: 'E-commerce', description: 'Our expertise team excels in software development services, creating custom, scalable solutions personalized to your needs.', img: logo1 },
    { title: 'Personalized Website', description: 'Our expertise team excels in software development services, creating custom, scalable solutions tailored to your needs.', img: logo1 },
    { title: 'Chat-Application', description: 'Our expert team excels in software development services, creating custom, scalable solutions customized to your needs.', img: logo1 },
    { title: 'Social Media App ', description: 'Our expert team excels in software development services, creating custom, scalable solutions tailored to your needs.', img: logo1 },
  ];

  return (
    <div className='py-10 h-full rounded-2xl ' 
         data-aos="fade-up" 
         style={{ background: 'linear-gradient(180deg, #002366 0%, #590929 100%)' }}>
      <div className='mx-7 py-10 font-bold flex'>
        <div className='w-[70%]'>
          <h3 className='text-white'>Our Projects</h3>
          <h2 className='text-white font-bold text-[23px] sm:text-[35px] py-5'>Our project is now available for sale</h2>
          <p className='text-white py-4'>
            Designed with cutting-edge technology and user-friendly features, it’s the perfect solution to meet your needs. Act now and be among the first to benefit!
          </p>
        </div>
        <div>
          <img src={project} alt=""  />
        </div>
      </div>

      <div className='px-5'>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg px-5 pt-4" src={project.img} alt={project.title} />
                <div className="p-5 text-white rounded-2xl bg-[#002366]">
                  <h5 className="mb-2 text-2xl font-bold">{project.title}</h5>
                  <p className="mb-3 font-normal">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center py-10 mx-5">
        <h3 className="text-white">
          We have an amazing variety of projects to offer, so <span className="text-[#EC9422] underline cursor-pointer">See All Projects</span>
        </h3>
      </div>
    </div>
  );
};

export default Project;
