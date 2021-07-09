import React, { useState, useEffect } from "react";
import sanityClient from "../../../client"
import imageUrlBuilder from "@sanity/image-url"

import Logo from "../../../images/stacked/text-only.png";

const builder = imageUrlBuilder(sanityClient)

function urlFor(source){
  return builder.image(source)
}

const Partners = () => {
  const [ corporate, setCorporate ] = useState([])
  const [ foundations, setFoundations ] = useState([])
  const [ schools, setSchools ] = useState([])

  useEffect(()=>{
      getCorporate()
      getFoundations()
      getSchools()
    }, [])
    
    async function getCorporate (){
        const data = await sanityClient
        .fetch(`*[_type == "corporate_sponsors"]{
          name,
          url,
          id,
          image{
            asset->{
              url
            }
          }
        }`)
        setCorporate(data)
    }
    
    async function getFoundations (){
      const data = await sanityClient
      .fetch(`*[_type == "foundations"]{
        name,
        url,
        id,
        image{
          asset->{
            url
          }
        }
      }`)
      setFoundations(data)
    }

    async function getSchools (){
      const data = await sanityClient
      .fetch(`*[_type == "school_partners"]{
        name,
        url,
        id,
        image{
          asset->{
            url
          }
        }
      }`)
      setSchools(data)
    }  

  return (
    <div>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/careers/Careers-Banner.jpg)",
          }}
          className="w-full h-full relative  bg-cover bg-center bg-no-repeat lg:bg-top"
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
              <div id="title1">Our Partners</div>
            </div>
          </div>
        </div>
      </div>


      <div className="partner-content">
        <div className="text-center bg-green-500 text-4xl font-semibold">
          Corporate Partners
        </div>
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-8 md:gap-12 p-4 mb-8 md:grid-cols-4 lg:p-8">
          {corporate && corporate
            .sort((a, b) => a.id - b.id)
            .map((partner, idx) => (
            <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            >
           <img
              className="w-full h-48 bg-center bg-no-repeat  bg-contain"
              src={urlFor(partner.image).url()}
              key={idx}
              alt={partner.name}
            />
            </a>
          ))}
        </div>


        <div className="text-center bg-green-500 text-4xl font-semibold">
          Foundations
        </div>
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-8 p-4 mb-8 md:gap-12 md:grid-cols-4 lg:p-8">
          {foundations && foundations
            .sort((a, b) => a.id - b.id)
            .map((partner, idx) => (
            <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            >
            <img
                className="w-full h-48 bg-center bg-no-repeat  bg-contain"
                src={urlFor(partner.image).url()}
                alt={partner.name}
              />
              </a>
            ))}
        </div>


        <div className="text-center bg-green-500 text-4xl font-semibold">
          School Partnerships
        </div>
        <div className="flex flex-col bg-white items-center grid grid-cols-2 gap-8 p-4 mb-8 md:gap-12 md:grid-cols-4 lg:p-8">
          {schools && schools
            .sort((a, b) => a.id - b.id)
            .map((partner, idx) => (
            <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
          >
            <img
                className="w-full h-48 bg-center bg-no-repeat  bg-contain"
                src={urlFor(partner.image).url()}
                alt={partner.name}
              />
              </a>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Partners;
