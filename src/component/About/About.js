import React from "react";

import Work from "./Content/Work";
import bg from "../../assets/about.png";
import Client from "./Content/Client";
import Content from "./Content/Content";
import Talkbanner from "../Home/Talkbanner";
import WhyChoseUs from "../Home/WhyChoseUs";
import Faq from "../Home/Faq";
import Testimonial from "../Home/Testemonial";
import Services from "../Home/Services";

function About() {
  return (
    <div>
      <div
  className="bg-cover bg-center h-[40vh] lg:h-[65vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="mx-5 sm:mx-10"> {/* Adjusted margin for small screens */}
    <h2 className="text-white pt-32 sm:pt-40 lg:pt-52 items-center font-bold text-[30px] sm:text-[37px] lg:text-[45px]"> {/* Adjusted font size for sm and md */}
      About Us
    </h2>
    <br />
    <h2 className="text-white items-center font-bold text-[16px] sm:text-[20px] lg:text-[30px]"> {/* Adjusted font size for sm and md */}
      Home {" >"} About Us
    </h2>
  </div>
</div>

      <Work />
      <Client />
      <Content />
      <div className="mx-14">
      <Talkbanner />
      <WhyChoseUs />
      <Services />
      <Faq />
      <Testimonial />
      </div>
    </div>
  );
}

export default About;
