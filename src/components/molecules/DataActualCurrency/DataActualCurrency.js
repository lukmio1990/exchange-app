import React from 'react';
import styled from 'styled-components';

const StyledGridWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  border: 1px solid red;

  &:nth-child(even) {
    background-color: #4e526b;
  }
`;

const StyledWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 25px;
  background-color: ${({ theme }) => theme.white};
`;

const Content = styled.p`
  text-align: center;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DataActualCurrency = ({
  usd,
  aud,
  cad,
  eur,
  huf,
  chf,
  gbp,
  jpy,
  czk,
  ddk,
  nok,
  sek,
  xdr,
}) => {
  const name = {
    currency: 'Nazwa Waluty',
    code: 'Kod Waluty',
    bid: 'Kurs Kupna',
    ask: 'Kurs sprzedaży',
  };
  const tab = [name, usd, aud, cad, eur, huf, chf, gbp, jpy, czk, ddk, nok, sek, xdr];

  const dane = tab.map((item, index) => {
    return (
      <StyledGridWraper>
        {index === 0 ? <Title>{item.currency}</Title> : <Content>{item.currency}</Content>}
        {index === 0 ? <Title>{item.code}</Title> : <Content>{item.code}</Content>}
        {index === 0 ? <Title>{item.bid}</Title> : <Content>{item.bid}</Content>}
        {index === 0 ? <Title>{item.ask}</Title> : <Content>{item.ask}</Content>}
      </StyledGridWraper>
    );
  });
  return <StyledWraper>{dane}</StyledWraper>;
};

export default DataActualCurrency;
