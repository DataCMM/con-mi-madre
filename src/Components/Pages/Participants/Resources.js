import React, { useState, useEffect } from "react";

import Logo from "../../../images/stacked/text-only.png";

import sanityClient from "../../../client";

const Resources = () => {
  const [ centralPdfs, setCentralPdfs ] = useState([])
  const [ fortWorthPdfs, setFortWorthPdfs ] = useState([])

  useEffect(() => {
    getCentral()
    getFortWorth()
  }, []);
  
  async function getCentral() {
    const data = await sanityClient.fetch(`*[_type == "centralResources"]{
      title,
      url
    }`);
    setCentralPdfs(data);
  }
  
  async function getFortWorth() {
    const data = await sanityClient.fetch(`*[_type == "fortWorthResources"]{
      title,
      url
    }`);
    setFortWorthPdfs(data);
  }

  return (
    <div>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/resources/ResourcesBanner.jpg)",
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
              <div id="title1">Resources</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-gray-500 p-12">
        <q className="text-lg lg:text-xl font-light">
          Cuando una madre e hija se unen a Con Mi MADRE, se unen a una
          comunidad que va más allá de metas educativas. Nos alegra ofrecerles
          los siguientes recursos disponibles en nuestras comunidades para
          suplir cualquier necesidad que surja.
        </q>
        <br />
        <br />
        <q className="text-lg lg:text-xl font-light">
          When a mother and daughter join Con Mi MADRE, they join a community
          that goes beyond education goals. We’re pleased to offer you the
          following resources available in our communities to address any need
          that may arise.{" "}
        </q>
        <br />
        <br />
        <cite className="text-xl lg:text-2xl">
          Dr. Johanna Moya Fábregas, Executive Director{" "}
        </cite>
      </div>

      <div className="bg-gray-500 p-12">
        
        {/* Central Resources */}
        {centralPdfs && centralPdfs.map((pdf, idx) => (
          <div key={idx} className="pb-6">
          <a
            className="hover:text-pink-500"
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-2xl font-semibold text-center">
              {pdf.title}
            </h1>
          </a>
          </div>
        ))}  
        
        {/* Forth Worth Resources */}
        {fortWorthPdfs && fortWorthPdfs.map((pdf, idx) => (
          <div key={idx} className="pb-6">
            <a
              className="hover:text-pink-500"
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-2xl font-semibold text-center">
                {pdf.title}
              </h1>
            </a>
          </div>
        ))}  
      </div>
    </div>
  );
};

export default Resources;
