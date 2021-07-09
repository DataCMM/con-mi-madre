import React, { useState, useEffect } from "react";
import Logo from "../../../images/stacked/text-only.png";
import Modal from "../../Modal";
import "../pages.css";

import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const OurTeam = () => {
  const [staff, setStaff] = useState([]);
  const [committee, setCommittee] = useState([]);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    getStaff();
    getCommittee();
    getBoard();
  }, []);

  async function getStaff() {
    const data = await sanityClient.fetch(`*[_type == "adminStaff"]{
      first_name,
      last_name,
      position,
      pronoun,
      id,
      email,
      "bio" : bio[0].children[0].text,
      image{
        asset->{
          url
        }
      }
    }`);
    setStaff(data);
  }

  async function getCommittee() {
    const data = await sanityClient.fetch(`*[_type == "executiveCommittee"]{
      first_name,
      last_name,
      id,
      position,
      company_1,
      company_2,
    }`);
    setCommittee(data);
  }

  async function getBoard() {
    const data = await sanityClient.fetch(`*[_type == "additionalBoardMembers"]{
      first_name,
      last_name,
      id,
      position,
    }`);
    setBoard(data);
  }

  return (
    <div>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage:
              "url(/images/program-events/ProgramEventsBanner.jpg)",
          }}
          className="w-full h-full md:h-full relative bg-cover bg-top bg-no-repeat"
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
              <div id="title1">Our Team</div>
            </div>
          </div>
        </div>
      </div>
      {/* Profiles with Images */}
      <div className="grid xs:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-gray-500 p-4 md:p-12">
        {staff &&
          staff
            .sort((a, b) => a.id - b.id)
            .map((member, idx) => (
              <div
                key={idx}
                className="rounded h-full flex flex-col items-center md:flex-row md:justify-start md:items-start p-4 bg-gray-500"
              >
                <img
                  src={urlFor(member.image).url()}
                  alt={member.first_name.concat(member.last_name)}
                  className="w-48 h-52 mt-3 md:mt-0 bg-cover bg-top bg-no-repeat"
                />
                <div className="flex md:w-1/2 h-full flex-col text-center md:text-left md:justify-between md:pl-5">
                  <div>
                    <h2 className="text-sm pt-4 md:pt-0">{member.position}</h2>
                    <h3 className="font-semibold text-md">
                      {member.first_name}{' '}{member.last_name}
                    </h3>
                    <p className="pb-4 text-sm font-light">{member.pronoun}</p>
                  </div>
                  <div className="flex flex-col flex-wrap">
                    <Modal member={member} />
                    <a
                      className="pt-2 font-semibold text-sm hover:text-pink-500 outline-none focus:outline-none ease-linear transition-all duration-150"
                      // href={member.email}
                      href={`mailto:${member.email}?subject=Mail from our site`}
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>


      {/* Executive Committee Members */}
      <div className="bg-green-500 text-xl m-auto text-center p-3 pb-6">
        <div>
          <h2 className="pt-3 font-extrabold text-4xl">Board Of Directors</h2>
          <h3 className="font-bold text-2xl pt-3 pb-2">Executive Committee</h3>
        </div>

        {committee &&
          committee
          .sort((a, b) => a.id - b.id)
          .map((member, idx) => (
            <div key={idx} className="pb-2">
              <h2>
                {member.first_name}{' '}{member.last_name} - {member.position}
              </h2>
              <h3>{member.company_1}</h3>
              {member.company_2 ? <h3>{member.company_2}</h3> : null}
            </div>
          ))}

        {/* Additional Board Members */}
        <div className="pb-3">
          <h2 className="font-bold text-2xl pt-3 pb-2">
            Additional Board Members
          </h2>
          {board &&
            board
            .sort((a, b) => a.id - b.id)
            .map((member, idx) => (
              <div key={idx} className="pb-2">
                <h2>{member.first_name}{' '}{member.last_name}</h2>
                <h3>{member.position}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
