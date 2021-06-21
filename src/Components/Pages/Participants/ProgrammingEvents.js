import React from "react";

import Logo from "../../../images/stacked/text-only.png";

const ProgrammingEvents = () => {
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
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 text-center">
            <div>
              <h1 className="text-2xl font-semibold pb-2">Fall/Otoño </h1>
              <ul className="list-none">
                <li className="p-1 font-light">
                  Con Mi MADRE Orientation – September
                </li>
                <li className="p-1 font-light">Fall College Visit – October</li>
                <li className="p-1 font-light">
                  Balanced Living Conference – December
                </li>
                <li className="p-1 font-light">
                  Con Mi MADRE Mother-Daughter Holiday Dinner – December
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-semibold pb-2">Spring/Primavera</h1>
              <ul className="list-none">
                <li className="p-1 font-light">
                  Spring College Visit – January
                </li>
                <li className="p-1 font-light">
                  Con Mi MADRE Corazón Awards - April
                </li>
                <li className="p-1 font-light">
                  Con Mi MADRE Graduation – June
                </li>
                <li className="p-1 font-light">National College Fair – June</li>
                <li className="p-1 font-light">Leadership Summit – July</li>
              </ul>
            </div>
          </div>
          <div className="text-center pb-6">
            <a
              className="text-xl hover:text-pink-500 m-auto font-semibold"
              href="https://form.jotform.com/211546689542161"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up to receive email alerts about upcoming events
            </a>
          </div>
        </div>
        <div className="bg-blue-500">
          <img
            src="/images/program-events/ProgramEventsImg.jpeg"
            alt="girls in the program jumping"
            className="h-auto bg-cover bg-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgrammingEvents;
