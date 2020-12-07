import React from 'react';

import Nav from './Nav';
import CMMLogo from '../images/horizontal/color-and-white.png';

const Header = () => {
	return (
		<div className='flex h-48 w-full'>
			<div className='flex w-3/4 items-center justify-end pr-8'>
				<Nav />
			</div>
			<div className='h-full min-w-48 w-1/2 bg-opacity-0 md:w-1/4 flex flex-none'>
				<img src={CMMLogo} alt='Con mi madre logo' />
			</div>
		</div>
	);
};
export default Header;
