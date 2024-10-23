import React from "react";
import phone from "../../../assets/phone.png";
import bg from "../../../assets/Taj.png";
import bg1 from "../../../assets/phone1.png";
import img from "../../../assets/p.png";
import img2 from "../../../assets/p1.png";
import img3 from "../../../assets/p2.png";

const Detailsdis = () => {
  return (
    <div className="mx-4 sm:mx-10 py-20 flex flex-col-reverse sm:flex-row ">
      <div className="flex-1">
        <div className="bg-[#002366] lg:w-[40%]  mx-auto text-white rounded-2xl">
          <div className="py-5 flex justify-center cursor-pointer">
            Project Information
          </div>
        </div>

        <div className="py-10">
          <div
            className="lg:w-[40%]  mx-auto rounded-2xl py-20 px-10"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-white rounded-3xl text-black flex gap-5">
              <div className="py-4">
                <img src={phone} alt="" />
              </div>
              <div className="text-[12px] py-5">
                <h2>Have Any Questions?</h2> +91 7045 724 027
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="bg-[#002366] lg:w-[60%]  sm:w-[65%] mx-auto text-white text-center rounded-2xl">
            <h2 className="py-5 font-bold">Send Us Mail</h2>
            <p className="px-5 text-[16px]">
              K2K offers a range of Technology services for all firms all over
              the industry
            </p>
            <form className="px-7">
              <div className="py-4">
                <h2 className="text-start">Name</h2>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-2 text-black bg-white py-1 rounded-lg"
                />
              </div>

              <div className="py-4">
                <h2 className="text-start">Email</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 text-black bg-white py-1 rounded-lg"
                />
              </div>

              <div className="py-4">
                <h2 className="text-start">Description</h2>
                <textarea
                  placeholder="Enter a description"
                  className="w-full px-2 text-black bg-white py-1 rounded-lg"
                  rows="4"
                />
              </div>

              <div className="py-4">
                <button
                  type="submit"
                  className="bg-white hover:bg-[#093b99] text-black hover:text-white rounded-lg font-bold py-2 px-4"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>

          <div className="py-10">
            <div
              className="lg:w-[50%] px-5 text-[16px] py-10 bg-[#002366]   mx-auto text-white rounded-2xl"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="w-[80%] mx-auto">
                Office No. 205, 2nd floor, Shree Amar heights, Plot no. E 10 &33 DCM Ajmer Road, 302006, Jaipur
              </p>
              <br />
              <p className="mx-auto w-[80%]">
                Phone:<span className="text-[#EC9422]"> +91 7045 724 027 </span>
                <br/>Email:{" "}
                <span className="text-[#EC9422]">marketingmanager@k2kitsupport.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 text-black py-10 mx-5">
        <h2 className="py-5 text-[35px] font-bold">ERP Software for School</h2>
        <p className="py-5">
          We provide Smart Solutions for schools, enhancing learning, and streamlining administration. We are nurturing a future-ready environment that elevates both student engagement and academic excellence to stand out.
          <br />
          <br />
          <span className="text-[#EC9422]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </span>
          <br />
          <p className="py-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
          </p>
        </p>

        <img src={img} alt="" />
        <h3 className="py-5 text-[35px] font-bold">K2K Agency Values</h3>
        <p>At K2K our culture comes to life through following values:</p>
        <ul className="list-disc list-inside py-2">
          <li>We care about each other and the world around us</li>
          <li>We care about each other and the world around us</li>
          <li>We care about each other and the world around us</li>
          <li>We care about each other and the world around us</li>
        </ul>

        <div className="flex flex-col lg:flex-row gap-5 py-10">
          <img className="h-44" src={img2} alt="" />
          <img className="h-44" src={img3} alt="" />
        </div>

        <p className="py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
        </p>
        <p className="py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
        </p>
      </div>
    </div>
  );
};

export default Detailsdis;
