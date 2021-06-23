import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../images/stacked/text-only.png";

const Involved = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/involved/Get-Involved-Banner.jpg)",
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
              <div id="title1">Get Involved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Academies Blue Content */}
      <div className="bg-blue-500 text-gray-500 h-auto w-full text-center p-6 pb-10 pt-6">
        <h3 className="text-3xl font-semibold p-3">
          Interested in participating in Con Mi MADRE programs?
        </h3>
        <p className="font-light text-xl pb-12">
          Con Mi MADRE coordinators conduct recruitment meetings in the Spring
          for 5th graders to prepare them to start their 6th grade year. No
          longer in 5th grade? No worries, you can still join! Our services are
          offered to all female identifying students no matter race, ethnicity,
          income, or parenting situation!
        </p>
        <div className="flex flex-col space-y-12 pb-12">
          <button className="p-2 lg:w-1/2 m-auto border-blue-500 rounded bg-gray-500 text-blue-500 shadow-2xl text-center hover:text-pink-500">
            <a
              href="https://form.jotform.com/210896228714158"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application for students 6th-12th grade
            </a>
          </button>
          <button className="p-2 lg:w-1/2 m-auto border-blue-500 rounded bg-gray-500 text-blue-500 shadow-2xl text-center hover:text-pink-500">
            <a
              href="https://form.jotform.com/211154945942155"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitud para estudiantes de 6 ° a 12 ° grado
            </a>
          </button>
          <button className="p-2 lg:w-1/2 m-auto border-blue-500 rounded bg-gray-500 text-blue-500 shadow-2xl text-center hover:text-pink-500">
            <a
              href="https://form.jotform.com/211294879226161 "
              target="_blank"
              rel="noopener noreferrer"
            >
              Application for undergraduate students
            </a>
          </button>
        </div>
      </div>
      <div className="bg-gray-500 p-6 flex flex-col text-center">
        <h3 className="text-4xl font-semibold pb-6">
          Interested in Volunteering with Con Mi MADRE?
        </h3>
        <p className="text-xl font-light">
          Con Mi MADRE always has opportunities for individuals wishing to
          contribute their time and talents to our mission!
        </p>
        <p className="text-xl font-light pb-6">
          Please reach out to{" "}
          <a
            className="pt-2 font-medium hover:text-pink-500"
            href="mailto:info@conmimadre.org?subject=Mail%20from%20involved%20page"
          >
            info@conmimadre.org
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className="flex lg:p-10 flex-col-reverse gap-6 p-6 bg-gray-500 lg:flex-row">
        <div className="flex flex-col justify-center text-center lg:text-left pl-14 lg:w-1/2">
          <h3 className="text-2xl font-semibold pb-3 pt-6 lg:pt-0">
            Guest Speakers
          </h3>
          <p className="text-xl font-light pb-6">
            Speak at one of our conferences, Corazón gala, or other fundraising
            events.
          </p>
          <h3 className="text-2xl font-semibold pb-3">Conferences & Events</h3>
          <p className="text-xl font-light pb-6">
            Help with registration, event set-up and take-down, and other event
            logistics.
          </p>
          <h3 className="text-2xl font-semibold pb-3">Fundraising</h3>
          <p className="text-xl font-light pb-6">
            Team up with our leadership team to help fundraise for our
            programming.
          </p>
        </div>
        <div className="flex flex-col justify-center lg:items-end lg:w-1/2">
          <img
            id="participants"
            className="w-full h-full lg:pl-12 lg:pr-0"
            src="/images/involved/GetInvolvedImg.jpg"
            alt="Volunteer in school gym signing up participants"
          />
        </div>
      </div>
    </>
  );
};

export default Involved;
