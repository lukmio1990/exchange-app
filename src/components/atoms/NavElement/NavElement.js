import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  padding: 10px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
`;

const StyledTitle = styled.p`
  justify-content: center;
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding-left: 25px;
  color: ${({ theme }) => theme.white};
  transform: translateY(0);
  transition: transform 0.3s;
  font-weight: ${({ theme }) => theme.bold};

  ${StyledWrap}:hover & {
    transform: scale(1.1);
  }
`;

const NavElement = ({ icon, title }) => {
  return (
    <StyledWrap>
      <StyledImg src={icon} alt="" />
      <StyledTitle>{title}</StyledTitle>
    </StyledWrap>
  );
};

export default NavElement;
