import React from "react";
import Social from "../Navigation/Social";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import Graduate from "../../images/cmm/additional-services/Scholarship-opportunities.jpg";
import BannerImage from "../../images/cmm/Donate-Banner.jpg";
import { FcGraduationCap, FcDiploma1 } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";

import ReactPlayer from "react-player";

const Landing = () => {
  return (
    <>
      <Social />
      <div
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
        className="flex flex-col w-full h-screen bg-center bg-cover bg-no-repeat"
      >
        <div>
          <Header />
        </div>
        <div className="flex flex-col text-gray-500 text-2xl font-bold tracking-widest pt-40 text-center sm:text-xl md:text-4xl lg:text-5xl lg:pt-40">
          <h1>We are Mothers and Daughters</h1>
          <h1 className=" pb-8">Raising Expectations</h1>
          <button>
            <Link
              className="text-white text-xl p-2 rounded shadow-xl text-center bg-green-400 md:text-xl lg:text-4xl "
              to="/Donate"
            >
              Donate Today
            </Link>
          </button>
        </div>
      </div>
      <br />
      {/* Our Impact Section */}
      <div className="bg-blue-500 text-gray-500 p-6 shadow-xl m-auto w-11/12 h-auto flex flex-col w-full">
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
      <div className="flex flex-col gap-6 p-6 bg-gray-500 md:flex-row">
        <div className="space-y-2">
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
        <div className="flex justify-center">
          <img id="grad" src={Graduate} alt="Female graduate" />
        </div>
      </div>
      {/* Our Pillars Section */}
      <div className="bg-blue-500 text-base text-gray-500 flex flex-col p-6 pt-6 gap-6 md:flex-row">
        <div className="pb-4 md:w-1/3">
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
        <div className="w-auto h-auto flex items-center md:w-2/3">
          <ReactPlayer url="https://www.youtube.com/watch?v=ajyPvDS-_kY" />
          {/* <h3>*** Video player will be here ***</h3> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
