import React from "react";

import Logo from "../../../images/stacked/text-only.png";
import "./community.css";

const Partners = () => {
  return (
    <div className="">
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/partners/OurPartnersBanner.jpg)",
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

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-white text-4xl font-medium tracking-widest text-center">
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
              style={{
                backgroundImage:
                  "url(/images/corporate-partners/Acension-Seton.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat  bg-contain"
            />
          </a>
          <a
            href="https://www.bankofamerica.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/corporate-partners/Bank-of-America-New-logo.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://bumble.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/corporate-partners/bumblelogo.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.heb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/corporate-partners/HEB_TOC_Star_Logo.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.theabcbank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/corporate-partners/LOGO-ABC-BANK-5.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.rbfcu.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/corporate-partners/rbfcu.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.texasdisposal.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/corporate-partners/TDSLogo.png)",
              }}
              className="w-full h-40 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.texascapitalbank.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/corporate-partners/TCB.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.wellsfargo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/corporate-partners/WF.png)",
              }}
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
              style={{
                backgroundImage:
                  "url(/images/foundations/hispanic-impact-fund.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.unidosus.org/affiliates/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/unidosusaffiliate.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.austincf.org/community-impact/womens-fund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/foundations/womens-fund.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.aecf.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/annie-e-casey-foundation-logo.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.jlaustin.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: "url(/images/foundations/JLA.jpg)" }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.unitedwaytarrant.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: "url(/images/foundations/uwtc.png)" }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="hthttps://www.appliedmaterials.com/company/corporate-responsibility/society"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/appliedmaterials.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://northtexascf.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ backgroundImage: "url(/images/foundations/NTCF.png)" }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.tides.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/Tides-Foundation.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.longfoundation.org/content/nav_lf.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/TheLongFoundation.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://nebula.wsimg.com/231670c1cb9da8869a098df5d28671df?AccessKeyId=5422A47C696F7C068295&disposition=0&alloworigin=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/foundations/Rohleder.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.gahcc.org/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/foundations/GAHCC-logo.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.shield-ayresfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/Shield-Ayres-Logo-.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.powellfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/foundations/powellfoundation.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://fdnweb.org/lolawright/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/foundations/Lola-wright.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.ryanfoundation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/foundations/Ryan-Foundation.png)",
              }}
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
              style={{
                backgroundImage:
                  "url(/images/school-partners/AISD_Logo_Color_horizontal.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.fwisd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage: "url(/images/school-partners/FWISD.jpg)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.hayscisd.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/school-partners/Hays-CISD-District-Logo-Small-Shadow.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
          <a
            href="https://www.taylorisd.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                backgroundImage:
                  "url(/images/school-partners/TaylorISD-Logo.png)",
              }}
              className="w-full h-48 bg-center bg-no-repeat bg-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
