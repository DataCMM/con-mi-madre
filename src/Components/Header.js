import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const Header = () => {
	return (
		<Banner>
			<Logo
				src='http://nebula.wsimg.com/68f9e11e6ab6c609cf41516b8d3c832b?AccessKeyId=5422A47C696F7C068295&disposition=0&alloworigin=1'
				alt='Con mi madre logo'
			/>
			<Nav />
		</Banner>
	);
};
export default Header;

const Banner = styled.div`
	height: 100vh;
	background-image: url('https://images.unsplash.com/photo-1555819206-7b30da4f1506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80');
	background-size: cover;
	background-repeat: no-repeat;
	margin-top: -1rem;
	background-color: #000000;
	filter: grayscale(1);
	color: #f7f9f9;
	display: flex;
	justify-content: space-around;
`;

const Logo = styled.img`
	height: 15vh;
	color: #f7f9f9;
	padding: 3rem;
`;
