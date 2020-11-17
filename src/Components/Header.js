import React from 'react';

import Nav from './Nav';
import styled from 'styled-components';
import CMMLogo from '../images/horizontal/color.png';

const Header = () => {
	return (
		<MainHeader>
			<Logo src={CMMLogo} alt='Con mi madre logo' />
			<Nav />
		</MainHeader>
	);
};
export default Header;

const MainHeader = styled.header`
	display: flex;
	justify-content: space-around;
`;

const Logo = styled.img`
	height: 10rem;
`;
