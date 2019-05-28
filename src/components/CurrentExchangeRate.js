import React from 'react';

const CurrentExchangeRate = props => {
  const results = props.arr.map(item => {
    return (
      <h1>
        {item} : {props.tab[item]}
      </h1>
    );
  });

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Wybierz walutę:-
          <select onChange={props.change}>
            <option defaultValue value="EUR">
              EUR
            </option>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
            <option value="CHF">CHF</option>
          </select>
        </label>
        <label htmlFor="eur">
          Euro
          <input onChange={props.checkboxValue} type="checkbox" name="EUR" id="eur" />
        </label>

        <label htmlFor="pln">
          Złoty
          <input onChange={props.checkboxValue} type="checkbox" name="PLN" id="pln" />
        </label>

        <label htmlFor="usd">
          Dolar
          <input onChange={props.checkboxValue} type="checkbox" name="USD" id="usd" />
        </label>

        <label htmlFor="chf">
          Frank Szwajcarski
          <input onChange={props.checkboxValue} type="checkbox" name="CHF" id="chf" />
        </label>

        <button type="submit">Wybierz</button>
      </form>
      <div>
        {/* <h3>{props.tab[waluta]}</h3> */}
        {results}
        {props.data.date}
      </div>
    </div>
  );
};

export default CurrentExchangeRate;
