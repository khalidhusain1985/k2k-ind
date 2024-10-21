import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../../assets/hero2bg.png";
import shape from "../../../assets/shape.png";
import hero2 from "../../../assets/aboutk2k.png";
import arrow from "../../../assets/arrow.png";

function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="py-5 bg-cover bg-center lg:h-screen bg-opacity-45 rounded-lg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-5 sm:px-8 md:px-10 py-10 flex flex-col lg:flex-row">
        <div className="mb-8 lg:pl-56 lg:mb-0">
          <img
            src={hero2}
            alt=""
            className="h-[30vh] sm:h-[35vh] md:h-[40vh] lg:w-[100vh] "
            data-aos="fade-up"
          />
        </div>
        <div className="lg:w-[110%] px-5 sm:px-10">
          <h2
            className="py-3 px-2 sm:px-5 flex justify-start font-bold text-[16px] sm:text-[18px] md:text-[19px] text-black"
            data-aos="fade-up"
          >
            WE ARE COMPANY
          </h2>
          <h3
            className="py-3 px-2 sm:px-5 flex justify-start font-bold text-[25px] sm:text-[30px] md:text-[35px] text-black"
            data-aos="fade-up"
          >
            Modern Idea Driven
            <br />
            <br />
            Technology Firm
          </h3>
          <div className="py-4">
            <div className="lg:flex md:flex" data-aos="fade-up">
              <p
                className="px-2 sm:px-5 w-full sm:w-[85%] md:w-[65%]"
                data-aos="fade-up"
              >
                We build IT solutions to empower businesses by delivering
                reliable, innovative, and cost-effective applications.
              </p>
            </div>
            <div className="px-2 sm:px-5 py-4" data-aos="fade-up">
              <ul className="grid grid-cols-2 gap-4 cursor-pointer">
                <li className="flex gap-2">
                  <img className="h-[50%] lg:h-full" src={shape} alt="shape" />{" "}
                  Web Development
                </li>
                <li className="flex gap-2">
                  <img className="h-[50%] lg:h-full" src={shape} alt="shape" />{" "}
                  App Development
                </li>
                <li className="flex gap-2">
                  <img className="h-[50%] lg:h-full" src={shape} alt="shape" />{" "}
                  UI/UX
                </li>
                <li className="flex gap-2">
                  <img className="h-[50%] lg:h-full" src={shape} alt="shape" />{" "}
                  Cloud Computing
                </li>
              </ul>
            </div>
            <a href="/contact">
            <button className="px-4 py-1 bg-[#D9D9D9] text-[16px] sm:text-[18px] font-bold w-52 sm:w-56 h-8 sm:h-9 rounded-xl flex gap-2">
              <h3>Lets Work Together</h3>
              <img src={arrow} className="h-5 sm:h-6 pt-1" alt="arrow" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
