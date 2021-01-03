import React from "react";
import Logo from "../images/horizontal/color.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 w-full flex flex-col text-center md:flex-row">
      <div className="w-3/4 m-auto h-auto md:w-1/3">
        <img src={Logo} alt="Con Mi Madre Logo" />
      </div>
      <div className="text-blue-500 text-lg pb-4 md:flex md:flex-col md:w-2/3 md:items-center md:justify-center">
        <h3>4175 Freidrich Ln #200, Austin, TX 78744</h3>
        <h3>(512) 467-4483</h3>
        <h3>info@conmimadre.com</h3>
        <div className="flex md:flex-row justify-end text-center space-x-8 p-4 pr-6">
          <Link className="hover:text-pink-500" to="/facebook">
            <FaFacebookSquare className="md:text-3xl" />
          </Link>
          <Link className="hover:text-pink-500" to="/instagram">
            <FaInstagram className="md:text-3xl" />
          </Link>
          <Link className="hover:text-pink-500" to="/twitter">
            <FaTwitterSquare className="md:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
