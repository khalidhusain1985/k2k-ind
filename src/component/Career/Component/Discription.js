import React from 'react';
import about1 from "../../../assets/careerbg.png";
import { Helmet } from 'react-helmet';

const Discription = () => {
  <Helmet>
        <title>Versatile IT with Unique Ideas</title>
        <meta
          name="description"
          content=" We are K2K IT Support & Solutions Pvt. Ltd, as a promising IT company we have been serving with years of experience and tremendous skill in the industry."
        />
  </Helmet>
  return (
    <div className='mx-5 py-20'>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="mx-5 md:mx-10 w-full md:w-[70%]">
            <h2 className="py-3 font-bold text-[16px] md:text-[20px] lg:text-[25px] text-black">
              K2K Careers
            </h2>
            <p className="text-[30px] md:text-[35px] lg:text-[40px] py-4 font-semibold text-black">
              Connecting to your<br /> <br /> future
            </p>
          </div>
          <div className="py-4 lg:mr-36 w-full md:w-[60%] text-black text-[16px] md:text-[19px]">
            <p>
              Standing at the forefront of digital innovation, we at K2K IT Support & Solutions Pvt. Ltd bring the latest IT solutions to businesses with lots of potential and style across the entire globe. Founded way back in 2018 by our CEO, Mr. Krishna Thakur, from his modest start-up, our company has grown into one of the most dynamic forces in the IT world.
            </p>
            
          </div>
        </div>
        <div className="flex py-5 justify-center">
          <img src={about1} className="w-full max-w-[500px] h-auto" alt=""/>
        </div>
        <h3 className='text-center text-black font-bold py-10'>Send Your Resume to <span className='text-[#f1be32] cursor-pointer'>hr.k2kit@gmail.com</span></h3>
      </div>
    </div>
  );
};

export default Discription;
