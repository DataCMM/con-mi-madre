import React from "react";

import Banner from "../../../images/events/EventsBanner.jpg";
import Logo from "../../../images/stacked/text-only.png";

import CorporateGallery from "./CorporateGallery";
import "./community.css";

const Partners = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Banner})`,
        }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        <span
          className="w-full h-48 absolute opacity-50 bg-black bg-cover"
          id="overlay"
        />
        <div className="flex flex-col space-y-24">
          <div className="sticky pt-4 pl-4 h-14 w-1/2">
            <img src={Logo} alt="Con mi madre logo" className="z-10" />
          </div>

          <div className="sticky z-10 flex self-end pr-4 text-gray-500 text-2xl font-medium tracking-widest text-center">
            <div id="title1">Our Partners</div>
          </div>
        </div>
      </div>
      <CorporateGallery />
    </>
  );
};

export default Partners;
