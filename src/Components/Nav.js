import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='flex space-x-8 text-gray-500 hidden lg:contents lg:text-2xl xl:text-4xl'>
			<Link to='/Landing'>Home</Link>
			<Link to='/About'>About Us</Link>
			<Link to='/Program'>Our Program</Link>
			<Link to='/News'>News</Link>
			<Link
				to='/Donate'
				className='text-white px-2 rounded shadow-xl text-center bg-green-400'>
				Donate
			</Link>
		</div>
	);
};

export default Nav;
