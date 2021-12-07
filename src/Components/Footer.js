import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

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
          href="mailto:info@conmimadre.org?subject=Mail%20from%20careers%20page"
          className="hover:text-pink-500 hover:underline"
        >
          <h3>info@conmimadre.org</h3>
        </a>
        <div className="flex justify-center md:flex-row md:justify-end text-center space-x-8 p-4 pr-6">
          <a
            className="hover:text-pink-500"
            href="https://www.facebook.com/ConMiMADRE/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="text-3xl" />
          </a>
          <a
            className="hover:text-pink-500"
            href="https://www.instagram.com/conmimadre/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            className="hover:text-pink-500"
            href="https://twitter.com/conmimadre?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare className="text-3xl" />
          </a>
          <a
            className="hover:text-pink-500"
            href="https://www.youtube.com/channel/UCNbQUm4xGUISl9afpnccq5w/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutubeSquare className="text-3xl" />
          </a>
        </div>
        <a
          href="https://form.jotform.com/211546193475156 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-xl hover:text-pink-500 font-semibold">
            Sign Up To Receive Our Monthly Newsletter!
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
