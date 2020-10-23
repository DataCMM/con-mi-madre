import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	return (
		<nav>
			<List>
				<Link>About Us</Link>
				<Link>Our Program</Link>
				<Link>Our Supporters</Link>
				<Link>Awards & Recognitions</Link>
				<Link>News</Link>
				<Link>Events</Link>
			</List>
		</nav>
	);
};

export default Nav;

const List = styled.ul`
	height: 15vh;
	display: flex;
	justify-content: space-evenly;
	padding-top: 3rem;
`;
