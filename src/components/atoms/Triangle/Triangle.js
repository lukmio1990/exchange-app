import styled, { css } from 'styled-components';

const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-top: solid 80vh rgb(200, 30, 50); 
   border-left: solid 0 transparent;
  border-right: solid 100vw transparent;
  opacity:0.7;
  ${({ first }) =>
    first &&
    css`
      border-top: solid 80vh ${({ theme }) => theme.first};
    `}

    ${({ second }) =>
      second &&
      css`
        border-top: solid 80vh ${({ theme }) => theme.second};
      `}
    ${({ third }) =>
      third &&
      css`
        border-top: solid 80vh ${({ theme }) => theme.third};
      `}
`;

export default Triangle;
