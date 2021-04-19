import React from "react";

import Logo from "../../../images/stacked/text-only.png";

const Program = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage:
              "url(/images/programming-structure/Programing-Structure-Banner.jpg)",
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
              <div id="title1">Program Structure</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-blue-500 text-gray-500 p-6">
        <div className="flex flex-col bg-blue-500 text-gray-500 items-center text-center">
          <img
            src="/images/programming-structure/ProgramStructure1.jpg"
            alt="Mentoring participants"
            className="h-auto w-4/5 bg-cover bg-center p-6"
          />
          <div className="pr-6 pb-6 pl-6">
            <h3 className="font-semibold text-2xl pb-3">
              Preparedness Program (6th-10th Grades)
            </h3>
            <p className="font-light text-lg">
              We start early to prepare students for academic, social, and
              emotional success. We host various group meetings throughout the
              school year where our coordinators deliver our social-emotional
              education curriculum to students at their campus. The preparedness
              program aims to build the student’s social-emotional skills while
              guiding them in planning their college career.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-blue-500 text-gray-500  items-center text-center">
          <img
            src="/images/programming-structure/ProgramStructure2.jpg"
            alt="Mentoring participants"
            className="h-auto w-4/5 bg-cover bg-center p-6"
          />
          <div className="pr-6 pb-6 pl-6">
            <h3 className="font-semibold text-2xl pb-3">
              Participation Program (11th & 12th Grades)
            </h3>
            <p className="font-light text-lg">
              Participants continue to receive social-emotional group meetings
              while also commencing the college application process with close
              guidance from a Con Mi Madre coordinator. The participation
              program aims to make students college ready and emotionally
              intelligent.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-blue-500 text-gray-500  items-center text-center">
          <img
            src="/images/programming-structure/ProgramStructure3.jpg"
            alt="Mentoring participants"
            className="h-auto w-4/5 bg-cover bg-center p-6"
          />
          <div className="pr-6 pb-6 pl-6">
            <h3 className="font-semibold text-2xl pb-3">
              Success Program (Undergraduate Students)
            </h3>
            <p className="font-light text-lg">
              We continue to help Latinas reach their goal of a postsecondary
              degree by offering students supportive guidance and academic
              advising services. The Success Program offers multiple workshops
              per year that cover career development, school belongingness, and
              financial counseling. The success program aims to make students
              career-ready and emotionally intelligent.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 p-6">
        <h3 className="font-semibold text-2xl">
          Programming Opportunities for Students and their Mothers Throughout
          the Year
        </h3>
        <ul>
          <li>Balanced Living Conference</li>
          <li>College Visits</li>
          <li>College Fair</li>
          <li>Leadership Summit</li>
          <li>Volunteer Opportunities</li>
          <li>Scholarship Opportunities</li>
        </ul>
      </div>
    </>
  );
};

export default Program;
