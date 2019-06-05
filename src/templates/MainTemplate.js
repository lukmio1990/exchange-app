import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Navi from 'components/organisms/Navi/Navi';
import ActualExchangeRate from 'templates/ActualExchangeRate';
import CurrencyConverter from 'templates/CurrencyConverter';
import HistoryExchangeRate from 'templates/HistoryExchangeRate';
import Footer from 'components/organisms/Footer/Footer';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTemplate = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StyledWrap>
      <Navi />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/exchangeRates" />} />
        <Route exact path="/exchangeRates" component={ActualExchangeRate} />
        <Route exact path="/calculatorRates" component={CurrencyConverter} />
        <Route exact path="/historyRates" component={HistoryExchangeRate} />
      </Switch>
      <Footer />
    </StyledWrap>
  </BrowserRouter>
);

export default MainTemplate;
