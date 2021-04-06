import React from "react";

import PartnersBanner from "../../../images/partners/OurPartnersBanner.jpg";
import Logo from "../../../images/stacked/text-only.png";
import SetonLogo from "../../../images/coroporate-partners/Acension-Seton.jpg";
import BOA from "../../../images/coroporate-partners/Bank-of-America-New-logo.jpg";
import Bumble from "../../../images/coroporate-partners/bumblelogo.png";
import HEB from "../../../images/coroporate-partners/HEB_TOC_Star_Logo.jpg";
import ABC from "../../../images/coroporate-partners/LOGO-ABC-BANK-5.jpg";
import RBFCU from "../../../images/coroporate-partners/rbfcu.png";
import TDS from "../../../images/coroporate-partners/TDSLogo.png";
import TCB from "../../../images/coroporate-partners/TCB.jpg";
import WF from "../../../images/coroporate-partners/WF.png";
import HispanicImpact from "../../../images/foundations/hispanic-impact-fund.png";
import Unidos from "../../../images/foundations/unidosusaffiliate.png";
import Women from "../../../images/foundations/womens-fund.png";
import Annie from "../../../images/foundations/annie-e-casey-foundation-logo.jpg";
import JLA from "../../../images/foundations/JLA.jpg";
import UnitedWay from "../../../images/foundations/uwtc.png";
import Applied from "../../../images/foundations/appliedmaterials.png";
import NTCF from "../../../images/foundations/NTCF.png";
import Tides from "../../../images/foundations/Tides-Foundation.jpg";
import Rohleder from "../../../images/foundations/Rohleder.png";
import GAHCC from "../../../images/foundations/GAHCC-logo.png";
import Shield from "../../../images/foundations/Shield-Ayres-Logo-.jpg";
import Powell from "../../../images/foundations/powellfoundation.png";
import Lola from "../../../images/foundations/Lola-wright.png";
import Ryan from "../../../images/foundations/Ryan-Foundation.png";
import Long from "../../../images/foundations/TheLongFoundation.png";
import AISD from "../../../images/school-partners/AISD_Logo_Color_horizontal.png";
import FWISD from "../../../images/school-partners/FWISD.jpg";
import Hays from "../../../images/school-partners/Hays-CISD-District-Logo-Small-Shadow.png";
import Taylor from "../../../images/school-partners/TaylorISD-Logo.png";

import "./community.css";

const Partners = () => {
  return (
    <div className="">
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
      <div className="partner-content">
        <div className="text-center bg-green-500 text-4xl font-semibold">
          Corporate Partners
        </div>
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-8 md:gap-12 p-4 mb-8 lg:grid-cols-3 lg:p-8">
          <a
            href="https://healthcare.ascension.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${SetonLogo})` }}
              className="w-full h-48 bg-center bg-no-repeat  bg-contain"
            />
          </a>
          <a
            href="https://www.bankofamerica.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${BOA})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://bumble.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Bumble})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.heb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${HEB})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.theabcbank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${ABC})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.rbfcu.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${RBFCU})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.texasdisposal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${TDS})` }}
              className="w-full h-40 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.texascapitalbank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${TCB})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.wellsfargo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${WF})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
        </div>
        <div className="text-center bg-green-500 text-4xl font-semibold">
          Foundations
        </div>
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-8 p-4 mb-8 md:gap-12 lg:grid-cols-3 lg:p-8">
          <a
            href="https://www.austincf.org/community-impact/hispanic-impact-fund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${HispanicImpact})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.unidosus.org/affiliates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Unidos})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.austincf.org/community-impact/womens-fund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Women})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.aecf.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Annie})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.jlaustin.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${JLA})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.unitedwaytarrant.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${UnitedWay})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="hthttps://www.appliedmaterials.com/company/corporate-responsibility/society"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Applied})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://northtexascf.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${NTCF})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.tides.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Tides})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.longfoundation.org/content/nav_lf.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Long})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://nebula.wsimg.com/231670c1cb9da8869a098df5d28671df?AccessKeyId=5422A47C696F7C068295&disposition=0&alloworigin=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Rohleder})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.gahcc.org/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${GAHCC})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.shield-ayresfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Shield})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.powellfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Powell})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://fdnweb.org/lolawright/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Lola})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.ryanfoundation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Ryan})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
        </div>
        <div className="text-center bg-green-500 text-4xl font-semibold">
          School Partnerships
        </div>
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-8 p-4 mb-8 md:gap-12 lg:grid-cols-3 lg:p-8">
          <a
            href="https://www.austinisd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${AISD})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.fwisd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${FWISD})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.hayscisd.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Hays})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.taylorisd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: `url(${Taylor})` }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
