import React from "react";

import { Link } from "react-router-dom";
import CMMLogo from "../../images/stacked/no-text-color-and-white.png";

import Graduate from "../../images/landing/GirlGrad.jpg";
import BannerImage from "../../images/landing/Donate-Banner.JPG";

// import Video from "../../images/landing/CMM.mp4";

import { FcGraduationCap } from "react-icons/fc";
import { FaUniversity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import "./pages.css";

import ReactPlayer from "react-player";

const Landing = () => {
  return (
    <>
      <div className="w-full h-screen object-contain" id="banner">
        <div
          style={{
            backgroundImage: `url(${BannerImage})`,
          }}
          className="w-full h-full bg-cover bg-center bg-fixed bg-no-repeat"
        >
          <span
            className="w-full h-full absolute opacity-50 bg-black bg-cover"
            id="overlay"
          />
          {/* Banner contents  */}
          <div className="flex flex-col space-y-12">
            <div className="sticky flex flex-none p-10 self-center h-36 w-auto  sm:h-1/4 sm:w-1/4 sm:self-start md:h-1/6 md:w-1/6 md:pl-10 bg-opacity-0">
              <img
                src={CMMLogo}
                alt="Con mi madre logo"
                className="z-10 w-full h-full"
              />
            </div>

            <div className="sticky z-10 flex flex-col md:mt-24 md:pb-3 md:pt-0 text-gray-500 text-2xl font-bold tracking-widest text-center  sm:text-xl md:text-4xl  lg:mt-24">
              <div id="title1">We are Mothers and Daughters</div>
              <h1 className="pb-8" id="title2">
                Raising Expectations
              </h1>
              <button className="pt-10 lg:pt-6">
                <Link
                  className="text-white text-xl p-4  rounded shadow-xl font-black text-center bg-pink-500  md:text-xl lg:text-4xl hover:text-pink-500 hover:bg-gray-500"
                  to="/Donate"
                >
                  Donate Today
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Our Impact Section */}
      <div className="bg-blue-500 text-gray-500 shadow-xl -mt-6 m-auto w-11/12 h-auto flex flex-col w-full">
        <div className="flex flex-col text-center pb-10 pt-10">
          <h3 className="text-3xl">OUR IMPACT</h3>
          <p className="text-2xl">
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
      </div>

      {/* Our Mission Section */}
      <div className="flex flex-col gap-6 p-6 bg-gray-500 md:flex-row">
        <div className="pt-20  flex flex-col pl-14 md:w-1/2 md:space-y-20">
          <div>
            <h3 className="text-2xl text-pink-500">Our Mission</h3>
            <p className="content">
              Empower young Latinas and their mothers through the education and
              support services that increase preparedness, participation, and
              success in post-secondary education.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-pink-500">Our Vision</h3>
            <p className="content">
              To see Latina students, equipped with knowledge and support,
              rewrite the narrative of her family and community.
            </p>
          </div>
        </div>
        {/* <div className="h-full w-full"> */}
        <img
          id="grad"
          className="w-full h-full"
          src={Graduate}
          alt="Female graduate"
        />
        {/* </div> */}
      </div>

      {/* Our Pillars Section */}
      <div className="bg-blue-500 text-base text-gray-500 flex flex-col flex-col-reverse p-6 pt-6 gap-6 md:flex-row justify-between">
        <div className="w-auto h-auto flex items-center md:w-1/2 pr-3">
          <ReactPlayer
            className="w-auto h-auto"
            controls={true}
            url="videos/CMM.mp4"
          />
        </div>
        <div className="pb-4 md:w-1/2">
          <h3 className="text-yellow-500">OUR PILLARS</h3>
          <h4 className="text-2xl">Parental Engagement</h4>
          <p>
            At CMM we believe that creating opportunities for parents to engage
            in their child's education will lead to post-secondary success.
          </p>
          <h4 className="text-2xl">Educate Holistically</h4>
          <p>
            We provide mothers and daughters the social-emotional skills they
            need to become emotionally intelligent.
          </p>
          <h4 className="text-2xl">Empowerment</h4>
          <p>
            At CMM, we equip mothers and daughters with the knowledge and
            advocacy skills to succeed in spite of systemic barriers.
          </p>
          <h4 className="text-2xl">Community-Centered</h4>
          <p>
            We unite with local organizations and individuals to better meet the
            needs of the community.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
