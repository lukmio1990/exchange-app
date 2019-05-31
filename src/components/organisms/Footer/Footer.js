import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';

const StyledWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  background-color: red;
`;

const StyledLogo = styled.div`
  padding: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 250px;
  /* height: 100%; */
`;

const StyledWrapParagraph = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
`;

const Paragraph = styled.p`
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const Footer = () => {
  return (
    <StyledWrap>
      <StyledLogo>
        <StyledImg src={logo} alt="logo" />
      </StyledLogo>
      <StyledWrapParagraph>
        <Paragraph>Wszelkie prawa zastrzeżone</Paragraph>
        <Paragraph>
          Autor: Łukasz Mioduszewski
          <StyledLink href="https://github.com/lukmio1990">Zapraszam na github</StyledLink>
        </Paragraph>
      </StyledWrapParagraph>
    </StyledWrap>
  );
};

export default Footer;
