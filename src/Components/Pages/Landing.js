import React from "react";

import { FcGraduationCap } from "react-icons/fc";
import { FaUniversity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import "./pages.css";

import ReactPlayer from "react-player";

const Landing = () => {
  return (
    <main>
      <article className="w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/landing/Donate-Banner2.JPG)",
          }}
          className="w-full h-full relative xl:bg-fixed bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full absolute opacity-50 bg-black bg-cover"
            id="overlay"
          />
          {/* Banner contents  */}
          <div className="sticky flex flex-col">
            <div className="flex flex-none pt-10 pb-24 pl-10 pr-10 h-36 w-auto xs:self-center md:h-1/4 md:w-1/4 md:self-start md:pl-10 bg-opacity-0">
              <img
                src="/images/stacked/no-text-color-and-white.png"
                alt="Con mi madre logo"
                className="z-20 w-full h-full"
              />
            </div>

            <header className="home-banner-title sticky z-10 flex flex-col md:pb-3  text-white text-xl font-bold tracking-widest text-center  sm:text-xl md:text-4xl  lg:mt-24">
              <div
                id="title1"
                className="flex flex-row justify-center items-center inline-block"
              >
                <div className="hidden md:contents">
                  <div>We&nbsp;</div>
                  <div>Are&nbsp;</div>
                </div>
                <div id="mothers">Mothers&nbsp;</div>
                <div id="and">and&nbsp;</div>
                <div id="daughters">Daughters</div>
              </div>
              <h1
                className="pb-2 flex flex-row justify-center items-center inline-block"
                id="title2"
              >
                <div id="raising">Raising&nbsp;</div>
                <div id="expectations">Expectations</div>
              </h1>
              <button className="p-10 w-auto h-auto">
                <a
                  className="text-white text-xl p-4 rounded font-black text-center bg-pink-500  md:text-xl lg:text-4xl hover:text-pink-500 hover:bg-gray-500"
                  href={"https://conmimadre.z2systems.com/np/clients/conmimadre/donation.jsp?campaign=19&"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Today
                </a>
              </button>
            </header>
          </div>
        </div>
      </article>
      <br />
   
      <article>
        {/* Our Impact Section */}
        <section className="bg-blue-500 text-gray-500 shadow-xl -mt-6 m-auto w-11/12 h-auto flex flex-col w-full">
          <div className="flex flex-col text-center pb-10 pt-10">
            <h3 className="text-3xl font-semibold">OUR IMPACT</h3>
            <p className="text-2xl font-light">
              Over 4,000 mother and daughters served since 1992
            </p>
          </div>
          <div className="text-gray-500 flex flex-col md:flex-row justify-around pb-10 ">
            <div className="text-center pt-5">
              <FcGraduationCap className="h-40 w-full" />
              <h3 className="text-3xl">98% High School</h3>
              <h3 className="text-3xl">Graduation Rate</h3>
            </div>
            <div className="text-center pt-5">
              <BsGraphUp className="h-40 w-full text-gray-300" />
              <h3 className="text-3xl">79% College</h3>
              <h3 className="text-3xl">Enrollment Rate</h3>
            </div>

            <div className="text-center text-gray-700 pt-5">
              <FaUniversity className="h-40 w-full" />
              <h3 className="text-3xl  text-gray-500">93% College</h3>
              <h3 className="text-3xl text-gray-500">Retention Rate</h3>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="flex lg:pl-10 flex-col gap-6 p-6 bg-gray-500 md:flex-row">
          <div className="flex flex-col justify-center pl-14 md:w-1/2 md:space-y-20">
            <div>
              <h3 className="text-3xl font-semibold">Our Mission</h3>
              <p className="content font-light">
                To empower young Latinas and their mothers through the education and
                support services that increase preparedness, participation, and
                success in post-secondary education.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">Our Vision</h3>
              <p className="content font-light pb-6 md:pb-0">
                To see Latina students, equipped with knowledge and support,
                rewrite the narrative of her family and community.
              </p>
            </div>
          </div>

          {/* <div className="w-4/5"> */}
          <img
            id="grad"
            className="w-3/5 h-full m-auto"
            src="/images/landing/GirlGrad.jpg"
            alt="Female graduate"
          />
        </section>

        {/* Our Pillars Section */}
        <section className="bg-blue-500 text-base text-gray-500 flex flex-col flex-col-reverse p-6 pt-6 gap-6 md:flex-row justify-between">
          <div className="w-auto h-auto flex items-center md:w-1/2 pr-3">
            <ReactPlayer
              controls={true}
              url="videos/CMM.mp4"
              className="bg-black"
            />
          </div>
          <div className="pb-4 md:w-1/2">
            <h3 className="text-4xl font-semibold">OUR PILLARS</h3>
            <h4 className="text-2xl font-semibold">Parental Engagement</h4>
            <p className="font-light">
              At CMM, we believe that creating opportunities for parents to engage
              in their child's education will lead to post-secondary success.
            </p>
            <h4 className="text-2xl font-semibold">Educate Holistically</h4>
            <p className="font-light">
              We provide mothers and daughters the social-emotional skills they
              need to become emotionally intelligent.
            </p>
            <h4 className="text-2xl font-semibold">Empowerment</h4>
            <p className="font-light">
              At CMM, we equip mothers and daughters with the knowledge and
              advocacy skills to succeed in spite of systemic barriers.
            </p>
            <h4 className="text-2xl font-semibold">Community-Centered</h4>
            <p className="font-light ">
              We unite with local organizations and individuals to better meet the
              needs of the community.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Landing;
