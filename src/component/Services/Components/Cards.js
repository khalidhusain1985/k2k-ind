import React, { useState } from "react";
import logo1 from "../../../assets/homelogo.png";
import arrow from "../../../assets/arrow.png";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook

const Cards = () => {
  const navigate = useNavigate();  // Initialize the navigate function
  
  const cardsData = [
    { id: 1, title: "Software Development Services", content: "Our expertise team excels in software development services, creating custom, scalable solutions tailored to your business needs....", path: "/software-development" },
    { id: 2, title: "Application Development", content: "Our all-inclusive approach encompasses every stage of the app lifecycle, from initial concept to...", path: "/application-development" },
    { id: 3, title: "Website Development", content: "Leading the way in website development services, K2K's team of experts creates the intera...", path: "/website-development" },
    { id: 4, title: "Cyber Security", content: "K2K IT Support & Solutions is a bulwark against digital vulnerabilities, safeguarding your digi...", path: "/cyber-security" },
    { id: 5, title: "AI Engineering", content: "At K2K, we provide high-end AI engineering services, such as machine learning developm...", path: "/ai-engineering" },
    { id: 6, title: "3D Animation", content: "At K2K, we offer excellent animation services, which include 2D/3D animations, motion graphi...", path: "/3d-animation" },
    { id: 7, title: "Cloud Computing", content: "Our comprehensive suite of cloud services is designed to propel businesses into the future...", path: "/cloud-computing" },
    { id: 8, title: "UI/UX & Graphics", content: "Our designers’ creativity craves the user’s interest by creating interactive and visually engaging...", path: "/ui-ux-graphics-graphics" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cardsData.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleLearnMoreClick = (card) => {
    navigate(card.path);  // Navigate to the specific page based on the card's path
  };

  return (
    <>
      <div className="py-20 mx-5 sm:mx-10 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 text-black">
        {currentCards.map((card) => (
          <div
            key={card.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow group hover:bg-gradient-to-b hover:from-[#002366] hover:to-[#590929] transition-colors duration-300 cursor-pointer"
          >
            
              <img
                className="rounded-t-lg px-5 h-14 pt-4"
                src={logo1}
                alt={card.title}
              />
            
            <div className="p-5">
              
                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-black group-hover:text-white">
                  {card.title}
                </h5>
              
              <p className="mb-3 font-normal text-black group-hover:text-white">
                {card.content}
              </p>
              <div className="py-5">
                <button className="border rounded-2xl text-left px-5 flex group-hover:text-white" onClick={() => handleLearnMoreClick(card)}>
                  Learn More
                  <img className="py-2 ml-2 sm:ml-5" src={arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-1 rounded-full ${currentPage === number ? "border-2 border-[#002366] text-[#002366]" : "border-2 border-transparent text-black"}`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cards;
