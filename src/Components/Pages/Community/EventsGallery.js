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
      event,
      image{
        asset->{
          url
        }
      },
    }`);
    setPhotos(data)
  }

  return (
    <Carousel 
      autoPlay={true}
      infiniteLoop
      useKeyboardArrows 
      showIndicators={false}
      showThumbs={false}
    >
      {photos && photos
      .sort((a, b) => a.id - b.id)
      .map((pic, idx) => (
        <div key={idx} className="scroll lg:w-4/5 lg:m-auto xl:w-3/5">
          <img
          src= {urlFor(pic.image).url()}
          className="gallery-img bg-cover bg-top bg-no-repeat"
          alt={pic.event}
          />
          <p className="legend">{pic.event}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default EventsGallery;
