import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div`
  width: 500px;
  margin: 20px auto 0 auto;
  background-color: ${({ theme }) => theme.darkGrey};
  padding: 15px;
  box-shadow: 0px 0px 15px 2px #000000;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  padding: 5px 0;
`;

const ScoreCurrencyConverter = props => {
  const {
    firstCurrency,
    firstCurrencyValue,
    secondCurrency,
    secondCurrencyValue,
    value,
    date,
  } = props;
  return (
    <StyledWrap>
      <StyledTitle>
        {`${value} ${firstCurrency.toUpperCase()} = ${(
          (firstCurrencyValue / secondCurrencyValue) *
          value
        ).toFixed(2)} ${secondCurrency.toUpperCase()}`}
      </StyledTitle>
      <Paragraph>{`Przelicznik (${firstCurrency.toUpperCase()})/${secondCurrency.toUpperCase()}) wynosi ${(
        firstCurrencyValue / secondCurrencyValue
      ).toFixed(4)}`}</Paragraph>
      <Paragraph>
        {`  Przeliczenia wg średniego
        kursu NBP z dnia ${date}`}
      </Paragraph>
    </StyledWrap>
  );
};

export default ScoreCurrencyConverter;
