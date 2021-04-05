import React from "react";

import PartnersBanner from "../../../images/partners/OurPartnersBanner.jpg";
import Logo from "../../../images/stacked/text-only.png";
import SetonLogo from "../../../images/coroporate-partners/Acension-Seton.jpg";
import BOA from "../../../images/coroporate-partners/Bank-of-America-New-logo.jpg";
import Bumble from "../../../images/coroporate-partners/bumble.jpg";
import HEB from "../../../images/coroporate-partners/HEB_TOC_Star_Logo.jpg";
import ABC from "../../../images/coroporate-partners/LOGO-ABC-BANK-5.jpg";
import RBFCU from "../../../images/coroporate-partners/rbfcu.png";
import TDS from "../../../images/coroporate-partners/TDSLogo.png";
import TCB from "../../../images/coroporate-partners/TCB.jpg";
import WF from "../../../images/coroporate-partners/WF.png";
import "./community.css";

const Partners = () => {
  return (
    <div className="bg-gray-500">
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
      <div className="text-center bg-green-500 text-4xl font-semibold">
        Corporate Partners
      </div>
      <div className="bg-gray-500">
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-4 p-4 md:gap-8 lg:grid-cols-3 lg:p-8">
          <a href="https://healthcare.ascension.org/" target="_blank">
            <div
              style={{ backgroundImage: `url(${SetonLogo})` }}
              className="w-full h-48 bg-center bg-no-repeat  bg-contain"
            />
          </a>
          <a href="https://www.bankofamerica.com/" target="_blank">
            <div
              style={{ backgroundImage: `url(${BOA})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <div
            style={{ backgroundImage: `url(${Bumble})` }}
            className="w-full h-48 bg-center bg-no-repeat bg-contain"
          />
          <div
            style={{ backgroundImage: `url(${HEB})` }}
            className="w-full h-48 bg-center bg-no-repeat bg-contain"
          />
          <div
            style={{ backgroundImage: `url(${ABC})` }}
            className="w-full h-48 bg-center bg-no-repeat bg-contain"
          />
          <div
            style={{ backgroundImage: `url(${RBFCU})` }}
            className="w-full h-48 bg-center bg-no-repeat bg-contain"
          />
          <div
            style={{ backgroundImage: `url(${TDS})` }}
            className="w-full h-40 bg-center bg-no-repeat bg-contain"
          />
          <div
            style={{ backgroundImage: `url(${TCB})` }}
            className="w-full h-48 bg-center bg-no-repeat bg-contain"
          />
          <div
            style={{ backgroundImage: `url(${WF})` }}
            className="w-full h-48 bg-center bg-no-repeat bg-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
