import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
// import { AiFillHome } from 'react-icons/ai';

const Social = () => {
	return (
		<div className='h-12 w-screen flex justify-between bg-gray-200 font-medium'>
			<div className='flex space-x-2 p-2 tracking-widest md:text-2xl'>
				<h1 className='text-blue-500'>CON</h1>
				<h1 className='text-blue-500'>Mi</h1>
				<div className='flex'>
					<h1 className='text-pink-500'>M</h1>
					<h1 className='text-orange-500'>A</h1>
					<h1 className='text-yellow-500'>D</h1>
					<h1 className='text-blue-500'>R</h1>
					<h1 className='text-purple-500'>E</h1>
				</div>
			</div>
			<div className='hidden md:inline-flex space-x-8 text-2xl text-blue-500'>
				<div className='flex space-x-6 p-2'>
					<Link to='/Landing'>HOME</Link>
					<Link to='Contact'>CONTACT US</Link>
				</div>
				<div className='flex space-x-8 p-4 pr-6'>
					<Link to='/facebook'>
						<FaFacebookSquare />
					</Link>
					<Link to='/instagram'>
						<FaInstagram />
					</Link>
					<Link to='/twitter'>
						<FaTwitterSquare />
					</Link>
				</div>
			</div>
			<div className='p-4 mr-4 md:hidden'>
				<FiMenu />
			</div>
		</div>
	);
};

export default Social;
