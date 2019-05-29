import React from 'react';
import styled from 'styled-components';

const StyledWraper = styled.div`
  width: 600px;
  margin: 40px auto 0 auto;
`;

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 40px 40px 40px 40px;
  grid-gap: 10px 5px;
  justify-content: center;
  /* justify-items: center; */
  /* align-items: center; */
  background-color: ${({ theme }) => theme.ligthBlue};
  padding: 20px;
  box-shadow: 0px 0px 15px 2px #000000;
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
  width: 160px;
  font-size: 25px;
`;

const StyledSelect = styled.select`
  font-size: 15px;
`;

const StyledButton = styled.button`
  grid-column: span 2;
  justify-self: center;
  outline: none;
  border: 2px solid green;
  font-size: 25px;
  padding: 0 5px;
  cursor: pointer;
  /* width: 100px; */
`;

const FormCurrencyConverter = props => {
  const currency = [
    'USD - dolar amerykański',
    'PLN - Złotówka polska',
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
        <StyledSelect onChange={props.changeSelect} name="currency-first" id="currency-first">
          {currency.map(item => (
            <option value={item.substring(0, 3).toLowerCase()}>{item}</option>
          ))}
        </StyledSelect>
        <StyledLabel>Przelicz na:</StyledLabel>
        <StyledSelect onChange={props.changeSelect} name="currency-second" id="currency-second">
          {currency.map(item => (
            <option value={item.substring(0, 3).toLowerCase()}>{item}</option>
          ))}
        </StyledSelect>
        <StyledButton onClick={props.submit} type="submit">
          Przelicz
        </StyledButton>
      </StyledForm>
    </StyledWraper>
  );
};

export default FormCurrencyConverter;
