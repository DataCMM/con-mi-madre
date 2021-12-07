import React, { useState, useEffect } from "react";
import "./program.css"

import Logo from "../../../images/stacked/text-only.png";
import { Carousel } from "react-responsive-carousel";

import sanityClient from "../../../client";

const Services = () => {

  const [ testimonials, setTestimonials ] = useState([])

  useEffect(() => {
    getTestimonials()
  }, []);
  
  async function getTestimonials() {
    const data = await sanityClient.fetch(`*[_type == "testimonials"]{
      "quote" : quote[0].children[0].text,
      source
    }`);
    setTestimonials(data);
  }

  return (
    <main>
      <article className="banner-image w-full h-full">
        <section
          style={{
            backgroundImage:
              "url(/images/additional-services/Additional-Services-Banner.jpg)",
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
              <h1 id="title1">Additional Services</h1>
            </div>
          </section>
        </section>
      </article>
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-500 p-6 pt-12">
        <section className="flex flex-col bg-gray-500 items-center text-center">
          <img
            src="/images/additional-services/services-5.JPG"
            alt="Daughter with mother and her wish to see her daughters in college"
            className="h-auto w-4/5 bg-cover bg-center"
          />
          <div className="pr-6 pb-6 pl-6">
            <h3 className="font-semibold text-2xl pb-3 pt-6">Parent Program</h3>
            <p className="font-light text-lg pl-6 pr-6">
              Guardians who currently have their child in a Con Mi MADRE program
              are encouraged to participate in the Parent Program. Workshops and
              networking opportunities are hosted throughout the year for
              parents to acquire skills and become empowered to become involved
              in their child’s educational journey.
            </p>
          </div>
        </section>
        <section className="flex flex-col bg-gray-500 items-center text-center">
          <img
            src="/images/additional-services/Services2.JPG"
            alt="Mentoring a participant"
            className="h-auto w-4/5 bg-cover bg-center"
          />
          <div className="pr-6 pb-6 pl-6">
            <h3 className="font-semibold text-2xl pb-3 pt-6">
              Individual Coaching/Mentoring
            </h3>
            <p className="font-light text-lg pl-6 pr-6">
              Con Mi MADRE offers Individual Coaching or Mentoring to any
              participant who is seeking help with mental health or academics.
              Individuals meet with a Con Mi MADRE coordinator during multiple
              sessions to work through their situation and set goals and action
              steps.
            </p>
          </div>
        </section>
        <section className="flex flex-col bg-gray-500 items-center text-center">
          <img
            src="/images/additional-services/ConHermano.jpg"
            alt="Con Mi Hermano logo"
            className="h-auto w-4/5 bg-cover bg-center bg-white"
          />
          <div className="pr-6 pb-6 pl-6">
            <h3 className="font-semibold text-2xl pt-6 pb-3">Con Mi Hermano</h3>
            <p className="font-light text-lg pl-6 pr-6">
              Con Mi Hermano was created to provide mentoring services to the
              brothers of our Con Mi MADRE families. The program’s purpose is to
              empower and educate young men to realize their full potential by
              enhancing confidence, knowledge, and positive behavior through
              mentorship and meaningful interaction.
            </p>
          </div>
        </section>
      </article>
      <article className="testimonial-carousel bg-blue-500 text-gray-500 pt-6 pr-6 pl-6 pb-3">
        <h3 className="font-semibold text-4xl text-center">Testimonials</h3>
        <Carousel
          autoPlay
          autoFocus
          infiniteLoop
          dynamicHeight
          useKeyboardArrows
          showIndicators={false}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover
          transitionTime={500}
          interval={6000}
        >
            {testimonials && testimonials.map((post,idx)=>(
              <section key={idx} className="bg-blue-500 text-gray-500 pt-6 pl-6 pr-6">
                <q className="font-light text-lg lg:text-2xl">{post.quote}</q>
                <br />
                <br />
                <cite className="font-light text-md lg:text-lg">
                  {post.source}
                </cite>    
              </section>
            ))}
        </Carousel>
      </article>
    </main>
  );
};

export default Services;
