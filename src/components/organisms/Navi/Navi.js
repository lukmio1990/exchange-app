import React from 'react';
import { NavLink } from 'react-router-dom';
import NavElement from 'components/atoms/NavElement/NavElement';
import Logo from 'components/atoms/Logo/Logo';
import moneyIcon from 'assets/moneyIcon.png';
import historyIcon from 'assets/historyIcon.png';
import exchangeIcon from 'assets/exchangeIcon.png';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-column-gap: 10px;
  background-color: ${({ theme }) => theme.ligthGrey};
  padding: 10px;
  box-shadow: 0px 0px 15px 2px #000000;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  transition: background-color 0.5s;

  &.active {
    background-color: ${({ theme }) => theme.darkGrey};
    border-bottom: 2px solid ${({ theme }) => theme.white};
  }
`;

const Navi = () => {
  return (
    <StyledWrap>
      <StyledLink exact as={NavLink} to="/" activeClassName="">
        <Logo />
      </StyledLink>
      <StyledLink as={NavLink} to="/exchangeRates">
        <NavElement icon={moneyIcon} title="Kursy Walut" />
      </StyledLink>

      <StyledLink as={NavLink} to="/calculatorRates">
        <NavElement icon={exchangeIcon} title="Wymiana Walut" />
      </StyledLink>

      <StyledLink as={NavLink} to="/historyRates">
        <NavElement icon={historyIcon} title="Historia Kursów" />
      </StyledLink>
    </StyledWrap>
  );
};

export default Navi;
