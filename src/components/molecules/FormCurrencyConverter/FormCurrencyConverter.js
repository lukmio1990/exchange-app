import React from 'react';
import styled from 'styled-components';

const StyledWraper = styled.div`
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  margin: 40px auto 0 auto;
  z-index: 9999;
`;

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 40px 40px 40px 40px;
  grid-gap: 10px 5px;
  justify-content: center;
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
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
  :focus {
    border: 1px solid red;
    box-shadow: 0px 0px 15px 2px #000000;
  }
`;

const StyledSelect = styled.select`
  font-size: 15px;
`;

const StyledButton = styled.button`
  grid-column: span 2;
  justify-self: center;
  outline: none;
  border: 2px solid green;
  border-radius: 50px;
  font-size: 25px;
  padding: 0 25px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.third};
  transition: background-color 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.second};
  }
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
  const { change, changeSelect, value, submit } = props;
  return (
    <StyledWraper>
      <StyledForm>
        <StyledLabel> Kwota</StyledLabel>
        <StyledInput value={value} onChange={change} type="number" id="value" />
        <StyledLabel>Przelicz z:</StyledLabel>
        <StyledSelect onChange={changeSelect} name="currency-first" id="currency-first">
          {currency.map(item => (
            <option value={item.substring(0, 3).toLowerCase()}>{item}</option>
          ))}
        </StyledSelect>
        <StyledLabel>Przelicz na:</StyledLabel>
        <StyledSelect onChange={changeSelect} name="currency-second" id="currency-second">
          {currency.map(item => (
            <option value={item.substring(0, 3).toLowerCase()}>{item}</option>
          ))}
        </StyledSelect>
        <StyledButton onClick={submit} type="submit">
          Przelicz
        </StyledButton>
      </StyledForm>
    </StyledWraper>
  );
};

export default FormCurrencyConverter;
