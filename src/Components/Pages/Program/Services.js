import React from "react";

import Logo from "../../../images/stacked/text-only.png";

const Services = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage:
              "url(/images/additional-services/Additional-Services-Banner.jpg)",
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
        <h3 className="text-3xl font-semibold pb-6">College Academies</h3>
        <p className="pb-6">
          Con Mi MADRE high school juniors and seniors and their parents are
          invited to participate in College Academies. These are a series of
          workshops that aim to prepare participants to be college ready,
          financially knowledgeable and aware, and emotionally intelligent and
          accountable for their futures. These workshops dive in deeper on the
          topics discussed during regular campus sessions.
        </p>
        <div
          style={{
            backgroundImage: "url(/images/additional-services/services-1.jpg)",
          }}
          className="intern-img mb-6 bg-cover bg-top bg-no-repeat"
        ></div>
      </div>

      {/*  Coaching */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-3xl text-black font-semibold pb-6">
          Individual Coaching/Mentoring
        </h3>
        <p className="text-2xl pb-6">
          Con Mi MADRE offers Individual Coaching or Mentoring to any
          participant who is seeking help with mental health or academics.
          Individuals meet with a Con Mi MADRE social worker during multiple
          sessions to set goals and to ….
        </p>
        <div
          style={{
            backgroundImage: "url(/images/additional-services/services-2.jpg)",
          }}
          className="intern-img mb-6 bg-cover bg-top bg-no-repeat"
        ></div>
      </div>

      {/* Con Mi Hermana */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-6">Con Mi Hermana</h3>
        <div
          style={{
            backgroundImage: "url(/images/additional-services/services-3.jpg)",
          }}
          className="intern-img mb-6 bg-cover bg-top bg-no-repeat"
        ></div>
      </div>
      {/* Scholarship Opportunities */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-3xl text-black font-semibold pb-6">
          Scholarship Opportunities
        </h3>
        <div
          style={{
            backgroundImage: "url(/images/additional-services/services-4.jpg)",
          }}
          className="intern-img mb-6 bg-cover bg-top bg-no-repeat"
        ></div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-6">Testimonials</h3>
        <div
          style={{
            backgroundImage: "url(/images/additional-services/services-5.JPG)",
          }}
          className="intern-img mb-6 bg-cover bg-top bg-no-repeat"
        ></div>
      </div>
    </>
  );
};

export default Services;
