// https://www.npmjs.com/package/react-responsive-carousel
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const EventsGallery = () => {
  return (
    <Carousel autoPlay infiniteLoop useKeyboardArrows showIndicators={false}>
      {/* 2019 Awards */}
      <div
        style={{
          backgroundImage: "url(/images/events/2019/Corazon-2019-1.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2019/Corazon-2019-2.jpg)",
        }}
        className="gallery-img bg-cover bg-topbg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2019/Corazon-2019-3.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2019/Corazon-2019-4.jpg)",
        }}
        className="gallery-img bg-cover bg-topbg-no-repeat"
      >
        <p className="legend">2019 Corazón Awards</p>
      </div>

      {/* 2018 Awards */}
      <div
        style={{
          backgroundImage: "url(/images/events/2018/Corazon-2018-1.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2018 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2018/Corazon-2018-2.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2018 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2018/Corazon-2018-3.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2018 Corazón Awards</p>
      </div>

      {/* 2017 Awards */}
      <div
        style={{
          backgroundImage: "url(/images/events/2017/Corazon-2017-1.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2017/Corazon-2017-2.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2017/Corazon-2017-3.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
      <div
        style={{
          backgroundImage: "url(/images/events/2017/Corazon-2017-4.jpg)",
        }}
        className="gallery-img bg-cover bg-top bg-no-repeat"
      >
        <p className="legend">2017 Corazón Awards</p>
      </div>
    </Carousel>
  );
};

export default EventsGallery;
