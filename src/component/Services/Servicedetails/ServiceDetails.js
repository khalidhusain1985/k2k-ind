import React from "react";

import bg from "../../../assets/servicedetails.png";
import Pages from "./Pages/Pages";

function ServiceDetails() {
  return (
    <div>
      <div
  className="bg-cover bg-center h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="lg:mx-5 lg:mt-0 lg:py-0  mt-10 py-10 sm:mx-10">
    <h2 className="text-white mx-5 sm:mx-10 pt-20 sm:pt-28 lg:pt-52 items-center font-bold text-[30px] sm:text-[35px] lg:text-[45px]">
      Service Details
    </h2>
    <br />
    <br />
    <h2 className="text-white mx-5 sm:mx-10 items-center font-bold text-[16px] sm:text-[20px] lg:text-[30px]">
      Services {" > "} Service Details
    </h2>
  </div>
</div>

      
      <Pages />
      
      <div className="py-14">
      
      </div>
    </div>
  );
}

export default ServiceDetails;
