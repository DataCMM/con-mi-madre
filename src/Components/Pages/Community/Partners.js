import React from "react";

import PartnersBanner from "../../../images/partners/OurPartnersBanner.jpg";
import Logo from "../../../images/stacked/text-only.png";

import CorporateGallery from "./CorporateGallery";
import SchoolsGallery from "./Schools";
import "./community.css";

const Partners = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${PartnersBanner})`,
          }}
          className="w-full h-full md:h-full relative  bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <div className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-gray-500 text-4xl font-medium tracking-widest text-center">
              <div id="title1">Our Partners</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 bg-blue-500 text-2xl">
        Corporate Partners
      </div>
      <CorporateGallery />
      <SchoolsGallery />
    </>
  );
};

export default Partners;
