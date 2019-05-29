import React, { Component } from 'react';
import Header from 'components/atoms/Header/Header';
import DataActualCurrency from 'components/molecules/DataActualCurrency/DataActualCurrency';
import styled from 'styled-components';

const StyledWraper = styled.div`
  margin-top: 50px;
`;

const StyledHeader = styled(Header)`
  text-align: center;
`;

class ActualExchangeRate extends Component {
  state = {
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
    // console.log(API);
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
  }

  render() {
    const { usd, aud, cad, eur, huf, chf, gbp, jpy, czk, ddk, nok, sek, xdr } = this.state;
    return (
      <StyledWraper>
        <StyledHeader>Aktualne kursy walut z dnia {this.state.date} </StyledHeader>

        <DataActualCurrency
          data={this.state.data}
          usd={usd}
          aud={aud}
          cad={cad}
          eur={eur}
          huf={huf}
          chf={chf}
          gbp={gbp}
          jpy={jpy}
          czk={czk}
          ddk={ddk}
          nok={nok}
          sek={sek}
          xdr={xdr}
        />
      </StyledWraper>
    );
  }
}

export default ActualExchangeRate;
