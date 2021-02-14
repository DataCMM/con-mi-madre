import React from "react";

import PurposeBanner from "../../../images/purpose/OurPurpose1.jpg";
import Participants from "../../../images/purpose/OurPurpose2.jpg";

import Logo from "../../../images/stacked/text-only.png";

const Purpose = () => {
  return (
    <div>
      <div className="h-36 md:h-1/2 sm w-full" id="purpose-banner">
        <div
          style={{
            backgroundImage: `url(${PurposeBanner})`,
            bottom: "20",
          }}
          className="w-full h-full bg-purpose-banner bg-cover bg-center bg-no-repeat"
        >
          {/* <span
            className="h-full w-full absolute opacity-50 bg-black bg-cover"
            id="overlay"
          /> */}
          <div className="flex flex-col space-y-24">
            <div className="sticky pt-4 pl-4 h-14 md:h- w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="sticky z-10 flex self-end pr-4 text-green-500 text-4xl font-medium tracking-widest text-center">
              <div id="title1">Our Purpose</div>
            </div>
          </div>
        </div>
      </div>
      {/* Future Section */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Latinas Are The Future</h3>
        <p>
          In the next few years, the majority of all women in Texas will be
          Latina.
        </p>
        <p>
          Latinas are the most at risk for suffering from mental health issues
          due to social, economic, political, cultural, and environmental
          factors.
        </p>
      </div>
      {/* Our Future */}
      <div className="text-center text-xl p-6 pb-10 pt-10 bg-gray-500">
        <div className="space-y-6">
          <h3 className="text-3xl pb-3 text-pink-500">Our History</h3>
          <p>
            The drive behind the founding of Con Mi MADRE stemmed from a
            statistic that a Latina baby had less than a 1% chance of obtaining
            a college education. Initially named the Hispanic Mother-Daughter
            Program (HMDP) in 1992 as a project of the Junior League of Austin,
            the program set out to create positive change in the lives of young
            Latinas by empowering them to earn a college education. In 2008, the
            HDMP transitioned into its own organization, adopting the name Con
            Mi MADRE, becoming a freestanding and independent 501(c)(3)
            nonprofit organization.
          </p>
          <div
            style={{
              backgroundImage: `url(${Participants})`,
            }}
            className="w-full h-40 bg-cover bg-center bg-no-repeat"
          ></div>
          <p>
            From inception, Con Mi MADRE’s focus has been on helping young
            Latinas graduate from high school, enroll in college, and
            successfully earn a college degree. We believe and understand the
            importance of parent engagement in the educational process and
            intentionally engage mothers in every aspect of our programming. To
            date, CMM has assisted over 3,000 mother-daughter teams on their
            journey to and through post-secondary education. We are building our
            nation’s educated workforce and the next generation of confident and
            diverse female leaders.
          </p>
        </div>
      </div>
      {/* Reports */}
      <div className="bg-blue-500 space-y-3 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h2 className="text-3xl pb-3">Con Mi Madre Reports</h2>
        <div>
          <h3>Annual Reports :</h3>
          <p>2019 - 2020 Annual Report</p>
        </div>
        <div>
          <h3>Statements :</h3>
          <p>Response To COVID-19</p>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
