import React from "react";

import bg from "../../assets/service.png";
import Cards from "./Components/Cards";


function Services() {
  return (
    <div>
      <div
  className="bg-cover bg-center h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[65vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="lg:mx-5 mt-10 lg:mt-0  md:mx-10">
    <h2 className="text-white mx-5 sm:mx-10 md:mx-10 pt-20 sm:pt-28 md:pt-40 lg:pt-52 items-center font-bold text-[30px] sm:text-[35px]  lg:text-[45px]">
      Services
    </h2>
    <br />
    <br />
    <h2 className="text-white mx-5 sm:mx-10 md:mx-10 items-center font-bold text-[18px] sm:text-[20px] lg:text-[30px]">
      Home {" > "} Services
    </h2>
  </div>
</div>

      
      
      
      <div className="py-14">
      <Cards />
      
      </div>
    </div>
  );
}

export default Services;
