import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Social = () => {
  return (
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
  );
};

export default Social;
