import React from 'react';
import Logo from '../images/horizontal/color.png';

const Footer = () => {
	return (
		<div className='flex flex-col text-center pb-4'>
			<img src={Logo} alt='Con Mi Madre Logo' />
			<div>
				<h3>4175 Freidrich Ln #200, Austin, TX 78744</h3>
				<h3>(512) 467-4483</h3>
				<h3>info@conmimadre.com</h3>
			</div>
		</div>
	);
};

export default Footer;
