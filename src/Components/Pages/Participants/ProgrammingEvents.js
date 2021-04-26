import React from "react";

import Logo from "../../../images/stacked/text-only.png";

const ProgrammingEvents = () => {
  return (
    <div>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage:
              "url(/images/program-events/ProgramEventsBanner.jpg)",
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
    </div>
  );
};

export default ProgrammingEvents;
