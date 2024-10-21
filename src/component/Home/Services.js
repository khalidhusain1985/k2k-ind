import React from "react";
import bg from "../../assets/hero3.svg";
import logo from "../../assets/circle.png";
import arrow from "../../assets/arrow.png";

const Services = () => {
  const services = [
    {
      title: "Software Development Services",
      description: "Our expertise team excels in software development services, creating custom, scalable solutions tailored to your business needs.",
    },
    {
      title: "Web Development",
      description: "Building fast, secure, and responsive websites with the latest technologies for better performance.",
    },
    {
      title: "App Development",
      description: "Creating modern, scalable, and user-friendly mobile applications tailored to your needs.",
    },
    {
      title: "Cloud Solutions",
      description: "Providing reliable cloud infrastructure services to help scale your business efficiently.",
    },
    {
      title: "Cybersecurity",
      description: "Ensuring the safety and integrity of your digital assets through advanced security measures.",
    },
    {
      title: "Digital Marketing",
      description: "Helping businesses grow through strategic online marketing solutions tailored to their needs.",
    },
    {
      title: "3D-Animation",
      description: "At K2K, we offer excellent animation services, which include 2D/3D animations, motion graphics, special effects",
    },
    {
      title: "AI Engineering",
      description: "At K2K, we provide high-end AI engineering services, such as machine learning development, data analysis, business process automation.",
    },
    
  ];

  return (
    <div className="px-5 py-20 bg-cover bg-center rounded-lg" 
         data-aos="fade-up"
         style={{
           backgroundImage: `url(${bg})`,
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
    >
      <h2 className="text-center font-bold text-[19px] text-black" data-aos="fade-up">Explore our services</h2>
      <h3 className="py-3 text-center font-bold text-[28px] sm:text-[35px] text-black" data-aos="fade-up">
        We are committed<br />to improving our skills in technology
      </h3>

      <div className="py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex gap-4" data-aos="fade-up">
            <div className="w-16">
              <img src={logo} alt="Service Icon" />
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-black font-bold text-[20px]">{service.title}</h2>
              <p className="text-[16px] text-black mb-4">{service.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
