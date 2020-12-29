import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex space-x-6 text-gray-500 text-base hidden md:contents lg:text-lg xl:text-lg">
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/About" className="lg:pr-2 xl:pr-2">
          About Us
        </Link>
        <FaChevronDown className="lg:text-s xl:text-sm" />
      </div>
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/Program" className="lg:pr-2 xl:pr-2">
          Our Program
        </Link>
        <FaChevronDown className="lg:text-s xl:text-sm" />
      </div>
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/Community" className="lg:pr-2 xl:pr-2">
          Our Community
        </Link>
        <FaChevronDown className="lg:text-s xl:text-sm" />
      </div>
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/Participant" className="lg:pr-2 xl:pr-2">
          Participant Corner
        </Link>
        <FaChevronDown className="lg:text-s xl:text-sm" />
      </div>
      <Link
        to="/Donate"
        className="text-white px-2 rounded shadow-xl text-center bg-green-400 hover:text-green-400 hover:bg-white"
      >
        Donate
      </Link>
    </div>
  );
};

export default Nav;
