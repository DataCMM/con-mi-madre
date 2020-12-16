import React from "react";
import Logo from "../images/horizontal/color.png";

import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Image src={Logo} alt="Con Mi Madre Logo" />
      <Content>
        <Details>4175 Freidrich Ln #200, Austin, TX 78744</Details>
        <Details>(512) 467-4483</Details>
        <Details>info@conmimadre.com</Details>
      </Content>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Details = styled.p`
  margin-left: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  align-self: center;
`;

const Image = styled.img`
  height: 10rem;
`;
