import React from 'react';
import bg from "../../../assets/newsdetails.png";
import newa from "../../../assets/newsb.png";
import newb from "../../../assets/newa.png";
import video from "../../../assets/video.png";
import news1 from "../../../assets/news1.png";
import news2 from "../../../assets/news2.png";
import news3 from "../../../assets/news3.png";

const New = () => {
  return (
    <div className='py-20 mx-10 flex flex-col lg:flex-row'>
      <div className='py-10 mx-5 flex-1'>
        <div className='mx-5'>
          <img src={bg} alt='' className="w-full h-auto" />
          <h4 className='py-5 text-[#002366]'>17 March, 24</h4>
          <div className='text-black py-5'>
            <h2 className='py-5 text-[30px] font-bold text-[#002366]'>Challenges of a new technology business in Year 2024</h2>
            <p>At K2K IT Solutions, we are committed to offering the best technology services to meet your unique needs. We understand that technology challenges can be disruptive and stressful, which is why we go above and beyond to deliver exceptional service that surpasses your expectations.</p>
            <p>These are the concepts that shape our distinctive culture and differentiate us from others. They embody the unique spirit of our firm and guide the behaviors that enable us to deliver on the promises we make to our clients and our people.</p>
          </div>
          <div className='py-5 text-black'>
            <h2 className='py-5 text-[30px] font-bold text-[#002366]'>Challenges of business</h2>
            <p>At Orritech our culture comes to life through following values:</p>
            <div className='py-5'>
              <li>We care about each other and the world around us</li>
              <li>We care about each other and the world around us</li>
              <li>We care about each other and the world around us</li>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 justify-center'> 
              <img  src={newa} alt='' className=" sm:w-[40%] h-48 lg:w-auto" />
              <img src={newb} alt='' className=" sm:w-[40%] h-48 lg:w-auto" />
            </div>
            <p className='py-5'>We are committed to offering the best technology services to meet your unique needs. We understand that technology challenges can be disruptive and stressful, which is why we go above and beyond to deliver exceptional service that surpasses your expectations.</p>
            <br />
            <p>These are the concepts that shape our distinctive culture and differentiate us from others. They embody the unique spirit of our firm and guide the behaviors that enable us to deliver on the promises we make to our clients and our people.</p>
            <img className='py-5 w-full h-auto' src={video} alt='' />
            <p className='py-5'>We are committed to offering the best technology services to meet your unique needs. We understand that technology challenges can be disruptive and stressful, which is why we go above and beyond to deliver exceptional service that surpasses your expectations.</p>
          </div>
        </div>
      </div>
      <div className='text-black font-bold flex-1 lg:w-[40%]'>
        <div>
          <h3 className='text-xl md:text-2xl'>Latest News</h3>
        </div>
        <div className=''>
          <div className='flex flex-col gap-5 py-5'>
            <div className='flex gap-5'>
              <img className='rounded-lg w-[30%] h-auto' src={news1} alt='' />
              <p className='w-[60%]'>New plugins for creating new charts in dashboard</p>
            </div>
            <div className='flex gap-5'>
              <img className='rounded-lg w-[30%] h-auto' src={news2} alt='' />
              <p className='w-[60%]'>New plugins for creating new charts in dashboard</p>
            </div>
            <div className='flex gap-5'>
              <img className='rounded-lg w-[30%] h-auto' src={news3} alt='' />
              <p className='w-[60%]'>New plugins for creating new charts in dashboard</p>
            </div>
            <div className='flex gap-5'>
              <img className='rounded-lg w-[30%] h-auto' src={news1} alt='' />
              <p className='w-[60%]'>New plugins for creating new charts in dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;
