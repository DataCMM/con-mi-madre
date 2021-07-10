import React, { useState, useEffect } from "react";

import EventsGallery from "./EventsGallery";
import Logo from "../../../images/stacked/text-only.png";

import sanityClient from "../../../client";

const Services = () => {

  const [ invitation, setInvitation ] = useState([])
  const [ corazon, setCorazon ] = useState([])
  const [ cmm, setCMM ] = useState([])
  const [ mariposa, setMariposa ] = useState([])

  useEffect(() => {
    getInvitation()
    getCorazon()
    getCMM()
    getMariposa()
  }, []);
  
  async function getInvitation() {
    const data = await sanityClient.fetch(`*[_type == "annualInvitation"]{
      title,
      url
    }`);
    setInvitation(data);
  }

  async function getCorazon() { 
    const data = await sanityClient.fetch(`*[_type == "corazonAward"]{
      title,
      "pdfLink" : pdf.asset->url
    }`);
    setCorazon(data);
  }
  
  async function getCMM() {
    const data = await sanityClient.fetch(`*[_type == "cmmAward"]{
      title,
      "pdfLink" : pdf.asset->url
    }`);
    setCMM(data);
  }
  async function getMariposa() {
    const data = await sanityClient.fetch(`*[_type == "mariposaAward"]{
      title,
      "pdfLink" : pdf.asset->url
    }`);
    setMariposa(data);
  }

  return (
    <main>
      <article className="banner-image w-full h-full">
        <section
          style={{
            backgroundImage: "url(/images/events/EventsBanner.jpg)",
          }}
          className="w-full h-full md:h-full relative  bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <section className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-white text-4xl font-medium tracking-widest text-center">
              <h1 id="title1">Events</h1>
            </div>
          </section>
        </section>
      </article>

      <article className="bg-blue-500 text-gray-500 pt-6">
        <h3 className="event-header text-4xl font-semibold text-center">
          Annual Corazón Awards
        </h3>
        <p className="current-awards text-center text-2xl font-light pb-6 pl-3 pr-3">
        { invitation && invitation.map((pdf, idx)=>(
            <a
              key={idx}
              href={pdf.url}
              className="hover:text-pink-500 font-semibold text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
        ))}
            &nbsp;for more details and to register for this year’s Corazón Awards.
          </p>
      </article>
      <article className="past-awards bg-gray-500 text-center p-6 pb-12">
        <h3 className="text-4xl font-semibold  pb-6">Past Corazón Awards</h3>
        <EventsGallery />
        <h3 className="text-4xl font-semibold pb-6">Past Honorees</h3>

        <section className="con-mi-madre-award">
          <h3 className="text-3xl font-semibold pb-3 text-pink-500">
            The Con Mi MADRE Award
          </h3>
          <p className="text-2xl font-light pb-3">
            An educated successful Latina; an example of what we would like to
            see as a product of our program; someone who is living out our
            mission.
          </p>
          { cmm && cmm.map((pdf,idx)=>(
            <a
              key={idx}
              href={pdf.pdfLink}
              className="hover:text-pink-500 text-2xl font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Click Here to View Past Honorees</u>
            </a>
          ))}
        </section>

        <section className="corazon-award pt-6">
          <h3 className="text-3xl font-semibold pb-3 text-blue-500">
            The Corazón Award
          </h3>
          <p className="text-2xl font-light pb-3">
            A leader in the community who has made significant contributions to
            the education and empowerment of Latinas; someone who has "poured
            their heart" into the success of Latina youth and this was outside
            their job requirements.
          </p>
          { corazon && corazon.map((pdf,idx)=> (
            <a
              key={idx}
              href={pdf.pdfLink}
              className="hover:text-pink-500 text-2xl font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Click Here to View Past Honorees</u>
            </a>
          ))}
        </section>
        <section className="mariposa-award pt-6">
          <h3 className="text-3xl font-semibold pb-3 text-purple-500">
            The Mariposa Award
          </h3>
          <p className="text-2xl font-light pb-3">
            Someone closely associated with Con Mi MADRE (e.g., alum, previous
            employee) who has made significant contributions in their field AND
            has brought recognition to Con Mi MADRE through those contributions.
            This is someone whose efforts have helped CMM "spread its wings and
            fly."
          </p>
          { mariposa && mariposa.map((pdf,idx)=>(
            <a
              key={idx}
              href={pdf.pdfLink}
              className="hover:text-pink-500 text-2xl font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Click Here to View Past Honorees</u>
            </a>
          ))}
        </section>
      </article>
    </main>
  );
};

export default Services;
