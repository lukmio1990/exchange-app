import React from 'react';
import styled from 'styled-components';

const StyledWraper = styled.div`
  display: grid;
`;

const FormCurrencyConverter = () => {
  const currency = [
    'USD - dolar amerykański',
    'AUD - dolar australijski',
    'CAD - dolar kanadyjski',
    'EUR - euro',
    'HUF - froint (Węgry)',
    'CHF - frank szwajcarski',
    'GBP - szterling ',
    'JPY - jen (Japonia) ',
    'CZK - korona czeska',
    'DKK - korona duńska ',
    'NOK - korona norweska',
    'SEK - korona szwedzka',
    'XDR - SDR',
  ];

  return (
    <StyledWraper>
      <form>
        <label htmlFor="value">Podaj kwotę do przeliczenia</label>
        <input type="text" id="value" />
        <label htmlFor="currency-first">Przelicz z: </label>
        <select name="currency-first" id="currency-first">
          {currency.map(item => (
            <option value={item.substring(0, 3)}>{item}</option>
          ))}
        </select>
        <label htmlFor="currency-second">Przelicz na: </label>

        <select name="currency-second" id="currency-second">
          {currency.map(item => (
            <option>{item}</option>
          ))}
        </select>
        <button>Przelicz</button>
      </form>
    </StyledWraper>
  );
};

export default FormCurrencyConverter;
