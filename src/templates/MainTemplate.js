import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Navi from 'components/organisms/Navi/Navi';
import ActualExchangeRate from 'templates/ActualExchangeRate';
import CurrencyConverter from 'templates/CurrencyConverter';
import HistoryExchangeRate from 'templates/HistoryExchangeRate';

const StyledWrap = styled.div`
  /* display: grid; */
  min-height: 100vh;
  background-color: ${({ theme }) => theme.darkBlue};
`;

const MainTemplate = () => (
  <BrowserRouter>
    <StyledWrap>
      <Navi />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/exchangeRates" />} />
        <Route exact path="/exchangeRates" component={ActualExchangeRate} />
        <Route exact path="/calculatorRates" component={CurrencyConverter} />
        <Route exact path="/historyRates" component={HistoryExchangeRate} />
      </Switch>
    </StyledWrap>
  </BrowserRouter>
);

export default MainTemplate;
