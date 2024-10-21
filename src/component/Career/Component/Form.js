import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import bg from "../../../assets/contactbg.png";
import call from "../../../assets/call.png";
import mail from "../../../assets/mail.png";
import location from "../../../assets/location.png";
import whatsapp from "../../../assets/whatsapp.png";
import instagram from "../../../assets/instagram.png";
import linkedin from "../../../assets/linkedin.png";
import facebook from "../../../assets/facebook-f.png";

const Form = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

   

    emailjs.sendForm('service_55nfou8', 'template_dvnl2oj', formRef.current, 'hA_NArJnOTfZ68diq')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className='px-5 md:px-20 py-20'>
      <div>
        <div className='text-black text-center'>
          <h2 className='text-[30px] md:text-[45px] font-bold'>Join Us</h2>
          <br />
          <p>What To Join Us? Just write us a message!</p>
        </div>
        <div className='flex flex-col md:flex-row py-4 justify-center'>
          <div className='w-full md:w-[25%] py-4 rounded-2xl' style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <h2 className='px-6 md:px-12 pt-5 text-white text-[18px] md:text-[20px] font-bold'>Contact Information</h2>
            <p className='px-6 md:px-12 py-4 text-white text-[14px] md:text-[16px]'>Say something to start a live chat!</p>
            <div className='px-6 md:px-12 py-2 flex'>
              <img className='h-[5%] font-bold' src={call} alt='' />
              <p className='text-[#EC9422] px-2 md:px-5'>+91 7045 724 027</p>
            </div>
            <div className='px-6 md:px-12 py-2 font-bold flex'>
              <img className='h-[5%]' src={mail} alt='' />
              <p className='text-[#EC9422] px-2 md:px-5'>info@k2kitsupport.com</p>
            </div>
            <div className='px-6 md:px-12 py-2 flex font-bold'>
              <img className='h-[5%]' src={location} alt='' />
              <p className='text-[#EC9422] px-2 md:px-5'>Office No. 205, 2nd floor, Shree Amar heights, Plot no. E 10 &33 DCM Ajmer Road, 302006, Jaipur</p>
            </div>
            <div className='pt-10 md:pt-32 px-6 md:px-12 flex gap-2 md:gap-4 justify-center'>
              <img src={whatsapp} alt='' />
              <img src={instagram} alt='' />
              <img src={linkedin} alt='' />
              <img src={facebook} alt='' />
            </div>
          </div>

          <div className='px-5 md:px-10 mt-5 md:mt-0'>
            <form ref={formRef} onSubmit={sendEmail} className="max-w-md mx-auto">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group py-5">
                  <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">First name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group py-5">
                  <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Last name</label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 py-5">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="tel" name="phone" id="phone"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Company (Ex. Google)</label>
                </div>
              </div>

              <div className="relative z-0 w-full mb-5 group py-5">
                <input type="text" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">Message</label>
              </div>

              <div className="relative z-0 w-full mb-5 group py-5">
                <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-900">Upload Resume (PDF only)</label>
                <input type="file" name="resume" id="resume" accept=".pdf" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" required />
                <p className="mt-1 text-sm text-gray-500" id="file_input_help">PDF, max. 5 MB</p>
              </div>

              <button type="submit" className="text-white bg-[#EC9422] hover:bg-[#EC94222] focus:outline-none focus:ring-4 focus:ring-[#EC94222]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
