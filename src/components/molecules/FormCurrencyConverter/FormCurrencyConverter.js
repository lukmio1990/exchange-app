import React from 'react';
import styled from 'styled-components';

const StyledWraper = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 40px 40px 40px 40px;
  background-color: red;
  padding: 20px;
  justify-content: center;
  justify-items: center;
`;

const StyledLabel = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-size: 25px;
  margin-left: 5px;
`;

const FormCurrencyConverter = props => {
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
      <StyledForm>
        <StyledLabel> Kwota</StyledLabel>
        <StyledInput value={props.value} onChange={props.change} type="number" id="value" />
        <StyledLabel>Przelicz z:</StyledLabel>
        <select name="currency-first" id="currency-first">
          {currency.map(item => (
            <option value={item.substring(0, 3)}>{item}</option>
          ))}
        </select>
        <StyledLabel>Przelicz na:</StyledLabel>
        <select name="currency-second" id="currency-second">
          {currency.map(item => (
            <option>{item}</option>
          ))}
        </select>
        <button type="submit">Przelicz</button>
      </StyledForm>
    </StyledWraper>
  );
};

export default FormCurrencyConverter;
