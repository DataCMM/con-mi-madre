import React from "react";

import Structure6 from "../../../images/programming-structure/College-and-Career-Fair-image.jpg";
import Structure7 from "../../../images/programming-structure/College-Visits-image.jpg";
import Structure5 from "../../../images/programming-structure/Conferences-image.jpg";
import Structure8 from "../../../images/programming-structure/Leadership-summit-image.jpg";
import Structure4 from "../../../images/programming-structure/Parent-Program-image.jpg";
import Structure2 from "../../../images/programming-structure/Participation-image.jpg";
import Structure1 from "../../../images/programming-structure/Preparedness-image.jpg";
import StructureBanner from "../../../images/programming-structure/Programing-Structure-Banner.jpg";
import Structure3 from "../../../images/programming-structure/Structure-3.jpg";
import Structure9 from "../../../images/programming-structure/Volunteering-image.jpg";

import Logo from "../../../images/stacked/text-only.png";

const Program = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${StructureBanner})`,
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

      {/* Preparedness */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-6 pt-6">
        <h3 className="text-3xl font-semibold pb-3">
          Preparedness (6th - 10th Grades)
        </h3>
        <p className="pb-6">
          We start early to prepare students for academic, social, and emotional
          success. We host 12 group meetings throughout the school year where
          our coordinators deliver our social-emotional education curriculum to
          students at their campus.
        </p>
        <div className="h-full w-full">
          <div
            style={{
              backgroundImage: `url(${Structure1})`,
            }}
            className="intern-img bg-cover bg-top bg-no-repeat"
          ></div>
        </div>
        <p className="pt-6 pb-6">
          Increase college knowledge, self-esteem, communication and coping
          skills
        </p>
        <p className="pb-6">Encourage rigorous coursework</p>
        <p className="pb-6">Commence career exploration</p>
      </div>

      {/* Participation */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-3xl font-semibold pb-3 text-black">
          Participation (11th & 12th Grades)
        </h3>
        <p className="text-2xl pb-6">
          Participants continue to receive social-emotional group meetings (8
          per year) while learning college readiness basics. College Academies
          are provided for those in the Participation Program where they
          commence the college application process. Participation students are
          also provided the opportunity to get paired with a Con Mi Hermana
          mentor for additional one-on-one support.
        </p>
        <div
          style={{
            backgroundImage: `url(${Structure2})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
      </div>

      {/* Success */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">
          Success (Undergraduate Students)
        </h3>
        <p className="text-2xl pb-6">
          We continue to help Latinas reach their goal of a postsecondary degree
          by offering students supportive guidance and academic advising
          services. The Success Program offers 6 workshops per year that cover
          career development, school belongingness, and financial counseling and
          a Success Symposium at the end of the year. Students are exposed to
          scholarships and other professional development opportunities.
        </p>
        <div
          style={{
            backgroundImage: `url(${Structure3})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      {/* Parent Program */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-3xl font-semibold pb-3 text-black">
          Parent Program
        </h3>
        <p className="text-2xl pb-6">
          Guardians who currently have their child in a Con Mi MADRE program are
          encouraged to participate in the Parent Program. Parents can receive
          case management support, and they are invited to various workshops
          throughout the year where key players in the community are invited to
          speak. The program seeks to prepare parents for their child’s
          transition to college, expose them to effective parenting practices,
          and empower them to set high goals for themselves and their families.
        </p>
        <div
          style={{
            backgroundImage: `url(${Structure4})`,
          }}
          className="intern-img bg-cover bg-top bg-no-repeat"
        ></div>
      </div>

      {/* Additional Opportunities */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6 text-4xl font-bold">
          Additional Opportunities
        </h3>
        <h3 className="text-3xl pt-6 pb-6 text-gray-500 font-semibold">
          Conferences
        </h3>
        <div
          style={{
            backgroundImage: `url(${Structure5})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="text-2xl pt-6 pb-6">
          Con Mi MADRE hosts a Balanced Living Conference every year for all
          participants. This conference, led by passionate speakers from the
          community, equips participants with the tools and strategies to
          achieve emotional, physical, and financial wellbeing.{" "}
        </p>
        <h3 className="text-3xl pt-6 pb-6 text-gray-500 font-semibold">
          College & Career Fair
        </h3>
        <div
          style={{
            backgroundImage: `url(${Structure6})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="text-2xl pt-6 pb-6">
          Students from 6th-12th grades and their mothers are invited to attend
          Con Mi MADRE’s Bilingual College & Career Fair. Mothers and daughters
          are provided with the experience to speak to colleges, trade schools,
          military representatives and meet with professionals to explore future
          career options. The event is hosted in the Spring semester.
        </p>
        <h3 className="text-3xl pt-6 pb-6 text-gray-500 font-semibold">
          College Visits
        </h3>
        <div
          style={{
            backgroundImage: `url(${Structure7})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="text-2xl pt-6 pb-6">
          Con Mi MADRE arranges College Visits two times per year for all
          students 6th-12th grades and their mothers. These visits expose
          participants to college campuses so that when the time comes for them
          to make a decision about where to attend, they are able to make an
          informed decision about the school that will meet the student’s needs.
        </p>
        <h3 className="text-3xl pt-6 pb-6 text-gray-500 font-semibold">
          Leadership Summit
        </h3>
        <div
          style={{
            backgroundImage: `url(${Structure8})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="text-2xl pt-6 pb-6">
          Con Mi MADRE invites a distinguished group of students and their
          mothers to the annual Leadership Summit. Participants hear and learn
          from influential leaders, and they leave the summit with applicable
          tools and resources to become future leaders.
        </p>
        <h3 className="text-3xl pt-6 pb-6 text-gray-500 font-semibold">
          Volunteering
        </h3>
        <div
          style={{
            backgroundImage: `url(${Structure9})`,
          }}
          className="intern-img bg-cover bg-center bg-no-repeat"
        ></div>
        <p className="text-2xl pt-6 pb-6">
          Con Mi MADRE offers multiple volunteering opportunities for mothers
          and daughters throughout the year. Participants are encouraged to
          participate so they can accrue community service hours and experience
          what it is like to make an impact in their community as a
          mother-daughter team.
        </p>
      </div>
    </>
  );
};

export default Program;
