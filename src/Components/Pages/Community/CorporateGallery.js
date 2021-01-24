// https://www.npmjs.com/package/react-responsive-carousel
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Acension from "../../../images/coroporate-partners/Acension-Seton.jpg";
import BOA from "../../../images/coroporate-partners/Bank-of-America-New-logo.jpg";
import Bumble from "../../../images/coroporate-partners/bumble.jpg";
import Heb from "../../../images/coroporate-partners/HEB_TOC_Star_Logo.jpg";
import ABC from "../../../images/coroporate-partners/LOGO-ABC-BANK-5.jpg";
import RBFCU from "../../../images/coroporate-partners/rbfcu.png";
import TXCB from "../../../images/coroporate-partners/Texas Capital Bank.jpg";
import TXDisposal from "../../../images/coroporate-partners/Texas Disposal System.png";
import Wells from "../../../images/coroporate-partners/WF_logo_box_rgb_red_F1.png";

const CorporateGallery = () => {
  return (
    <Carousel autoPlay>
      <div
        style={{ backgroundImage: `url(${Acension})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">Acension</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${BOA})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend"></p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${Bumble})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">Bumble</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${Heb})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">H-E-B</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${ABC})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">ABC Bank</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${RBFCU})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">Randolph Brooks</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${TXCB})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">2018 Corazón Awards</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${TXDisposal})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">2017 Corazón Awards</p> */}
      </div>
      <div
        style={{ backgroundImage: `url(${Wells})` }}
        className="w-full h-48 bg-cover bg-center bg-no-repeat"
      >
        {/* <p className="legend">2017 Corazón Awards</p> */}
      </div>
    </Carousel>
  );
};

export default CorporateGallery;
