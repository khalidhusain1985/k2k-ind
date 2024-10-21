import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import bg from '../../assets/hero.svg'; // Image 1

import About1 from './About1';
import Content from './Content';
import Talkbanner from './Talkbanner';
import WhyChoseUs from './WhyChoseUs';
import Banner from './Banner';
import Services from './Services';
import Project from './Project';
import Faq from './Faq';
import Testemonial from './Testemonial';
import News from './News';


function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: 'ease-in-out', // easing function for the animation
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
    <div  className='px-10  py-32 h-100vh rounded-lg' data-aos="fade-up">
     
    <div
  className="bg-cover bg-center lg:h-[80vh] md:h-[60vh] sm:h-[50vh] rounded-3xl"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="pt-5 px-5 flex flex-col justify-center items-start h-full">
    <h2 className="text-[#FFFFFF] px-3 pt-16 sm:pt-20 md:pt-28 lg:pt-44 font-bold text-[22px] sm:text-[28px] md:text-[37px] lg:text-[50px]">
      Versatile IT with 
      <span className="flex justify-start  pt-2 sm:pt-3 md:pt-5">
        Unique Ideas
      </span>
    </h2>
    <p className="text-white text-[14px] sm:text-[16px] md:text-[20px] px-3 sm:px-5 pt-3 sm:pt-5 md:pt-10 w-full sm:w-[80%] md:w-[60%] lg:w-[30%]">
      We are K2K IT Support & Solutions Pvt. Ltd, as a promising IT company we are serving over a decade with tremendous skill in the industry.
    </p>
  </div>
</div>




      <About1 />
      <Content />
      <Talkbanner />
      <WhyChoseUs />
      
      
    </div>
    <Banner />
    <div className='px-10 h-100vh rounded-lg'>
      <Services />
      <Project />
      <Faq />
      <Testemonial />
      <News/>
      
    </div>
    </>
    
  );
}

export default Home;
