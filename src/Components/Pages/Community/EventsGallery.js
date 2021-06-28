// https://www.npmjs.com/package/react-responsive-carousel
import React, { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./community.css"
import { Carousel } from "react-responsive-carousel";

import sanityClient from "../../../client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const EventsGallery = () => {
  const [ photos, setPhotos ] = useState([])

  useEffect(() => {
    getPhotos()
  },[])

  async function getPhotos(){
    const data = await sanityClient.fetch(`*[_type == "awardsImages"]{
      id,
      title,
      image{
        asset->{
          url
        }
      }
    }`);
    setPhotos(data)
  }

  return (
    <Carousel 
      autoPlay
      infiniteLoop
      useKeyboardArrows 
      showIndicators={false}
      showThumbs={false}
    >
      {photos && photos
      .sort((a, b) => a.id - b.id)
      .map((pic, idx) => (
        <div key={idx} className="lg:w-4/5 lg:m-auto xl:w-3/5">
          <img
          src= {urlFor(pic.image).url()}
          className="gallery-img bg-cover bg-top bg-no-repeat"
          alt={pic.title}
          />
          <p className="legend">{pic.title}</p>
        </div>
      ))}
      {/* 2019 Awards */}
      {/* <div
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
      </div> */}

      {/* 2018 Awards */}
      {/* <div
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
      </div> */}

      {/* 2017 Awards */}
      {/* <div
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
      </div>*/}
    </Carousel>
  );
};

export default EventsGallery;
