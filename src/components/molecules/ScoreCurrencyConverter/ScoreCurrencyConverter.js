import React from 'react';
import styled from 'styled-components';

const StyledWrap = styled.div``;

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
      <p>
        {`${props.value} ${props.firstCurrency.toUpperCase()} = ${(
          (firstCurrencyValue / secondCurrencyValue) *
          value
        ).toFixed(2)} ${props.secondCurrency.toUpperCase()}`}
      </p>
      <p>{`Przelicznik (${firstCurrency.toUpperCase()})/${secondCurrency.toUpperCase()}) wynosi ${(
        firstCurrencyValue / secondCurrencyValue
      ).toFixed(4)}`}</p>
      <p>
        {`  Przeliczenia wg
        kursu NBP z dnia ${date}`}
      </p>
    </StyledWrap>
  );
};

export default ScoreCurrencyConverter;
