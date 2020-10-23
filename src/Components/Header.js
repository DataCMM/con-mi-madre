import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const Header = () => {
	return (
		<Banner>
			<Navigation>
				<Logo
					// src='http://nebula.wsimg.com/68f9e11e6ab6c609cf41516b8d3c832b?AccessKeyId=5422A47C696F7C068295&disposition=0&alloworigin=1'
					src='logo.png'
					alt='Con mi madre logo'
				/>
				<Nav />
			</Navigation>
			<Title>Service and Support To Empower Latinas</Title>
			<Text>
				<p>Help Increase the Number of Hispanic Girls</p>
				<br />
				<p>Enrolling & Completing College</p>
				<br />
				<p>& Post Secondary Education</p>
			</Text>
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
	// filter: grayscale(1);
	color: #f7f9f9;
	z-index: -1;
`;

const Navigation = styled.header`
	display: flex;
	justify-content: space-around;
`;

const Logo = styled.img`
	height: 15vh;
	z-index: 1;
	padding: 3rem;
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
	font-weight: 300;
	color: #f7f9f9;
	font-size: 3.25rem;
	line-height: normal;
`;

const Text = styled.div`
	text-align: center;
	font-weight: 400;
	line-height: 0.0125;
	font-size: 1.75rem;
	color: #f7f9f9;
	height: 25vh;
`;
