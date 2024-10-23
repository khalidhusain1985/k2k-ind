// src/Preloader.js
import React, { useEffect, useRef } from 'react';
import preloaderVideo from "../../assets/preloader.mp4"; // Import video file

const Preloader = ({ setLoading }) => {
  const videoRef = useRef(null); // Create a reference to the video element

  useEffect(() => {
    // Set a 2-second timer for the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Set the playback speed of the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 12.0; // Set video speed (2x faster)
    }

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#e6e6e3]">
      <video
        ref={videoRef} // Attach the ref to the video element
        src={preloaderVideo}
        autoPlay
        loop
        muted
        className="w-50 h-50 lg:h-48 "
        style={{
          backgroundColor: 'transparent', // Ensure video has a transparent background
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;
