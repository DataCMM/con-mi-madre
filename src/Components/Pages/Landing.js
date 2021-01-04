import React from "react";

import { Link } from "react-router-dom";
import CMMLogo from "../../images/horizontal/color-and-white.png";

import Graduate from "../../images/cmm/additional-services/Scholarship-opportunities.jpg";
import BannerImage from "../../images/cmm/Donate-Banner.jpg";
import { FcGraduationCap, FcDiploma1 } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";
import "./pages.css";

import ReactPlayer from "react-player";

const Landing = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
        className="flex flex-col justify-between w-full h-screen bg-center bg-cover bg-fixed bg-no-repeat md:h-70"
      >
        <span className="z-0 w-full h-full absolute opacity-50 bg-black" />

        <div className="flex flex-none self-end pl-12 h-1/4 w-3/4 md:w-1/2 md:h-1/2 bg-opacity-0 lg:h-1/4 lg:w-1/3">
          <img
            // style={{ maxWidth: "65%" }}
            src={CMMLogo}
            alt="Con mi madre logo"
            className="z-10"
          />
        </div>

        <div className="z-10 flex flex-col pb-48 text-gray-500 text-2xl font-bold tracking-widest text-center sm:text-xl md:text-4xl lg:text-5xl lg:pt-10">
          <div id="title1">We are Mothers and Daughters</div>
          <h1 className="pb-8" id="title2">
            Raising Expectations
          </h1>
          <button>
            <Link
              className="text-white text-xl p-2 rounded shadow-xl text-center bg-green-400 md:text-xl lg:text-4xl hover:text-green-400 hover:bg-white"
              to="/Donate"
            >
              Donate Today
            </Link>
          </button>
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
            <FcDiploma1 className="h-40 w-full" />
            <h3 className="text-3xl">79% College</h3>
            <h3 className="text-3xl">Enrollment Rate</h3>
          </div>

          <div className="text-center text-pink-500 pt-5">
            <FaUserGraduate className="h-40 w-full" />
            <h3 className="text-3xl  text-gray-500">93% College</h3>
            <h3 className="text-3xl text-gray-500">Retention Rate</h3>
          </div>
        </div>
      </div>
      {/* Our Mission Section */}
      <div className="flex flex-col gap-6 p-6 bg-gray-500 md:flex-row justify-between">
        <div className="space-y-2 w-1/2">
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
        <div className="w-1/2 flex justify-center">
          <img id="grad" src={Graduate} alt="Female graduate" />
        </div>
      </div>
      {/* Our Pillars Section */}
      <div className="bg-blue-500 text-base text-gray-500 flex flex-col p-6 pt-6 gap-6 md:flex-row justify-between">
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
