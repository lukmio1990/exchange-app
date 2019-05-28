import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';

const StyledImg = styled.img`
  width: 100%;
`;
const StyledWrap = styled.div`
  margin-right: 40px;
  height: 100%;
`;

const Logo = () => {
  return (
    <StyledWrap>
      <StyledImg src={logo} alt="logo" />
    </StyledWrap>
  );
};

export default Logo;
