import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	return (
		<Links>
			<List>
				<Link to='/Landing'>Home</Link>
				<Link to='/About'>About Us</Link>
				<Link to='/Program'>Our Program</Link>
				<Link to='/News'>News</Link>
				<Link to='/Donate' id='donate'>
					Donate
				</Link>
			</List>
		</Links>
	);
};

export default Nav;

const List = styled.ul`
	display: flex;
	justify-content: space-evenly;
	padding-top: 2rem;
`;

const Links = styled.nav`
	height: 5vh;
`;
