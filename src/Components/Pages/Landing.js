import React from "react";

import { Link } from "react-router-dom";
import CMMLogo from "../../images/stacked/no-text-color-and-white.png";

import Graduate from "../../images/cmm/additional-services/Scholarship-opportunities.jpg";
import BannerImage from "../../images/cmm/Donate-Banner.JPG";
import { FcGraduationCap } from "react-icons/fc";
import { FaUniversity } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import "./pages.css";

import ReactPlayer from "react-player";

const Landing = () => {
  return (
    <>
      <div id="banner" className="container">
        <div
          style={{
            backgroundImage: `url(${BannerImage})`,
          }}
          className="flex flex-col w-full h-full justify-between bg-cover bg-center bg-fixed bg-no-repeat"
        >
          {/* <span
            className="w-full h-full absolute opacity-50 bg-black bg-cover"
            id="overlay"
          /> */}
          <div className="sticky flex flex-none  self-center mt-16 h-1/2 w-1/2   sm:h-1/3 sm:w-1/3 md:h-1/6 md:w-1/6 bg-opacity-0">
            <img
              // style={{ maxWidth: "65%" }}
              src={CMMLogo}
              alt="Con mi madre logo"
              className="z-10"
            />
          </div>

          <div className="sticky z-10 flex flex-col mb-20 mt-24 pb-3 md:pt-0 text-gray-500 text-2xl font-bold tracking-widest text-center  sm:text-xl md:text-4xl  lg:mt-24">
            <div id="title1">We are Mothers and Daughters</div>
            <h1 className="pb-8" id="title2">
              Raising Expectations
            </h1>
            <button className="lg:pt-6">
              <Link
                className="text-white text-xl p-3  rounded shadow-xl font-black text-center bg-pink-500  md:text-xl lg:text-4xl hover:text-pink-500 hover:bg-gray-500"
                to="/Donate"
              >
                Donate Today
              </Link>
            </button>
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
      <div className="flex flex-col gap-6 p-6 bg-gray-500 md:flex-row justify-between">
        <div className="space-y-2 md:w-1/2">
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
        <div className="md:w-1/2 flex justify-center">
          <img id="grad" src={Graduate} alt="Female graduate" />
        </div>
      </div>

      {/* Our Pillars Section */}
      <div className="bg-blue-500 text-base text-gray-500 flex flex-col flex-col-reverse p-6 pt-6 gap-6 md:flex-row justify-between">
        <div className="w-auto h-auto flex items-center md:w-1/2 pr-3">
          <ReactPlayer url="https://www.youtube.com/watch?v=ajyPvDS-_kY" />
          {/* <h3>*** Video player will be here ***</h3> */}
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
