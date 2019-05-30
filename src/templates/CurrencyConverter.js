import React, { Component } from 'react';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import FormCurrencyConverter from 'components/molecules/FormCurrencyConverter/FormCurrencyConverter';
import ScoreCurrencyConverter from 'components/molecules/ScoreCurrencyConverter/ScoreCurrencyConverter';

const StyledWrap = styled.div`
  padding-top: 50px;
  min-height: 100vh;
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
    firstCurrency: 'usd',
    firstCurrencyValue: '',
    secondCurrency: 'usd',
    secondCurrencyValue: '',
    visible: false,
    date: '',
  };

  componentDidMount() {
    this.downloadingDataFirst();
    this.downloadingDataSecond();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.firstCurrency !== prevState.firstCurrency) {
      this.downloadingDataFirst();
    } else if (this.state.secondCurrency !== prevState.secondCurrency) {
      this.downloadingDataSecond();
    }
  }

  downloadingDataFirst = () => {
    if (this.state.firstCurrency === 'pln') {
      this.setState({
        firstCurrencyValue: 1,
      });
    } else {
      console.log('pobrano');
      const API = `http://api.nbp.pl/api/exchangerates/rates/a/${
        this.state.firstCurrency
      }/?format=json`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error('Błąd');
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            firstCurrencyValue: data.rates[0].mid,
            date: data.rates[0].effectiveDate,
          });
        })
        .catch(error => console.log(error));
    }
  };

  downloadingDataSecond = () => {
    if (this.state.secondCurrency === 'pln') {
      this.setState({
        secondCurrencyValue: 1,
      });
    } else {
      const API = `http://api.nbp.pl/api/exchangerates/rates/a/${
        this.state.secondCurrency
      }/?format=json`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error('Błąd');
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            secondCurrencyValue: data.rates[0].mid,
          });
        })
        .catch(error => console.log(error));
    }
  };

  handleChangeValue = e => {
    const { value } = e.target;
    console.log(this.state.value);
    this.setState({
      value,
      visible: false,
    });
  };

  handleChangeCurrency = e => {
    const { name } = e.target;
    if (name === 'currency-first') {
      const currency = e.target.value;
      this.setState({
        firstCurrency: currency,
        visible: false,
      });
    } else if (name === 'currency-second') {
      const currency = e.target.value;
      this.setState({
        secondCurrency: currency,
        visible: false,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value) {
      this.setState({
        visible: true,
      });
    } else {
      console.log('NIe wpisałeś ');
    }
  };

  render() {
    const { handleSubmit, handleChangeValue, handleChangeCurrency } = this;
    return (
      <StyledWrap>
        <StyledHeader>Kalkulator walutowy </StyledHeader>
        <Paragraph>
          {`Na podstawie aktualnych notowań kursów średnich walut obcych NBP z dnia ${
            this.state.date
          }.`}
        </Paragraph>
        <FormCurrencyConverter
          submit={handleSubmit}
          value={this.state.value}
          change={handleChangeValue}
          changeSelect={handleChangeCurrency}
        />
        {this.state.visible ? <ScoreCurrencyConverter {...this.state} /> : null}
      </StyledWrap>
    );
  }
}

export default CurrencyConverter;
