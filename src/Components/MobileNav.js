import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Pages/pages.css";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const dropdown = () => {
    return setShowNav(!showNav);
  };

  return (
    <div>
      <GiHamburgerMenu onClick={dropdown} className="relative w-5 h-5" />
      {showNav && (
        <div className="flex flex-col dropdown block absolute bg-gray-400 hover:text-pink-500 z-10">
          <div className="inline-flex items-center">
            <div className="cursor-pointer py-2 px-5 ">About Us</div>
            <FaChevronDown className="pr-3 text-lg" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                onClick={dropdown}
                to="/Careers"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Careers
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Contact"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Contact
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
                to="/Purpose"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Purpose
              </Link>
            </li>
          </ul>
          {/* Our Program */}
          <div className="inline-flex items-center">
            <div className="cursor-pointer py-2 px-5 ">Our Program</div>
            <FaChevronDown className="pr-3 text-lg" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                onClick={dropdown}
                to="/ProgrammingStructure"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Programming Structure
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Services"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Additional Services
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Involved"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Get Involved
              </Link>
            </li>
          </ul>
          {/* Our Community */}
          <div className="inline-flex items-center">
            <div className="cursor-pointer py-2 px-5 ">Our Community</div>
            <FaChevronDown className="pr-3 text-lg" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                onClick={dropdown}
                to="/Awards"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Awards & Recognition
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Events"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Events
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/Partners"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Our Partners
              </Link>
            </li>
          </ul>
          {/* Participant Corner */}
          <div className="inline-flex items-center">
            <div className="cursor-pointer py-2 px-5 ">Participant Corner</div>
            <FaChevronDown className="pr-3 text-lg" />
          </div>
          <ul className="dropdown-menu absolute hidden rounded text-blue-500 bg-gray-200 pt-3 pb-1 list-none z-10">
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                onClick={dropdown}
                to="/Resources"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Resources
              </Link>
            </li>
            <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
              <Link
                to="/ProgrammingEvents"
                className="block whitespace-no-wrap py-2 px-4 pr-16"
              >
                Programming Events
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
