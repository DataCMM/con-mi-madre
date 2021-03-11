import React from "react";

import AwardsBanner from "../../../images/awards/AwardsBanner.jpg";
import Awards1 from "../../../images/awards/Awards-1.jpg";
import Awards2 from "../../../images/awards/Awards-2.jpg";

import Logo from "../../../images/stacked/text-only.png";

const Awards = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${AwardsBanner})`,
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
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Austin Young Chamber</h3>
        <h3 className="text-3xl pb-6">FAVE Local Non-Profit</h3>
        <p>
          The Austin Young Chamber’s Annual FAVE Awards recognizes local
          businesses for the good work they are doing to make our community
          thrive, November 2019
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Impact Austin</h3>
        <h3 className="text-3xl pb-6">Community Partner 2019 </h3>
        <p>
          With support from Impact Austin, Con Mi MADRE will reach an additional
          180 mother-daughter teams in Central Texas.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${Awards1})`,
        }}
        className="intern-img bg-cover bg-center bg-no-repeat"
      ></div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">The Atlantic: The Renewal Awards</h3>
        <p>
          ​The Renewal awards honor grassroots nonprofit organizations
          confronting the nation’s toughest challenges, March 2017
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Habla Con Orgullo</h3>
        <p>Outstanding Latino Community Organization, 2017</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Del Valle Independent School District</h3>
        <h3 className="text-3xl pb-6">Distinguished Partnership Award</h3>
        <p>
          Con Mi MADRE was honored to receive a Distinguished Partnership Award
          from Del Valle Independent School District with the recommendation
          from our partner Ojeda Middle School, May 2016
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Philanthropitch </h3>
        <p>Winner and Audience Choice Award, 2016</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">White House Initiative on Education</h3>
        <h3 className="text-3xl pb-6">Commitment to Action Award</h3>
        <p>
          Excellence for Hispanics Highlighting Con Mi MADRE's work to build and
          sustain the bilingual education pipeline, February 2016​
        </p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Excelencia in Education </h3>
        <p>Examples of Excelencia Finalist, 2014</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Texas House of Representatives</h3>
        <p>
          Recognition for Con Mi MADRE's 20 years of service to the community,
          February 2013
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">The University of Texas at Austin</h3>
        <h3 className="text-3xl pb-6">
          Department of Diversity and Community Engagement
        </h3>
        <p>Community Leadership Award, October 2012</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${Awards2})`,
        }}
        className="w-full h-48 bg-cover bg-top bg-no-repeat"
      ></div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">
          Bank of America, Neighborhood Excellence Initiative
        </h3>
        <p>Neighborhood Builder Award, 2011</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Austin Independent School District</h3>
        <p>Latino Excellence in Advocacy Award, 20119</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">
          Greater Austin Hispanic Chamber of Commerce
        </h3>
        <p>
          Finalist - Capital of Texas Awards "Small Business is Big Business in
          Texas", 2009
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">American Heart Association</h3>
        <p>Third Place Winner, Conozca Su Corazón Challenge, 2009</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Excelencia in Education</h3>
        <p>​Examples of Excelencia Honorable Mention, 2009</p>
      </div>
    </>
  );
};

export default Awards;
