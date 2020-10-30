import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';
import CMMLogo from '../images/horizontal/color-and-white.png';
import BannerImage from '../images/cmm/Donate-Banner.JPG';

const Header = () => {
	return (
		<Banner>
			<Navigation>
				<Logo src={CMMLogo} alt='Con mi madre logo' />
				<Nav />
			</Navigation>
			<MainText>
				<Title>We are Mothers and Daughters</Title>
				<Title>Raising Expectations</Title>
				<Button>
					<Link to='/Donate' id='donate-today'>
						Donate Today
					</Link>
				</Button>
			</MainText>
		</Banner>
	);
};
export default Header;

const Banner = styled.div`
	height: 100vh;
	background-image: url(${BannerImage});
	background-size: cover;
	background-repeat: no-repeat;
	z-index: -1;
`;

const Navigation = styled.header`
	display: flex;
	justify-content: space-around;
`;

const Logo = styled.img`
	height: 20rem;
	background: transparent;
	margin-top: -2rem;
	margin-left: -10rem;
	z-index: 1;
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	color: var(--grey);
	letter-spacing: 1rem;
	font-size: var(--xtra-big-heading);
`;

const MainText = styled.div`
	margin-top: 20rem;
`;

const Button = styled.div`
	text-align: center;
`;
