import React from 'react'
import arrow4 from "../../../../assets/arrow4.png";
import phone from "../../../../assets/phone.png";
import bg from "../../../../assets/Taj.png";
import bg1 from "../../../../assets/phone1.png";
import img from "../../../../assets/img1.png";
import img2 from "../../../../assets/img2.png";
import img3 from "../../../../assets/img3.png";
import img4 from "../../../../assets/img4.png";
import circle from "../../../../assets/circle1.png";
import { useNavigate } from 'react-router-dom';

const Applicationdev = () => {const navigate = useNavigate(); 

  const handleNavigation = (item) => {
    switch (item) {
      case "Cyber Security":
        navigate("/cyber-security");
        break;
      case "Cloud Computing":
        navigate("/cloud-computing");
        break;
      case "UI/UX":
        navigate("/ui-ux");
        break;
      case "Web Development":
        navigate("/web-development");
        break;
      case "Graphic Designing":
        navigate("/graphic-designing");
        break;
      case "AI Engineering":
        navigate("/ai-engineering");
        break;
      case "3D Animation":
          navigate("/3d-animation");
      break;
      default:
        navigate("/"); // Fallback route
    }
  };
  return (
    <div className="mx-5 md:mx-10 py-10 gap-5 md:py-20 flex flex-col-reverse md:flex-row">
      <div className="flex-1 md:w-[60%]">
      <div className="bg-[#002366] lg:w-[60%] mx-5 md:mx-0 text-[#002366] rounded-2xl">
      {[
        "Cyber Security",
        "Cloud Computing",
        "UI/UX",
        "Web Development",
        "Graphic Designing",
        "AI Engineering",
        "3D Animation",
      ].map((item, index) => (
        <div key={index} className="py-3 flex justify-center cursor-pointer" onClick={() => handleNavigation(item)}>
          <div className="bg-white py-1 flex px-3 gap-5 rounded-lg h-10 w-[90%]">
            {item} <img className="h-auto" alt="" src={arrow4} />
          </div>
        </div>
      ))}
    </div>
        <div className="py-10">
          <div
            className="lg:w-[40%] mx-5 md:mx-0 rounded-2xl py-10 px-5"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
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
          <div className="bg-[#002366] lg:w-[60%] mx-5 md:mx-0 text-white text-center rounded-2xl">
            <h2 className="py-5 font-bold">Send Us Mail</h2>
            <p className="px-5 text-[16px]">
              K2K offers a range of Technology services for all firms all over the industry
            </p>
            <form className="px-7">
              <div className="py-4">
                <h2 className="text-start">Name</h2>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-2 text-black flex justify-start bg-white py-1 rounded-lg"
                />
              </div>

              <div className="py-4">
                <h2 className="text-start">Email</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 text-black flex justify-start bg-white py-1 rounded-lg"
                />
              </div>

              <div className="py-4">
                <h2 className="text-start">Description</h2>
                <textarea
                  placeholder="Enter a description"
                  className="w-full px-2 text-black flex justify-start bg-white py-1 rounded-lg"
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
              className="px-5 text-[16px] py-10 bg-[#002366] lg:w-[60%] mx-5 md:mx-0 text-white rounded-2xl"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className="w-[80%] mx-auto">
                Office No. 205, 2nd floor, Shree Amar heights, Plot no. E 10 & 33 DCM Ajmer Road, 302006, Jaipur
              </p>
              <br />
              <p className="mx-auto w-[80%]">
                Phone: <span className="text-[#EC9422]">+91 7045 724 027</span> Email: <span className="text-[#EC9422]">marketingmanager@k2kitsupport.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 text-black">
        <div>
          <h2 className="py-5 text-[35px] font-bold">Application Development</h2>
          <p className="py-5">
          Our all-inclusive approach encompasses every stage of the app lifecycle, from initial concept to post-launch support and optimization. K2K offers tailored solutions that align with specific business goals and target audiences. 
          </p>
          <span className="text-[#EC9422]">The company's USPs are seamless backend integration, API development, and post-launch support and maintenance.</span>
          
          <img src={img} alt="" className="w-full rounded-lg" />
          <h3 className="py-5 text-[35px] font-bold">K2K Agency Values</h3>
          <p>At K2K, our culture comes to life through following values:</p>
          <ul className="list-disc list-inside">
            <li className="py-2">From iOS to Android, We Build Apps That Engage Everywhere…</li>
            <li className="py-2">Cutting-Edge iOS to Android Applications for Powering Your Business… </li>
            <li className="py-2">Tailored Apps Built for Growth and Innovation…</li>
            <li className="py-2">Elevating Businesses with Dynamic iOS and Android App Development…</li>
          </ul>
          
          <div className="flex gap-10 py-10">
            <img src={img2} alt="" className="w-1/2 rounded-lg" />
            <img src={img3} alt="" className="w-1/2 rounded-lg" />
          </div>

          <p className="py-2">
          K2K IT Support & Solutions stands at the forefront of mobile app development, offering a range of services designed to meet the unique needs of businesses across various industries. With a focus on quality, innovation, and user experience, K2K IT Support & Solutions goes beyond mere app development; we create mobile experiences that resonate with users and drive business growth.

          </p>
          <p className="py-2">
          K2K IT specializes in both iOS and Android app development and ensures that the apps are not only functional and efficient but also adhere to the design principles and guidelines specific to each platform, resulting in a seamless user experience.

          </p>

          <div className="pt-10 mx-5 md:mx-10 flex gap-20 flex-col md:flex-row">
            <div className="flex-1 py-20">
              <div className="flex">
                <img className="h-[40%] w-auto" src={circle} alt="" />
                <div className="mx-5">
                  <h2 className="font-bold">Certified Experts</h2>
                  <p>Using frameworks, the company’s developers create apps that work smoothly</p>
                </div>
              </div>
              <div className="py-10 flex">
                <img className="h-[40%] w-auto" src={circle} alt="" />
                <div className="mx-5">
                  <h2 className="font-bold">Quick Response</h2>
                  <p>K2K offers ASO services to help businesses maximize their app’s visibility and improve download rates</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl flex-1">
              <img src={img4} alt='' className="w-full rounded-lg" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Applicationdev
