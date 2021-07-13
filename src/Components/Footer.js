import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

import sanityClient from "../client";

const Footer = () => {

  const [ newsLetter, setNewsLetter ] = useState([])

  useEffect(() => {
    getNewsLetter()
  }, []); 
  
  async function getNewsLetter() {
    const data = await sanityClient.fetch(`*[_type == "newsLetter"]{
      title,
      url
    }`);
    setNewsLetter(data);
  }
  
  return (
    <footer className="bg-gray-200 w-full flex flex-col text-center md:flex-row">
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
        </div>
        { newsLetter && newsLetter.map((pdf, idx)=>(
          <a
            key={idx}
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-xl hover:text-pink-500 font-semibold">
              {pdf.title}
            </h3>
          </a>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
