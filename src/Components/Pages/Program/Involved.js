import React from "react";
import { Link } from "react-router-dom";

import Banner from "../../../images/involved/Get-Involved-Banner.jpg";
import Involved1 from "../../../images/involved/Get-Involved-1.jpg";

import Logo from "../../../images/stacked/text-only.png";

const Involved = () => {
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

          <div className="sticky z-10 flex self-end pr-4 text-gray-500 text-3xl font-medium tracking-widest text-center">
            <div id="title1">Get Involved</div>
          </div>
        </div>
      </div>

      {/* Academies Blue Content */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-3 shadow-xl">
          Interested in participating in Con Mi MADRE programs?
        </h3>
        <p className="pb-6 pt-6">
          Con Mi MADRE coordinators conduct recruitment meetings in the Spring
          for 5th graders to prepare them to start their 6th grade year. No
          longer in 5th grade? No worries, you can still join! Our services are
          offered to all female identifying students no matter race, ethnicity,
          income, or parenting situation!
        </p>
        <div className="shadow-xl">
          <p className="pb-6">
            <Link to="/">Application for students 6th-12th grade</Link>
          </p>
          <p className="pb-6">
            <Link to="/">Application for undergraduate students</Link>
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${Involved1})`,
          }}
          className="w-full h-48 pt-6 shadow-xl bg-cover bg-center bg-no-repeat"
        ></div>

        <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <h3 className="text-3xl pb-6">
            Interested in Volunteering with Con Mi MADRE?
          </h3>
          <p className="pb-6">
            Con Mi MADRE always has opportunities for individuals wishing to
            contribute their time and talents to our mission! Please reach out
            to info@conmimadre.org for more details.
          </p>
        </div>
        <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <h3 className="text-3xl pb-6">Guest Speakers</h3>
          <p className="pb-6">
            Speak at one of our conferences, Corazon gala, or other fundraising
            events.
          </p>
        </div>
        <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <h3 className="text-3xl pb-6">Conferences & Events</h3>
          <p className="pb-6">
            Help with registration, event set-up and take-down, and other event
            logistics.
          </p>
        </div>
        <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <h3 className="text-3xl pb-6">Fundraising</h3>
          <p className="pb-6">
            Team up with our leadership team to help fundraise for our
            programming.
          </p>
        </div>
        <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <h3 className="text-3xl pb-6">Mentor for Con Mi Hermana</h3>
          <p className="pb-6">
            Mentor a 11th or 12th grade student, and help them reach their
            goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default Involved;
