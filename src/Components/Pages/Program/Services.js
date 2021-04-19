import React from "react";

import Logo from "../../../images/stacked/text-only.png";
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
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

          <div className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-white text-4xl font-medium tracking-widest text-center">
              <div id="title1">Additional Services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-500 p-6 pt-12">
        <div className="flex flex-col bg-gray-500 items-center text-center">
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
        </div>
        <div className="flex flex-col bg-gray-500 items-center text-center">
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
        </div>
        <div className="flex flex-col bg-gray-500 items-center text-center">
          <img
            src="/images/additional-services/ConMiHermano.png"
            alt="Mentoring a participant"
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
        </div>
      </div>
      <div className="testimonial-carousel bg-blue-500 text-gray-500 pt-6 pr-6 pl-6 pb-3">
        <h1 className="font-semibold text-4xl text-center">Testimonials</h1>
        <Carousel
          autoPlay
          autoFocus
          infiniteLoop
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          stopOnHover
          transitionTime={500}
          interval={6500}
          style={{ backgroundColor: "rgb(70,164,186)" }}
        >
          <div className="bg-blue-500 text-gray-500 pt-6 pl-6 pr-6">
            <q className="font-light text-lg lg:text-2xl">
              Con Mi MADRE has instilled within my mother and me a wonderful
              sense of pride in our Latina culture. From campus visits and
              Leadership Summits to workshops and scholarships, I not only
              witnessed and received the powerful love and support of my Latinx
              community, I learned the best ways to give back to it one day.
            </q>
            <br />
            <br />
            <cite className="font-light text-md lg:text-lg">
              Con Mi MADRE Student, Class of 2020
            </cite>
          </div>
          <div className="bg-blue-500 text-gray-500 pt-6 pl-6 pr-6">
            <q className="font-light text-lg lg:text-2xl">
              Being involved in Con Mi MADRE has helped my mother and I in so
              many ways throughout the years. It created a closer bond between
              us and helped me in my educational journey. It helped us be a part
              of a beautiful community where women are empowering and supporting
              each other.
            </q>
            <br />
            <br />
            <cite className="font-light text-md lg:text-lg">
              Con Mi MADRE Student, Class of 2020
            </cite>
          </div>
          <div className="bg-blue-500 text-gray-500 pt-6 pl-6 pr-6">
            <q className="font-light text-lg lg:text-2xl">
              Con Mi MADRE offers Hispanic and Latina women the confidence and
              motivation and encouragement of 'si se puede': yes you can.
            </q>
            <br />
            <br />
            <cite className="font-light text-md lg:text-lg">
              Con Mi MADRE Student
            </cite>
          </div>
          <div className="bg-blue-500 text-gray-500 pt-6 pl-6 pr-6">
            <q className="font-light text-lg lg:text-2xl">
              I was in the program many years ago with my mother and now I get
              to do it with my own daughter, these are memories I will cherish
              forever.
            </q>
            <br />
            <br />
            <cite className="font-light text-md lg:text-lg">
              Con Mi MADRE Parent
            </cite>
          </div>
          <div className="bg-blue-500 text-gray-500 pt-6 pl-6 pr-6">
            <q className="font-light text-lg lg:text-2xl">
              As a mother, I really like that Con Mi MADRE works with our
              daughters to ensure that they have a positive academic performance
              and that they are already working with them for their future from
              an early age. [Con Mi MADRE] instills the importance of attending
              a University and achieving a career to be successful in life
            </q>
            <br />
            <br />
            <cite className="font-light text-md lg:text-lg">
              Con Mi MADRE Parent
            </cite>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
