import React, { useState, useEffect } from "react";

import Logo from "../../../images/stacked/text-only.png";

import sanityClient from "../../../client";

const ProgrammingEvents = () => {
  const [ spring, setSpring ] = useState([])
  const [ fall, setFall ] = useState([])
  const [ eventNotification, setEventNotification ] = useState([])

  useEffect(() => {
    getSpring()
    getFall()
    getNotification()
  }, []);
  
  async function getSpring() {
    const data = await sanityClient.fetch(`*[_type == "springCalendar"]{
      name,
      date,
      id
    }`);
    setSpring(data);
  }

  async function getFall() {
    const data = await sanityClient.fetch(`*[_type == "fallCalendar"]{
      name,
      date,
      id
    }`);
    setFall(data);
  }

  async function getNotification() {
    const data = await sanityClient.fetch(`*[_type == "eventNotification"]{
      title,
      url
    }`);
    setEventNotification(data);
  }

  return (
    <div>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/team/OurTeamBanner.jpg)",
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
              <div id="title1">Program Events</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500">
        <div className="bg-blue-500 text-gray-500">
          <h1 className="text-2xl lg:text-3xl font-semibold pt-6 pr-6 pl-6 pb-2 text-center">
            Calendar of Events for Participants
          </h1>
          <h1 className="text-xl lg:text-2xl font-semibold pr-6 pb-6 pl-6 text-center">
            Calendario de Eventos Para Participantes
          </h1>
        </div>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 text-center">
            <div>
            <h1 className="text-2xl font-semibold pb-2">Fall/Otoño </h1>
            { fall && fall
              .sort((a, b) => a.id - b.id)
              .map((event,idx)=>(
                <div key={idx}>
                  <ul className="list-none">
                    <li className="p-1 font-light">
                      {event.name} – {event.date}
                    </li>
                  </ul>
                </div>
              ))
            }
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-2">Spring/Primavera</h1>
              { spring && spring
              .sort((a, b) => a.id - b.id)
              .map((event,idx)=>(
                <div key={idx}>
                  <ul className="list-none">
                    <li className="p-1 font-light">
                      {event.name} – {event.date}
                    </li>
                  </ul>
                </div>
              ))
            }
            </div>
          </div>
          <div className="text-center pb-6">
            { eventNotification && eventNotification.map((url, idx)=>(
              <>
                <a
                  className="text-xl hover:text-pink-500 m-auto font-semibold"
                  href={url.url}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.title}
                </a>
              <br/>
              </>
            ))}
          </div>
        </section>

        <article className="bg-blue-500">
          <img
            src="/images/program-events/ProgramEventsImg.jpeg"
            alt="girls in the program jumping"
            className="h-auto w-full bg-cover bg-center"
          />
        </article>
      </div>
    </div>
  );
};

export default ProgrammingEvents;
