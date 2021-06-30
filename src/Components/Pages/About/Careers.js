import React, { useState, useEffect } from "react";

import Logo from "../../../images/stacked/text-only.png";

import sanityClient from "../../../client"

const Careers = () => {

  const [ internships, setInternships ] = useState([])
  const [ currentOpenings, setCurrentOpenings ] = useState([])

  useEffect(()=>{
    getInternships()
    getCurrentOpenings()
  },[])

  async function getInternships (){
    const data = await sanityClient
    .fetch(`*[_type == "internships"]{
      title,
      location,
      description,
      "pdfLink" : pdf.asset->url
    }`)
    setInternships(data)
  }

  async function getCurrentOpenings (){
    const data = await sanityClient
    .fetch(`*[_type == "currentOpenings"]{
      title,
      id,
      location,
      description,
      "pdfLink" : pdf.asset->url
    }`)
    setCurrentOpenings(data)
  }

  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/partners/OurPartnersBanner.jpg)",
          }}
          className="w-full h-full md:h-full relative  bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <div className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 pr-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-white text-4xl font-medium tracking-widest text-center">
              <div id="title1">Careers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Blue Content */}
      <div>
        <div className="bg-blue-500 text-gray-500 text-2xl shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
          <p className="font-light">
            Con Mi MADRE is looking for passionate, self-starters who want to
            contribute to building our Nation's future Latina leaders and
            educated workforce. With our five-pillars, unique curriculum and
            over 20 years working with young Latinas and their mothers, we
            believe we have what it takes to achieve our vision!
          </p>
          <br />
          <p className="font-light text-xl">
            Please look at our current openings for opportunities to join our
            familia!
          </p>
        </div>
      </div>

      {/*  Openings */}
      <div className="text-center p-6 pb-10 pt-10 bg-gray-500">
        <h3 className="text-4xl font-semibold">Current Openings</h3>
        { currentOpenings && currentOpenings
          .sort((a, b) => a.id - b.id)
          .map((job, idx)=> (
            <article key={idx}>
              <h3 className="text-2xl font-semibold pb-3">
                {job.title} - ({job.location})
              </h3>

              <p className="text-xl font-light pb-6">
              {job.description}{" "}
              {job.pdfLink ? 
                <a
                  className="hover:text-pink-500 font-medium"
                  href={`${job.pdfLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here for more information
                </a>
                : null
              }
              </p>
            </article>
        ))} 
        {currentOpenings.length < 1 ? 
            <p className="text-2xl font-light">
                There are no openings at this time
            </p>
          : null
        }
      </div>

      {/* Internships */}
      <div className="flex lg:p-10 flex-col-reverse gap-6 p-6 bg-blue-500 text-gray-500 lg:flex-row">
        <div className="flex flex-col justify-center pl-14 lg:w-1/2">
          <h3 className="text-4xl text-center lg:text-left font-semibold pb-6">
            Internships
          </h3>
          {internships && internships.map((intern, idx)=> (
            <article key={idx}>
              <h3 className="text-2xl font-semibold pb-3">
                {intern.title} - ({intern.location})
              </h3>

              <p className="text-xl font-light pb-6">
              {intern.description}{" "}
              {intern.pdfLink ? 
                <a
                  className="hover:text-pink-500 font-medium"
                  href={`${intern.pdfLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here for more information
                </a>
                : null
              }
              </p>
            </article>
          ))}
          
          <p className="text-xl font-light pt-3 pb-3">
            For more information on any job or internship opening, please reach
            out to{" "}
            <a
              className="pt-2 font-medium hover:text-pink-500"
              href="mailto:info@conmimadre.org?subject=Mail%20from%20careers%20page"
            >
              info@conmimadre.org
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center lg:items-end lg:w-1/2 pt-3">
          <img
            id="participants"
            className="w-full h-auto lg:pl-12 lg:pr-0"
            src="images/careers/CareersInternImg.jpg"
            alt="Program participants"
          />
        </div>
      </div>
    </>
  );
};

export default Careers;
