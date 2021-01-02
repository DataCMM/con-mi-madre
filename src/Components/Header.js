import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

// import Nav from "./Navigation/Nav";

const Header = () => {
  return (
    <div>
      <div className="h-13 w-screen relative flex flex-wrap items-center text-center justify-between navbar-expand-lg bg-gray-200 font-medium pl-2 pr-2">
        <div className="hidden md:w-full md:flex md:flex-wrap md:items-center md:justify-between md:text-xl md:text-blue-500">
          <div className="flex space-x-6 p-2 md: justify-start">
            <Link className="hover:text-pink-500" to="/">
              HOME
            </Link>
            <Link className="hover:text-pink-500" to="Contact">
              CONTACT US
            </Link>
          </div>
          <div className="flex h-150 w-full">
            <div className="flex w-3/4 items-center justify-end pr-8">
              <div className="flex space-x-6 text-blue-500 text-base hidden md:contents text-md lg:text-md xl:text-lg">
                <div className="flex flex-row items-center inline-block hover:text-pink-500">
                  <Link to="/About" className="md:pr-2">
                    About Us
                  </Link>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
                <div className="flex flex-row items-center inline-block hover:text-pink-500">
                  <Link to="/Program" className="md:pr-2">
                    Our Program
                  </Link>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
                <div className="flex flex-row items-center inline-block hover:text-pink-500">
                  <Link to="/Community" className="md:pr-2">
                    Our Community
                  </Link>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
                <div className="flex flex-row items-center inline-block hover:text-pink-500">
                  <Link to="/Participant" className="md:pr-2">
                    Participant Corner
                  </Link>
                  <FaChevronDown className="md:text-xs xl:text-sm" />
                </div>
                <Link
                  to="/Donate"
                  className="text-white px-2 rounded shadow-xl text-center text-gray-500 bg-pink-500 hover:text-pink-500 hover:bg-gray-500"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="flex md:flex-row justify-end text-center space-x-8 p-4 pr-6">
          <Link className="hover:text-pink-500" to="/facebook">
            <FaFacebookSquare className="md:text-3xl" />
          </Link>
          <Link className="hover:text-pink-500" to="/instagram">
            <FaInstagram className="md:text-3xl" />
          </Link>
          <Link className="hover:text-pink-500" to="/twitter">
            <FaTwitterSquare className="md:text-3xl" />
          </Link>
        </div> */}
        </div>
        <div className="p-4 mr-4 md:hidden">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
