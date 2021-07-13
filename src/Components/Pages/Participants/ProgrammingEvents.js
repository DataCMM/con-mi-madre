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
    <main>
      <article className="banner-image w-full h-full">
        <section
          style={{
            backgroundImage: "url(/images/team/OurTeamBanner.jpg)",
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
              <h1 id="title1">Program Events</h1>
            </div>
          </section>
        </section>
      </article>
      <article className="bg-gray-500">
        <div className="bg-blue-500 text-gray-500">
          <h2 className="text-2xl lg:text-3xl font-semibold pt-6 pr-6 pl-6 pb-2 text-center">
            Calendar of Events for Participants
          </h2>
          <h2 className="text-xl lg:text-2xl font-semibold pr-6 pb-6 pl-6 text-center">
            Calendario de Eventos Para Participantes
          </h2>
        </div>
        <article>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 text-center">
            <section>
              <h3 className="text-2xl font-semibold pb-2">Fall/Otoño </h3>
                { fall && fall
                  .sort((a, b) => a.id - b.id)
                  .map((event,idx)=>(
                    <section key={idx}>
                      <ul className="list-none">
                        <li className="p-1 font-light">
                          {event.name} – {event.date}
                        </li>
                      </ul>
                    </section>
                  ))
                }
            </section>
            <section>
              <h3 className="text-2xl font-semibold pb-2">Spring/Primavera</h3>
              { spring && spring
              .sort((a, b) => a.id - b.id)
              .map((event,idx)=>(
                <section key={idx}>
                  <ul className="list-none">
                    <li className="p-1 font-light">
                      {event.name} – {event.date}
                    </li>
                  </ul>
                </section>
              ))
            }
            </section>
          </section>
          <section className="bg-blue-500 text-center pt-6">
            { eventNotification && eventNotification.map((url, idx)=>(
              <section key={idx} className="flex flex-col px-4 pb-6">
              <button className="p-2 lg:w-1/2 m-auto border-blue-500 rounded bg-gray-500 text-blue-500 shadow-2xl text-center hover:text-pink-500">
                <a
                  href={url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.title}
                </a>
              </button>
            </section> 
            ))}
          </section>
        </article>

        <section className="bg-blue-500">
          <img
            src="/images/program-events/ProgramEventsImg.jpeg"
            alt="girls in the program jumping"
            className="h-auto w-full bg-cover bg-center"
          />
        </section>
      </article>
    </main>
  );
};

export default ProgrammingEvents;
