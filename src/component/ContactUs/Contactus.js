import React from 'react'
import bg from "../../assets/contact.png"
import Form from './Form'

const Contactus = () => {
  return (
    <div className='mt-10 py-10 lg:mt-0 lg:py-0'>
        <div
  className="bg-cover bg-center lg:h-[70vh] h-[50vh] sm:h-[60vh]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="pt-5 px-4 sm:px-5">
    <h2 className="text-[#FFFFFF] mx-4 sm:mx-20 pt-20 sm:pt-44 items-left font-bold text-[30px] sm:text-[37px] lg:text-[45px]">
      Contact Us
    </h2>
    <br />
    <br />
    <h2 className="text-white mx-4 sm:mx-20 items-center font-bold text-[16px] sm:text-[20px] lg:text-[30px]">
      Home {" > "} Contact Us
    </h2>
  </div>
</div>

        <Form />
    </div>
  )
}

export default Contactus
