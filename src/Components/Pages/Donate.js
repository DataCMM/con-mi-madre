import React from "react";

// import { Link } from "react-router-dom";
import CMMLogo from "../../images/stacked/no-text-color-and-white.png";
import BannerImage from "../../images/landing/Donate-Banner.JPG";

const Donate = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <div
          style={{
            backgroundImage: `url(${BannerImage})`,
          }}
          className="w-full h-full relative bg-fixed bg-cover bg-center bg-no-repeat"
        >
          <span
            className="w-full h-full absolute opacity-50 bg-black bg-cover"
            id="overlay"
          />
          {/* Banner contents  */}
          <div className="flex flex-col space-y-12">
            <div className="sticky flex flex-none p-10 self-center h-36 w-auto  sm:h-1/4 sm:w-1/4 sm:self-start md:h-1/6 md:w-1/6 md:pl-10 bg-opacity-0">
              <img
                src={CMMLogo}
                alt="Con mi madre logo"
                className="z-10 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donate;
