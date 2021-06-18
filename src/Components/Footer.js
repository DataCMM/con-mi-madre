import React from "react";
// import Logo from "../images/horizontal/color.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 w-full flex flex-col text-center md:flex-row">
      <div className="w-3/4 m-auto h-auto md:w-1/3">
        <img src="/images/horizontal/color.png" alt="Con Mi Madre Logo" />
      </div>
      <div className="text-blue-500 text-lg pb-4 md:flex md:flex-col md:w-2/3 md:items-center md:justify-center">
        <h3>1825 Fortview Rd, Suite 114 | Austin TX, 78704</h3>
        <a
          href="tel:+1-512-467-4483"
          className="hover:text-pink-500 hover:underline"
        >
          <h3>(512) 467-4483</h3>
        </a>
        <a
          href="info@conmimadre.com"
          className="hover:text-pink-500 hover:underline"
        >
          <h3>info@conmimadre.org</h3>
        </a>
        <div className="flex justify-center md:flex-row md:justify-end text-center space-x-8 p-4 pr-6">
          <Link className="hover:text-pink-500" to="/facebook">
            <FaFacebookSquare className="text-3xl" />
          </Link>
          <Link className="hover:text-pink-500" to="/instagram">
            <FaInstagram className="text-3xl" />
          </Link>
          <Link className="hover:text-pink-500" to="/twitter">
            <FaTwitterSquare className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
