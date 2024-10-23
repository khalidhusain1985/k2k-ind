import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Footer from "./component/footer/Footer";
import Navbar from "./component/nav/Navbar";
import Preloader from "./component/preloader/Preloader"; // Import the Preloader component
import About from "./component/About/About";
import Services from "./component/Services/Services";
import ServiceDetails from "./component/Services/Servicedetails/ServiceDetails";
import Contactus from "./component/ContactUs/Contactus";
import News from "./component/News/News";
import NewsDetails from "./component/News/Newsdetails/NewsDetails";
import Portfolio from "./component/Protfolio/Portfolio";
import Details from "./component/Protfolio/Details/Details";
import Career from "./component/Career/Career";
import Map from "./component/footer/Map";
import Application from "./component/Services/Servicedetails/Application";
import Software from "./component/Services/Servicedetails/Software";
import Cyber from "./component/Services/Servicedetails/Cyber";
import Cloud from "./component/Services/Servicedetails/Cloud";
import Uiu from "./component/Services/Servicedetails/Uiu";
import Aieng from "./component/Services/Servicedetails/Aieng";
import Animat from "./component/Services/Servicedetails/Animat";

const App = () => {
  const [loading, setLoading] = useState(true); // State to control preloader

  return (
    <>
      {loading ? (
        // Render Preloader for 5 seconds
        <Preloader setLoading={setLoading} />
      ) : (
        // Render the main content once loading is done
        <Router>
          <div className="min-h-screen flex flex-col justify-between max-w-[1800px] mx-auto overflow-hidden">
            <Navbar />
            <main className="flex-grow">
              {/* Ensure the main content area grows and pushes the footer to the bottom */}
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/website-development" element={<ServiceDetails />} />
                <Route path="/software-development" element={<Software />} />
                <Route path="/application-development" element={<Application/>} />
                <Route path="/cyber-security" element={<Cyber/>} />
                <Route path="/cloud-computing" element={<Cloud/>} />
                <Route path="/ai-engineering" element={<Aieng/>} />
                <Route path="/3d-animation" element={<Animat/>} />
                <Route path="/ui-ux-graphics" element={<Uiu/>} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="/news" element={<News />} />
                <Route path="/newsdetails" element={<NewsDetails />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfoliodetails" element={<Details />} />
                <Route path="/career" element={<Career />} />
              </Routes>
            </main>
            <Map />
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
