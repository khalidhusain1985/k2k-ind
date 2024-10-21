import React from 'react'
import bg from "../../assets/career.png"
import Discription from './Component/Discription'


const Career = () => {
  return (
    <div>
      <div
  className="bg-cover bg-center h-[40vh] lg:h-[65vh] md:h-[50vh] sm:h-[40vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="mx-5 lg:mt-0 lg:py-0 mt-10 py-14 md:mx-10">
    <h2 className="text-white mx-5 md:mx-10 pt-20 md:pt-40 lg:pt-52 items-center font-bold text-[28px] md:text-[37px] lg:text-[45px]">
      Career
    </h2>
    <br />
    <h2 className="text-white mx-5 md:mx-10 items-center font-bold text-[16px] md:text-[20px] lg:text-[30px]">
      Home {" > "} Career
    </h2>
  </div>
</div>

      <Discription />
    
    </div>
  )
}

export default Career
