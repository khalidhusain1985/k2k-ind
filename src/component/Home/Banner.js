import React from 'react';

const Banner = () => {
  const bannerData = [
    { percentage: '100%', label: 'Happy Client' },
    { percentage: '100%', label: 'Project Success' },
    { percentage: '24/7', label: 'Customer Support' },
    { percentage: '1+', label: 'Years of Experience' },
  ];

  return (
    <div className='pt-10'>
      <div 
        className='py-10 sm:py-20 flex flex-col sm:flex-row justify-center gap-10 sm:gap-24'
        data-aos="fade-up"
        style={{ background: 'linear-gradient(90deg, #002366 0%, #2D1648 50%, #590929 100%)' }}
      >
        {bannerData.map((item, index) => (
          <div key={index} className='text-white font-bold text-center'>
            <p className='text-[40px] sm:text-[50px]'>{item.percentage}</p>
            <h2 className='py-2 sm:py-3 text-[18px] sm:text-[22px]'>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
