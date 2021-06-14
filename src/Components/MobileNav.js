import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Pages/pages.css";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showAboutItem, setShowAboutItem] = useState(true);

  const showAboutItemList = () => {
    return setShowAboutItem(!showAboutItem);
  };

  const dropdown = () => {
    return setShowNav(!showNav);
  };

  return (
    <div>
      <GiHamburgerMenu onClick={dropdown} className="relative z-20 w-5 h-5" />
      {showNav && (
        <div className="z-20 inline-block absolute">
          <ul className="fixed bg-gray-200 rounded pr-2 pt-3 pb-2">
            <li style={{ textAlign: "left" }}>
              <Link to="/" className="pl-4">
                Home
              </Link>
            </li>
            <li style={{ textAlign: "left" }}>
              <div onClick={showAboutItemList}>
                <div className="inline-flex items-center">
                  <div className="cursor-pointer md:pr-2 py-2 px-4 ">
                    About Us
                  </div>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
              </div>
              {!showAboutItem && (
                <ul>
                  <li>
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
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
