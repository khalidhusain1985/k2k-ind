import React from 'react';
import hero3 from '../../assets/Whychoseus.png';

function WhyChoseUs() {
  return (
    <div className="lg:px-5  pt-48 lg:py-36 flex flex-col lg:flex-row items-center lg:items-start" data-aos="fade-up">
      <div className="px-5 w-full lg:w-1/2">
        <h3 className="text-black text-[20px] sm:text-[24px] font-semibold">Why Choose Us</h3>
        <h2 className="text-black font-bold text-[28px] sm:text-[35px] py-3 sm:py-5">Why Choose Us</h2>

        {/* List items */}
        {[
          { number: '1', title: 'Expertise in modern technology', text: 'We are up to date with all modern technologies and stay inquisitive about upcoming innovations.' },
          { number: '2', title: 'Client-Centric Approach', text: 'Our approach prioritizes client needs, offering customized solutions tailored to specific requirements.' },
          { number: '3', title: 'Proven Track Record', text: 'We have a successful history of delivering projects on time with high customer satisfaction.' },
        ].map((item, index) => (
          <div className="flex gap-5 sm:gap-10 py-4" key={index}>
            <div className="font-bold text-black text-[30px] sm:text-[35px]">{item.number}</div>
            <div className="text-black w-[90%] lg:w-[60%]">
              <h2 className="font-bold text-[20px] sm:text-[22px]">{item.title}</h2>
              <p className="text-[16px] sm:text-[18px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end py-10 lg:py-0">
        <img src={hero3} alt="Why Choose Us" className="w-[80%] sm:w-[70%] lg:w-full object-cover" />
      </div>
    </div>
  );
}

export default WhyChoseUs;
