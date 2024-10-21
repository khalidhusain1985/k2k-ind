import React from "react";
import bg from "../../assets/portfolio.png";
import Cards from "./component/Cards";

const Portfolio = () => {
  return (
    <div>
      <div
  className="bg-cover bg-center h-[40vh] lg:h-[65vh] md:h-[50vh] sm:h-[45vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="lg:mx-5 lg:mt-0 lg:py-0 mt-10 py-10 sm:mx-8 md:mx-10">
    <h2 className="text-white mx-5 sm:mx-8 md:mx-10 pt-20 sm:pt-24 md:pt-32 lg:pt-52 items-center font-bold text-[30px] sm:text-[34px] md:text-[37px] lg:text-[45px]">
      Portfolio
    </h2>
    <br />
    <br />
    <h2 className="text-white mx-5 sm:mx-8 md:mx-10 items-center font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[30px]">
      Home {" > "} Portfolio
    </h2>
  </div>
</div>

      <Cards />
      
    </div>
  );
};

export default Portfolio;
