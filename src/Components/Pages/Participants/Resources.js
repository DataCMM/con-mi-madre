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
    <main>
      <article className="banner-image w-full h-full">
        <section
          style={{
            backgroundImage: "url(/images/resources/ResourcesBanner.jpg)",
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
              <h1 id="title1">Resources</h1>
            </div>
          </section>
        </section>
      </article>
      <article className="bg-blue-500 text-gray-500 p-12">
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
      </article>

      <article className="bg-blue-500 text-gray-500 p-12">
        {/* Central Resources */}
        {centralPdfs && centralPdfs.map((pdf, idx) => (
          <section key={idx} className="flex flex-col space-y-12 pb-12">
          <button className="p-2 lg:w-1/2 m-auto border-blue-500 rounded bg-gray-500 text-blue-500 shadow-2xl text-center hover:text-pink-500">
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pdf.title}
            </a>
          </button>
        </section>  
        ))}  
        
        {/* Forth Worth Resources */}
        {fortWorthPdfs && fortWorthPdfs.map((pdf, idx) => (
          <section key={idx} className="flex flex-col space-y-12 pb-12">
            <button className="p-2 lg:w-1/2 m-auto border-blue-500 rounded bg-gray-500 text-blue-500 shadow-2xl text-center hover:text-pink-500">
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pdf.title}
              </a>
            </button>
          </section>  
        ))}  
      </article>
    </main>
  );
};

export default Resources;
