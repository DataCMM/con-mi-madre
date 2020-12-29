import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
// import { AiFillHome } from 'react-icons/ai';

const Social = () => {
  return (
    <div className="h-13 w-screen relative flex flex-wrap items-center text-center justify-between navbar-expand-lg bg-gray-200 font-medium pl-2 pr-2">
      {/* <div className='flex space-x-2 p-2 tracking-widest md:text-2xl'>
				<h1 className='text-blue-500'>CON</h1>
				<h1 className='text-blue-500'>Mi</h1>
				<div className='flex'>
					<h1 className='text-pink-500'>M</h1>
					<h1 className='text-orange-500'>A</h1>
					<h1 className='text-yellow-500'>D</h1>
					<h1 className='text-blue-500'>R</h1>
					<h1 className='text-purple-500'>E</h1>
				</div>
			</div> */}
      <div className="hidden md:w-full md:flex md:flex-wrap md:items-center md:justify-between md:text-xl md:text-blue-500">
        <div className="flex space-x-6 p-2 md: justify-start">
          <Link className="hover:text-pink-500" to="/Landing">
            HOME
          </Link>
          <Link className="hover:text-pink-500" to="Contact">
            CONTACT US
          </Link>
        </div>
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
      <div className="p-4 mr-4 md:hidden">
        <FiMenu />
      </div>
    </div>
  );
};

export default Social;
