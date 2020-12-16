import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='flex space-x-6 text-gray-500 text-base hidden md:contents lg:text-xl xl:text-2xl'>
			<Link to='/About'>About Us</Link>
			<Link to='/Program'>Our Program</Link>
			<Link to='/Community'>Our Community</Link>
			<Link to='/Participant'>Participant Corner</Link>
			<Link
				to='/Donate'
				className='text-white px-2 rounded shadow-xl text-center bg-green-400'>
				Donate
			</Link>
		</div>
	);
};

export default Nav;
