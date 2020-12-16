import React from 'react';
import Logo from '../images/horizontal/color.png';

const Footer = () => {
	return (
		<div className='bg-gray-200 w-full flex flex-col text-center md:flex-row'>
			<div className='w-3/4 m-auto h-auto md:w-1/3'>
				<img src={Logo} alt='Con Mi Madre Logo' />
			</div>
			<div className='text-blue-500 text-lg pb-4 md:flex md:flex-col md:w-2/3 md:items-center md:justify-center'>
				<h3>4175 Freidrich Ln #200, Austin, TX 78744</h3>
				<h3>(512) 467-4483</h3>
				<h3>info@conmimadre.com</h3>
			</div>
		</div>
	);
};

export default Footer;
