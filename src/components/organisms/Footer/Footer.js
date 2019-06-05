import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';

const StyledWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10vh;
  background-color: ${({ theme }) => theme.darkGrey};
  position: relative;
`;

const StyledLogo = styled.div``;

const StyledImg = styled.img`
  width: 100%;
  max-width: 250px;
`;

const StyledWrapParagraph = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledLink = styled.a`
  text-decoration: none;
  padding-left: 10px;
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
