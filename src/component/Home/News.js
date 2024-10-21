import React from "react";
import news from "../../assets/news.png";

const News = () => {
  return (
    <div className="py-10 lg:px-5" data-aos="fade-up">
      <div className="py-10 px-5 text-center font-bold text-black">
        <h2 className="text-[20px]">Latest News</h2>
        <p className="py-4 text-[35px]">Read all the latest news</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 rounded-2xl">
          <a href="#">
            <img className="rounded-t-lg" src={news} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                New plugins for creating new charts in dashboard
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-white rounded-lg hover:text-black focus:ring-4 focus:outline-none dark:bg-white"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 rounded-2xl">
          <a href="#">
            <img className="rounded-t-lg" src={news} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                New plugins for creating new charts in dashboard
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-white rounded-lg hover:text-black focus:ring-4 focus:outline-none dark:bg-white"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 rounded-2xl">
          <a href="#">
            <img className="rounded-t-lg" src={news} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                New plugins for creating new charts in dashboard
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-700 bg-white rounded-lg hover:text-black focus:ring-4 focus:outline-none dark:bg-white"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
