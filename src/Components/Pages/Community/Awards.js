import React from "react";

import Logo from "../../../images/stacked/text-only.png";

const Awards = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/awards/AwardsBanner.jpg)",
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
              <div id="title1">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Content */}
      <div className="flex flex-col gap-6 p-8 bg-blue-500 text-gray-500 lg:flex-row">
        <div className="flex flex-col justify-center lg:items-end lg:w-1/2">
          <img
            className="w-full h-auto"
            src="/images/awards/Awards-1.jpg"
            alt="Con Mi Madre receiving large check"
          />
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left lg:pl-8 lg:w-1/2">
          <h3 className="text-xl font-semibold">Austin Young Chamber</h3>
          <h3 className="text-lg font-bold pb-2">FAVE Local Non-Profit</h3>
          <p className="text-md font-light pb-6">
            The Austin Young Chamber’s Annual FAVE Awards recognizes local
            businesses for the good work they are doing to make our community
            thrive, November 2019
          </p>
          <h3 className="text-xl font-semibold">Impact Austin</h3>
          <h3 className="text-lg font-bold pb-2">Community Partner 2019 </h3>
          <p className="text-md font-light pb-6">
            With support from Impact Austin, Con Mi MADRE will reach an
            additional 180 mother-daughter teams in Central Texas.
          </p>
          <h3 className="text-xl font-semibold pb-2">
            The Atlantic: The Renewal Awards
          </h3>
          <p className="text-md font-light pb-6">
            ​The Renewal awards honor grassroots nonprofit organizations
            confronting the nation’s toughest challenges, March 2017
          </p>
          <h3 className="text-xl font-semibold pb-2">Habla Con Orgullo</h3>
          <p className="text-md font-light pb-6">
            Outstanding Latino Community Organization, 2017
          </p>
          <h3 className="text-xl font-semibold">
            Del Valle Independent School District
          </h3>
          <h3 className="text-lg font-bold pb-2">
            Distinguished Partnership Award
          </h3>
          <p className="text-md font-light pb-6">
            Con Mi MADRE was honored to receive a Distinguished Partnership
            Award from Del Valle Independent School District with the
            recommendation from our partner Ojeda Middle School, May 2016
          </p>
          <h3 className="text-xl font-semibold pb-2">Philanthropitch </h3>
          <p className="text-md font-light pb-6">
            Winner and Audience Choice Award, 2016
          </p>
          <h3 className="text-xl font-semibold">
            White House Initiative on Education
          </h3>
          <h3 className="text-lg font-bold pb-2">Commitment to Action Award</h3>
          <p className="text-md font-light pb-6 lg:pb-0">
            Excellence for Hispanics Highlighting Con Mi MADRE's work to build
            and sustain the bilingual education pipeline, February 2016​
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-6 p-8 bg-gray-500 lg:flex-row">
        <div className="flex flex-col justify-center text-center lg:text-left lg:pr-8 lg:w-1/2">
          <h3 className="text-xl font-semibold pb-2">
            Excelencia in Education
          </h3>
          <p className="text-md font-light pb-6">
            Examples of Excelencia Finalist, 2014
          </p>
          <h3 className="text-xl font-semibold pb-2">
            Texas House of Representatives
          </h3>
          <p className="text-md font-light pb-6">
            Recognition for Con Mi MADRE's 20 years of service to the community,
            February 2013
          </p>
          <h3 className="text-xl font-semibold">
            The University of Texas at Austin
          </h3>
          <h3 className="text-lg font-bold pb-2">
            Department of Diversity and Community Engagement
          </h3>
          <p className="text-md font-light pb-6">
            Community Leadership Award, October 2012
          </p>
          <h3 className="text-xl font-semibold pb-2">
            Bank of America, Neighborhood Excellence Initiative
          </h3>
          <p className="text-md font-light pb-6">
            Neighborhood Builder Award, 2011
          </p>
          <h3 className="text-xl font-semibold pb-2">
            Austin Independent School District
          </h3>
          <p className="text-md font-light pb-6">
            Latino Excellence in Advocacy Award, 20119
          </p>
          <h3 className="text-xl font-semibold pb-2">
            Greater Austin Hispanic Chamber of Commerce
          </h3>
          <p className="text-md font-light pb-6">
            Finalist - Capital of Texas Awards "Small Business is Big Business
            in Texas", 2009
          </p>
          <h3 className="text-xl font-semibold pb-2">
            American Heart Association
          </h3>
          <p className="text-md font-light pb-6">
            Third Place Winner, Conozca Su Corazón Challenge, 2009
          </p>
          <h3 className="text-xl font-semibold pb-2">
            Excelencia in Education
          </h3>
          <p className="text-md font-light pb-6 lg:pb-0">
            ​Examples of Excelencia Honorable Mention, 2009
          </p>
        </div>
        <div className="flex flex-col justify-center lg:items-end lg:w-1/2">
          <img
            className="w-full h-auto"
            src="/images/awards/Awards-2.jpg"
            alt="Con Mi Madre on Univision"
          />
        </div>
      </div>
    </>
  );
};

export default Awards;
