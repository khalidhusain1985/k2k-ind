import React, { useState, useEffect } from "react";
import logo from "../../assets/k2klogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-lg" : ""
        } bg-white`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center rtl:space-x-reverse">
            <img src={logo} className="h-20" alt="K2k It Support & Solutions Pvt Ltd" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#0000] rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-black dark:text-gray-400 dark:hover:bg-[#002366] dark:focus:ring-[#002366]"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l12 12M1 13L13 1"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-5 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#002366] md:p-0 dark:text-black md:dark:hover:text-[#002366] dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
