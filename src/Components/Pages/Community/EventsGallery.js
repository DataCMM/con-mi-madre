// https://www.npmjs.com/package/react-responsive-carousel
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Event2017A from "../../../images/events/2017/Corazon-2017-1.jpg";
import Event2017B from "../../../images/events/2017/Corazon-2017-2.jpg";
import Event2017C from "../../../images/events/2017/Corazon-2017-3.jpg";
import Event2017D from "../../../images/events/2017/Corazon-2017-4.jpg";
import Event2018A from "../../../images/events/2018/Corazon-2018-1.jpg";
import Event2018B from "../../../images/events/2018/Corazon-2018-2.jpg";
import Event2018C from "../../../images/events/2018/Corazon-2018-3.jpg";
import Event2019A from "../../../images/events/2019/Corazon-2019-1.jpg";
import Event2019B from "../../../images/events/2019/Corazon-2019-2.jpg";
import Event2019C from "../../../images/events/2019/Corazon-2019-3.jpg";
import Event2019D from "../../../images/events/2019/Corazon-2019-4.jpg";

const EventsGallery = () => {
  return (
    <Carousel autoPlay infiniteLoop useKeyboardArrows showIndicators={false}>
      {/* 2019 Awards */}
      <div
        style={{ backgroundImage: `url(${Event2019A})` }}
        className="intern-img md:h-full bg-center bg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2019B})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center bg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2019C})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center-top bg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2019D})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center bg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>

      {/* 2018 Awards */}
      <div
        style={{ backgroundImage: `url(${Event2018A})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center bg-no-repeat"
      >
        <p className="legend">2018 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2018B})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center bg-no-repeat"
      >
        <p className="legend">2018 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2018C})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center bg-no-repeat"
      >
        <p className="legend">2018 Corazón Awards</p>
      </div>

      {/* 2017 Awards */}
      <div
        style={{ backgroundImage: `url(${Event2017A})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2017B})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2017C})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
      <div
        style={{ backgroundImage: `url(${Event2017D})` }}
        className="w-full h-48 md:h-screen bg-cover bg-center-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
    </Carousel>
  );
};

export default EventsGallery;
