import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../../../assets/about1.png";

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="mx-5 sm:mx-10 py-24 sm:py-36">
        {" "}
        {/* Adjusted margin and padding for smaller screens */}
        <div className="flex flex-col sm:flex-row">
          {" "}
          {/* Stack vertically on small screens */}
          <div className="mx-5 sm:mx-10 w-full sm:w-[70%]">
            {" "}
            {/* Adjusted margin and width for smaller screens */}
            <h2
              className="py-3 font-bold text-[20px] sm:text-[17px] lg:text-[25px] text-[#000]" // Adjusted font size for smaller screens
              data-aos="fade-up"
            >
              About Company
            </h2>
            <p className="text-[30px] sm:text-[40px] py-8 font-semibold text-black">
              {" "}
              {/* Adjusted font size for smaller screens */}
              Bringing innovation
              <br /> <br /> & new ideas in IT
            </p>
          </div>
          <div className="py-4 lg:mr-36 w-full sm:w-[60%] text-black text-[16px] sm:text-[19px]">
            {" "}
            {/* Adjusted width and font size for smaller screens */}
            <p>
              K2K IT Support & Solutions Pvt. Ltd built a reputation for
              delivering a comprehensive suite of IT services customized to meet
              the varied needs of businesses across industries. The company is
              all set to bring together its team of skilled professionals with
              considerable experience and knowledge to undertake custom software
              development, cloud computing, cybersecurity, data analytics, AI,
              machine learning, and IoT integration.
              <br />
            <br />
              We take pride in
              personalized solutions that address precise business challenges;
              scalable, secure cloud services; and safeguarding digital assets
              using the latest and most rigorous security measures. We are
              committed to innovation, constantly pushing the boundaries of
              what's possible in technology.
            
            <br />
            <br />
           
            Our core value is integrity,
              maintaining honesty and ethics to the highest degree in every part
              of our operations. Our clients are the center of everything we do,
              believing that their success is our success. Our fabulous teams
              work collaboratively to provide an all-encompassing suite of
              services tailored toward meeting each client's unique needs. 
              
            </p>
          </div>
        </div>
        <div className="flex py-5 justify-center">
          <img src={about1} className="flex h-auto justify-center" alt="" />
        </div>
      </div>
    </>
  );
}

export default Work;
