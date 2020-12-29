import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex space-x-6 text-gray-500 text-base hidden md:contents text-md lg:text-md xl:text-lg">
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/About" className="md:pr-2">
          About Us
        </Link>
        <FaChevronDown className="md:text-xs xl:text-sm" />
      </div>
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/Program" className="md:pr-2">
          Our Program
        </Link>
        <FaChevronDown className="md:text-xs xl:text-sm" />
      </div>
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/Community" className="md:pr-2">
          Our Community
        </Link>
        <FaChevronDown className="md:text-xs xl:text-sm" />
      </div>
      <div className="flex flex-row items-center inline-block hover:text-green-400">
        <Link to="/Participant" className="md:pr-2">
          Participant Corner
        </Link>
        <FaChevronDown className="md:text-xs xl:text-sm" />
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
