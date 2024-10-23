import React from "react";
import line from "../../assets/line.png";
import logo from "../../assets/k2klogo.png";
import whatsaap from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkdin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook-f.png";

function Footer() {
  return (
    <div>
      <footer
        className="rounded-t-3xl text-white"
        style={{ background: "linear-gradient(180deg, #002366 0%, #590929 100%)" }}
      >
        <div className="text-white text-center py-10 px-5 md:px-10">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold">
            Have a <span className="text-[#EC9422]">project</span> in mind?
          </h2>
          <h3 className="py-4 text-[20px] sm:text-[24px] md:text-[30px] font-bold">Send us an email</h3>
          <p className="max-w-3xl mx-auto text-sm sm:text-base">
          At K2K, we make efforts to provide remarkable software services that aim at creating a standardized approach to the customers’ needs with innovative IT solutions. 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-10 py-6">
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase cursor-pointer">Needed Links</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <a href="/about"><li className="cursor-pointer">About Company</li></a>
              <a href="/portfolio"><li className="cursor-pointer">Our Recent Projects</li></a>
              <a href="/services"><li className="cursor-pointer">Services</li></a>
              <a href="/contact"><li className="cursor-pointer">Contact</li></a>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase cursor-pointer">Our Services</h2>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="cursor-pointer">Web Development</li>
              <li className="cursor-pointer">App Development</li>
              <li className="cursor-pointer">SEO Services</li>
              <li className="cursor-pointer">Cloud Solutions</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase cursor-pointer">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center bg-[#6265B1] p-4 rounded-2xl">
              <div className="text-white text-center">
                <h3 className="text-[20px]">Send us mail</h3>
                <p className="text-[15px]">marketingmanager@k2kitsupport.com</p>
              </div>
              <img src={line} alt="divider" className="hidden md:block" />
              <div className="text-white text-center">
                <h3 className="text-[20px]">Phone</h3>
                <p>+91 7045 724 027</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white py-10 mt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-5">
            <img className="h-20" src={logo} alt="K2K Logo" />
            <h2 className="text-center font-bold">K2K IT Support and Solutions Pvt. Ltd.</h2>
          </div>
        </div>
        
        <div className="border-t border-white py-4 mt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <h2 className="text-center font-bold cursor-pointer">Copyright @ 2024 K2K</h2>
            <h2 className="text-center font-bold cursor-pointer">Support Team Terms & Conditions</h2>
            <div className="flex gap-4">
              <img src={whatsaap} alt='' className="h-6 cursor-pointer" />
              <img src={instagram} alt='' className="h-6 cursor-pointer" />
              <img src={linkdin} alt='' className="h-6 cursor-pointer" />
              <img src={facebook} alt='' className="h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
