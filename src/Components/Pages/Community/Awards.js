import React, { useState, useEffect } from "react";

import Logo from "../../../images/stacked/text-only.png";

import sanityClient from "../../../client";

const Awards = () => {

  const [ blue, setBlue ] = useState([])
  const [ white, setWhite ] = useState([])
  const [ media, setMedia ] = useState([])

  useEffect(() => {
    getBlue()
    getWhite()
    getMedia()
  }, []);
  
  async function getBlue() {
    const data = await sanityClient.fetch(`*[_type == "blue"]{
      title,
      name,
      id,
      "desc" : description[0].children[0].text
    }`);
    setBlue(data);
  }
  
  async function getWhite() {
    const data = await sanityClient.fetch(`*[_type == "white"]{
      title,
      name,
      id,
      "desc" : description[0].children[0].text
    }`);
    setWhite(data);
  }
  
  async function getMedia() {
    const data = await sanityClient.fetch(`*[_type == "media"]{
      title,
      id,
      url,
      "desc" : description[0].children[0].text
    }`);
    setMedia(data);
  }

  return (
    <main>
      <section className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/awards/AwardsBanner.jpg)",
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
              <h1 id="title1">Awards & Recognition</h1>
            </div>
          </section>
        </div>
      </section>

      {/* Awards Content */}
      <article className="flex flex-col gap-6 p-8  lg:p-12 bg-blue-500 text-gray-500 lg:flex-row">
        <section className="flex flex-col justify-center lg:items-end lg:w-1/2">
          <img
            className="w-full h-auto"
            src="/images/awards/Awards-1.jpg"
            alt="Con Mi Madre receiving large check"
          />
        </section>

        {/* Blue Box Content */}
        <section className="flex flex-col justify-center text-center lg:text-left lg:pl-8 lg:w-1/2">
        {blue && blue
          .sort((a, b) => a.id - b.id)
          .map((content,idx)=>(
            <section key={idx}>
              <h2 className="text-xl font-semibold pb-2">{content.title}</h2>
              <h3 className="text-lg font-bold pb-2">{content.name}</h3>
              {content.desc ? <p className="text-md font-light pb-6">{content.desc}</p> : null}
            </section>
        ))}
          </section>
      </article>

      {/* White Box Content */}
      <article className="flex flex-col-reverse gap-6 p-8 lg:p-12 bg-gray-500 lg:flex-row">
      <section className="flex flex-col justify-center text-center lg:text-left lg:pl-8 lg:w-1/2">
        {white && white
          .sort((a, b) => a.id - b.id)
          .map((content,idx)=>(
            <section key={idx}>
              <h2 className="text-xl font-semibold pb-2">{content.title}</h2>
              <h3 className="text-lg font-bold pb-2">{content.name}</h3>
              {content.desc ? <p className="text-md font-light pb-6">{content.desc}</p> : null}
            </section>
        ))}
          </section>
        <section className="flex flex-col justify-center lg:items-end lg:w-1/2">
          <img
            className="w-full h-auto"
            src="/images/awards/Awards-2.jpg"
            alt="Con Mi Madre on Univision"
          />
        </section>
      </article>

      {/* Green Box Content */}
      <article className="bg-green-500 p-6 text-center">
        <h2 className="text-3xl font-semibold pb-2">Media Mentions</h2>
        {media && media
          .sort((a, b) => a.id - b.id)
          .map((post, idx) => (
          <section key={idx}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-2xl font-light hover:text-pink-500 pb-2">
                {post.title}
              </h3>
            </a>
            {post.desc ? <p className="text-md font-light pb-6">{post.desc}</p> : null}  
          </section>
        ))}
      </article>
    </main>
  );
};

export default Awards;
