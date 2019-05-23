import React, { Component } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Header from 'components/atoms/Header/Header';
import CurrentExchangeRate from '../CurrentExchangeRate';

class App extends Component {
  state = {
    currency: 'EUR',
    arr: [],
    data: [],
    tab: [],
  };

  handleAddCheckboxValue = e => {
    const item = e.target.name;
    const arr = [...this.state.arr];
    if (e.target.checked) {
      this.setState({
        arr: arr.concat(item),
      });
    } else {
      const number = arr.indexOf(item);
      arr.splice(number, 1);
      this.setState({
        arr,
      });
    }
  };

  handleChangeCurrency = e => {
    console.log('działa');
    this.setState({
      currency: e.target.value,
    });
  };

  handleSubmitShowCurrency = e => {
    e.preventDefault();
    const API = `https://api.exchangeratesapi.io/latest?symbols=${this.state.arr}&base=${
      this.state.currency
    }`;
    console.log(API);
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error('Błąd');
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ data, tab: data.rates });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Header>Przelicznik watutowy</Header>

            <CurrentExchangeRate
              submit={this.handleSubmitShowCurrency}
              change={this.handleChangeCurrency}
              data={this.state.data}
              checkboxValue={this.handleAddCheckboxValue}
              tab={this.state.tab}
              arr={this.state.arr}
            />
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
