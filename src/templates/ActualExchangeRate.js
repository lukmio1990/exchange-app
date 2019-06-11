import React, { Component } from 'react';
import Header from 'components/atoms/Header/Header';
import DataActualCurrency from 'components/molecules/DataActualCurrency/DataActualCurrency';
import styled from 'styled-components';
import Triangle from 'components/atoms/Triangle/Triangle';
import zdj from 'assets/money2.jpg';

const StyledWraper = styled.div`
  min-height: 900px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-image: url(${zdj});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHeader = styled(Header)`
  text-align: center;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`;

const StyledLoader = styled.p`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

class ActualExchangeRate extends Component {
  state = {
    loading: false,
    data: '',
    date: '',
    usd: '',
    aud: '',
    cad: '',
    eur: '',
    huf: '',
    chf: '',
    gbp: '',
    jpy: '',
    czk: '',
    ddk: '',
    nok: '',
    sek: '',
    xdr: '',
  };

  componentDidMount() {
    const API = 'https://api.nbp.pl/api/exchangerates/tables/c/?format=json';
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
          data: data[0].rates,
          date: data[0].effectiveDate,
          usd: data[0].rates[0],
          aud: data[0].rates[1],
          cad: data[0].rates[2],
          eur: data[0].rates[3],
          huf: data[0].rates[4],
          chf: data[0].rates[5],
          gbp: data[0].rates[6],
          jpy: data[0].rates[7],
          czk: data[0].rates[8],
          ddk: data[0].rates[9],
          nok: data[0].rates[10],
          sek: data[0].rates[11],
          xdr: data[0].rates[12],
        });
      })
      .catch(error => console.log(error));

    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 1000);
  }

  render() {
    return (
      <StyledWraper>
        <Triangle first />
        {this.state.loading ? (
          <>
            <StyledHeader>Aktualne kursy walut z dnia {this.state.date} </StyledHeader>
            <DataActualCurrency {...this.state} />
          </>
        ) : (
          <StyledLoader>Wczytuje dane...</StyledLoader>
        )}
      </StyledWraper>
    );
  }
}

export default ActualExchangeRate;

//     )
