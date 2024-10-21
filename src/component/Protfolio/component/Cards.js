import React from "react";
import logo1 from "../../../assets/school.png";

const Cards = () => {
  return (
    <div className="mx-5 py-20 flex justify-center">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
         
            <img
              className="rounded-t-lg px-5  pt-4"
              src={logo1}
              alt="Software Development"
            />
        
          <div className="p-5 text-white rounded-2xl bg-[#002366]">
         
            
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                K2K School Erp
              </h5>
          
            
            <p className="mb-3 font-normal ">
             A Personalized school management system for Schools
            </p>
           
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
         
            <img
              className="rounded-t-lg px-5  pt-4"
              src={logo1}
              alt="Software Development"
            />
         
          <div className="p-5 text-white rounded-2xl bg-[#002366]">
          
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Social Media App
              </h5>
         
            <p className="mb-3 font-normal ">
              A Personalized Social Media app for The Growth Of your Business
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
       
            <img
              className="rounded-t-lg px-5  pt-4"
              src={logo1}
              alt="Software Development"
            />
      
          <div className="p-5 text-white rounded-2xl bg-[#002366]">
           
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                E-commerce
              </h5>
      
            <p className="mb-3 font-normal ">
              A Personalized Ecommerce for making your Store Online
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
        
            <img
              className="rounded-t-lg px-5  pt-4"
              src={logo1}
              alt="Software Development"
            />
    
          <div className="p-5 text-white rounded-2xl bg-[#002366]">
       
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Chat App
              </h5>
        
            <p className="mb-3 font-normal ">
              Secure Chat Application With Top notch Security
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
      
            <img
              className="rounded-t-lg px-5  pt-4"
              src={logo1}
              alt="Software Development"
            />
      
          <div className="p-5 text-white rounded-2xl bg-[#002366]">
           
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
               Personalized Websites
              </h5>
          
            <p className="mb-3 font-normal ">
              Get Your Own Personalized Website for the Growth Of your Business
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
            <img
              className="rounded-t-lg px-5  pt-4"
              src={logo1}
              alt="Software Development"
            />
          <div className="p-5 text-white rounded-2xl bg-[#002366]">
            
              <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                Graphics
              </h5>
            <p className="mb-3 font-normal ">
             Showcasing Your Business in the form of Graphics
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
