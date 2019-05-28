import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import FormCurrencyConverter from 'components/molecules/FormCurrencyConverter/FormCurrencyConverter';

const StyledWrap = styled.div`
  margin-top: 50px;
`;

const StyledHeader = styled(Header)`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.white};
  padding: 10px;
`;

class CurrencyConverter extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <StyledWrap>
        <StyledHeader>Kalkulator walutowy </StyledHeader>
        <Paragraph>
          Na podstawie aktualnych notowań kursów średnich walut obcych NBP z dnia 2019-05-27.
        </Paragraph>
        <FormCurrencyConverter />
      </StyledWrap>
    );
  }
}

export default CurrencyConverter;
