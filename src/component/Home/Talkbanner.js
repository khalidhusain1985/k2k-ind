import React from 'react';
import bg from '../../assets/hometalk.png';
import homehero from '../../assets/homehero.png';
import arrow from '../../assets/arrow.png';

const Talkbanner = () => {
  return (
    <div
      className="px-5 sm:px-7 py-10 h-[40vh] rounded-3xl"
      data-aos="fade-up"
      style={{
        background: 'linear-gradient(90deg, #002366 0%, #2D1648 50%, #590929 100%)',
      }}
    >
      <div
        className="bg-cover bg-left h-full bg-opacity-45 rounded-lg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col lg:flex-row items-center sm:items-start justify-center">
          <div className="text-center sm:text-left">
            <h2 className="text-white font-bold text-[28px] sm:text-[36px] md:text-[50px] px-5 sm:px-10 py-5 sm:py-10">
              Have a project in mind?{' '}
              <span className="font-primary font-light">Let’s talk to us</span>
            </h2>
            <div className="flex justify-center sm:justify-start px-5 sm:px-10 pb-5">
              <a href='/contact'>
              <button className="px-5 py-2 text-[16px] sm:text-[18px] text-black bg-white font-bold w-40 sm:w-48 h-14 rounded-xl flex items-center justify-center gap-2">
                <h3>Let's Talk</h3>
                <img src={arrow} alt="arrow" className="h-5 sm:h-6 pt-1" />
              </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end py-5">
            <img src={homehero} alt="Project" className="h-32 sm:h-40 md:h-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talkbanner;
