import React from "react";

import Banner from "../../../images/events/EventsBanner.jpg";
// import Event2017A from "../../../images/events/2017/Corazon-2017-1.jpg";
// import Event2017B from "../../../images/events/2017/Corazon-2017-2.jpg";
// import Event2017C from "../../../images/events/2017/Corazon-2017-3.jpg";
// import Event2017D from "../../../images/events/2017/Corazon-2017-4.jpg";
// import Event2018A from "../../../images/events/2018/Corazon-2018-1.jpg";
// import Event2018B from "../../../images/events/2018/Corazon-2018-2.jpg";
// import Event2018C from "../../../images/events/2018/Corazon-2018-3.jpg";
// import Event2019A from "../../../images/events/2019/Corazon-2019-1.jpg";
// import Event2019B from "../../../images/events/2019/Corazon-2019-2.jpg";
// import Event2019C from "../../../images/events/2019/Corazon-2019-3.jpg";
// import Event2019D from "../../../images/events/2019/Corazon-2019-4.jpg";

import EventsGallery from "./EventsGallery";

import Logo from "../../../images/stacked/text-only.png";

const Services = () => {
  return (
    <>
      <div
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
            <div id="title1">Events</div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl pt-6">
        <h3 className="text-3xl pb-6 text-center">Corazon Awards</h3>
        <EventsGallery />
      </div>
    </>
  );
};

export default Services;
