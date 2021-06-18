import React from "react";
import { Link } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";

import MobileNav from "./MobileNav";
import "./Pages/pages.css";

const Header = () => {
  return (
    <div className="header z-40 h-16 pl-5 pr-5 w-full flex justify-between items-center text-blue-500 bg-gray-200 md:pl-10 md:pr-10">
      <div className="hidden md:contents font-medium text-sm md:text-xs lg:text-sm lg:text-base">
        {/* ####copy#### <div className="h-16 w-full relative md:flex md:justify-between md:items-center md:navbar-expand-lg md:text-blue-500 bg-gray-200 font-medium pl-10 pr-10"> */}
        <div>
          <Link to="/" className="font-bold hover:text-pink-500">
            Home
          </Link>
        </div>
        <div>
          <Link to="/Contact" className="font-bold hover:text-pink-500">
            Contact Us
          </Link>
        </div>
        <div className="dropdown z-20 inline-block relative hover:text-pink-500">
          <div className="inline-flex items-center">
            <div className="cursor-pointer md:pr-2 py-2 px-4 ">About Us</div>
            <FaChevronDown className="md:text-xs xl:text-sm" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Purpose"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Purpose
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/OurTeam"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Our Team
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Careers"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown z-20 inline-block relative hover:text-pink-500">
          <div className="inline-flex items-center">
            <div className="cursor-pointer md:pr-2 py-2 px-4 ">Our Program</div>
            <FaChevronDown className="md:text-xs xl:text-sm" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/ProgramStructure"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Program Structure
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Services"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Additional Services
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Involved"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown z-20 inline-block relative hover:text-pink-500">
          <div className="inline-flex items-center">
            <div className="cursor-pointer md:pr-2 py-2 px-4 ">
              Our Community
            </div>
            <FaChevronDown className="md:text-xs xl:text-sm" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Awards"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Awards & Recognition
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Events"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Events
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Partners"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Our Partners
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown z-20 inline-block relative hover:text-pink-500">
          <div className="inline-flex items-center">
            <div className="cursor-pointer md:pr-2 py-2 px-4 ">
              Participant Corner
            </div>
            <FaChevronDown className="md:text-xs xl:text-sm" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Resources"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Resources
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/ProgramEvents"
                className="block whitespace-no-wrap py-2 px-4 pr-4"
              >
                Program Events
              </Link>
            </li>
          </ul>
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
        <MobileNav />
        <div className="flex space-x-6">
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
