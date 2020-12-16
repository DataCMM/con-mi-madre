import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Links>
      <List>
        <Link to="/Landing" className="nav-button">
          Home
        </Link>
        <Link to="/About" className="nav-button">
          About Us
        </Link>
        <Link to="/Program" className="nav-button">
          Our Program
        </Link>
        <Link to="/News" className="nav-button">
          News
        </Link>
        <Link to="/Donate" id="donate">
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
