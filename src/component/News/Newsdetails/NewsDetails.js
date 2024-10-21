import React from 'react'
import bg from "../../../assets/Newsbg.png";
import New from './New';

const NewsDetails = () => {
  return (
    <div className="mt-10 lg:mt-0 py-10 lg:py0" >
      <div
  className="bg-cover bg-center h-[40vh] lg:h-[65vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="mx-5 sm:mx-10">
    <h2 className="text-white mx-5 sm:mx-10 pt-20 sm:pt-32 lg:pt-52 items-center font-bold text-[30px] sm:text-[37px] lg:text-[45px]">
      News
    </h2>
    <br />
    <br />
    <h2 className="text-white mx-5 sm:mx-10 items-center font-bold text-[16px] sm:text-[20px] lg:text-[30px]">
      Home {" > "} News
    </h2>
  </div>
</div>


      
      <New />
    </div>
  )
}

export default NewsDetails
