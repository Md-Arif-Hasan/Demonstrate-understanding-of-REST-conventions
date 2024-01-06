// HeroSection.jsx

import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex h-half-screen relative">
      <div className="flex-1 relative">
        <img
          src="src/assets/air.png"
          className="object-cover h-full w-full"
          alt="Cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">KONTINENTALIST</h1>
          <p className="text-lg mb-1">We tell data stories about Asia</p>

          <div className="flex items-center justify-center mt-2">
            <a
              href="https://www.linkedin.com/company/kontinentalist/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg mr-2"
            >
              🔗
            </a>
            <a
              href="https://kontinentalist.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              🌐
            </a>
          </div>

          <p className="text-lg mt-4">
            An informed Asia at the front of global conversations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
