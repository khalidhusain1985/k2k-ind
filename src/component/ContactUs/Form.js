import React, { useState } from 'react';
import bg from "../../assets/contactbg.png";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";
import loaction from "../../assets/location.png";
import whatsaap from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkdin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook-f.png";
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_55nfou8', // replace with your EmailJS service ID
        'template_q3wkyfh', // replace with your EmailJS template ID
        formData,
        'hA_NArJnOTfZ68diq' // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message, please try again.');
        }
      );
  };
  return (
    <div className='px-10 sm:px-20 py-10 sm:py-20'>
      <div>
        <div className='text-black text-center'>
          <h2 className='text-[30px] sm:text-[45px] font-bold'>Contact Us</h2>
          <br />
          <p className='text-sm sm:text-base'>Any question or remarks? Just write us a message!</p>
        </div>
        <div className='flex py-4 justify-center flex-col-reverse sm:flex-row'>
          <div
            className='w-full sm:w-[25%] py- rounded-2xl'
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className='px-6 sm:px-12 pt-5 text-white text-[18px] sm:text-[20px] font-bold'>Contact Information</h2>
            <p className='px-6 sm:px-12 py-4 text-white text-sm sm:text-base'>Say something to start a live chat!</p>
            <div className='px-6 sm:px-12 py-2 flex items-center'>
              <img className='h-[5%] font-bold' src={call} alt='' />
              <p className='text-[#EC9422] px-5 text-sm sm:text-base'>+91 7045 724 027</p>
            </div>
            <div className='px-6 sm:px-12 py-2 font-bold flex items-center'>
              <img className='h-[5%]' src={mail} alt='' />
              <p className='text-[#EC9422] px-5 text-sm sm:text-base'>marketingmanager@k2kitsupport.com</p>
            </div>
            <div className='px-6 sm:px-12 py-2 flex font-bold items-center'>
              <img className='h-[5%]' src={loaction} alt='' />
              <p className='text-[#EC9422] px-5 text-sm sm:text-base'>Office No. 205, 2nd floor, Shree Amar heights, Plot no. E 10 &33 DCM Ajmer Road, 302006, Jaipur</p>
            </div>

            <div className='pt-32 py-5 px-12 flex gap-4 justify-center cursor-pointer'>
              <img src={whatsaap} alt='' className='h-8' />
              <img src={instagram} alt='' className='h-8' />
              <img src={linkdin} alt='' className='h-8' />
              <img src={facebook} alt='' className='h-8' />
            </div>
          </div>
          



  

 
    <div className='px-10 py-10'>
      <form className="max-w-md mx-auto" onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group py-5">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group py-5">
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 py-5">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <div className='py-5'>
          <h2 className='font-bold text-black text-sm sm:text-base'>Select Subject?</h2>
          <div className='py-5 '>
            <label className='mx-2 sm:mx-4 text-sm sm:text-base flex '>
              <input type="radio" name="subject" value="general_inquiry" onChange={handleChange} className='' />
             <p className='mx-2'>General Inquiry</p> 
            </label>
            <label className='mx-2 sm:mx-4 text-sm sm:text-base flex '>
            <input type="radio" name="subject" value="support" onChange={handleChange} />
             <p className='mx-2'>Support</p> 
            </label>
            <label className='mx-2 sm:mx-4 text-sm sm:text-base flex '>
            <input type="radio" name="subject" value="feedback" onChange={handleChange} />
             <p className='mx-2'> Feedback</p> 
            </label>
            <label className='mx-2 sm:mx-4 text-sm sm:text-base flex '>
            <input type="radio" name="subject" value="other" onChange={handleChange} />
             <p className='mx-2'>Other</p> 
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group py-5">
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            Message
          </label>
        </div>
        <div className='pt-5'>
          <button type="submit" className='w-full sm:w-3/4 bg-[#EC9422] text-white font-bold py-2 px-4 rounded hover:bg-[#d89b1d] transition duration-300 ease-in-out'>
            Send message
          </button>
        </div>
      </form>
    </div>


        </div>
      </div>
    </div>
  );
};

export default Form;
