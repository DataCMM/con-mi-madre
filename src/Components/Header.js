import React from "react";
import { Link } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";

import Dropdown from "../Components/Dropdown";
import "./Pages/pages.css";

const Header = () => {
  return (
    <div className="h-16 pl-5 pr-5 w-full flex justify-between items-center text-blue-500 bg-gray-200 md:pl-10 md:pr-10">
      <div className="hidden md:contents font-medium text-sm md:text-xs lg:text-sm lg:text-base">
        {/* ####copy#### <div className="h-16 w-full relative md:flex md:justify-between md:items-center md:navbar-expand-lg md:text-blue-500 bg-gray-200 font-medium pl-10 pr-10"> */}
        <div>
          <Link to="/" className="hover:text-pink-500">
            Home
          </Link>
        </div>
        <div>
          <Link to="/Contact" className="hover:text-pink-500">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center hover:text-pink-500">
          <Link to="/About" className="md:pr-2">
            About Us
          </Link>
          <FaChevronDown className="md:text-xs xl:text-sm" />
        </div>
        <div className="flex flex-row items-center hover:text-pink-500">
          <Link to="/Program" className="md:pr-2">
            Our Program
          </Link>
          <FaChevronDown className="md:text-xs xl:text-sm" />
        </div>
        <div className="flex flex-row items-center hover:text-pink-500">
          <Link to="/Community" className="md:pr-2">
            Our Community
          </Link>
          <FaChevronDown className="md:text-xs xl:text-sm" />
        </div>
        <div className="flex flex-row items-center hover:text-pink-500">
          <Link to="/Participant" className="md:pr-2">
            Participant Corner
          </Link>
          <FaChevronDown className="md:text-xs xl:text-sm" />
        </div>
        <Link
          to="/Donate"
          className="text-white text-lg p-2 pl-4 pr-4 rounded shadow-xl text-center font-black text-gray-500 bg-pink-500 hover:text-pink-500 hover:bg-white"
          id="button-background"
        >
          Donate
        </Link>
      </div>
      {/* Mobile Header */}
      <div className="md:hidden w-full flex justify-between items-center text-center">
        <Dropdown color="white" />
        <div className="flex space-x-6">
          <div>
            <Link to="/" className="hover:text-pink-500">
              Home
            </Link>
          </div>
          <div>
            <Link to="/Contact" className="hover:text-pink-500">
              Contact Us
            </Link>
          </div>
          <div>
            <Link
              to="/Donate"
              className="p-2 pl-4 pr-4 rounded hover:shadow-2xl font-black text-center text-gray-500 bg-pink-500 hover:text-pink-500 hover:bg-white"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
