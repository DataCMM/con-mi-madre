import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Pages/pages.css";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showAboutItem, setShowAboutItem] = useState(true);
  const [showProgramItem, setShowProgramItem] = useState(true);
  const [showCommunityItem, setShowCommunityItem] = useState(true);
  const [showParticipantItem, setShowParticipantItem] = useState(true);

  const showAboutItemList = () => {
    return setShowAboutItem(!showAboutItem);
  };

  const showProgramItemList = () => {
    return setShowProgramItem(!showProgramItem);
  };

  const showCommunityItemList = () => {
    return setShowCommunityItem(!showCommunityItem);
  };

  const showParticipantItemList = () => {
    return setShowParticipantItem(!showParticipantItem);
  };

  const dropdown = () => {
    return setShowNav(!showNav);
  };

  const handleClick = () => {
    setShowNav(false);
    setShowAboutItem(true);
    setShowProgramItem(true);
    setShowCommunityItem(true);
    setShowParticipantItem(true);
  };

  return (
    <div>
      <GiHamburgerMenu onClick={dropdown} className="relative z-20 w-5 h-5" />
      {showNav && (
        <nav className="z-20 inline-block absolute">
          <ul className="mobile-nav-list absolute bg-gray-200 rounded pr-2 mt-1 pt-4 pb-3">
            <li style={{ textAlign: "left" }}>
              <Link to="/" className="pl-2" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li style={{ textAlign: "left" }}>
              <div onClick={showAboutItemList}>
                <div className="cursor-pointer inline-flex items-center">
                  <div className="p-2">About Us</div>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
              </div>
              {!showAboutItem && (
                <ul>
                  <li>
                    <Link
                      to="/Purpose"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Purpose
                    </Link>
                  </li>
                  <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
                    <Link
                      to="/OurTeam"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
                    <Link
                      to="/Careers"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li style={{ textAlign: "left" }}>
              <div onClick={showProgramItemList}>
                <div className="cursor-pointer inline-flex items-center">
                  <div className="p-2">Our Program</div>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
              </div>
              {!showProgramItem && (
                <ul>
                  <li>
                    <Link
                      to="/ProgramStructure"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Program Structure
                    </Link>
                  </li>
                  <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
                    <Link
                      to="/Services"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Additional Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Involved"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Get Involved
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li style={{ textAlign: "left" }}>
              <div onClick={showCommunityItemList}>
                <div className="cursor-pointer inline-flex items-center">
                  <div className="p-2">Our Community</div>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
              </div>
              {!showCommunityItem && (
                <ul>
                  <li>
                    <Link
                      to="/Awards"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Awards & Recognition
                    </Link>
                  </li>
                  <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
                    <Link
                      to="/Events"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Partners"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Our Partners
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li style={{ textAlign: "left" }}>
              <div onClick={showParticipantItemList}>
                <div className="cursor-pointer inline-flex items-center">
                  <div className="p-2">Participant Corner</div>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
              </div>
              {!showParticipantItem && (
                <ul>
                  <li>
                    <Link
                      to="/Resources"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Resources
                    </Link>
                  </li>
                  <li className="hover:text-pink-500 bg-gray-200 hover:bg-gray-400 hover:bg-opacity-50">
                    <Link
                      to="/ProgramEvents"
                      className="block whitespace-no-wrap py-2 px-4 pr-4"
                      onClick={handleClick}
                    >
                      Program Events
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
