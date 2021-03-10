import React from "react";

import ServicesBanner from "../../../images/additional-services/Additional-Services-Banner.jpg";
import Services1 from "../../../images/additional-services/services-1.jpg";
import Services2 from "../../../images/additional-services/services-2.jpg";
import Services3 from "../../../images/additional-services/services-3.jpg";
import Services4 from "../../../images/additional-services/services-4.jpg";
import Services5 from "../../../images/additional-services/services-5.JPG";

import Logo from "../../../images/stacked/text-only.png";

const Services = () => {
  return (
    <>
      {/* <div
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

          <div className="sticky z-10 flex self-end pr-4 text-gray-500 text-2xl font-medium tracking-widest text-center">
            <div id="title1">Additional Services</div>
          </div>
        </div>
      </div> */}
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${ServicesBanner})`,
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
              <div id="title1">Additional Services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Academies Blue Content */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">College Academies</h3>
        <p>
          Con Mi MADRE high school juniors and seniors and their parents are
          invited to participate in College Academies. These are a series of
          workshops that aim to prepare participants to be college ready,
          financially knowledgeable and aware, and emotionally intelligent and
          accountable for their futures. These workshops dive in deeper on the
          topics discussed during regular campus sessions.
        </p>
        <div
          style={{
            backgroundImage: `url(${Services1})`,
          }}
          className="w-full h-48 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>

      {/*  Coaching */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-3xl text-pink-500">
          Individual Coaching/Mentoring
        </h3>
        <p className="text-2xl">
          Con Mi MADRE offers Individual Coaching or Mentoring to any
          participant who is seeking help with mental health or academics.
          Individuals meet with a Con Mi MADRE social worker during multiple
          sessions to set goals and to ….
        </p>
        <div
          style={{
            backgroundImage: `url(${Services2})`,
          }}
          className="w-full h-48 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>

      {/* Con Mi Hermana */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl">Con Mi Hermana</h3>
        <div
          style={{
            backgroundImage: `url(${Services3})`,
          }}
          className="w-full h-48 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      {/* Scholarship Opportunities */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-3xl text-pink-500">Scholarship Opportunities</h3>
        <div
          style={{
            backgroundImage: `url(${Services4})`,
          }}
          className="w-full h-48 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl">Testimonials</h3>
        <div
          style={{
            backgroundImage: `url(${Services5})`,
          }}
          className="w-full h-48 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    </>
  );
};

export default Services;
